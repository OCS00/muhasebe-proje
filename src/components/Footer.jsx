import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { services } from "@/data/servicesData"; // 🔥 Hizmetleri buradan çekiyoruz
import { Linkedin, Instagram, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8 border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 1. KOLON - LOGO VE AÇIKLAMA */}
          <div className="col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-12 flex-shrink-0">
                {/* Logo resmini buraya koyuyoruz */}
                <Image 
                  src="/smmm-logo.png" 
                  alt={`${siteConfig.name} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
               <span className="text-lg font-bold text-white leading-none">
                {siteConfig.name}
               </span>
               <span className="text-[10px] uppercase tracking-widest text-blue-300 mt-1">
                 Mali Müşavirlik
               </span>
              </div>
            </Link>
            
            <p className="text-sm leading-relaxed text-blue-200 mb-6">
              {siteConfig.description}
            </p>
            
            {/* Sosyal Medya */}
            
          </div>

          {/* 2. KOLON - HIZLI MENÜ */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-b border-blue-800 pb-2 inline-block">Hızlı Menü</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-white hover:pl-2 text-blue-200 transition-all flex items-center gap-2"><ArrowRight size={12} className="opacity-50"/> Ana Sayfa</Link></li>
              <li><Link href="/hakkimda" className="hover:text-white hover:pl-2 text-blue-200 transition-all flex items-center gap-2"><ArrowRight size={12} className="opacity-50"/> Hakkımızda</Link></li>
              <li><Link href="/hizmetler" className="hover:text-white hover:pl-2 text-blue-200 transition-all flex items-center gap-2"><ArrowRight size={12} className="opacity-50"/> Hizmetler</Link></li>
              <li><Link href="/blog" className="hover:text-white hover:pl-2 text-blue-200 transition-all flex items-center gap-2"><ArrowRight size={12} className="opacity-50"/> Bilgi Bankası</Link></li>
              <li><Link href="/iletisim" className="hover:text-white hover:pl-2 text-blue-200 transition-all flex items-center gap-2"><ArrowRight size={12} className="opacity-50"/> İletişim</Link></li>
            </ul>
          </div>

          {/* 3. KOLON - HİZMETLER (DİNAMİK ÇEKİLİYOR) */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-b border-blue-800 pb-2 inline-block">Hizmet Alanlarımız</h4>
            <ul className="space-y-3 text-sm">
              {/* Gerçek hizmet verilerini buraya döngü ile koyuyoruz */}
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href="/hizmetler" className="hover:text-white hover:pl-2 text-blue-200 transition-all flex items-center gap-2">
                    <ArrowRight size={12} className="opacity-50"/> {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. KOLON - İLETİŞİM */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6 border-b border-blue-800 pb-2 inline-block">İletişim</h4>
            <ul className="space-y-4 text-sm text-blue-200">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 text-blue-400 shrink-0" />
                <span className="leading-relaxed">{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-400 shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">{siteConfig.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">{siteConfig.email}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* ALT ÇİZGİ */}
        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-blue-300">
          <p>&copy; {currentYear} {siteConfig.name}. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity">
            <span>Designed by</span>
            <span className="font-bold text-white">OCS Creative</span>
          </div>
        </div>

      </div>
    </footer>
  );
}