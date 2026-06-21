import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "./components/Navbar";
import GoogleAnalytics from "./components/GoogleAnalytics";
import CookieConsent from "./components/CookieConsent";
import StructuredData from "./components/StructuredData";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Atalay Turizm | Bursa Personel ve Öğrenci Taşımacılığı",
    template: "%s | Atalay Turizm",
  },
  description:
    "Atalay Turizm; Bursa merkezli personel taşımacılığı, öğrenci servisi, kurumsal servis hizmetleri, tur organizasyonları ve özel ulaşım çözümleri alanlarında profesyonel hizmet sunmaktadır.",
  keywords: [
    "Atalay Turizm",
    "Bursa personel taşımacılığı",
    "Bursa öğrenci servisi",
    "Bursa kurumsal servis",
    "Bursa servis taşımacılığı",
    "Bursa personel servisi",
    "Bursa tur taşımacılığı",
    "organizasyon taşımacılığı",
  ],
  authors: [{ name: "Atalay Turizm" }],
  creator: "Atalay Turizm",
  publisher: "Atalay Turizm",
  metadataBase: new URL("https://www.atalaytur.com"),

  icons: {
    icon: "/atalay-logo.png",
    shortcut: "/atalay-logo.png",
    apple: "/atalay-logo.png",
  },

  openGraph: {
    title: "Atalay Turizm | Bursa Personel ve Öğrenci Taşımacılığı",
    description:
      "Bursa merkezli personel taşımacılığı, öğrenci servisi, kurumsal servis hizmetleri, tur organizasyonları ve özel ulaşım çözümleri.",
    url: "https://www.atalaytur.com",
    siteName: "Atalay Turizm",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/images/publicog-image.png",
        width: 1200,
        height: 630,
        alt: "Atalay Turizm Bursa Ulaşım Çözümleri",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Atalay Turizm | Bursa Personel ve Öğrenci Taşımacılığı",
    description:
      "Bursa merkezli personel taşımacılığı, öğrenci servisi, kurumsal servis hizmetleri, tur organizasyonları ve özel ulaşım çözümleri.",
    images: ["/images/publicog-image.png"],
  },

  alternates: {
    canonical: "https://www.atalaytur.com",
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        {children}
        <StructuredData />
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
