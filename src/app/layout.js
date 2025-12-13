import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { siteConfig } from "@/data/siteConfig";
import WhatsAppBtn from "@/components/WhatsAppBtn"; // 1. BUTONU İMPORT ET

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair",
  display: 'swap',
});

export const metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}` // "İletişim | Ali Şahin" gibi görünmesini sağlar
  },
  description: siteConfig.description,
  keywords: ["SMMM", "Mali Müşavir", "Muhasebe", "Şirket Kuruluşu", "İstanbul"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-white text-secondary antialiased`}>
        {/* 2. BUTONU BURAYA KOY (Sayfanın en üstünde dursun) */}
        <WhatsAppBtn />
        
        {children}
      </body>
    </html>
  );
}