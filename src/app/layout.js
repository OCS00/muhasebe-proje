import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import { Analytics } from "@vercel/analytics/next";
import CookieConsent from "@/components/CookieConsent";
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.url || "https://smmmyavuzsahin.com"),

  title: {
    template: `%s | ${siteConfig.name} SMMM`,
    default: `${siteConfig.name} | Mali Müşavirlik & Danışmanlık – Mersin`,
  },
  description: siteConfig.description,
  keywords: [
    "Mali Müşavir Mersin",
    "SMMM Mersin",
    "Yavuz Şahin Mali Müşavir",
    "Vergi Danışmanlığı Mersin",
    "Muhasebe Ofisi Mersin",
    "Şirket Kuruluşu Mersin",
    "KDV İadesi",
    "SGK Danışmanlığı",
    "E-Fatura",
    "Finansal Raporlama",
    "Bordrolama",
    "Akdeniz Mersin Muhasebe",
  ],

  openGraph: {
    title: `${siteConfig.name} | Profesyonel Mali Çözümler – Mersin`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.name} SMMM`,
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/smmm-logo.png`,
        width: 400,
        height: 400,
        alt: `${siteConfig.name} SMMM Logo`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Mali Müşavirlik – Mersin`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/smmm-logo.png`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: siteConfig.url,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": `${siteConfig.name} SMMM`,
  "image": `${siteConfig.url}/smmm-logo.png`,
  "description": siteConfig.description,
  "url": siteConfig.url,
  "telephone": siteConfig.phone,
  "email": siteConfig.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "İhsaniye Mah. Bahçeler Cad No:22 Ofis Royal İş Merkezi Kat:10/122",
    "addressLocality": "Akdeniz",
    "addressRegion": "Mersin",
    "postalCode": "33000",
    "addressCountry": "TR",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "36.8000",
    "longitude": "34.6333",
  },
  "areaServed": {
    "@type": "City",
    "name": "Mersin",
  },
  "priceRange": "₺₺",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:30",
      "closes": "18:00",
    },
  ],
  "sameAs": [
    siteConfig.links?.linkedin,
    siteConfig.links?.twitter,
  ].filter(Boolean),
  "knowsAbout": [
    "Vergi Danışmanlığı",
    "Şirket Kuruluşu",
    "Muhasebe",
    "SGK",
    "E-Dönüşüm",
    "KDV İadesi",
    "Bordrolama",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="scroll-smooth scroll-pt-28">
      <body
        className={`
          ${inter.variable}
          font-sans
          antialiased
          text-slate-900
          bg-white
          min-h-screen
          flex
          flex-col
          selection:bg-blue-600 selection:text-white
          w-full
          overflow-x-hidden
        `}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <header className="relative z-[100] w-full">
          <Navbar />
        </header>

        <main className="flex-grow relative z-10 w-full max-w-[100vw] overflow-x-hidden">
          {children}
        </main>

        <footer className="relative z-10 w-full">
          <Footer />
        </footer>

        <div className="relative z-[101]">
          <WhatsAppBtn />
        </div>

        <Analytics />
        <CookieConsent />
      </body>
    </html>
  );
}
