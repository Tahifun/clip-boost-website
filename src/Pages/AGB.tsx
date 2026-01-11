import LegalLayout from "./LegalLayout";

export default function AGB() {
  return (
    <LegalLayout title="AGB (Allgemeine Geschäftsbedingungen)">
      <p>
        Diese AGB gelten für die Nutzung der CLiP-BOOsT Web-App (digitale Dienste,
        Overlays/Assets, Integrationen). Diese Website ist eine öffentliche Produktseite;
        für reine Informationsnutzung fallen keine Kosten an.
      </p>

      <h2>1. Anbieter</h2>
      <p>
        Rene Quilitzsch, Langestraße 92, 19230 Hagenow, Deutschland
        <br />
        Kontakt:{" "}
        <a href="mailto:clip-boost.online@outlook.de">clip-boost.online@outlook.de</a>
      </p>

      <h2>2. Leistungsbeschreibung</h2>
      <ul>
        <li>Bereitstellung der Web-App zur Verwaltung und Erstellung von Stream-Overlays und Assets.</li>
        <li>Optionale Integrationen (z. B. TikTok-Verknüpfung), sofern verfügbar.</li>
        <li>Optionale KI-Funktionen (z. B. Assistenz/Moderation) abhängig von Verfügbarkeit und Limits.</li>
      </ul>

      <h2>3. Account &amp; Zugang</h2>
      <p>
        Für die Nutzung der App kann ein Account erforderlich sein. Zugangsdaten sind
        vertraulich zu behandeln; missbräuchliche Nutzung ist untersagt.
      </p>

      <h2>4. Preise, Abos, Laufzeit</h2>
      <p>
        Preise und Laufzeiten (z. B. Free/PRO/DayPass) werden in der App bzw. im Checkout
        transparent angezeigt. Abonnements können sich – sofern ausgewählt – automatisch
        verlängern, bis sie gekündigt werden.
      </p>

      <h2>5. Zahlungsabwicklung</h2>
      <p>
        Zahlungen können über Zahlungsdienstleister (z. B. Stripe) abgewickelt werden. Es
        gelten zusätzlich deren Bedingungen.
      </p>

      <h2>6. Nutzungsrechte</h2>
      <p>
        Overlays/Assets dürfen im Rahmen des jeweiligen Plans für eigene Streams genutzt
        werden. Eine Weiterveräußerung, Weitergabe als Template-Pack oder öffentliche
        Verteilung ist ohne ausdrückliche Erlaubnis untersagt.
      </p>

      <h2>7. Verbotene Inhalte &amp; Missbrauch</h2>
      <p>
        Inhalte, die gegen Gesetze oder Plattformrichtlinien verstoßen, sowie missbräuchliche
        Nutzung (z. B. Umgehung von Limits, unerlaubtes Scraping) sind untersagt. Wir können
        bei Verstößen Funktionen einschränken oder Accounts sperren.
      </p>

      <h2>8. Gewährleistung &amp; Haftung</h2>
      <p>
        Es gelten die gesetzlichen Vorschriften. Für leichte Fahrlässigkeit haften wir nur
        bei Verletzung wesentlicher Vertragspflichten und begrenzt auf den typischerweise
        vorhersehbaren Schaden. Eine Haftung für Ausfälle von Drittanbietern/Plattformen
        ist ausgeschlossen, soweit gesetzlich zulässig.
      </p>

      <h2>9. Widerruf</h2>
      <p>
        Verbraucher haben grundsätzlich ein 14-tägiges Widerrufsrecht. Bei digitalen Inhalten
        kann das Widerrufsrecht erlöschen, wenn die Ausführung mit ausdrücklicher Zustimmung
        beginnt und du deine Kenntnis vom Erlöschen bestätigst. Details siehe Widerrufsbelehrung
        in der App.
      </p>

      <h2>10. Schlussbestimmungen</h2>
      <p>
        Es gilt deutsches Recht. Gerichtsstand ist – soweit zulässig – der Sitz des Anbieters.
        Sollten einzelne Bestimmungen unwirksam sein, bleibt der Vertrag im Übrigen wirksam.
      </p>

      <p className="cbw-legal-muted">Stand: 11.01.2026</p>
    </LegalLayout>
  );
}
