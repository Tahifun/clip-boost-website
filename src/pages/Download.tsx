import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Download as DownloadIcon,
  RefreshCw,
  Rocket,
  ShieldCheck,
} from "lucide-react";

import Navigation from "@/components/Navigation";
import FunctionCard from "@/components/FunctionCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { API } from "@/lib/apiBase";

type DownloadHealth = {
  ok?: boolean;
  latestVersion?: string;
  latestUrl?: string;
  checksumSha256?: string | null;
  releaseNotesUrl?: string | null;
  helperStatus?: "ready" | "building" | "unavailable";
  message?: string;
};

type HelperStatus = "idle" | "downloading" | "done" | "error";

const FALLBACK_DOWNLOAD: DownloadHealth = {
  ok: true,
  latestVersion: "v0.1.8",
  latestUrl:
    "https://github.com/Tahifun/CLiP-BOOsT_002/releases/download/v0.1.8/CLiP-BOOsT-Helper.zip",
  releaseNotesUrl:
    "https://github.com/Tahifun/CLiP-BOOsT_002/releases/tag/v0.1.8",
  checksumSha256: null,
  helperStatus: "ready",
  message: "Fallback auf GitHub Release aktiv",
};

function normalizeVersion(value: string | null | undefined): string {
  return String(value ?? "").trim() || "unbekannt";
}

function normalizeHelperStatus(
  value: DownloadHealth["helperStatus"],
): "ready" | "building" | "unavailable" {
  if (value === "ready" || value === "building") return value;
  return "unavailable";
}

function getStatusLabel(
  loading: boolean,
  helperStatus: "ready" | "building" | "unavailable",
): string {
  if (loading) return "Lädt...";
  if (helperStatus === "ready") return "Bereit";
  if (helperStatus === "building") return "Wird erstellt";
  return "Nicht verfügbar";
}

function getStatusDescription(status: HelperStatus): string {
  if (status === "error") {
    return "Bitte prüfe Browser-Download-Einstellungen oder versuche es erneut.";
  }

  return "Der Browser sollte jetzt den Installer laden.";
}

function getStatusTitle(status: HelperStatus): string {
  if (status === "downloading") return "Download wird gestartet...";
  if (status === "done") return "Download gestartet";
  return "Fehler beim Download";
}

function buildEffectiveHealth(value: DownloadHealth | null | undefined): DownloadHealth {
  const source = value ?? {};
  return {
    ok: source.ok ?? true,
    latestVersion: source.latestVersion || FALLBACK_DOWNLOAD.latestVersion,
    latestUrl: source.latestUrl || FALLBACK_DOWNLOAD.latestUrl,
    checksumSha256: source.checksumSha256 ?? FALLBACK_DOWNLOAD.checksumSha256 ?? null,
    releaseNotesUrl: source.releaseNotesUrl || FALLBACK_DOWNLOAD.releaseNotesUrl,
    helperStatus:
      source.helperStatus === "ready" ||
      source.helperStatus === "building" ||
      source.helperStatus === "unavailable"
        ? source.helperStatus
        : FALLBACK_DOWNLOAD.helperStatus,
    message: source.message || FALLBACK_DOWNLOAD.message,
  };
}

export default function Download() {
  const { toast } = useToast();
  const { hasPro } = useAuth();

  const [health, setHealth] = useState<DownloadHealth | null>(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<HelperStatus>("idle");
  const [progress, setProgress] = useState(0);

  const timersRef = useRef<number[]>([]);

  const effectiveHealth = useMemo(() => buildEffectiveHealth(health), [health]);

  const versionLabel = useMemo(
    () => normalizeVersion(effectiveHealth.latestVersion),
    [effectiveHealth.latestVersion],
  );

  const helperStatus = useMemo(
    () => normalizeHelperStatus(effectiveHealth.helperStatus),
    [effectiveHealth.helperStatus],
  );

  const helperReady = helperStatus === "ready";
  const releaseNotesUrl =
    typeof effectiveHealth.releaseNotesUrl === "string" &&
    effectiveHealth.releaseNotesUrl.trim()
      ? effectiveHealth.releaseNotesUrl
      : null;

  useEffect(() => {
    const abortController = new AbortController();
    let mounted = true;

    async function loadHealth() {
      setLoading(true);

      try {
        const response = await fetch(`${API}/helper/download/health`, {
          method: "GET",
          credentials: "include",
          headers: { Accept: "application/json" },
          signal: abortController.signal,
        });

        const data: DownloadHealth = await response
          .json()
          .catch(() => ({ message: "Ungültige Serverantwort" }));

        if (!mounted) return;

        if (!response.ok) {
          throw new Error(
            data.message || "Download-Status konnte nicht geladen werden",
          );
        }

        setHealth(buildEffectiveHealth(data));
      } catch (error) {
        if (!mounted) return;
        if (error instanceof DOMException && error.name === "AbortError") return;

        const message =
          error instanceof Error
            ? error.message
            : "Unbekannter Fehler beim Laden des Download-Status";

        setHealth(FALLBACK_DOWNLOAD);

        toast({
          title: "Download-Status konnte nicht geladen werden",
          description: `${message}. Es wird der GitHub-Release-Fallback verwendet.`,
          variant: "destructive",
        });
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    void loadHealth();

    return () => {
      mounted = false;
      abortController.abort();
    };
  }, [toast]);

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timerId) => window.clearTimeout(timerId));
      timersRef.current = [];
    };
  }, []);

  function clearDownloadTimers() {
    timersRef.current.forEach((timerId) => window.clearTimeout(timerId));
    timersRef.current = [];
  }

  function queueTimer(callback: () => void, delay: number) {
    const timerId = window.setTimeout(callback, delay);
    timersRef.current.push(timerId);
  }

  function openExternalUrl(url: string) {
    window.location.assign(url);
  }

  async function startDownload() {
    if (!effectiveHealth.latestUrl) {
      toast({
        title: "Kein Download verfügbar",
        description: "Es konnte keine Download-URL ermittelt werden.",
        variant: "destructive",
      });
      return;
    }

    clearDownloadTimers();
    setStatus("downloading");
    setProgress(15);

    try {
      queueTimer(() => setProgress(45), 250);
      queueTimer(() => setProgress(75), 600);
      queueTimer(() => setProgress(100), 1200);
      queueTimer(() => setStatus("done"), 1300);

      openExternalUrl(effectiveHealth.latestUrl);
    } catch (error) {
      clearDownloadTimers();
      setStatus("error");
      setProgress(0);

      toast({
        title: "Download konnte nicht gestartet werden",
        description:
          error instanceof Error ? error.message : "Unbekannter Fehler",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto space-y-8 px-4 pb-16 pt-24">
        <FunctionCard className="rounded-3xl p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge className="border border-primary/30 bg-primary/20 text-primary">
                  Windows Helper
                </Badge>

                {hasPro ? (
                  <Badge className="border border-emerald-500/30 bg-emerald-500/15 text-emerald-200">
                    PRO aktiv
                  </Badge>
                ) : null}

                {health?.message ? (
                  <Badge className="border border-border/60 bg-white/5 text-muted-foreground">
                    {health.message}
                  </Badge>
                ) : null}
              </div>

              <h1 className="text-3xl font-bold md:text-4xl">
                CLiP BOOsT Helper herunterladen
              </h1>

              <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
                Der Helper läuft lokal auf deinem PC und verbindet CLiP BOOsT
                sicher mit OBS. Ohne den Helper kann der Browser OBS nicht
                direkt steuern.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={startDownload}
                disabled={loading || !helperReady}
                className="gap-2"
              >
                <DownloadIcon className="h-4 w-4" />
                Helper herunterladen
              </Button>

              {releaseNotesUrl ? (
                <Button
                  variant="secondary"
                  onClick={() => openExternalUrl(releaseNotesUrl)}
                  className="gap-2"
                >
                  Release Notes
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : null}
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border/60 bg-black/10 p-4">
              <div className="flex items-center gap-2">
                <Rocket className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold">Aktuelle Version</span>
              </div>

              <div className="mt-2 text-2xl font-bold">{versionLabel}</div>

              <div className="mt-1 text-xs text-muted-foreground">
                Bereit für lokalen OBS-Start und WebSocket-Kopplung
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-black/10 p-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold">Integrity</span>
              </div>

              <div className="mt-2 break-all text-sm font-medium">
                {effectiveHealth.checksumSha256 || "Checksum aktuell nicht verfügbar"}
              </div>

              <div className="mt-1 text-xs text-muted-foreground">
                SHA-256 zur lokalen Verifikation
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-black/10 p-4">
              <div className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold">Status</span>
              </div>

              <div className="mt-2 text-2xl font-bold">
                {getStatusLabel(loading, helperStatus)}
              </div>

              <div className="mt-1 text-xs text-muted-foreground">
                Download-Endpunkt und Release-Metadaten
              </div>
            </div>
          </div>

          {status !== "idle" ? (
            <div className="mt-6 rounded-2xl border border-border/60 bg-black/10 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold">
                    {getStatusTitle(status)}
                  </div>

                  <div className="text-xs text-muted-foreground">
                    {getStatusDescription(status)}
                  </div>
                </div>

                <div className="text-sm font-medium">{progress}%</div>
              </div>

              <div className="mt-3">
                <Progress value={progress} />
              </div>
            </div>
          ) : null}
        </FunctionCard>

        <FunctionCard className="rounded-3xl p-8">
          <h2 className="text-xl font-semibold">So geht es weiter</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-border/60 bg-black/10 p-4">
              <div className="text-sm font-semibold">
                1. Helper installieren
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                Starte den Installer und lasse die App lokal auf deinem
                Windows-PC einrichten.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-black/10 p-4">
              <div className="text-sm font-semibold">2. Helper öffnen</div>

              <p className="mt-2 text-sm text-muted-foreground">
                Nach der Installation den Helper starten. Er verbindet sich dann
                mit deiner CLiP BOOsT Session.
              </p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-black/10 p-4">
              <div className="text-sm font-semibold">3. OBS koppeln</div>

              <p className="mt-2 text-sm text-muted-foreground">
                Danach im Schnellstart weiter zu OBS und die Verbindung testen.
              </p>
            </div>
          </div>
        </FunctionCard>
      </div>
    </div>
  );
}
