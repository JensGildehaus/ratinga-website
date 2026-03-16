"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

const stackRows = [
  { label: "Frontend", value: "Next.js · TypeScript · Tailwind · shadcn/ui" },
  { label: "Daten & Backend", value: "Supabase · PostgreSQL" },
  { label: "Hosting", value: "Vercel · EU-Server · DSGVO-konform" },
  { label: "AI", value: "Claude AI – Coding, Automations & Produktentwicklung" },
];

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "", bot: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (form.bot) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Image src="/logo.png" alt="Ratinga" width={240} height={60} className="h-14 w-auto" priority />
          <nav className="hidden sm:flex items-center gap-8 text-sm text-gray-500">
            <a href="#projekte" className="hover:text-[#0a0a0a] transition-colors">Projekte</a>
            <a href="#stack" className="hover:text-[#0a0a0a] transition-colors">Stack</a>
            <a href="#about" className="hover:text-[#0a0a0a] transition-colors">Über uns</a>
            <a href="#kontakt" className="hover:text-[#0a0a0a] transition-colors">Kontakt</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="pt-40 pb-32 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Einfache Tools.
              <br />
              <span className="text-[#D12B2B]">Echte</span> Wirkung.
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-500 max-w-2xl mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Ratinga baut Web-Apps, Automations und Open-Source-Projekte –
              modern, schlank und mit KI im Gepäck.
            </motion.p>
            <motion.a
              href="#projekte"
              className="inline-flex items-center gap-2 bg-[#0a0a0a] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Projekte entdecken ↓
            </motion.a>
          </div>
        </section>

        {/* PROJEKTE */}
        <section id="projekte" className="py-24 px-6 bg-[#F5F5F7]">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl font-semibold tracking-tight mb-12">Was bisher entstanden ist</h2>
            </FadeUp>
            <div className="grid md:grid-cols-2 gap-6">
              <FadeUp delay={0.1}>
                <a
                  href="https://ablesewilli.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all group"
                >
                  <div className="text-2xl mb-4">🔌</div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#1B58A8] transition-colors">
                    Ablese-Willi
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-6 text-sm">
                    Zählerstände für Strom, Gas & Wasser – einfach erfassen, kostenlos, werbefrei, DSGVO-konform.
                  </p>
                  <span className="text-sm text-[#1B58A8] font-medium">ablesewilli.de →</span>
                </a>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div className="h-full p-8 bg-white rounded-2xl border border-dashed border-gray-200">
                  <div className="text-2xl mb-4">⚙️</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-300">Nächstes Projekt</h3>
                  <p className="text-gray-300 leading-relaxed text-sm mb-6">In Arbeit. Wird gut.</p>
                  <span className="text-sm text-gray-300 font-medium">Coming soon</span>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* STACK */}
        <section id="stack" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl font-semibold tracking-tight mb-3">Stack & Philosophie</h2>
              <p className="text-gray-500 mb-12 text-lg">
                Moderner, schlanker Tech-Stack – KI nicht als Buzzword, sondern als echtes Werkzeug.
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-gray-100">
                <table className="w-full text-sm">
                  <tbody>
                    {stackRows.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5F7]"}>
                        <td className="px-6 py-4 font-medium text-gray-400 w-40 whitespace-nowrap">{row.label}</td>
                        <td className="px-6 py-4 text-[#0a0a0a]">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-8 text-lg font-semibold text-[#D12B2B]">
                Philosophie: Einfach. Schnell. Kein Overengineering.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-24 px-6 bg-[#F5F5F7]">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl font-semibold tracking-tight mb-10">Über Ratinga</h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="max-w-2xl space-y-5 text-gray-600 text-lg leading-relaxed">
                <p>
                  Hinter Ratinga stecke ich –{" "}
                  <strong className="text-[#0a0a0a]">Jens, aus Ratingen</strong>.
                </p>
                <p>
                  Ich baue in meiner Freizeit Tools, die mir selbst fehlen – oder die einfach Spaß machen zu bauen.
                  Mein Werkzeug der Wahl: Claude AI, Next.js und ein gutes Gespür dafür, wann etwas fertig genug ist.
                </p>
                <p>
                  Ratinga ist kein Startup und keine Agentur. Es ist ein laufendes Experiment: Was lässt sich mit
                  modernen Tools und KI-gestütztem Development alleine – oder in loser Kollaboration mit
                  Gleichgesinnten – auf die Beine stellen?
                </p>
                <p className="text-[#0a0a0a] font-semibold">Spoiler: Ziemlich viel.</p>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* NETZWERK */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <div className="p-10 rounded-2xl bg-[#0a0a0a] text-white">
                <h2 className="text-2xl font-semibold mb-3">Netzwerk</h2>
                <p className="text-gray-400 leading-relaxed mb-6 max-w-xl">
                  Ratinga arbeitet gelegentlich mit anderen unabhängigen Entwicklern und Machern zusammen –
                  lose, projektbasiert, auf Augenhöhe.
                </p>
                <p className="text-white">
                  Du baust ähnliche Dinge? Meld dich gern.{" "}
                  <a href="#kontakt" className="text-[#6B9FE4] hover:text-white transition-colors font-medium">
                    → zum Kontaktformular
                  </a>
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* KONTAKT */}
        <section id="kontakt" className="py-24 px-6 bg-[#F5F5F7]">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl font-semibold tracking-tight mb-3">Kontakt</h2>
              <p className="text-gray-500 mb-10">Schreib mir. Ich antworte, wenn ich Zeit hab.</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
                <input
                  type="text"
                  name="bot"
                  value={form.bot}
                  onChange={(e) => setForm((p) => ({ ...p, bot: e.target.value }))}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <div>
                  <label className="block text-sm font-medium mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B58A8] transition"
                    placeholder="Dein Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">E-Mail</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B58A8] transition"
                    placeholder="du@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Nachricht</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B58A8] transition resize-none"
                    placeholder="Was liegt an?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full bg-[#0a0a0a] text-white py-3.5 rounded-xl text-sm font-medium hover:bg-gray-800 disabled:opacity-50 transition-colors cursor-pointer"
                >
                  {status === "loading" ? "Wird gesendet…" : status === "success" ? "Gesendet ✓" : "Nachricht senden"}
                </button>
                {status === "success" && (
                  <p className="text-sm text-green-600">Danke – ich melde mich!</p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Etwas ist schiefgelaufen. Versuchs nochmal oder schreib direkt an{" "}
                    <a href="mailto:kontakt@ratinga.de" className="underline">kontakt@ratinga.de</a>
                  </p>
                )}
              </form>
            </FadeUp>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="py-10 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span>Ratinga – Built with AI. Made to work.</span>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-[#0a0a0a] transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-[#0a0a0a] transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
