// src/components/SiteHeader.tsx
import { useState } from "react";
import { Link } from "react-router-dom";

const LOGO_SRC = "/clipboost-mark.png";

export default function SiteHeader() {
  const [logoOk, setLogoOk] = useState(true);

  return (
    <header className="cbw-header">
      <div className="cbw-container cbw-header-row">
        <Link className="cbw-brand" to="/" aria-label="CLiP-BOOsT – Startseite">
          {logoOk ? (
            <img
              className="cbw-mark"
              src={LOGO_SRC}
              alt="CLiP-BOOsT Logo"
              onError={() => setLogoOk(false)}
            />
          ) : (
            <span className="cbw-dot" aria-hidden />
          )}

          <div className="cbw-brand-text">
            <div className="cbw-brand-name">CLiP-BOOsT</div>
            <div className="cbw-brand-sub">Stream Assets &amp; Overlay Platform</div>
          </div>
        </Link>

        <nav className="cbw-nav" aria-label="Seiten-Navigation">
          <a href="/#features">Features</a>
          <a href="/#how">Ablauf</a>
          <a href="/#screens">Screens</a>
          <a href="/#faq">FAQ</a>
          <a href="/#contact">Kontakt</a>
        </nav>

        <div className="cbw-cta">
          <a className="cbw-btn cbw-btn-ghost" href="/#contact">
            Kontakt
          </a>
          <a className="cbw-btn cbw-btn-primary" href="https://www.clip-boost.online">
            Zur App / Login
          </a>
        </div>
      </div>
    </header>
  );
}
