import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz – Ratinga",
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]">
      <header className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="text-sm text-gray-500 hover:text-[#0a0a0a] transition-colors">
            ← Zurück zur Startseite
          </Link>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-16 space-y-10">
        <h1 className="text-2xl md:text-4xl font-semibold tracking-tight hyphens-auto">Datenschutzerklärung</h1>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            1. Verantwortlicher
          </h2>
          <p className="text-gray-700 leading-relaxed text-sm">
            Ratinga AI · Jens Gildehaus<br />
            Schleiferstr. 6, 40878 Ratingen<br />
            E-Mail:{" "}
            <a href="mailto:kontakt@ratinga.de" className="text-[#1B58A8] hover:underline">
              kontakt@ratinga.de
            </a>
            <br />
            Telefon: +49 2102 1016974
          </p>
        </section>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            2. Hosting
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Diese Website wird bei <strong className="text-[#0a0a0a]">Vercel Inc.</strong> (USA) gehostet. Vercel verarbeitet beim Aufruf der Website automatisch
            Verbindungsdaten (IP-Adresse, Browser, Zeitstempel). Die Datenübertragung erfolgt auf Basis der
            EU-Standardvertragsklauseln. Weitere Informationen:{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1B58A8] hover:underline"
            >
              vercel.com/legal/privacy-policy
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            3. Kontaktformular
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Wenn du das Kontaktformular nutzt, werden folgende Daten erhoben: Name, E-Mail-Adresse und
            Nachrichtentext. Diese Daten werden ausschließlich zur Bearbeitung deiner Anfrage verwendet und nicht
            an Dritte weitergegeben.
            <br />
            <br />
            Der Versand erfolgt über <strong className="text-[#0a0a0a]">Resend</strong> (Resend Inc., USA). Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
            (Vertragsanbahnung / berechtigtes Interesse). Die Daten werden nach Abschluss der Kommunikation
            gelöscht, sofern keine gesetzliche Aufbewahrungspflicht besteht.
          </p>
        </section>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            4. Cookies & Tracking
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Diese Website verwendet keine Cookies und kein Tracking. Es werden keine Analyse-Tools,
            Werbenetzwerke oder Social-Media-Plugins eingesetzt.
          </p>
        </section>

        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            5. Deine Rechte
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und
            Datenübertragbarkeit. Wende dich dazu an{" "}
            <a href="mailto:kontakt@ratinga.de" className="text-[#1B58A8] hover:underline">
              kontakt@ratinga.de
            </a>
            .<br />
            <br />
            Außerdem hast du das Recht, dich bei der zuständigen Aufsichtsbehörde zu beschweren. In NRW:{" "}
            <a
              href="https://www.ldi.nrw.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1B58A8] hover:underline"
            >
              Landesbeauftragte für Datenschutz und Informationsfreiheit NRW
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
