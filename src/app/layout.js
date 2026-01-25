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
        
        {/* Navbar */}
        <header className="relative z-[100] w-full">
           <Navbar />
        </header>

        {/* Ana İçerik - BURASI KRİTİK DEĞİŞİKLİK */}
        {/* max-w-[100vw] ve overflow-x-hidden sayesinde içerik asla ekranı yarıp taşamaz */}
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