import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

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
                <a href="mailto:clip-boost.online@outlook.de">
                  clip-boost.online@outlook.de
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
      <SiteFooter />
    </div>
  );
}
