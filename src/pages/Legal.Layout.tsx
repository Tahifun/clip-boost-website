import type { ReactNode } from "react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

type LegalLayoutProps = {
  title: string;
  children: ReactNode;
};

export default function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <div className="cbw">
      <SiteHeader />
      <main className="cbw-legal">
        <div className="cbw-container">
          <div className="cbw-legal-card">
            <h1>{title}</h1>
            {children}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
