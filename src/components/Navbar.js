"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hizmetlerimiz", href: "#hizmetler" },
  { name: "Hesaplama Araçları", href: "#araclar" },
  { name: "Mevzuat Haberleri", href: "#haberler" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  // Scroll takibi
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-white/90 backdrop-blur-lg border-gray-200/50 shadow-sm py-3"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="relative z-50 flex items-center gap-2 group">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-600/20 group-hover:rotate-12 transition-transform duration-300">
              S
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-tight leading-none ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                SMMM<span className="text-blue-600">Ofis</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">Mali Müşavirlik</span>
            </div>
          </Link>

          {/* MASAÜSTÜ MENÜ */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center bg-gray-100/50 p-1 rounded-full border border-gray-200/50 mr-6 backdrop-blur-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`relative px-5 py-2 text-sm font-bold transition-all duration-300 rounded-full ${
                    activeLink === link.href ? "text-blue-700" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {activeLink === link.href && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white rounded-full shadow-sm border border-gray-200/50"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              ))}
            </div>

            {/* CTA Butonu */}
            <Link
              href="#iletisim"
              className="group flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-600 transition-all shadow-lg shadow-slate-900/20 hover:shadow-blue-600/30"
            >
              <Phone size={16} className="group-hover:rotate-12 transition-transform" />
              <span>İletişime Geç</span>
            </Link>
          </div>

          {/* MOBİL MENÜ BUTONU */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2 text-slate-800"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBİL MENÜ (Tam Ekran Overlay) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center"
          >
            {/* Arka plan dekoru */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-50"></div>

            <div className="flex flex-col gap-6 text-center w-full max-w-sm relative z-10">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-black text-slate-900 hover:text-blue-600 transition-colors flex items-center justify-center gap-3 group"
                  >
                    {link.name}
                    <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600" />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-8 border-t border-gray-100 w-full"
              >
                 <Link 
                   href="#iletisim"
                   onClick={() => setIsOpen(false)}
                   className="w-full block bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-600/30 active:scale-95 transition-transform"
                 >
                   Hemen Ara
                 </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}