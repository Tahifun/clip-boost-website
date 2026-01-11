import LegalLayout from "./LegalLayout";

export default function Datenschutz() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <p>
        Diese Website ist eine öffentliche Produktseite. Es findet kein Login statt und
        wir verwenden keine Tracking- oder Marketing-Cookies. Bei Nutzung der App gelten
        die Datenschutzhinweise der App.
      </p>

      <h2>Verantwortlicher</h2>
      <p>
        Rene Quilitzsch
        <br />
        Langestraße 92, 19230 Hagenow, Deutschland
        <br />
        E-Mail:{" "}
        <a href="mailto:clip-boost.online@outlook.de">clip-boost.online@outlook.de</a>
      </p>

      <h2>Hosting</h2>
      <p>
        Diese Website wird über einen externen Dienstleister bereitgestellt (Vercel). Beim
        Aufruf der Website werden durch den Hosting-Anbieter technische Protokolldaten
        verarbeitet (z. B. IP-Adresse, Zeitpunkt, angeforderte Ressource, User-Agent) zur
        Auslieferung und Absicherung des Betriebs.
      </p>

      <h2>Kontaktaufnahme</h2>
      <p>
        Wenn du uns per E-Mail kontaktierst, verarbeiten wir deine Angaben zur Bearbeitung
        der Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
        Maßnahmen/Vertrag) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
        Kommunikation).
      </p>

      <h2>Empfänger und Drittlandübermittlung</h2>
      <p>
        Je nach Hosting-Setup können Daten in Drittländer übermittelt werden (z. B. USA).
        Der Hosting-Anbieter setzt hierfür geeignete Garantien ein (z. B. Standardvertragsklauseln).
      </p>

      <h2>Speicherdauer</h2>
      <p>
        Protokolldaten werden nur so lange gespeichert, wie es für den Betrieb und die
        Sicherheit erforderlich ist. Kommunikationsdaten speichern wir, solange die
        Bearbeitung der Anfrage und etwaige gesetzliche Aufbewahrungspflichten dies
        erfordern.
      </p>

      <h2>Deine Rechte</h2>
      <p>
        Du hast – soweit die gesetzlichen Voraussetzungen vorliegen – das Recht auf Auskunft,
        Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie
        Widerspruch gegen die Verarbeitung. Außerdem hast du das Recht auf Beschwerde bei
        einer Aufsichtsbehörde.
      </p>

      <h2>Keine Cookies zu Tracking-Zwecken</h2>
      <p>
        Wir setzen auf dieser Website keine Tracking- oder Marketing-Cookies ein. Technisch
        notwendige Cookies können im Rahmen des Hostings entstehen.
      </p>

      <p className="cbw-legal-muted">Stand: 11.01.2026</p>
    </LegalLayout>
  );
}
