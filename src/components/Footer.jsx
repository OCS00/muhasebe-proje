"use client";
import Link from "next/link";
import Image from "next/image"; // Resim için bunu ekledik
import { siteConfig } from "@/data/siteConfig";
import { Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-gray-300 pt-16 pb-8 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* 1. KOLON - LOGO VE AÇIKLAMA BURADA */}
          <div className="col-span-1">
            {/* LOGO VE İSİM */}
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative h-10 w-10">
                <Image 
                  src="/smmm-logo.png" 
                  alt="SMMM Logosu"
                  fill
                  className="object-contain"
                />
              </div>
               <span className="text-xl font-bold text-white tracking-tight">
                SMMM {siteConfig.name}
              </span>
            </Link>
            
            <p className="text-sm leading-relaxed text-blue-100/80 mb-6">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-white/70 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* 2. KOLON */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Hızlı Menü</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-white text-blue-100/70 transition-colors">Ana Sayfa</Link></li>
              <li><Link href="#hakkimda" className="hover:text-white text-blue-100/70 transition-colors">Hakkımızda</Link></li>
              <li><Link href="#hizmetler" className="hover:text-white text-blue-100/70 transition-colors">Hizmetler</Link></li>
              <li><Link href="#iletisim" className="hover:text-white text-blue-100/70 transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* 3. KOLON */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Hizmetler</h4>
            <ul className="space-y-3 text-sm">
              <li><span className="text-blue-100/70">Şirket Kuruluşu</span></li>
              <li><span className="text-blue-100/70">Vergi Danışmanlığı</span></li>
              <li><span className="text-blue-100/70">SGK ve Bordro</span></li>
              <li><span className="text-blue-100/70">E-Dönüşüm</span></li>
            </ul>
          </div>

          {/* 4. KOLON */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">İletişim</h4>
            <ul className="space-y-4 text-sm text-blue-100/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 text-blue-300" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-blue-300" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-blue-300" />
                <span>{siteConfig.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* ALT ÇİZGİ */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-100/60">
          <p>&copy; {currentYear} {siteConfig.name}. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-2">
            <span>Designed by</span>
            <span className="font-bold text-white">OCS Creative</span>
          </div>
        </div>

      </div>
    </footer>
  );
}