export default function SiteHeader() {
  return (
    <header className="cbw-header">
      <div className="cbw-container cbw-header-row">
        <a className="cbw-brand" href="/" aria-label="CLiP-BOOsT Startseite">
          <img className="cbw-mark" src="/clipboost-mark.png" alt="CLiP-BOOsT" />
          <div className="cbw-brand-text">
            <div className="cbw-brand-name">CLiP-BOOsT</div>
            <div className="cbw-brand-sub">Stream Assets &amp; Overlay Platform</div>
          </div>
        </a>

        <nav className="cbw-nav" aria-label="Navigation">
          <a href="/#features">Features</a>
          <a href="/#how">Ablauf</a>
          <a href="/#screens">Screens</a>
          <a href="/#tiktok">TikTok</a>
          <a href="/#faq">FAQ</a>
          <a href="/#contact">Kontakt</a>
        </nav>

        <div className="cbw-cta">
          <a className="cbw-btn cbw-btn-ghost" href="/#contact">
            Kontakt
          </a>
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
    </header>
  );
}
