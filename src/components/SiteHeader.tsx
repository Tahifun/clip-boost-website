import { Link, useLocation } from "react-router-dom";

type SiteHeaderProps = {
  /** Optional: override where the brand link points to (default "/") */
  brandHref?: string;
};

export default function SiteHeader({ brandHref = "/" }: SiteHeaderProps) {
  const loc = useLocation();
  const onHome = loc.pathname === "/";

  const prefix = onHome ? "" : "/";

  return (
    <header className="cbw-header">
      <div className="cbw-container">
        <div className="cbw-header-row">
          <Link className="cbw-brand" to={brandHref} aria-label="CLiP-BOOsT Startseite">
            {/* Replace the old dot with your logo in /public/logo.png */}
            <img className="cbw-mark" src="/logo.png" alt="CLiP-BOOsT" />
            <span className="cbw-brand-text">
              <span className="cbw-brand-name">CLiP-BOOsT</span>
              <span className="cbw-brand-sub">Stream Assets &amp; Overlay Platform</span>
            </span>
          </Link>

          <nav className="cbw-nav" aria-label="Navigation">
            <a href={`${prefix}#features`}>Features</a>
            <a href={`${prefix}#flow`}>Ablauf</a>
            <a href={`${prefix}#screens`}>Screens</a>
            <a href={`${prefix}#faq`}>FAQ</a>
            <a href={`${prefix}#contact`}>Kontakt</a>
          </nav>

          <div className="cbw-cta">
            <a className="cbw-btn cbw-btn-ghost" href={`${prefix}#contact`}>
              Kontakt
            </a>
            <a className="cbw-btn cbw-btn-primary" href="https://clip-boost.online">
              Zur App / Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
