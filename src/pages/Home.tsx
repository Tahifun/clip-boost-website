import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

type HeroMiniCard = {
  key: string;
  title: string;
  text: string;
  image: string;
};

type FeatureCard = {
  title: string;
  text: string;
};

type StepCard = {
  n: "01" | "02" | "03";
  title: string;
  text: string;
};

type ScreenCard = {
  key: string;
  title: string;
  label: string;
  image: string;
};

type FaqItem = {
  q: string;
  a: string;
};

/**
 * HINWEIS:
 * Diese Pfade müssen im /public existieren, sonst sind es "nur" 404-Assets (Build bleibt trotzdem ok).
 * Passe die Dateinamen an deine echten Public-Dateien an.
 */
const heroMiniCards: HeroMiniCard[] = [
  {
    key: "tiktok",
    title: "TikTok-Verknüpfung",
    text: "Account als Plattform für dein Livestream-Setup verbinden.",
    image: "/mini-tiktok.png",
  },
  {
    key: "live",
    title: "Live-Dashboard",
    text: "Status, Zuschauer, Events und Checkliste im Blick behalten.",
    image: "/mini-live.png",
  },
  {
    key: "overlays",
    title: "Overlays Library",
    text: "Built-in Templates, AI und Community-Setups.",
    image: "/mini-overlays.png",
  },
];

const featureCards: FeatureCard[] = [
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
    text: "Öffentliche Produktseite (Infos & rechtliche Hinweise); Login ist separat in der App.",
  },
];

const steps: StepCard[] = [
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

const screenCards: ScreenCard[] = [
  {
    key: "screen-dashboard",
    title: "Dashboard",
    label: "Überblick, Status und Kernfunktionen.",
    image: "/publicscreen-dashboard.png",
  },
  {
    key: "screen-overlays",
    title: "Overlays",
    label: "Templates, Library und Setup-Zuweisung.",
    image: "/publicscreen-overlays.png",
  },
  {
    key: "screen-ai",
    title: "AI Generator",
    label: "KI-gestützte Erstellung neuer Assets.",
    image: "/publicscreen-ai-generator.png",
  },
  {
    key: "screen-community",
    title: "Community",
    label: "Discover, Community-Packs und Imports.",
    image: "/publicscreen-community.png",
  },
  {
    key: "screen-live-dashboard",
    title: "Live Dashboard",
    label: "Live-Steuerung, Szenen und Monitoring.",
    image: "/publicscreen-live-dashboard.png",
  },
  {
    key: "screen-live-checklist",
    title: "Live Checklist",
    label: "Setup-Checkliste vor dem Start.",
    image: "/publicscreen-live-checklist.png",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Ist diese Seite die Login-Seite?",
    a: "Nein. Diese Website ist eine öffentliche Produktseite. Der Login zur App erfolgt nur optional über „Zur App / Login“.",
  },
  {
    q: "Wofür ist CLiP-BOOsT gedacht?",
    a: "Für Streamer/Creator/Teams zur Verwaltung von Overlays/Assets und für strukturierte Workflows im Livestream-Setup.",
  },
  {
    q: "Gibt es kostenlose Nutzung?",
    a: "Ja. Es gibt ein Free-Modell sowie optionale Upgrades (PRO / DayPass) für erweiterte Funktionen und Limits.",
  },
  {
    q: "Welche Plattformen werden unterstützt?",
    a: "Der Fokus liegt auf Livestream-Workflows. Plattform-Integrationen werden innerhalb der App verwaltet (nicht auf dieser Website).",
  },
  {
    q: "Welche TikTok-Daten werden verwendet?",
    a: "Bei TikTok Login wird aktuell nur der Scope user.info.basic genutzt. Gespeichert werden OpenID sowie Anzeigename und Avatar zur Account-Zuordnung. Posting/Publishing erfolgt nicht über diese Integration.",
  },
  {
    q: "Wie kann ein Reviewer die App testen?",
    a: "Falls für den Review Zugriff auf die App notwendig ist, kann ein Test-Account bereitgestellt werden (Zugangsdaten in den Review-Notizen im Developer Portal).",
  },
];

export default function Home() {
  return (
    <div className="cbw">
      <SiteHeader />
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
                CLiP-BOOsT ist eine Web-Plattform zur Verwaltung und Erstellung von Streaming-Overlays und Assets.
                Diese Website ist bewusst eine öffentliche Informationsseite und keine Login-Homepage.
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

            {/* Hero Visual */}
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
                    <video src="/clip-boost-hero.mp4" autoPlay muted loop playsInline />
                  </div>

                  <div className="cbw-hero-mini-grid">
                    {heroMiniCards.map((card: HeroMiniCard) => (
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
              <p>Fokus auf skalierbare Stream-Assets, konsistente Designs und eine klare Nutzerführung.</p>
            </div>

            <div className="cbw-grid">
              {featureCards.map((card: FeatureCard) => (
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
              {steps.map((s: StepCard) => (
                <article key={s.n} className="cbw-card">
                  <span className="cbw-step">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>

            <div className="cbw-note">
              <strong>Reviewer-Hinweis:</strong> Diese Seite ist eine öffentliche Produktseite. Login zur App erfolgt
              nur optional über den Button.
            </div>
          </div>
        </section>

        {/* App Screens */}
        <section id="screens" className="cbw-section cbw-section-screens">
          <div className="cbw-container">
            <div className="cbw-section-head">
              <h2>App-Screens</h2>
              <p>
                Einblicke in zentrale Bereiche der App: Dashboard, Overlays, AI-Generator, Community und
                Livestream-Steuerung.
              </p>
            </div>

            <div className="cbw-screens-grid">
              {screenCards.map((screen: ScreenCard) => (
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

        {/* TikTok Integration */}
        <section id="tiktok" className="cbw-section cbw-section-alt">
          <div className="cbw-container">
            <div className="cbw-section-head">
              <h2>TikTok Login &amp; Integration</h2>
              <p>
                CLiP-BOOsT verknüpft optional einen TikTok-Account über OAuth (PKCE). Die Website selbst ist öffentlich
                und enthält keine Login-Barrieren.
              </p>
            </div>

            <div className="cbw-grid-3">
              <article className="cbw-card">
                <h3>OAuth Flow</h3>
                <p>
                  Start über einen Connect-Button in der App, Weiterleitung zu TikTok, Callback zurück an die API und
                  anschließende Speicherung der Verknüpfung.
                </p>
              </article>
              <article className="cbw-card">
                <h3>Scope &amp; Daten</h3>
                <p>
                  Aktuell wird nur <strong>user.info.basic</strong> genutzt (OpenID, Anzeigename, Avatar). Keine
                  Veröffentlichungen/Uploads über TikTok.
                </p>
              </article>
              <article className="cbw-card">
                <h3>Kontrolle</h3>
                <p>
                  Verknüpfung kann in der App getrennt werden; Rechte können zusätzlich in TikTok widerrufen werden.
                </p>
              </article>
            </div>

            <div className="cbw-note">
              <strong>Review-Kontext:</strong> Website-URL ist diese öffentliche Seite. App-Login ist separat. Falls der
              Reviewer Zugriff auf In-App-Flows benötigt, werden Test-Zugangsdaten im Developer Portal bereitgestellt.
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
              {faqs.map((item: FaqItem) => (
                <details key={item.q} className="cbw-faq-item">
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="cbw-section cbw-section-alt">
          {/* Fallback-Anker falls irgendwo noch #contact verlinkt ist */}
          <div id="contact" />
          <div className="cbw-container">
            <div className="cbw-contact">
              <div>
                <h2>Kontakt</h2>
                <p>Support, Plattform-Review oder Business-Anfragen.</p>
              </div>
              <div className="cbw-contact-box">
                <div className="cbw-meta-label">E-Mail</div>
                <a href="mailto:clip-boost.online@outlook.de">clip-boost.online@outlook.de</a>
                <div className="cbw-meta-label" style={{ marginTop: 12 }}>
                  Produkt
                </div>
                <div>CLiP-BOOsT</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
