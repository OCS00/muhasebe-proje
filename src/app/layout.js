import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google"; // Import aynı kalıyor
import { siteConfig } from "@/data/siteConfig";
import WhatsAppBtn from "@/components/WhatsAppBtn"; 

// 🔥 DÜZELTME BURADA: "latin-ext" EKLİYORUZ
const inter = Inter({ 
  subsets: ["latin", "latin-ext"], 
  variable: "--font-inter" 
});

const playfair = Playfair_Display({ 
  subsets: ["latin", "latin-ext"], 
  variable: "--font-playfair",
  display: 'swap',
});

export const metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: ["SMMM", "Mali Müşavir", "Muhasebe", "Şirket Kuruluşu", "İstanbul"],
  icons: {
    icon: '/smmm-logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-white text-secondary antialiased`}>
        <WhatsAppBtn />
        {children}
      </body>
    </html>
  );
}