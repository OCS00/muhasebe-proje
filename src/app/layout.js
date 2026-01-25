import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn"; // Dosya listende gördüm, bunu da ekleyelim tam olsun.

// 1. FONT OPTİMİZASYONU (Tüm ağırlıklarıyla Inter)
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"] 
});

// 2. SEO AYARLARI (Google'da nasıl görüneceği)
export const metadata = {
  title: {
    template: '%s | SMMM Mali Müşavirlik',
    default: 'SMMM - Profesyonel Mali Müşavirlik ve Danışmanlık',
  },
  description: "Şirket kuruluşu, vergi danışmanlığı, SGK işlemleri ve finansal raporlama hizmetleri. Güvenilir ve dijital mali müşavirlik çözümleri.",
  keywords: ["mali müşavir", "muhasebe", "vergi danışmanlığı", "şirket kurma", "kdv hesaplama", "sgk teşvik"],
  authors: [{ name: "SMMM Ofis" }],
  creator: "SMMM Ofis",
  publisher: "SMMM Ofis",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="scroll-smooth">
      {/* 3. BODY YAPISI:
        - w-full & overflow-x-hidden: Yatay taşmayı engeller, tam ekran yapar.
        - min-h-screen & flex-col: Footer'ı her zaman en alta iter.
        - selection:bg-blue-100: Kullanıcı yazı seçtiğinde mavi olur (Premium his).
      */}
      <body className={`
        ${inter.variable} 
        font-sans 
        antialiased 
        text-slate-800 
        bg-white 
        w-full 
        min-h-screen 
        flex 
        flex-col 
        overflow-x-hidden
        selection:bg-blue-100 selection:text-blue-900
      `}>
        
        {/* Navbar */}
        <header className="w-full relative z-50">
           <Navbar />
        </header>

        {/* Ana İçerik (Footer'ı aşağı itmesi için flex-grow) */}
        <main className="flex-grow w-full relative">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full relative z-40">
          <Footer />
        </footer>
        
        {/* Sağ altta sabit WhatsApp butonu */}
        <WhatsAppBtn />
        
      </body>
    </html>
  );
}