import {
  APP_DOWNLOAD_PAGE_URL,
  APP_DOWNLOAD_URL,
  APP_URL,
} from "../config/siteLinks";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function Download() {
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
              <div className="cbw-pill">Desktop-App Download</div>
              <h1 style={{ fontSize: 42, lineHeight: 1.08, margin: "0 0 14px 0" }}>
                CLiP BOOsT für Windows herunterladen
              </h1>
              <p className="cbw-lead" style={{ maxWidth: 880 }}>
                Lade die aktuelle Desktop-App herunter und richte den lokalen
                Helper für OBS-, Overlay- und Live-Studio-Workflows ein.
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
                  <h2 style={{ marginTop: 0, fontSize: 28 }}>Download</h2>
                  <p className="cbw-lead" style={{ marginBottom: 16, maxWidth: "none" }}>
                    Der Button unten startet den Download der aktuellen Desktop-App
                    als GitHub-Release-ZIP. Nach dem Entpacken kannst du die App
                    bzw. den Helper lokal installieren.
                  </p>

                  <div className="cbw-hero-actions" style={{ marginBottom: 0 }}>
                    <a className="cbw-btn cbw-btn-primary" href={APP_DOWNLOAD_URL}>
                      Windows-Installer herunterladen
                    </a>
                    <a
                      className="cbw-btn cbw-btn-secondary"
                      href={APP_URL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Zur App
                    </a>
                  </div>

                  <div className="cbw-note" style={{ marginTop: 18 }}>
                    <strong>Download-Link:</strong>
                    <span style={{ wordBreak: "break-all" }}> {APP_DOWNLOAD_URL}</span>
                  </div>
                </div>

                <div className="cbw-card" style={{ padding: 22 }}>
                  <h2 style={{ marginTop: 0, fontSize: 28 }}>Schnellstart</h2>
                  <ol
                    style={{
                      margin: "14px 0 0 18px",
                      padding: 0,
                      color: "var(--cb-text-muted)",
                      lineHeight: 1.8,
                      fontSize: 15,
                    }}
                  >
                    <li>ZIP herunterladen</li>
                    <li>Datei entpacken</li>
                    <li>Desktop-App/Helper lokal starten</li>
                    <li>Danach zurück zur App</li>
                  </ol>

                  <div className="cbw-note" style={{ marginTop: 22 }}>
                    Diese Seite ist die öffentliche Download-Seite der Website:
                    <br />
                    <strong style={{ wordBreak: "break-all" }}>{APP_DOWNLOAD_PAGE_URL}</strong>
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
