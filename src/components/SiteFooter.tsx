export default function SiteFooter() {
  return (
    <footer className="cbw-footer">
      <div className="cbw-container cbw-footer-row">
        <div className="cbw-brand">
          <img
            className="cbw-mark"
            src="/clipboost-logo.png"
            alt="CLiP-BOOsT Logo"
            width={22}
            height={22}
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <div className="cbw-brand-text">
            <div className="cbw-brand-name">CLiP-BOOsT</div>
            <div className="cbw-brand-sub">Public Product Website</div>
            <div className="cbw-brand-sub">© 2026 CLiP-BOOsT</div>
          </div>
        </div>

        <div className="cbw-footer-links">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <a href="/agb">AGB / Terms</a>
        </div>

        <a className="cbw-btn cbw-btn-primary" href="https://clip-boost.online">
          Zur App / Login
        </a>
      </div>
    </footer>
  );
}
