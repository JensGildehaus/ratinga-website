# Ratinga Website — ratinga.de

> **[RATINGA WEBSITE]** · Status: **Live** · Stack: Next.js 15 · TS · Tailwind · Framer Motion · Resend · Vercel
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
- `/` — Hero · Showcase (Ablesewilli) · Stack · About · Netzwerk · FAQ · Kontakt
- `/impressum` · `/datenschutz` — fertig, DSGVO-konform

## Design-Regeln (aktueller Stand)
- **Stil:** Apple-clean, reines Weiß, keine Hintergrundeffekte (kein Shader, kein Gradient)
- **Logo:** `public/finales Logo.png` · `h-[50px]` in der Nav
- **Foto:** `public/jens.jpg` in der About-Sektion
- **Farben:** Rot `#D12B2B` + Blau `#1B58A8` — sparsam als Akzente
- **Fonts:** Plus Jakarta Sans (Headings) · Geist (Body)
- **Trust-Badges:** Kein Emoji — nur Text
- **Netzwerk-Karte:** Weiß mit grauem Border (nicht schwarz)
- **Name:** Immer **Ratinga AI** — nie nur "Ratinga"
- Keine generischen AI-Aesthetics, kein Marketingsprech

## Kontaktformular / E-Mail-Routing
- Felder: Name, E-Mail, Nachricht + Honeypot
- API Route → **Nodemailer → Strato SMTP** → `kontakt@ratinga.de`
- Kein Resend. SMTP: `smtp.strato.de:465`, Auth via Env-Vars `STRATO_EMAIL` + `STRATO_PASSWORD`
- `replyTo`: E-Mail des Absenders — Antworten gehen direkt an den Nutzer
- Abruf: IMAP `imap.strato.de:993` im Mail-Client
- Keine Auto-Reply an den Absender

## Offene Punkte
- [ ] Resend: DKIM für ratinga.de einrichten
- [ ] OG-Image anlegen
- [ ] `/seo-audit` nach Launch
