# Ratinga Website — ratinga.de

> **[RATINGA WEBSITE]** · Landingpage · Status: in Planung, Domain seit 15.03.2026 aktiv
> Relevant wenn: Arbeit an ratinga.de — Design, Code, Texte, Recht
> Nicht relevant wenn: Ablesewilli-App-Code, Server-Kram, Brainstorming-Phase
> Stack: Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · Resend · Vercel
> Skills: landing-page-guide-v2 · phase-3-mockup · frontend-design · ui-ux-pro-max · legal-impressum · seo-audit

## Ziel der Website
Corporate/Brand-Seite für **Ratinga AI** (offizieller Name: Ratinga AI) — die Firma hinter Ablesewilli und künftigen Produkten.

**Zielgruppe:**
1. Neugierige die Ablesewilli entdeckt haben → kurz erklären wer/was Ratinga ist, Vertrauen aufbauen, weiterleiten
2. Gleichgesinnte / potenzielle Kollaborateure → locker, auf Augenhöhe ansprechen

**Gewünschter Eindruck:** "Wie kann eine Privatperson das als Hobby neben dem Job machen?" — Qualität und technische Reife signalisieren ohne Agentur-Gepose.

**Seitenstruktur — One-Pager:**
- `/` — Hero · Projekte · Stack/Philosophie · About · Netzwerk · Kontaktformular
- `/impressum` — Pflichtangaben nach TMG/DSGVO
- `/datenschutz` — DSGVO-konforme Datenschutzerklärung

## Firma / Rechtliches
- **Betreiber:** Jens Gildehaus, Schleiferstr. 6, 40878 Ratingen
- **Domain:** `ratinga.de` (bei Strato registriert, seit 15.03.2026 aktiv)
- **Kontakt-E-Mail:** `kontakt@ratinga.de`
- **Telefon:** `+49 2102 1016974` (Festnetz, gemäß ISO 5008)
- **Hosting:** Vercel
- Kein eingetragenes Unternehmen (Kleinunternehmer / Einzelperson) — Impressum entsprechend einfach halten

## Infrastruktur
- **Hosting:** Vercel (GitHub-Deploy, wie Ablesewilli)
- **E-Mail-Versand:** Resend mit Domain `ratinga.de` (DKIM einrichten!)
- **GitHub:** JensGildehaus/ratinga-website (noch anzulegen)
- **Domain:** Strato → DNS auf Vercel zeigen

## Tech Stack
- Next.js 15 + TypeScript + Tailwind CSS
- shadcn/ui für UI-Komponenten
- Framer Motion für Animationen
- Resend für Kontaktformular-E-Mails
- Kein CMS nötig (statischer Content)
- Kein Supabase nötig (kein Login, keine DB)

## Kontaktformular
- Felder: Name, E-Mail, Nachricht
- Submit → API Route → Resend → `kontakt@ratinga.de`
- Spam-Schutz: Honeypot oder einfaches Rate-Limiting
- Bestätigungsmeldung nach Absenden (kein separates E-Mail an Absender nötig)

## Design-Regeln
- **Stil:** Apple-clean — viel Weißraum, große selbstbewusste Typografie, subtile Animationen
- Keine generischen AI-Aesthetics — kein Hype-Glitter
- Stack sichtbar machen — das ist der Qualitätsbeweis
- Mobile-first
- **Logo:** `Logo 2 Ratinga.png` aus Ablesewilli/public (transparenter Hintergrund, fertig)
- **Farben:** Rot + Blau aus dem Logo als Akzentfarben in Typografie/UI — sparsam, ausgewogen, kein Kunterbunt
- Nutze `/landing-page-guide-v2` für Landingpage-Struktur
- Nutze `/phase-3-mockup` für visuelle Mockups
- Nutze `/frontend-design` für UI-Entscheidungen
- Nutze `/ui-ux-pro-max` für Design-System

## SEO / Meta
- Title: "Ratinga AI — Smarte Tools für den Alltag" (oder ähnlich, klären)
- Description: kurz, ehrlich, kein Bullshit-Marketingsprech
- OG-Image anlegen
- `/seo-audit` nach Launch

## Offene Fragen / To-do
- [ ] GitHub Repo anlegen: `JensGildehaus/ratinga-website`
- [ ] Vercel Projekt anlegen + Domain verknüpfen
- [ ] Resend: DKIM für ratinga.de einrichten
- [ ] Postfach `kontakt@ratinga.de` bei Strato aktivieren
- [ ] Design-Interview mit Jens führen (AskUserQuestion)
- [ ] Impressum-Text finalisieren
- [ ] Datenschutztext für statische Seite + Kontaktformular

## Verwandte Ordner
- `../Brainstorming/` — Strategie und Markenentwicklung
- `../Ablesewilli/` — erstes Produkt, Tech-Referenz
