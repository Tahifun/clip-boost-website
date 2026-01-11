// src/components/SiteFooter.tsx
import { useState } from "react";
import { Link } from "react-router-dom";

const LOGO_SRC = "/clipboost-mark.png";

export default function SiteFooter() {
  const [logoOk, setLogoOk] = useState(true);

  return (
    <footer className="cbw-footer">
      <div className="cbw-container">
        <div className="cbw-footer-row">
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
              <div className="cbw-brand-sub">Public Product Website</div>
            </div>
          </Link>

          <div className="cbw-footer-links">
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
            <Link to="/agb">AGB</Link>
            <Link to="/terms">Terms</Link>
          </div>

          <a className="cbw-btn cbw-btn-primary" href="https://www.clip-boost.online">
            Zur App / Login
          </a>
        </div>
      </div>
    </footer>
  );
}
