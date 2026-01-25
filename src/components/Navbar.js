"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, X, Phone, ArrowRight, 
  Calculator, Home, Users, 
  Briefcase 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

const menuItems = [
  { title: "Ana Sayfa", href: "/", icon: <Home size={18} /> },
  { title: "Kurumsal", href: "/hakkimda", icon: <Users size={18} /> },
  { title: "Hizmetler", href: "/hizmetler", icon: <Briefcase size={18} /> },
  { title: "İletişim", href: "/iletisim", icon: <Phone size={18} /> }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* NAVBAR KONTEYNERİ
         - 'fixed' ile sabitlendi.
         - 'top-4' veya 'top-6' ile yukarıdan boşluk bırakıldı (Havada duruyor hissi).
         - 'max-w-7xl mx-auto' ile ortalandı.
         - 'rounded-full' veya 'rounded-2xl' ile köşeler yuvarlatıldı.
         - 'bg-white/90' ve 'backdrop-blur-md' ile buzlu cam efekti verildi.
      */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="fixed top-4 left-4 right-4 md:top-6 md:left-8 md:right-8 max-w-7xl mx-auto z-[999] bg-white/100 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl px-6 py-3 flex justify-between items-center"
      >
          
          {/* --- 1. LOGO ALANI --- */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo Görseli (Her zaman net görünür çünkü zemin beyaz) */}
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105">
               <Image 
                 src="/smmm-logo.png" 
                 alt="Logo" 
                 fill 
                 className="object-contain drop-shadow-sm" 
                 priority
               />
            </div>
            
            {/* Marka Yazısı (Her zaman koyu renk) */}
            <div className="flex flex-col">
              <span className="font-black text-slate-900 text-lg leading-none tracking-tight">
                {siteConfig.name || "SMMM OFİS"}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600 mt-0.5">
                Mali Müşavirlik
              </span>
            </div>
          </Link>

          {/* --- 2. MASAÜSTÜ MENÜ --- */}
          <div className="hidden lg:flex items-center gap-1">
            <div className="flex items-center bg-slate-100/50 rounded-full p-1 mr-3 border border-slate-200/50">
              {menuItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={`px-5 py-2 text-sm font-bold transition-all duration-300 rounded-full ${
                      isActive 
                        ? "bg-white text-blue-600 shadow-sm" 
                        : "text-slate-500 hover:text-slate-900 hover:bg-white/50"
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>

            {/* CTA Butonu */}
            <Link
              href="/iletisim"
              className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-slate-900/20 hover:bg-blue-600 hover:shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
            >
              Teklif Al <ArrowRight size={16} />
            </Link>
          </div>

          {/* --- 3. MOBİL MENÜ BUTONU --- */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 bg-slate-100 rounded-full text-slate-900 hover:bg-slate-200 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
      </motion.nav>

      {/* --- 4. MOBİL MENÜ (FULL SCREEN) --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-2 z-[1000] bg-white rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border border-slate-100 lg:hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
               <span className="font-black text-xl text-slate-900">Menü</span>
               <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-full">
                 <X size={24} className="text-slate-900"/>
               </button>
            </div>

            {/* Linkler */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-3">
              {menuItems.map((item, index) => (
                <Link
                    key={index}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 group-hover:text-blue-600 shadow-sm transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-lg font-bold text-slate-900 group-hover:text-blue-600">{item.title}</span>
                </Link>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100">
               <Link 
                 href="/iletisim"
                 onClick={() => setMobileMenuOpen(false)}
                 className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-transform"
               >
                 <Phone size={20} />
                 Bizi Arayın
               </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}