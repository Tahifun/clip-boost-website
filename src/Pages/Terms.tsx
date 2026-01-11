import LegalLayout from "./LegalLayout";

export default function Terms() {
  return (
    <LegalLayout title="Terms (English Summary)">
      <p>
        This page is a short English summary for convenience. The legally binding version
        is the German AGB. In case of discrepancies, the German version prevails.
      </p>

      <h2>Provider</h2>
      <p>
        Rene Quilitzsch, Langestraße 92, 19230 Hagenow, Germany
        <br />
        Contact:{" "}
        <a href="mailto:clip-boost.online@outlook.de">clip-boost.online@outlook.de</a>
      </p>

      <h2>Service</h2>
      <ul>
        <li>Web app to manage and create streaming overlays/assets.</li>
        <li>Optional integrations (e.g. TikTok linking), subject to availability.</li>
        <li>Optional AI features, subject to usage limits and availability.</li>
      </ul>

      <h2>Plans &amp; Payments</h2>
      <p>
        Pricing and plan terms are displayed in the app/checkout. If you choose a subscription,
        it may renew automatically until cancelled.
      </p>

      <h2>Licensing</h2>
      <p>
        Assets may be used for your own streams within your plan. Redistribution/resale is not
        allowed without explicit permission.
      </p>

      <h2>Liability</h2>
      <p>
        Liability is limited to the extent permitted by law. Third-party platform outages are
        outside our control.
      </p>

      <p className="cbw-legal-muted">Last updated: 2026-01-11</p>
    </LegalLayout>
  );
}
