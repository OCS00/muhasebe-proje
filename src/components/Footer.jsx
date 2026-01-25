"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/servicesData";
import { 
  Facebook, Twitter, Instagram, Linkedin, 
  MapPin, Phone, Mail, ArrowRight, ShieldCheck, 
  FileText, ExternalLink 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Sosyal Medya Verileri (Daha yönetilebilir)
  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[#0f172a] text-white pt-20 pb-10 border-t border-slate-800 relative overflow-hidden">
      
      {/* Arka Plan Dekoru */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ÜST KISIM: Marka ve Bülten */}
        <div className="grid lg:grid-cols-2 gap-12 border-b border-slate-800 pb-16 mb-16">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-black tracking-tight font-sans">
                SMMM<span className="text-blue-500">.</span>
              </h2>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              İşletmenizin finansal sağlığı için modern çözümler, güvenilir denetim ve stratejik danışmanlık hizmetleri sunuyoruz.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, idx) => (
                <Link 
                  key={idx} 
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Bülten Alanı */}
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-bold mb-2">Güncel Mevzuattan Haberdar Olun</h3>
            <p className="text-slate-400 mb-6 text-sm">Önemli vergi değişiklikleri ve duyurular için bültenimize abone olun.</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-5 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-lg shadow-blue-600/20">
                Abone Ol
              </button>
            </form>
          </div>
        </div>

        {/* ORTA KISIM: Linkler */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Sütun 1: Hızlı Erişim */}
          <div>
            <h4 className="font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Kurumsal
            </h4>
            <ul className="space-y-4">
              {["Ana Sayfa", "Hakkımızda", "Ekibimiz", "Kariyer", "İletişim"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 text-sm">
                    <ArrowRight size={14} className="opacity-0 hover:opacity-100" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sütun 2: Hizmetler */}
          <div>
            <h4 className="font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Hizmetlerimiz
            </h4>
            <ul className="space-y-4">
              {services.slice(0, 5).map((service, idx) => (
                <li key={idx}>
                  <Link href="/hizmetler" className="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 text-sm">
                    <ArrowRight size={14} className="opacity-0 hover:opacity-100" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sütun 3: İletişim */}
          <div className="lg:col-span-2">
             <h4 className="font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              İletişim Bilgileri
            </h4>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 group hover:border-blue-500/50 transition-colors">
                <MapPin className="text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
                <h5 className="font-bold text-white mb-1">Ofis Adresi</h5>
                <p className="text-slate-400 text-sm leading-relaxed">{siteConfig.address}</p>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 group hover:border-blue-500/50 transition-colors">
                <Phone className="text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
                <h5 className="font-bold text-white mb-1">Telefon</h5>
                <a href={`tel:${siteConfig.phone}`} className="text-slate-400 text-sm hover:text-white transition-colors">{siteConfig.phone}</a>
                <p className="text-xs text-slate-500 mt-1">Hafta içi: 09:00 - 18:00</p>
              </div>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 group hover:border-blue-500/50 transition-colors sm:col-span-2">
                <Mail className="text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
                <h5 className="font-bold text-white mb-1">E-Posta</h5>
                <a href={`mailto:${siteConfig.email}`} className="text-slate-400 text-sm hover:text-white transition-colors">{siteConfig.email}</a>
              </div>
            </div>
          </div>

        </div>

        {/* ALT KISIM: Copyright ve Yasal */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {currentYear} {siteConfig.name} - Tüm Hakları Saklıdır.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white flex items-center gap-1"><ShieldCheck size={14}/> Gizlilik Politikası</Link>
            <Link href="#" className="hover:text-white flex items-center gap-1"><FileText size={14}/> KVKK Metni</Link>
          </div>
          <p className="flex items-center gap-1">
            Design by <span className="text-white font-bold">OCS Creative</span>
            <ExternalLink size={12} />
          </p>
        </div>

      </div>
    </footer>
  );
}