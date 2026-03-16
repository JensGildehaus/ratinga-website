"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MeshGradientBg } from "@/components/ui/mesh-gradient";

// ─── Animation helper ───────────────────────────────────────────────────────

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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── FAQ Accordion ───────────────────────────────────────────────────────────

const faqs = [
  {
    q: "Was ist Ratinga genau?",
    a: "Ein laufendes Experiment: Kann eine Privatperson mit modernen Tools und KI-gestütztem Development Produkte bauen, die sich anfühlen wie von einem ganzen Team? Bisher: ja.",
  },
  {
    q: "Kosten die Tools etwas?",
    a: "Ablesewilli ist kostenlos und werbefrei. So soll es bleiben. Zukünftige Projekte entscheiden je nach Aufwand.",
  },
  {
    q: "Wie oft kommen neue Projekte?",
    a: "Kein Veröffentlichungszeitplan. Fertig wenn fertig. Qualität schlägt Geschwindigkeit.",
  },
  {
    q: "Kann ich mitbauen oder mitarbeiten?",
    a: "Ja. Lose, projektbasiert, auf Augenhöhe. Einfach über das Kontaktformular melden.",
  },
  {
    q: "Welche Daten werden gesammelt?",
    a: "So wenig wie möglich. Keine Cookies, kein Tracking, keine Analytics. Datenschutz ist kein Feature — es ist Standard.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex justify-between items-start gap-6 group"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#0a0a0a] group-hover:text-[#1B58A8] transition-colors leading-snug">
          {question}
        </span>
        <span
          className={`text-gray-400 text-xl leading-none mt-0.5 transition-transform duration-300 flex-shrink-0 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-500 text-sm leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Stack data ──────────────────────────────────────────────────────────────

const stackRows = [
  { label: "Frontend", value: "Next.js · TypeScript · Tailwind · shadcn/ui" },
  { label: "Daten & Backend", value: "Supabase · PostgreSQL" },
  { label: "Hosting", value: "Vercel · EU-Server · DSGVO-konform" },
  { label: "AI", value: "Claude AI – Coding, Automations & Produktentwicklung" },
];

const trustBadges = [
  { icon: "🔒", label: "DSGVO-konform" },
  { icon: "🚫", label: "Keine Cookies" },
  { icon: "☁️", label: "EU-Server" },
  { icon: "💸", label: "Kostenlos" },
];

// ─── Page ────────────────────────────────────────────────────────────────────

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

      {/* ── NAV ─────────────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="Ratinga"
            width={300}
            height={80}
            className="h-16 w-auto"
            priority
          />
          <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-gray-500">
            <a href="#projekte" className="hover:text-[#0a0a0a] transition-colors">Projekte</a>
            <a href="#stack" className="hover:text-[#0a0a0a] transition-colors">Stack</a>
            <a href="#about" className="hover:text-[#0a0a0a] transition-colors">Über uns</a>
            <a href="#kontakt" className="hover:text-[#0a0a0a] transition-colors">Kontakt</a>
          </nav>
        </div>
      </header>

      <main>

        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section className="relative pt-48 pb-24 px-6 overflow-hidden">
          <div className="absolute inset-0">
            <MeshGradientBg />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6"
              style={{ fontFamily: "var(--font-jakarta)" }}
              initial={{ opacity: 0, y: 36 }}
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <a
                href="#projekte"
                className="inline-flex items-center gap-2 bg-[#0a0a0a] text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#D12B2B] transition-colors duration-300"
              >
                Projekte entdecken <span className="text-base">↓</span>
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap gap-3 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              {trustBadges.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-1.5 bg-[#F5F5F7] text-gray-600 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {b.icon} {b.label}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── PRODUCT SHOWCASE ────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-[#F5F5F7] overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <FadeUp className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-[#1B58A8] mb-4">
                  Aktuell live
                </p>
                <h2 className="text-3xl font-bold tracking-tight mb-4">
                  Ablese-Willi
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Strom, Gas und Wasser — monatlich ablesen, Kosten im Blick
                  behalten, Jahresabrechnung verstehen. Kostenlos, werbefrei,
                  ohne Account-Pflicht bei Dritten.
                </p>
                <a
                  href="https://ablesewilli.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B58A8] hover:underline"
                >
                  ablesewilli.de →
                </a>
              </FadeUp>

              {/* Phone mockup */}
              <FadeUp delay={0.15} className="flex-shrink-0">
                <motion.div
                  className="relative"
                  initial={{ rotate: 2 }}
                  whileInView={{ rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  {/* Phone frame */}
                  <div className="w-56 bg-[#0a0a0a] rounded-[44px] p-2.5 shadow-2xl shadow-black/30">
                    {/* Screen */}
                    <div className="bg-white rounded-[36px] overflow-hidden">
                      {/* Header */}
                      <div className="bg-[#1B58A8] px-5 pt-8 pb-5 text-white">
                        <p className="text-[10px] opacity-60 font-medium mb-0.5">Ablesewilli</p>
                        <p className="text-lg font-bold">März 2026</p>
                        <p className="text-[10px] opacity-60 mt-1">Haushalt · 2 Personen</p>
                      </div>
                      {/* Meter cards */}
                      <div className="p-3 space-y-2 bg-[#F5F5F7]">
                        {[
                          { icon: "⚡", label: "Strom", value: "234 kWh", sub: "↓ 12% vs. Vormonat", color: "#D12B2B" },
                          { icon: "🔥", label: "Gas", value: "89 m³", sub: "↑ 3% vs. Vormonat", color: "#1B58A8" },
                          { icon: "💧", label: "Wasser", value: "3,4 m³", sub: "= Vormonat", color: "#0891b2" },
                        ].map((item) => (
                          <div key={item.label} className="flex items-center gap-2.5 p-2.5 bg-white rounded-xl shadow-sm">
                            <span className="text-lg">{item.icon}</span>
                            <div className="flex-1 min-w-0">
                              <p className="text-[10px] text-gray-400 font-medium">{item.label}</p>
                              <p className="text-sm font-bold" style={{ color: item.color }}>{item.value}</p>
                              <p className="text-[9px] text-gray-400">{item.sub}</p>
                            </div>
                          </div>
                        ))}
                        {/* CTA button */}
                        <div className="pt-1 pb-2">
                          <div className="w-full bg-[#1B58A8] rounded-xl py-2 text-center">
                            <p className="text-[10px] font-bold text-white">+ Ablesung eintragen</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Glow */}
                  <div className="absolute -inset-4 bg-[#1B58A8]/10 rounded-[60px] blur-2xl -z-10" />
                </motion.div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── PROJEKTE ────────────────────────────────────────────────────── */}
        <section id="projekte" className="py-24 px-6 bg-[#F5F5F7]">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl font-bold tracking-tight mb-3">Was bisher entstanden ist</h2>
              <p className="text-gray-500 mb-12">Wenige Projekte. Dafür mit Haltung.</p>
            </FadeUp>
            <div className="grid md:grid-cols-2 gap-6">
              <FadeUp delay={0.1}>
                <a
                  href="https://ablesewilli.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col h-full p-8 bg-white rounded-2xl border border-gray-100 hover:border-[#1B58A8]/30 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="text-3xl mb-5">🔌</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#1B58A8] transition-colors">
                    Ablese-Willi
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm flex-1 mb-6">
                    Zählerstände für Strom, Gas & Wasser – einfach erfassen,
                    kostenlos, werbefrei, DSGVO-konform.
                  </p>
                  <span className="text-sm text-[#1B58A8] font-semibold group-hover:underline">
                    ablesewilli.de →
                  </span>
                </a>
              </FadeUp>
              <FadeUp delay={0.2}>
                <div className="flex flex-col h-full p-8 bg-white rounded-2xl border border-dashed border-gray-200 opacity-60">
                  <div className="text-3xl mb-5">⚙️</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-400">Nächstes Projekt</h3>
                  <p className="text-gray-400 leading-relaxed text-sm flex-1 mb-6">In Arbeit. Wird gut.</p>
                  <span className="text-sm text-gray-300 font-semibold">Coming soon</span>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── STACK ───────────────────────────────────────────────────────── */}
        <section id="stack" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl font-bold tracking-tight mb-3">Stack & Philosophie</h2>
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
                        <td className="px-6 py-4 font-semibold text-gray-400 w-36 whitespace-nowrap">{row.label}</td>
                        <td className="px-6 py-4 text-[#0a0a0a]">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-8 text-xl font-bold text-[#D12B2B]">
                Philosophie: Einfach. Schnell. Kein Overengineering.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── ABOUT ───────────────────────────────────────────────────────── */}
        <section id="about" className="py-24 px-6 bg-[#F5F5F7]">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl font-bold tracking-tight mb-10">Über Ratinga</h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="max-w-2xl space-y-5 text-gray-600 text-lg leading-relaxed">
                <p>
                  Hinter Ratinga stecke ich –{" "}
                  <strong className="text-[#0a0a0a]">Jens, aus Ratingen</strong>.
                </p>
                <p>
                  Ich baue in meiner Freizeit Tools, die mir selbst fehlen – oder die einfach Spaß machen
                  zu bauen. Mein Werkzeug der Wahl: Claude AI, Next.js und ein gutes Gespür dafür, wann
                  etwas fertig genug ist.
                </p>
                <p>
                  Ratinga ist kein Startup und keine Agentur. Es ist ein laufendes Experiment: Was lässt
                  sich mit modernen Tools und KI-gestütztem Development alleine – oder in loser
                  Kollaboration mit Gleichgesinnten – auf die Beine stellen?
                </p>
                <p className="text-[#0a0a0a] font-bold">Spoiler: Ziemlich viel.</p>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── NETZWERK ────────────────────────────────────────────────────── */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <div className="p-10 rounded-2xl bg-[#0a0a0a] text-white">
                <h2 className="text-2xl font-bold mb-3">Netzwerk</h2>
                <p className="text-gray-400 leading-relaxed mb-6 max-w-xl">
                  Ratinga arbeitet gelegentlich mit anderen unabhängigen Entwicklern und Machern zusammen –
                  lose, projektbasiert, auf Augenhöhe.
                </p>
                <p className="text-gray-400">
                  Du baust ähnliche Dinge? Meld dich gern.
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <section className="py-24 px-6 bg-[#F5F5F7]">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl font-bold tracking-tight mb-3">Häufige Fragen</h2>
              <p className="text-gray-500 mb-12">Die kurzen Antworten auf die naheliegenden Fragen.</p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="max-w-2xl bg-white rounded-2xl px-8 divide-y divide-gray-100 border border-gray-100">
                {faqs.map((faq) => (
                  <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── KONTAKT ─────────────────────────────────────────────────────── */}
        <section id="kontakt" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl font-bold tracking-tight mb-3">Kontakt</h2>
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
                  <label className="block text-sm font-semibold mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    className="w-full px-4 py-3 bg-[#F5F5F7] border border-transparent rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B58A8] focus:bg-white transition"
                    placeholder="Dein Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5">E-Mail</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-3 bg-[#F5F5F7] border border-transparent rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B58A8] focus:bg-white transition"
                    placeholder="du@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5">Nachricht</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    className="w-full px-4 py-3 bg-[#F5F5F7] border border-transparent rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1B58A8] focus:bg-white transition resize-none"
                    placeholder="Was liegt an?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="w-full bg-[#0a0a0a] text-white py-4 rounded-xl text-sm font-semibold hover:bg-[#D12B2B] disabled:opacity-50 transition-colors duration-300 cursor-pointer"
                >
                  {status === "loading"
                    ? "Wird gesendet…"
                    : status === "success"
                    ? "Gesendet ✓"
                    : "Nachricht senden"}
                </button>
                {status === "success" && (
                  <p className="text-sm text-green-600 font-medium">Danke – ich melde mich!</p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Etwas ist schiefgelaufen. Schreib direkt an{" "}
                    <a href="mailto:kontakt@ratinga.de" className="underline">kontakt@ratinga.de</a>
                  </p>
                )}
              </form>
            </FadeUp>
          </div>
        </section>

        {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
        <section className="py-32 px-6 bg-[#0a0a0a] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <h2
                className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
                style={{ fontFamily: "var(--font-jakarta)" }}
              >
                Neugierig geworden?
              </h2>
              <p className="text-gray-400 text-xl mb-10 max-w-xl mx-auto leading-relaxed">
                Schreib mir — oder schau dir Ablesewilli an. Kostenlos, werbefrei, DSGVO-konform.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://ablesewilli.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#D12B2B] text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors duration-300"
                >
                  Ablesewilli testen →
                </a>
              </div>
            </FadeUp>
          </div>
        </section>

      </main>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
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
