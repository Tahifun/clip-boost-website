import "./App.css";

const heroMiniCards = [
  {
    key: "tiktok",
    title: "TikTok-Verknüpfung",
    text: "Account als Plattform für dein Livestream-Setup verbinden.",
    image: "/mini-tiktok.png",
  },
  {
    key: "live",
    title: "Live-Dashboard",
    text: "Status, Zuschauer, Events und Checklist im Blick behalten.",
    image: "/mini-live.png",
  },
  {
    key: "overlays",
    title: "Overlays Library",
    text: "Built-in Templates, AI-Overlays und Community-Setups.",
    image: "/mini-overlays.png",
  },
];

const featureCards = [
  {
    title: "Overlay-Management",
    text: "Zentrale Verwaltung eigener und vorgefertigter Overlays mit strukturierten Workflows.",
  },
  {
    title: "AI-Overlay-Generierung",
    text: "Stilbasierte Erstellung neuer Designs mit Fokus auf Lesbarkeit und Stream-Kompatibilität.",
  },
  {
    title: "Community & Templates",
    text: "Entdecken, testen und iterieren – optional mit kuratierten Vorlagen und Community-Inhalten.",
  },
  {
    title: "Livestream-Setup",
    text: "Aufbau für Widgets/Integrationen und strukturierte Aktivierung im Livebetrieb.",
  },
  {
    title: "Monetarisierung",
    text: "Grundlage für Free/PRO/DayPass sowie Asset-Bundles und erweiterte Limits.",
  },
  {
    title: "Compliance-ready",
    text: "Saubere Trennung von Website und App zur Erfüllung von Plattform-Review-Anforderungen.",
  },
];

const steps = [
  {
    n: "01",
    title: "Account & Projekt",
    text: "App-Zugang anlegen und dein Streaming-Profil initialisieren.",
  },
  {
    n: "02",
    title: "Overlays auswählen/erstellen",
    text: "Templates nutzen oder neue Designs KI-gestützt erzeugen.",
  },
  {
    n: "03",
    title: "Im Stream einsetzen",
    text: "Assets integrieren, testen und dein Setup iterativ optimieren.",
  },
];

const screenCards = [
  {
    key: "dashboard",
    title: "CLiP-BOOsT Dashboard mit Kennzahlen und Schnellaktionen",
    label: "Dashboard",
    image: "/screen-dashboard.png",
  },
  {
    key: "overlays",
    title: "AI Private Gallery mit KI-generierten Overlays",
    label: "Overlays",
    image: "/screen-overlays.png",
  },
  {
    key: "ai",
    title: "KI-Overlay-Generierung Panel",
    label: "AI-Generator",
    image: "/screen-ai-generator.png",
  },
  {
    key: "community",
    title: "Community-Overlays Übersicht",
    label: "Community",
    image: "/screen-community.png",
  },
  {
    key: "live-dashboard",
    title: "Live Dashboard mit Status-Kacheln",
    label: "Live Dashboard",
    image: "/screen-live-dashboard.png",
  },
  {
    key: "live-checklist",
    title: "Live-Checkliste mit Setup-Schritten",
    label: "Live-Checkliste",
    image: "/screen-live-checklist.png",
  },
];

const faqs = [
  {
    q: "Ist diese Seite die Login-Seite?",
    a: "Nein. Das ist eine öffentliche Informationsseite. Der Login zur App erfolgt nur über den Button und wird nicht erzwungen.",
  },
  {
    q: "Wofür ist CLiP-BOOsT gedacht?",
    a: "Für Streamer, die Overlays und Stream-Assets effizient verwalten, testen und KI-gestützt erstellen möchten.",
  },
  {
    q: "Gibt es kostenlose Nutzung?",
    a: "Ein Free-Einstieg ist vorgesehen. Erweiterte Funktionen können als PRO oder DayPass angeboten werden.",
  },
  {
    q: "Welche Plattformen werden unterstützt?",
    a: "Der Fokus liegt auf modernen Livestream-Workflows. Plattform-spezifische Integrationen können je nach Release-Stufe variieren.",
  },
];

export default function App() {
  const year = new Date().getFullYear();

  return (
    <div className="cbw">
      {/* Header */}
      <header className="cbw-header">
        <div className="cbw-container cbw-header-row">
          <div className="cbw-brand">
            <span className="cbw-dot" />
            <div className="cbw-brand-text">
              <div className="cbw-brand-name">CLiP-BOOsT</div>
              <div className="cbw-brand-sub">Stream Assets &amp; Overlay Platform</div>
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
        {/* Hero */}
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

            {/* Hero Visual mit Video + 3 Mini-Karten */}
            <div className="cbw-visual">
              <div className="cbw-visual-panel">
                <div className="cbw-visual-head">
                  <span />
                  <span />
                  <span />
                  <strong>Preview</strong>
                </div>
                <div className="cbw-visual-body">
                  <div className="cbw-visual-video">
                    <video
                      src="/clip-boost-hero.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>

                  <div className="cbw-hero-mini-grid">
                    {heroMiniCards.map((card) => (
                      <article className="cbw-hero-mini-card" key={card.key}>
                        <img src={card.image} alt={card.title} />
                        <div>
                          <h3>{card.title}</h3>
                          <p>{card.text}</p>
                        </div>
                      </article>
                    ))}
                  </div>

                  <p className="cbw-visual-caption">
                    Live-Mitschnitt aus CLiP-BOOsT – das Video zeigt einen Beispiel-Stream.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Strip */}
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

        {/* Features */}
        <section id="features" className="cbw-section">
          <div className="cbw-container">
            <div className="cbw-section-head">
              <h2>Kernfunktionen</h2>
              <p>
                Fokus auf skalierbare Stream-Assets, konsistente Designs und eine klare
                Nutzerführung.
              </p>
            </div>

            <div className="cbw-grid">
              {featureCards.map((card) => (
                <article key={card.title} className="cbw-card">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="cbw-section cbw-section-alt">
          <div className="cbw-container">
            <div className="cbw-section-head">
              <h2>So funktioniert&apos;s</h2>
              <p>Drei Schritte vom Setup bis zum einsatzbereiten Stream-Look.</p>
            </div>

            <div className="cbw-grid-3">
              {steps.map((s) => (
                <article key={s.n} className="cbw-card">
                  <span className="cbw-step">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>

            <div className="cbw-note">
              <strong>Reviewer-Hinweis:</strong> Diese Seite ist eine öffentliche
              Produktseite. Login zur App erfolgt nur optional über den Button.
            </div>
          </div>
        </section>

        {/* App Screens */}
        <section id="screens" className="cbw-section cbw-section-screens">
          <div className="cbw-container">
            <div className="cbw-section-head">
              <h2>App-Screens</h2>
              <p>
                Einblicke in zentrale Bereiche der App: Dashboard, Overlays, AI-Generator,
                Community und Livestream-Steuerung.
              </p>
            </div>

            <div className="cbw-screens-grid">
              {screenCards.map((screen) => (
                <article key={screen.key} className="cbw-screen-card">
                  <div className="cbw-screen-image-wrap">
                    <img src={screen.image} alt={screen.title} />
                  </div>
                  <h3>{screen.title}</h3>
                  <p className="cbw-screen-label">{screen.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="cbw-section">
          <div className="cbw-container">
            <div className="cbw-section-head">
              <h2>FAQ</h2>
              <p>Kurze Antworten für Nutzer und Plattform-Review.</p>
            </div>

            <div className="cbw-faq">
              {faqs.map((item) => (
                <details key={item.q} className="cbw-faq-item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Kontakt */}
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

      {/* Footer */}
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
