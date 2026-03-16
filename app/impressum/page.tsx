import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – Ratinga AI",
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]">
      <header className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">
            ← Zurück
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-16 space-y-10">
        <h1 className="text-4xl font-semibold tracking-tight">Impressum</h1>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Angaben gemäß § 5 TMG
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Ratinga AI<br />
            Jens Gildehaus<br />
            Schleiferstr. 6<br />
            40878 Ratingen
          </p>
        </section>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Kontakt
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Telefon: +49 2102 1016974<br />
            E-Mail:{" "}
            <a href="mailto:kontakt@ratinga.de" className="text-[#1B58A8] hover:underline">
              kontakt@ratinga.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Haftung für Inhalte
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
            zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </section>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Haftung für Links
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Urheberrecht
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Streitschlichtung
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1B58A8] hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>
      </main>
    </div>
  );
}
