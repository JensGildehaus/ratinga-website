"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
    q: "Was ist Ratinga AI genau?",
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

// ─── Mobile Nav ──────────────────────────────────────────────────────────────

const navLinks = [
  { href: "#showcase", label: "Projekte" },
  { href: "#about", label: "Über mich" },
  { href: "#kontakt", label: "Kontakt" },
];

function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/finales Logo.png"
            alt="Ratinga AI"
            width={400}
            height={100}
            className="h-[50px] w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-gray-500">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#0a0a0a] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          type="button"
          className="sm:hidden flex flex-col gap-1.5 p-3 -mr-2 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
          aria-expanded={open}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-0.5 bg-[#0a0a0a] origin-center"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="block w-6 h-0.5 bg-[#0a0a0a]"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-0.5 bg-[#0a0a0a] origin-center"
          />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="sm:hidden overflow-hidden border-t border-gray-100 bg-white/95 backdrop-blur-md"
          >
            <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="py-3 text-lg font-medium text-[#0a0a0a] border-b border-gray-50 last:border-0 hover:text-[#D12B2B] transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
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
  { label: "DSGVO-konform" },
  { label: "Keine Cookies" },
  { label: "EU-Server" },
  { label: "Kostenlos" },
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
      <MobileNav />

      <main>

        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section className="relative pt-40 pb-28 px-6 overflow-hidden">
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
              Ratinga AI baut Web-Apps, Automations und{" "}
              <span className="whitespace-nowrap">Open-Source-Projekte</span> –
              modern, schlank und mit KI im Gepäck.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <a
                href="#showcase"
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
                  {b.label}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── PRODUCT SHOWCASE ────────────────────────────────────────────── */}
        <section id="showcase" className="py-24 px-6 bg-[#F5F5F7] overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <FadeUp className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-[#1B58A8] mb-4">
                  Aktuell (in Arbeit)
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
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B58A8] hover:underline mb-8 block"
                >
                  ablesewilli.de →
                </a>
                {/* Stack */}
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="w-full text-xs">
                    <tbody>
                      {stackRows.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F5F5F7]"}>
                          <td className="px-4 py-3 font-semibold text-gray-400 w-28 whitespace-nowrap">{row.label}</td>
                          <td className="px-4 py-3 text-[#0a0a0a]">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
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

        {/* ── ABOUT ───────────────────────────────────────────────────────── */}
        <section id="about" className="py-24 px-6 bg-[#F5F5F7]">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <h2 className="text-3xl font-bold tracking-tight mb-10">Über Ratinga AI</h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-shrink-0">
                  <Image
                    src="/jens.jpg"
                    alt="Jens Gildehaus"
                    width={200}
                    height={200}
                    className="w-40 h-40 rounded-2xl object-cover object-[center_15%]"
                  />
                </div>
                <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Hinter Ratinga AI stecke ich –{" "}
                    <strong className="text-[#0a0a0a]">Jens, aus Ratingen</strong>.
                  </p>
                  <p>
                    Ich baue in meiner Freizeit Tools, die mir selbst fehlen – oder die einfach Spaß machen
                    zu bauen. Mein Werkzeug der Wahl: Claude AI, Next.js und ein gutes Gespür dafür, wann
                    etwas fertig genug ist.
                  </p>
                  <p>
                    Ratinga AI ist kein Startup und keine Agentur. Es ist ein laufendes Experiment: Was lässt
                    sich mit modernen Tools und KI-gestütztem Development alleine – oder in loser
                    Kollaboration mit Gleichgesinnten – auf die Beine stellen?
                  </p>
                  <p className="text-[#0a0a0a] font-bold">Spoiler: Ziemlich viel.</p>
                <p className="text-[#D12B2B] font-bold pt-2">Philosophie: Einfach. Schnell. Kein Overengineering.</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── NETZWERK ────────────────────────────────────────────────────── */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <div className="p-10 rounded-2xl border border-gray-100 bg-white">
                <h2 className="text-2xl font-bold mb-3">Netzwerk</h2>
                <p className="text-gray-500 leading-relaxed mb-6 max-w-xl">
                  Ratinga AI arbeitet gelegentlich mit anderen unabhängigen Entwicklern und Machern zusammen –
                  lose, projektbasiert, auf Augenhöhe.
                </p>
                <p className="text-gray-500">
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


      </main>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="py-10 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span>Ratinga AI – Built with AI. Made to work.</span>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-[#0a0a0a] transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-[#0a0a0a] transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
