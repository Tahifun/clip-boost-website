// backend/utils/validateEnv.ts
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { envSchema } from "../config/envSchema.js";
import type { Env } from "../config/envSchema.js";

/**
 * Normalize common Render/Vercel env formatting issues:
 * - strip wrapping quotes
 * - accept semicolon as separator
 * - trim items
 * - drop empty items
 * - remove trailing commas
 */
function stripWrappingQuotes(v: string): string {
  const s = String(v ?? "").trim();
  if (!s) return "";
  const first = s[0];
  const last = s[s.length - 1];
  if ((first === '"' && last === '"') || (first === "'" && last === "'")) return s.slice(1, -1).trim();
  return s;
}

function normalizeOrigin(v: string): string {
  return String(v || "").trim().replace(/\/+$/, "");
}

function normalizeCsv(v: string): string {
  const raw = stripWrappingQuotes(v).replace(/;/g, ",");
  const parts = raw
    .split(",")
    .map((x) => normalizeOrigin(stripWrappingQuotes(x)))
    .filter(Boolean);
  return parts.join(",");
}

function pickFirstNonEmpty(...vals: Array<string | undefined>): string {
  for (const v of vals) {
    const s = String(v ?? "").trim();
    if (s) return s;
  }
  return "";
}

/**
 * Strict URL-Origin check (what Zod usually expects):
 * - http/https only
 * - no path/query/hash (origin-only)
 */
function isStrictHttpOriginUrl(v: string): boolean {
  const s = String(v ?? "").trim();
  if (!s) return false;
  try {
    const u = new URL(s);
    if (u.protocol !== "http:" && u.protocol !== "https:") return false;
    if (u.pathname !== "/") return false;
    if (u.search || u.hash) return false;
    return true;
  } catch {
    return false;
  }
}

/**
 * Split an origin CSV into:
 * - strictUrls: items that are valid http(s) origin URLs (pass Zod url-list validators)
 * - rules: host-only / wildcard rules (e.g. *.vercel.app, localhost:5173, https://*.vercel.app)
 *
 * NOTE: Wildcards are intentionally NOT "strict URLs" (URL parser rejects them),
 * but we still want them at runtime for CORS matching in backend/index.ts.
 */
function splitOriginCsv(normalizedCsv: string): { strictCsv: string; mergedCsv: string } {
  const parts = String(normalizedCsv ?? "")
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean);

  const strictUrls = parts.filter(isStrictHttpOriginUrl);
  const rules = parts.filter((p) => !isStrictHttpOriginUrl(p));

  const strictCsv = strictUrls.join(",");
  const mergedCsv = [...strictUrls, ...rules].join(",");

  return { strictCsv, mergedCsv };
}

// Load .env files in priority order
const envFiles = [
  `.env.${process.env.NODE_ENV}.local`,
  `.env.${process.env.NODE_ENV}`,
  ".env.local",
  ".env",
];

const candidateDirs = [
  path.resolve(process.cwd()),
  path.resolve(process.cwd(), "backend"),
  path.resolve(process.cwd(), ".."),
];

const envDirs = candidateDirs
  .filter((dir, index, arr) => arr.indexOf(dir) === index)
  .filter((dir) => fs.existsSync(dir));

const loaded = new Set<string>();

// Load all env files (later files don't override earlier)
for (const file of envFiles) {
  for (const dir of envDirs) {
    const fullPath = path.resolve(dir, file);
    if (loaded.has(fullPath) || !fs.existsSync(fullPath)) continue;
    dotenv.config({
      path: fullPath,
      override: false,
    });
    loaded.add(fullPath);
  }
}

/**
 * Pre-normalize env before Zod validation.
 */
const candidateEnv: Record<string, any> = { ...process.env };

/**
 * IMPORTANT:
 * envSchema validiert ALLOWED_ORIGINS (und ggf. weitere Origin-Keys) oft als "URL-Liste".
 * Das bricht bei Wildcards/Host-Regeln wie "*.vercel.app".
 *
 * Strategie:
 * - Für die Zod-Validation nur STRICT http(s) Origins reinreichen (strictCsv)
 * - Für Runtime (CORS matching) die volle Liste inkl. Regeln behalten (mergedCsv)
 */
const originRuntimeOverrides: Record<string, string> = {};

// Normalize CSV-like vars
for (const key of [
  "CLIENT_ORIGIN",
  "ALLOWED_ORIGINS",
  "PUBLIC_ORIGIN",
  "CORS_ALLOWED_ORIGINS",
  "ADMIN_EMAILS",
]) {
  if (candidateEnv[key] == null) continue;

  const normalized = normalizeCsv(String(candidateEnv[key]));

  // Origin-like keys: split strict vs runtime rules
  if (key === "CLIENT_ORIGIN" || key === "ALLOWED_ORIGINS" || key === "PUBLIC_ORIGIN" || key === "CORS_ALLOWED_ORIGINS") {
    const { strictCsv, mergedCsv } = splitOriginCsv(normalized);
    candidateEnv[key] = strictCsv; // make schema happy
    originRuntimeOverrides[key] = mergedCsv; // keep full rules for runtime
  } else {
    // non-origin CSV
    candidateEnv[key] = normalized;
  }
}

// Strip quotes on common single-value keys that often get quoted in dashboards
for (const key of [
  "SUPABASE_URL",
  "SUPABASE_ANON_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
  "SUPABASE_SERVICE_KEY",
]) {
  if (candidateEnv[key] != null) candidateEnv[key] = stripWrappingQuotes(String(candidateEnv[key]));
}

// If CLIENT_ORIGIN missing, mirror other origin vars into CLIENT_ORIGIN (STRICT only, to satisfy envSchema)
if (!String(candidateEnv.CLIENT_ORIGIN || "").trim()) {
  const fallback = pickFirstNonEmpty(
    candidateEnv.PUBLIC_ORIGIN,
    candidateEnv.ALLOWED_ORIGINS,
    candidateEnv.CORS_ALLOWED_ORIGINS
  );

  // fallback is already "strictCsv" at this point
  if (fallback) candidateEnv.CLIENT_ORIGIN = normalizeCsv(fallback);
}

// Parse and validate
const parsed = envSchema.safeParse(candidateEnv);

if (!parsed.success) {
  console.error("❌ Environment validation failed:");
  parsed.error.issues.forEach((issue) => {
    const p = issue.path.length > 0 ? issue.path.join(".") : "<root>";
    console.error(`   • ${p}: ${issue.message}`);
  });

  if (process.env.NODE_ENV === "production") {
    process.exit(1);
  }

  console.warn("ℹ️ Continuing with provided environment values (development mode).");
}

const fallbackEnv: Partial<Env> = {};

const runtimeEnv = parsed.success
  ? parsed.data
  : {
      ...fallbackEnv,
      NODE_ENV: process.env.NODE_ENV ?? "development",
    };

const env = runtimeEnv as Env;

/**
 * Apply runtime overrides (wildcards/host-rules) AFTER schema validation.
 * This keeps Render boot stable while enabling preview origins at runtime.
 */
for (const [key, mergedCsv] of Object.entries(originRuntimeOverrides)) {
  if (mergedCsv && typeof mergedCsv === "string") {
    (env as any)[key] = mergedCsv;
  }
}

/**
 * PASS-THROUGH: Make Supabase keys available even if envSchema does not define them.
 * This prevents production crashes when code expects env.SUPABASE_URL etc.
 */
const supabaseUrl = normalizeOrigin(
  pickFirstNonEmpty((env as any).SUPABASE_URL, process.env.SUPABASE_URL)
);
const supabaseServiceRole =
  pickFirstNonEmpty(
    (env as any).SUPABASE_SERVICE_ROLE_KEY,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    (env as any).SUPABASE_SERVICE_KEY,
    process.env.SUPABASE_SERVICE_KEY
  );
const supabaseAnon =
  pickFirstNonEmpty((env as any).SUPABASE_ANON_KEY, process.env.SUPABASE_ANON_KEY);

if (supabaseUrl) (env as any).SUPABASE_URL = supabaseUrl;
if (supabaseServiceRole) (env as any).SUPABASE_SERVICE_ROLE_KEY = stripWrappingQuotes(supabaseServiceRole);
if (supabaseAnon) (env as any).SUPABASE_ANON_KEY = stripWrappingQuotes(supabaseAnon);

// Additional Production checks
if (env.NODE_ENV === "production") {
  const criticalVars = [
    "JWT_SECRET",
    "COOKIE_SECRET",
    "STRIPE_SECRET",
    "STRIPE_WEBHOOK_SECRET",
  ];

  const missing = criticalVars.filter((key) => !env[key as keyof typeof env]);
  if (missing.length > 0) {
    console.error(`❌ FATAL: Missing critical production variables: ${missing.join(", ")}`);
    process.exit(1);
  }

  // Supabase checks (required if backend boot uses supabaseAdmin)
  if (!String(supabaseUrl || "").trim()) {
    console.error("❌ FATAL: SUPABASE_URL missing (Render env var SUPABASE_URL)");
    process.exit(1);
  }
  if (!String(supabaseServiceRole || "").trim()) {
    console.error("❌ FATAL: SUPABASE_SERVICE_ROLE_KEY missing (Render env var SUPABASE_SERVICE_ROLE_KEY)");
    process.exit(1);
  }

  const anyOriginsConfigured =
    !!String((env as any).CLIENT_ORIGIN || "").trim() ||
    !!String((env as any).PUBLIC_ORIGIN || "").trim() ||
    !!String((env as any).ALLOWED_ORIGINS || "").trim() ||
    !!String((env as any).CORS_ALLOWED_ORIGINS || "").trim();

  if (!anyOriginsConfigured) {
    console.error(
      "❌ FATAL: No allowed origins configured. Set one of CLIENT_ORIGIN, PUBLIC_ORIGIN, ALLOWED_ORIGINS, CORS_ALLOWED_ORIGINS."
    );
    process.exit(1);
  }

  if (env.JWT_SECRET.length < 32) {
    console.error("❌ FATAL: JWT_SECRET must be at least 32 characters in production");
    process.exit(1);
  }

  if (env.COOKIE_SECRET.length < 32) {
    console.error("❌ FATAL: COOKIE_SECRET must be at least 32 characters in production");
    process.exit(1);
  }
}

export default env;
