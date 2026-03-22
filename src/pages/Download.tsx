import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import {
  APP_DOWNLOAD_PAGE_URL,
  APP_DOWNLOAD_URL,
  APP_DOWNLOAD_URL_MAC,
  APP_DOWNLOAD_URL_LINUX,
  APP_URL,
} from "../config/siteLinks";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

type PlatformTarget = "windows" | "mac" | "linux" | "other";

function detectPlatform(): PlatformTarget {
  if (typeof window === "undefined") return "other";

  const ua = window.navigator.userAgent.toLowerCase();
  const platform = (window.navigator.platform || "").toLowerCase();

  if (ua.includes("win") || platform.includes("win")) return "windows";
  if (ua.includes("mac") || platform.includes("mac")) return "mac";
  if (ua.includes("linux") || platform.includes("linux")) return "linux";

  return "other";
}

export default function Download() {
  const [params] = useSearchParams();

  const platform = useMemo<PlatformTarget>(() => {
    const requested = String(params.get("platform") || "").toLowerCase();

    if (requested === "windows" || requested === "win") return "windows";
    if (requested === "mac" || requested === "macos") return "mac";
    if (requested === "linux") return "linux";

    return detectPlatform();
  }, [params]);

  const isWindows = platform === "windows";
  const isMac = platform === "mac";
  const isLinux = platform === "linux";

  const heroTitle = isWindows
    ? "CLiP BOOsT für Windows herunterladen"
    : isMac
      ? "CLiP BOOsT für macOS herunterladen"
      : isLinux
        ? "CLiP BOOsT für Linux herunterladen"
        : "CLiP BOOsT herunterladen";

  const heroLead = isWindows
    ? "Lade die aktuelle Windows-Version von CLiP BOOsT herunter und starte direkt mit deinem lokalen Workflow."
    : isMac
      ? "Lade die aktuelle macOS-Version von CLiP BOOsT herunter und richte dein Setup direkt auf deinem Desktop ein."
      : isLinux
        ? "Lade die aktuelle Linux-Version von CLiP BOOsT herunter und starte direkt mit deinem Desktop-Setup."
        : "Wähle den passenden Desktop-Download für dein System und bring CLiP BOOsT direkt in deinen Workflow.";

  const primaryHref = isWindows
    ? APP_DOWNLOAD_URL
    : isMac
      ? APP_DOWNLOAD_URL_MAC
      : isLinux
        ? APP_DOWNLOAD_URL_LINUX
        : APP_URL;

  const primaryLabel = isWindows
    ? "Windows-Installer herunterladen"
    : isMac
      ? "macOS-Download starten"
      : isLinux
        ? "Linux-Download starten"
        : "Zur App";

  const secondaryHref = APP_URL;
  const secondaryLabel = "Zur App";

  const platformPill = isWindows
    ? "Windows Download"
    : isMac
      ? "macOS Download"
      : isLinux
        ? "Linux Download"
        : "Download";

  const sectionTitle = "Direkter Download";
  const guideTitle = "In wenigen Schritten startklar";

  return (
    <div className="cbw">
      <SiteHeader />

      <main>
        <section className="cbw-section">
          <div className="cbw-container">
            <div
              className="cbw-card"
              style={{
                padding: 28,
                borderRadius: 24,
                background:
                  "linear-gradient(135deg, rgba(35,214,255,0.10), rgba(177,0,255,0.12))",
                boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
              }}
            >
              <div className="cbw-pill">{platformPill}</div>

              <h1 style={{ fontSize: 42, lineHeight: 1.08, margin: "0 0 14px 0" }}>
                {heroTitle}
              </h1>

              <p className="cbw-lead" style={{ maxWidth: 880 }}>
                {heroLead}
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1.2fr) minmax(280px, 0.8fr)",
                  gap: 18,
                  marginTop: 22,
                }}
              >
                <div className="cbw-card" style={{ padding: 22 }}>
                  <h2 style={{ marginTop: 0, fontSize: 28 }}>{sectionTitle}</h2>

                  <p
                    className="cbw-lead"
                    style={{ marginBottom: 16, maxWidth: "none" }}
                  >
                    {isWindows
                      ? "Lade den aktuellen Windows-Installer herunter, installiere CLiP BOOsT lokal und starte direkt mit deinem Setup."
                      : isMac
                        ? "Lade die aktuelle macOS-Version herunter und installiere CLiP BOOsT direkt auf deinem Gerät."
                        : isLinux
                          ? "Lade die aktuelle Linux-Version herunter und starte CLiP BOOsT direkt auf deinem Desktop."
                          : "Wähle den passenden Download für dein System und starte mit CLiP BOOsT."}
                  </p>

                  <div className="cbw-hero-actions" style={{ marginBottom: 0 }}>
                    <a className="cbw-btn cbw-btn-primary" href={primaryHref}>
                      {primaryLabel}
                    </a>

                    <a
                      className="cbw-btn cbw-btn-secondary"
                      href={secondaryHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {secondaryLabel}
                    </a>
                  </div>

                  <div className="cbw-note" style={{ marginTop: 18 }}>
                    <strong>Direkter Link:</strong>
                    <span style={{ wordBreak: "break-all" }}> {primaryHref}</span>
                  </div>
                </div>

                <div className="cbw-card" style={{ padding: 22 }}>
                  <h2 style={{ marginTop: 0, fontSize: 28 }}>{guideTitle}</h2>

                  <ol
                    style={{
                      margin: "14px 0 0 18px",
                      padding: 0,
                      color: "var(--cb-text-muted)",
                      lineHeight: 1.8,
                      fontSize: 15,
                    }}
                  >
                    <li>Passenden Download für dein System starten</li>
                    <li>CLiP BOOsT lokal installieren</li>
                    <li>App öffnen und einrichten</li>
                    <li>Direkt mit deinem Workflow loslegen</li>
                  </ol>

                  <div className="cbw-note" style={{ marginTop: 22 }}>
                    Öffentliche Download-Seite:
                    <br />
                    <strong style={{ wordBreak: "break-all" }}>
                      {APP_DOWNLOAD_PAGE_URL}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
