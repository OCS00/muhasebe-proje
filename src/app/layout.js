import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import { siteConfig } from "@/data/siteConfig";

// 1. FONT AYARI (Değişken font kullanarak performansı artırdık)
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 2. GELİŞMİŞ SEO VE PAYLAŞIM AYARLARI
export const metadata = {
  // Bu ayar, link paylaşırken resimlerin bozuk çıkmasını engeller
  metadataBase: new URL(siteConfig.url || "https://smmmyavuzsahin.com"), 
  
  title: {
    template: `%s | ${siteConfig.name}`,
    default: `${siteConfig.name} | Mali Müşavirlik & Danışmanlık`,
  },
  description: siteConfig.description,
  keywords: ["Mali Müşavir", "Mersin Muhasebe", "Yavuz Şahin", "Vergi Danışmanlığı", "Şirket Kuruluşu"],
  
  // WhatsApp, LinkedIn, Twitter'da paylaşınca çıkacak kart ayarları
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

export default function RootLayout({ children }) {
  return (
    // scroll-pt-28: Menüden bir linke tıkladığında Navbar'ın altında kalmasını engeller.
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
        overflow-x-hidden
        selection:bg-blue-600 selection:text-white
      `}>
        
        {/* Navbar */}
        <header className="relative z-[100]">
           <Navbar />
        </header>

        {/* Ana İçerik */}
        <main className="flex-grow relative z-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="relative z-10">
          <Footer />
        </footer>
        
        {/* WhatsApp Butonu (En üstte dursun diye z-index yüksek) */}
        <div className="relative z-[101]">
          <WhatsAppBtn />
        </div>
        
      </body>
    </html>
  );
}