"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  Send,
  CheckCircle2,
  Loader2,
  ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // --- STATE YÖNETİMİ (Bülten Aboneliği İçin) ---
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simüle edilmiş API isteği (Gerçek projede burası backend'e gider)
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      // 3 saniye sonra butonu eski haline getir
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  // --- LİNK VERİLERİ (Kolay Yönetim İçin) ---
  const quickLinks = [
    { label: "Ana Sayfa", url: "/" },
    { label: "Hakkımızda", url: "/hakkimda" },
    { label: "Ekibimiz & Kariyer", url: "/hakkimda" },
    { label: "Blog & Mevzuat", url: "/blog" },
    { label: "İletişim", url: "/iletisim" },
  ];

  const serviceLinks = [
    { label: "Şirket Kuruluş İşlemleri", url: "/hizmetler" },
    { label: "Vergi & KDV Danışmanlığı", url: "/hizmetler" },
    { label: "Bordrolama & SGK", url: "/hizmetler" },
    { label: "Finansal Raporlama", url: "/hizmetler" },
    { label: "E-Dönüşüm Hizmetleri", url: "/hizmetler" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-[#050b14] text-slate-300 pt-24 pb-10 border-t border-slate-900 relative overflow-hidden font-sans">
      
      {/* --- ARKA PLAN LOGOSU (SMMM WATERMARK) --- */}
      {/* Bu kısım logoyu arka plana devasa ve silik basar */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
         <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 0.03 }} // %3 Görünürlük (Çok Silik)
           transition={{ duration: 1.5 }}
           className="relative w-[120%] h-[120%] md:w-[800px] md:h-[800px]"
         >
            <Image 
              src="/smmm-logo.png" 
              alt="Background Watermark" 
              fill 
              className="object-contain rotate-12 grayscale"
            />
         </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- ÜST KISIM: MARKA & BÜLTEN --- */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 border-b border-slate-800/60 pb-16 mb-16">
          
          {/* Marka ve Açıklama */}
          <div className="space-y-8">
            <Link href="/" className="inline-block group">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white group-hover:text-blue-500 transition-colors">
                {siteConfig.name}
              </h2>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-blue-600 block mt-1">
                MALİ MÜŞAVİRLİK
              </span>
            </Link>
            
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Mali süreçlerinizi güvenle yönetiyor, işletmenizin geleceğini sağlam temellere oturtuyoruz. 
              Modern, şeffaf ve dijital çözüm ortağınız.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  aria-label={social.label}
                  className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Gelişmiş Bülten Formu */}
          <div className="bg-slate-900/40 p-8 rounded-[2rem] border border-slate-800 backdrop-blur-sm relative group overflow-hidden">
            {/* Form Arka Plan Efekti */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/20 transition-all duration-500"></div>
            
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                <Send size={20} />
              </div>
              Mevzuat Bülteni
            </h3>
            <p className="text-slate-400 mb-8 text-sm leading-relaxed">
              Vergi dünyasındaki kritik değişiklikleri, teşvik haberlerini ve önemli hatırlatmaları e-posta kutunuza gönderiyoruz. Spam yok, sadece bilgi.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-posta adresiniz" 
                  disabled={status === "loading" || status === "success"}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-12 pr-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all disabled:opacity-50"
                />
              </div>
              <button 
                type="submit" 
                disabled={status === "loading" || status === "success"}
                className={`px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 min-w-[140px] ${
                  status === "success" 
                    ? "bg-green-600 text-white shadow-green-900/20" 
                    : "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/20 hover:shadow-blue-600/30"
                }`}
              >
                {status === "loading" ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : status === "success" ? (
                  <>Abone Olundu <CheckCircle2 size={18} /></>
                ) : (
                  "Kayıt Ol"
                )}
              </button>
            </form>
            <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-500 font-medium">
              <ShieldCheck size={12} className="text-emerald-500" />
              KVKK kapsamında verileriniz güvendedir.
            </div>
          </div>
        </div>

        {/* --- ORTA KISIM: SİTE HARİTASI --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Sütun 1: Kurumsal */}
          <div>
            <h4 className="font-bold text-white mb-8 text-lg flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
              Kurumsal
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.url} className="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-3 text-sm group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sütun 2: Hizmetler */}
          <div>
            <h4 className="font-bold text-white mb-8 text-lg flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
              Hizmetlerimiz
            </h4>
            <ul className="space-y-4">
              {serviceLinks.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.url} className="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-3 text-sm group">
                     <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-500 transition-colors"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sütun 3 & 4: İletişim Detayları */}
          <div className="lg:col-span-2">
             <h4 className="font-bold text-white mb-8 text-lg flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
              İletişim Bilgileri
            </h4>
             <div className="grid sm:grid-cols-2 gap-6">
                
                {/* Adres Kartı */}
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all group">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                    <MapPin size={20} />
                  </div>
                  <h5 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">Merkez Ofis</h5>
                  <p className="text-slate-400 text-sm leading-relaxed">{siteConfig.address}</p>
                </div>

                {/* Telefon Kartı */}
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all group">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                    <Phone size={20} />
                  </div>
                  <h5 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">Telefon</h5>
                  <p className="text-white text-lg font-mono mb-1">{siteConfig.phone}</p>
                  <p className="text-slate-500 text-xs">Hafta içi: 09:00 - 18:00</p>
                </div>

                {/* Mail Kartı (Geniş) */}
                <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all group sm:col-span-2 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                        <Mail size={20} />
                     </div>
                     <div>
                       <h5 className="font-bold text-white text-sm uppercase tracking-wider">E-Posta</h5>
                       <a href={`mailto:${siteConfig.email}`} className="text-slate-400 hover:text-white transition-colors text-sm">{siteConfig.email}</a>
                     </div>
                  </div>
                  <ExternalLink size={18} className="text-slate-600 group-hover:text-blue-500 transition-colors" />
                </div>

             </div>
          </div>

        </div>

        {/* --- ALT KISIM: COPYRIGHT --- */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium text-slate-500">
          <p>© {currentYear} {siteConfig.name}. Tüm yasal hakları saklıdır.</p>
          
    
          
          <p className="flex items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
            Designed by <span className="text-slate-300 font-bold">OCS Creative</span>
          </p>
        </div>

      </div>
    </footer>
  );
}