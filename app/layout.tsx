import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ratinga — Einfache Tools. Echte Wirkung.",
  description:
    "Ratinga baut Web-Apps, Automations und Open-Source-Projekte – modern, schlank und mit KI im Gepäck.",
  openGraph: {
    title: "Ratinga — Einfache Tools. Echte Wirkung.",
    description:
      "Ratinga baut Web-Apps, Automations und Open-Source-Projekte – modern, schlank und mit KI im Gepäck.",
    url: "https://ratinga.de",
    siteName: "Ratinga",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${geist.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
