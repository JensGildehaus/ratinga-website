# Ratinga Website — ratinga.de

> **[RATINGA WEBSITE]** · Status: **Live** · Stack: Next.js 15 · TS · Tailwind · Framer Motion · Nodemailer · Vercel
> Relevant: ratinga.de Design/Code/Texte/Recht · Nicht relevant: Ablesewilli-Code, Server, Brainstorming

## Kurzreferenz
| | |
|---|---|
| **Betreiber** | Jens Gildehaus, Schleiferstr. 6, 40878 Ratingen |
| **Kontakt** | kontakt@ratinga.de · +49 2102 1016974 |
| **Domain** | ratinga.de (Strato, seit 15.03.2026) |
| **Hosting** | Vercel · GitHub: JensGildehaus/ratinga-website |
| **Rechtsstatus** | Kleinunternehmer / Einzelperson |

## Seitenstruktur
- `/` — Hero · Showcase (ablesewilli + Stack) · Über mich · Netzwerk · FAQ · Kontakt
- `/impressum` · `/datenschutz` — fertig, DSGVO-konform
- Sektionen alternieren: Hero(w) · Showcase(g) · Über mich(w) · Netzwerk(g) · FAQ(w) · Kontakt(g)

## Design-Regeln (aktueller Stand)
- **Claim:** `built with AI. made to work.` — immer lowercase, "AI." in Rot #D12B2B
- **Stil:** Apple-clean, reines Weiß, keine Hintergrundeffekte
- **Logo:** `public/finales Logo.png` · `h-[50px]` · Link zur Startseite
- **Favicon:** `app/icon.png` (Löwenkopf, aus Logo extrahiert)
- **Foto:** `public/jens.jpg` in Über-mich-Sektion
- **Farben:** Rot `#D12B2B` + Blau `#1B58A8` — sparsam als Akzente
- **Fonts:** Plus Jakarta Sans (Headings) · Geist (Body)
- **Produktname:** immer **ablesewilli** — klein, zusammen, kein Bindestrich
- **Markenname:** immer **Ratinga AI** — nie nur "Ratinga"
- Trust-Badges ohne Emoji · Netzwerk-Karte weiß mit Border
- Mobile: Hamburger-Menü (Framer Motion Slide-down)

## Kontaktformular / E-Mail-Routing
- API Route → **Nodemailer → Strato SMTP** → `kontakt@ratinga.de`
- SMTP: `smtp.strato.de:465` · Env-Vars: `STRATO_EMAIL` + `STRATO_PASSWORD` (in Vercel gesetzt)
- `replyTo`: E-Mail des Absenders
- Abruf: IMAP `imap.strato.de:993` — auf Jens' Handy eingerichtet
- Kein Resend, keine Auto-Reply

## Offene Punkte
- [ ] OG-Image anlegen
- [ ] `/seo-audit` nach Launch
