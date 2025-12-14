"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // 🔥 Resim için bunu ekledik
import { siteConfig } from "@/data/siteConfig";
import { Menu, X, Phone } from "lucide-react";

const navigation = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımda", href: "/hakkimda" },
  { name: "Hizmetler", href: "/hizmetler" },
  { name: "Bilgi Bankası", href: "/blog" },
  { name: "İletişim", href: "/iletisim" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* LOGO ALANI */}
          <Link href="/" className="flex items-center gap-3 group">
            
            {/* 🔥 RESİM LOGO BURADA */}
            {/* Eğer logon kare ise width/height değerlerini aynı yap (örn: 60/60) */}
            {/* Eğer dikdörtgen ise genişliği artır (örn: width={150} height={50}) */}
            <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
               <Image 
                 src="/smmm-logo.png" 
                 alt="Logo" 
                 fill
                 className="object-contain" // Resmi kutuya sığdırır, kesmez
               />
            </div>

            {/* Yanındaki Yazı (İstersen silebilirsin, ama SEO için kalması iyidir) */}
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 leading-none group-hover:text-blue-900 transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-gray-400 mt-1">
                Mali Müşavirlik
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="text-sm font-bold uppercase tracking-wider text-gray-700 hover:text-blue-900 transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-900 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link 
              href="/iletisim" 
              className="flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Phone size={16} />
              <span>ARA</span>
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button 
            className="md:hidden p-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white absolute w-full left-0 shadow-xl">
          <div className="flex flex-col p-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="p-4 text-center font-bold text-gray-700 hover:bg-gray-50 rounded-xl transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
             <Link 
              href="/iletisim"
              className="p-4 mt-2 text-center font-bold bg-blue-900 text-white rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              Hemen Arayın
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}