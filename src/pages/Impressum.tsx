import LegalLayout from "./LegalLayout";

export default function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <p>
        Angaben gemäß § 5 DDG sowie Verantwortlicher nach § 18 Abs. 2 MStV
        (soweit einschlägig).
      </p>

      <h2>Diensteanbieter</h2>
      <p>
        Rene Quilitzsch
        <br />
        Langestraße 92
        <br />
        19230 Hagenow
        <br />
        Deutschland
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail:{" "}
        <a href="mailto:clip-boost.online@outlook.de">clip-boost.online@outlook.de</a>
      </p>

      <h2>Umsatzsteuer</h2>
      <p>USt-IdNr.: nicht vorhanden.</p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den
        allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
        Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
      </p>

      <h2>Haftung für Links</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
        keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
        Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
        Anbieter oder Betreiber der Seiten verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
        unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche
        gekennzeichnet.
      </p>

      <h2>Streitbeilegung</h2>
      <p>
        Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor
        einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
      <p>
        Hinweis: Die EU-Plattform zur Online-Streitbeilegung (ODR) wurde eingestellt;
        daher wird kein ODR-Link bereitgestellt.
      </p>

      <p className="cbw-legal-muted">Stand: 11.01.2026</p>
    </LegalLayout>
  );
}
