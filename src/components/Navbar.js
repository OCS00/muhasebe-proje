"use client";
import Link from "next/link";
// Image importunu sildik, gerek kalmadı
import { siteConfig } from "@/data/siteConfig";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

// Hepsi '/' ile başlıyor, yani ayrı sayfa açacak.
const navLinks = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımda", href: "/hakkimda" },
  { name: "Hizmetler", href: "/hizmetler" }, // ARTIK AYRI SAYFA
  { name: "Blog", href: "/blog" },
  { name: "İletişim", href: "/iletisim" },
];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO VE İSİM ALANI */}
          <Link href="/" className="flex items-center gap-3 group">
            
            {/* GARANTİ YÖNTEM: Standart img etiketi */}
            <img 
              src="/smmm-logo.png" 
              alt="SMMM Logo" 
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
            />

            <div className="flex flex-col">
              <span className="text-xl font-bold text-secondary group-hover:text-primary transition-colors leading-tight">
                SMMM {siteConfig.name}
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                Mali Müşavirlik
              </span>
            </div>
          </Link>

          {/* MASAÜSTÜ MENÜ */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm font-bold uppercase tracking-wider text-secondary hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <a 
              href={`tel:${siteConfig.phone}`}
              className="bg-primary text-white px-5 py-2 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-blue-900 transition-colors flex items-center gap-2"
            >
              <Phone size={16} />
              <span>Ara</span>
            </a>
          </div>

          {/* MOBİL BUTON */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-secondary">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBİL LİSTE */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full h-screen border-t border-gray-100 top-full left-0">
          <div className="flex flex-col p-8 space-y-6 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold text-secondary hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}