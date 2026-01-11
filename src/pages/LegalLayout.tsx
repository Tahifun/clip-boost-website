import type { ReactNode } from "react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function LegalLayout(props: { title: string; children: ReactNode }) {
  return (
    <div className="cbw">
      <SiteHeader />
      <main className="cbw-legal">
        <div className="cbw-container">
          <div className="cbw-legal-card">
            <h1>{props.title}</h1>
            {props.children}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
