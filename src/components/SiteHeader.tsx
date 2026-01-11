export default function SiteHeader() {
  return (
    <header className="cbw-header" id="top">
      <div className="cbw-container cbw-header-row">
        <a className="cbw-brand" href="#top" aria-label="CLiP-BOOsT">
          <img
            className="cbw-mark"
            src="/clipboost-logo.png"
            alt="CLiP-BOOsT Logo"
            width={22}
            height={22}
            loading="eager"
            onError={(e) => {
              // Falls Datei fehlt/Name falsch: Bild ausblenden, damit Layout nicht „kaputt“ wirkt
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
          <span className="cbw-brand-text">
            <span className="cbw-brand-name">CLiP-BOOsT</span>
            <span className="cbw-brand-sub">Stream Assets &amp; Overlay Platform</span>
          </span>
        </a>

        <nav className="cbw-nav" aria-label="Navigation">
          <a href="#features">Features</a>
          <a href="#how">Ablauf</a>
          <a href="#screens">Screens</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Kontakt</a>
        </nav>

        <div className="cbw-cta">
          <a className="cbw-btn cbw-btn-ghost" href="#contact">Kontakt</a>
          <a className="cbw-btn cbw-btn-primary" href="https://clip-boost.online">
            Zur App / Login
          </a>
        </div>
      </div>
    </header>
  );
}
