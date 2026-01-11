import { Link, useLocation } from "react-router-dom";

export default function SiteFooter() {
  const loc = useLocation();
  const onHome = loc.pathname === "/";

  const prefix = onHome ? "" : "/";

  return (
    <footer className="cbw-footer">
      <div className="cbw-container">
        <div className="cbw-footer-row">
          <div className="cbw-brand" style={{ gap: 10 }}>
            <img className="cbw-mark" src="/logo.png" alt="CLiP-BOOsT" />
            <div className="cbw-brand-text">
              <div className="cbw-brand-name">CLiP-BOOsT</div>
              <div className="cbw-brand-sub">Public Product Website</div>
              <div className="cbw-brand-sub">© {new Date().getFullYear()} CLiP-BOOsT</div>
            </div>
          </div>

          <div className="cbw-footer-links">
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
            <Link to="/agb">AGB</Link>
            <Link to="/terms">Terms</Link>
          </div>

          <div className="cbw-cta" style={{ justifyContent: "flex-end" }}>
            <a className="cbw-btn cbw-btn-primary" href="https://clip-boost.online">
              Zur App / Login
            </a>
          </div>
        </div>

        <div className="cbw-strip" style={{ paddingTop: 18 }}>
          <div className="cbw-strip-row" style={{ justifyContent: "flex-start" }}>
            <span>Öffentlich erreichbar</span>
            <i />
            <span>Kein Login-Zwang</span>
            <i />
            <span>Review-konformes Setup</span>
            <i />
            <span>Transparente Produktbeschreibung</span>
          </div>
        </div>

        {!onHome ? (
          <div style={{ marginTop: 10 }}>
            <Link className="cbw-btn cbw-btn-secondary" to={`${prefix}#faq`}>
              Zurück zur Startseite
            </Link>
          </div>
        ) : null}
      </div>
    </footer>
  );
}
