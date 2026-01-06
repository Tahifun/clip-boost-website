// src/App.tsx
import "./App.css";

/**
 * CLiP-BOOsT Website (Landing)
 * Zweck:
 * - Öffentlich erreichbare Produktseite für Review
 * - Kein Login-Zwang
 * - Keine Abhängigkeit von der eigentlichen App-Struktur
 *
 * Dieses Repo ist NUR die Website.
 */

export default function App() {
  const year = new Date().getFullYear();

  return (
    <div className="cbw">
      <header className="cbw-header">
        <div className="cbw-container cbw-header-row">
          <div className="cbw-brand">
            <span className="cbw-dot" />
            <div className="cbw-brand-text">
              <div className="cbw-brand-name">CLiP-BOOsT</div>
              <div className="cbw-brand-sub">Stream Assets & Overlay Platform</div>
            </div>
          </div>

          <nav className="cbw-nav">
            <a href="#features">Features</a>
            <a href="#how">Ablauf</a>
            <a href="#screens">Screens</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Kontakt</a>
          </nav>

          <div className="cbw-cta">
            <a className="cbw-btn cbw-btn-ghost" href="#contact">
              Kontakt
            </a>
            <a
              className="cbw-btn cbw-btn-primary"
              href="https://clip-boost.online"
              rel="noreferrer"
            >
              Zur App / Login
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO ---------------------------------------------------------------- */}
        <section className="cbw-hero">
          <div className="cbw-container cbw-hero-grid">
            <div>
              <div className="cbw-pill">Öffentliche Produktseite</div>
              <h1>
                Professionelle Overlays,
                <br />
                klare Workflows, KI-gestützte Erstellung
              </h1>
              <p className="cbw-lead">
                CLiP-BOOsT ist eine Web-Plattform zur Verwaltung und Erstellung von
                Streaming-Overlays und Assets. Diese Website ist bewusst eine
                öffentliche Informationsseite und keine Login-Homepage.
              </p>

              <div className="cbw-hero-actions">
                <a className="cbw-btn cbw-btn-primary" href="#features">
                  Features ansehen
                </a>
                <a className="cbw-btn cbw-btn-secondary" href="#how">
                  So funktioniert&apos;s
                </a>
              </div>

              <div className="cbw-meta">
                <div className="cbw-meta-card">
                  <div className="cbw-meta-label">Zielgruppe</div>
                  <div className="cbw-meta-value">Streamer, Creators, Teams</div>
                </div>
                <div className="cbw-meta-card">
                  <div className="cbw-meta-label">Fokus</div>
                  <div className="cbw-meta-value">Overlays, Templates, AI Assets</div>
                </div>
                <div className="cbw-meta-card">
                  <div className="cbw-meta-label">Modell</div>
                  <div className="cbw-meta-value">Free / PRO / DayPass</div>
                </div>
              </div>
            </div>

            <div className="cbw-visual">
              <div className="cbw-visual-panel">
                <div className="cbw-visual-head">
                  <span />
                  <span />
                  <span />
                  <strong>Preview</strong>
                </div>

                {/* Hier läuft das Hero-Video im eingekreisten Bereich */}
                <div className="cbw-visual-body">
                  <div className="cbw-visual-large">
                    <video
                      className="cbw-visual-video"
                      src="/clip-boost-hero.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                  <div className="cbw-visual-row">
                    <div />
                    <div />
                    <div />
                  </div>
                  <div className="cbw-visual-lines">
                    <div />
                    <div />
                  </div>
                </div>
              </div>
              <div className="cbw-hint">
                Live-Mitschnitt aus CLiP-BOOsT – das Video zeigt einen Beispiel-Stream.
              </div>
            </div>
          </div>
        </section>

        {/* STRIP -------------------------------------------------------------- */}
        <section className="cbw-strip">
          <div className="cbw-container cbw-strip-row">
            <span>Öffentlich erreichbar</span>
            <i />
            <span>Kein Login-Zwang</span>
            <i />
            <span>Review-konformes Setup</span>
            <i />
            <span>Transparente Produktbeschreibung</span>
          </div>
        </section>

        {/* FEATURES ----------------------------------------------------------- */}
        <section id="features" className="cbw-section">
          <div className="cbw-container">
            <div className="cbw-section-head">
              <h2>Kernfunktionen</h2>
              <p>
                Fokus auf skalierbare Stream-Assets, konsistente Designs und eine
                klare Nutzerführung.
              </p>
            </div>

            <div className="cbw-grid">
              <div className="cbw-card">
                <h3>Overlay-Management</h3>
                <p>
                  Zentrale Verwaltung eigener und vorgefertigter Overlays mit
                  strukturierten Workflows.
                </p>
              </div>
              <div className="cbw-card">
                <h3>AI-Overlay-Generierung</h3>
                <p>
                  Stilbasierte Erstellung neuer Designs mit Fokus auf Lesbarkeit
                  und Stream-Kompatibilität.
                </p>
              </div>
              <div className="cbw-card">
                <h3>Community & Templates</h3>
                <p>
                  Entdecken, testen und iterieren – optional mit kuratierten
                  Vorlagen und Community-Inhalten.
                </p>
              </div>
              <div className="cbw-card">
                <h3>Livestream-Setup</h3>
                <p>
                  Aufbau für Widgets/Integrationen und strukturierte Aktivierung
                  im Livebetrieb.
                </p>
              </div>
              <div className="cbw-card">
                <h3>Monetarisierung</h3>
                <p>
                  Grundlage für Free/PRO/DayPass sowie Asset-Bundles und
                  erweiterte Limits.
                </p>
              </div>
              <div className="cbw-card">
                <h3>Compliance-ready</h3>
                <p>
                  Saubere Trennung von Website und App zur Erfüllung von
                  Plattform-Review-Anforderungen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS ------------------------------------------------------ */}
        <section id="how" className="cbw-section cbw-section-alt">
          <div className="cbw-container">
            <div className="cbw-section-head">
              <h2>So funktioniert&apos;s</h2>
              <p>Drei Schritte vom Setup bis zum einsatzbereiten Stream-Look.</p>
            </div>

            <div className="cbw-grid-3">
              <div className="cbw-card">
                <span className="cbw-step">01</span>
                <h3>Account & Projekt</h3>
                <p>App-Zugang anlegen und das Streaming-Profil initialisieren.</p>
              </div>
              <div className="cbw-card">
                <span className="cbw-step">02</span>
                <h3>Overlays auswählen/erstellen</h3>
                <p>Templates nutzen oder neue Designs KI-gestützt erzeugen.</p>
              </div>
              <div className="cbw-card">
                <span className="cbw-step">03</span>
                <h3>Im Stream einsetzen</h3>
                <p>Assets integrieren, testen und das Setup iterativ optimieren.</p>
              </div>
            </div>

            <div className="cbw-note">
              <strong>Reviewer-Hinweis:</strong> Diese Seite ist eine öffentliche
              Produktseite. Login zur App erfolgt nur optional über den Button.
            </div>
          </div>
        </section>

        {/* SCREENS ----------------------------------------------------------- */}
        <section id="screens" className="cbw-section">
          <div className="cbw-container">
            <div className="cbw-section-head">
              <h2>App-Screens</h2>
              <p>
                Platzhalter für Screenshots (Dashboard, Overlays, AI-Generator,
                Community, Livestream-Setup).
              </p>
            </div>

            <div className="cbw-grid">
              {[
                "Dashboard",
                "Overlays",
                "AI Generator",
                "Community",
                "Livestream Setup",
                "Account/Billing",
              ].map((x) => (
                <div className="cbw-card" key={x}>
                  <div className="cbw-screen" />
                  <div className="cbw-screen-label">{x}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ ---------------------------------------------------------------- */}
        <section id="faq" className="cbw-section">
          <div className="cbw-container">
            <div className="cbw-section-head">
              <h2>FAQ</h2>
              <p>Kurze Antworten für Nutzer und Plattform-Review.</p>
            </div>

            <div className="cbw-faq">
              <details className="cbw-faq-item">
                <summary>Ist diese Seite die Login-Seite?</summary>
                <p>
                  Nein. Das ist eine öffentliche Informationsseite. Der Login zur
                  App erfolgt nur über den Button und wird nicht erzwungen.
                </p>
              </details>
              <details className="cbw-faq-item">
                <summary>Wofür ist CLiP-BOOsT gedacht?</summary>
                <p>
                  Für Streamer, die Overlays und Stream-Assets effizient verwalten,
                  testen und KI-gestützt erstellen möchten.
                </p>
              </details>
              <details className="cbw-faq-item">
                <summary>Gibt es kostenlose Nutzung?</summary>
                <p>
                  Ein Free-Einstieg ist vorgesehen. Erweiterte Funktionen können
                  als PRO oder DayPass angeboten werden.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CONTACT ----------------------------------------------------------- */}
        <section id="contact" className="cbw-section cbw-section-alt">
          <div className="cbw-container">
            <div className="cbw-contact">
              <div>
                <h2>Kontakt</h2>
                <p>Support, Plattform-Review oder Business-Anfragen.</p>
              </div>
              <div className="cbw-contact-box">
                <div className="cbw-meta-label">E-Mail</div>
                <a href="mailto:support@clip-boost-website.online">
                  support@clip-boost-website.online
                </a>
                <div className="cbw-meta-label" style={{ marginTop: 12 }}>
                  Produkt
                </div>
                <div>CLiP-BOOsT</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER -------------------------------------------------------------- */}
      <footer className="cbw-footer">
        <div className="cbw-container cbw-footer-row">
          <div>
            <div className="cbw-brand">
              <span className="cbw-dot" />
              <div className="cbw-brand-text">
                <div className="cbw-brand-name">CLiP-BOOsT</div>
                <div className="cbw-brand-sub">Public Product Website</div>
              </div>
            </div>
            <small>© {year} CLiP-BOOsT</small>
          </div>

          <div className="cbw-footer-links">
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
            <a href="/agb">AGB / Terms</a>
          </div>

          <div>
            <a
              className="cbw-btn cbw-btn-primary"
              href="https://clip-boost.online"
              rel="noreferrer"
            >
              Zur App / Login
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
