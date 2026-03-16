import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ratinga.de"),
  title: "Ratinga AI — built with AI. made to work.",
  description:
    "Ratinga AI baut Web-Apps, Automations und Open-Source-Projekte – modern, schlank und mit KI im Gepäck.",
  keywords: ["Ratinga AI", "Web-Apps", "Tools", "Next.js", "ablesewilli", "KI", "Open Source"],
  openGraph: {
    title: "Ratinga AI — built with AI. made to work.",
    description:
      "Ratinga AI baut Web-Apps, Automations und Open-Source-Projekte – modern, schlank und mit KI im Gepäck.",
    url: "https://ratinga.de",
    siteName: "Ratinga AI",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ratinga AI — built with AI. made to work.",
    description:
      "Ratinga AI baut Web-Apps, Automations und Open-Source-Projekte – modern, schlank und mit KI im Gepäck.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${plusJakarta.variable} ${geist.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
