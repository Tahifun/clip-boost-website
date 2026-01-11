export default function SiteFooter() {
  return (
    <footer className="cbw-footer">
      <div className="cbw-container">
        <div className="cbw-footer-row">
          <div className="cbw-brand" style={{ gap: 12 }}>
            <img className="cbw-mark cbw-mark--footer" src="/clipboost-mark.png" alt="CLiP-BOOsT" />
            <div className="cbw-brand-text">
              <div className="cbw-brand-name">CLiP-BOOsT</div>
              <div className="cbw-brand-sub">Public Product Website</div>
              <div className="cbw-brand-sub">© 2026 CLiP-BOOsT</div>
            </div>
          </div>

          <div className="cbw-footer-links">
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
            <a href="/agb">AGB</a>
            <a href="/terms">Terms</a>
          </div>

          <a
            className="cbw-btn cbw-btn-primary"
            href="https://www.clip-boost.online"
            target="_blank"
            rel="noreferrer"
          >
            Zur App / Login
          </a>
        </div>
      </div>
    </footer>
  );
}
