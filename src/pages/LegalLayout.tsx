// src/pages/LegalLayout.tsx
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  children: ReactNode;
};

export default function LegalLayout({ title, children }: Props) {
  return (
    <div className="cbw">
      <header className="cbw-header">
        <div className="cbw-container">
          <div className="cbw-header-row">
            <Link to="/" className="cbw-brand" style={{ textDecoration: "none", color: "inherit" }}>
              {/* Wenn du ein Logo als Bild nutzt: */}
              <img className="cbw-mark" src="/logo.png" alt="CLiP-BOOsT" />
              <div className="cbw-brand-text">
                <div className="cbw-brand-name">CLiP-BOOsT</div>
                <div className="cbw-brand-sub">Stream Assets & Overlay Platform</div>
              </div>
            </Link>

            <nav className="cbw-nav">
              <Link to="/#features">Features</Link>
              <Link to="/#ablauf">Ablauf</Link>
              <Link to="/#screens">Screens</Link>
              <Link to="/#faq">FAQ</Link>
              <Link to="/#kontakt">Kontakt</Link>
            </nav>

            <div className="cbw-cta">
              <a className="cbw-btn cbw-btn-ghost" href="mailto:clip-boost.online@outlook.de">
                Kontakt
              </a>
              <a className="cbw-btn cbw-btn-primary" href="https://www.clip-boost.online" rel="noreferrer">
                Zur App / Login
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="cbw-section">
        <div className="cbw-container">
          <div className="cbw-section-head">
            <h2>{title}</h2>
          </div>
          <div className="cbw-card">{children}</div>
        </div>
      </main>

      <footer className="cbw-footer">
        <div className="cbw-container">
          <div className="cbw-footer-row">
            <div className="cbw-brand">
              <img className="cbw-mark" src="/logo.png" alt="CLiP-BOOsT" />
              <div className="cbw-brand-text">
                <div className="cbw-brand-name">CLiP-BOOsT</div>
                <div className="cbw-brand-sub">Public Product Website</div>
              </div>
            </div>

            <div className="cbw-footer-links">
              <Link to="/impressum">Impressum</Link>
              <Link to="/datenschutz">Datenschutz</Link>
              <Link to="/agb">AGB</Link>
              <Link to="/terms">Terms</Link>
            </div>

            <a className="cbw-btn cbw-btn-primary" href="https://www.clip-boost.online" rel="noreferrer">
              Zur App / Login
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
