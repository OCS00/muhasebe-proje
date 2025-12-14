import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { siteConfig } from "@/data/siteConfig";
import WhatsAppBtn from "@/components/WhatsAppBtn"; 
import CookieConsent from "@/components/CookieConsent"; // 🔥 1. IMPORT ET

const inter = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin", "latin-ext"], variable: "--font-playfair", display: 'swap' });

export const metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: { icon: '/smmm-logo.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-white text-secondary antialiased`}>
        {children}
        <WhatsAppBtn />
        <CookieConsent /> {/* 🔥 2. BURAYA EKLE (WhatsApp'ın altına) */}
      </body>
    </html>
  );
}