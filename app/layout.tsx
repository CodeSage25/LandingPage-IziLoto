// app/layout.tsx
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

/* ═══════════════════════════════════════════
   CONFIGURATION DES FONTS
═══════════════════════════════════════════ */

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

/* ═══════════════════════════════════════════
   MÉTADONNÉES SEO
═══════════════════════════════════════════ */

export const metadata: Metadata = {
  title:
    "IziLoto — Loto 10, Loto 9 & ZeBall | Plateforme de loterie au Cameroun",
  description:
    "Jouez au Loto 10, Loto 9 Express et ZeBall sur IziLoto.cm — la plateforme de loterie en ligne la plus fiable au Cameroun. Paiement via MTN Mobile Money et Orange Money. Licence MINAT 000001.",
  keywords: [
    "loto cameroun",
    "loto en ligne",
    "iziloto",
    "loto 10",
    "loto 9",
    "zeball",
    "loterie cameroun",
    "PMUC",
    "mobile money cameroun",
  ],
  authors: [{ name: "PMUC SA" }],
  icons: {
    icon: [
      {
        url: "/favicon.png",
      },
    ],
  },
  creator: "PMUC SA",
  publisher: "PMUC SA",
  metadataBase: new URL("https://iziloto.cm"),
  openGraph: {
    type: "website",
    locale: "fr_CM",
    url: "https://iziloto.cm",
    siteName: "IziLoto",
    title: "IziLoto — La plateforme de loterie la plus fiable au Cameroun",
    description:
      "Loto 10, Loto 9 Express et ZeBall réunis sur une seule plateforme. Jouez en toute sécurité avec votre Mobile Money.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "IziLoto — Plateforme de loterie au Cameroun",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IziLoto — Loto 10, Loto 9 & ZeBall",
    description:
      "La plateforme de loterie la plus fiable au Cameroun. Jouez maintenant !",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

/* ═══════════════════════════════════════════
   LAYOUT RACINE
═══════════════════════════════════════════ */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-inter antialiased">{children}</body>
    </html>
  );
}
