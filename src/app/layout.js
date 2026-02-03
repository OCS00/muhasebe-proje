import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import { siteConfig } from "@/data/siteConfig";

// 1. FONT AYARI
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 2. SEO VE METADATA AYARLARI
export const metadata = {
  metadataBase: new URL(siteConfig.url || "https://smmmyavuzsahin.com"), 
  
  title: {
    template: `%s | ${siteConfig.name}`,
    default: `${siteConfig.name} | Mali Müşavirlik & Danışmanlık`,
  },
  description: siteConfig.description,
  keywords: ["Mali Müşavir", "Mersin Muhasebe", "Yavuz Şahin", "Vergi Danışmanlığı", "Şirket Kuruluşu"],
  
  openGraph: {
    title: `${siteConfig.name} | Profesyonel Mali Çözümler`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'tr_TR',
    type: 'website',
  },
  
  robots: {
    index: true,
    follow: true,
  },
  
  icons: {
    icon: "/favicon.ico",
  },
};

// 3. GOOGLE İÇİN KİMLİK KARTI (JSON-LD)
// Bu kısım Google'ın seni "İşletme" olarak tanımasını sağlar.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": siteConfig.name,
  "image": `${siteConfig.url}/smmm-logo.png`, // Logo varsa burayı görür
  "description": siteConfig.description,
  "url": siteConfig.url,
  "telephone": siteConfig.phone,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": siteConfig.address || "Mersin",
    "addressLocality": "Mersin",
    "addressCountry": "TR"
  },
  "priceRange": "₺₺",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:30",
      "closes": "18:00"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="scroll-smooth scroll-pt-28">
      <body className={`
        ${inter.variable} 
        font-sans 
        antialiased 
        text-slate-900 
        bg-white 
        min-h-screen 
        flex 
        flex-col 
        selection:bg-blue-600 selection:text-white
        /* BODY İÇİN MOBİL KORUMASI */
        w-full
        overflow-x-hidden
      `}>
        
        {/* Google'ın seni tanıması için gereken gizli kod */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Navbar */}
        <header className="relative z-[100] w-full">
           <Navbar />
        </header>

        {/* Ana İçerik */}
        {/* max-w-[100vw] ve overflow-x-hidden ile taşmaları engelliyoruz */}
        <main className="flex-grow relative z-10 w-full max-w-[100vw] overflow-x-hidden">
          {children}
        </main>

        {/* Footer */}
        <footer className="relative z-10 w-full">
          <Footer />
        </footer>
        
        {/* WhatsApp Butonu */}
        <div className="relative z-[101]">
          <WhatsAppBtn />
        </div>
        
      </body>
    </html>
  );
}