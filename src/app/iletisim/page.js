"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/siteConfig";

export default function Iletisim() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* --- HERO --- */}
      <section className="pt-48 pb-16 bg-[#0b1120] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Bize Ulaşın
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Mersin'deki ofisimize kahve içmeye bekleriz. <br/>
            Sorularınız için aşağıdaki kanallardan bize ulaşabilirsiniz.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* --- SOL TARA: İLETİŞİM KARTLARI --- */}
          <div className="space-y-12">
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4 block">
                İletişim Kanalları
              </span>
              <h2 className="text-3xl font-black text-slate-900 mb-8">
                Yavuz Şahin <br/> Mali Müşavirlik Ofisi
              </h2>
              
              <div className="space-y-6">
                {/* Adres Kartı */}
                <div className="flex items-start gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-300 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-2">Ofis Adresi</h4>
                    <p className="text-slate-500 leading-relaxed">
                      {/* Burayı Mersin Adresi Olarak Güncelledik */}
                      İHSANİYE MAH. BAHÇELER CAD NO:22 OFİS ROYAL İŞ MERKEZİ KAT:10/122 AKDENİZ / MERSİN 
                    </p>
                    <a href="https://maps.google.com" target="_blank" className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm mt-3 hover:underline">
                      <Navigation size={14} /> Yol Tarifi Al
                    </a>
                  </div>
                </div>

                {/* Telefon & Mail Kartı */}
                <div className="flex items-start gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-300 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-green-600 shadow-sm shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-2">Doğrudan İletişim</h4>
                    <div className="space-y-2">
                      <a href={`tel:${siteConfig.phone}`} className="block text-slate-600 font-medium hover:text-blue-600 transition-colors text-lg">
                        {siteConfig.phone || "+90 (324) 123 45 67"}
                      </a>
                      <a href={`mailto:${siteConfig.email}`} className="block text-slate-500 hover:text-blue-600 transition-colors">
                        {siteConfig.email || "info@yavuzsahin.com"}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Saatler */}
                <div className="flex items-start gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-300 transition-colors">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-500 shadow-sm shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-2">Çalışma Saatleri</h4>
                    <div className="grid grid-cols-2 gap-x-8 text-sm text-slate-500">
                      <div>Hafta İçi</div>
                      <div className="font-bold text-slate-700">08:30 - 18:00</div>
                      <div>Cumartesi</div>
                      <div className="font-bold text-slate-700">09:30 - 13:00</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* HARİTA (Custom Style) */}
            <div className="h-80 w-full bg-slate-200 rounded-[2.5rem] overflow-hidden border border-slate-300 relative grayscale hover:grayscale-0 transition-all duration-500 shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51159.27435645009!2d34.600185!3d36.778262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1527f4a4c0be6e9f%3A0x4db709849544778d!2sMersin!5e0!3m2!1str!2str!4v1234567890" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* --- SAĞ TARA: FORM ALANI (Sticky) --- */}
          <div className="lg:col-span-1">
             <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white sticky top-32 shadow-2xl relative overflow-hidden">
                {/* Arka Plan Efekti */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
                
                <div className="relative z-10 mb-8">
                  <h3 className="text-3xl font-black mb-2">Hemen Mesaj Gönderin</h3>
                  <p className="text-slate-400">
                    Formu doldurun, size en kısa sürede (genellikle 1 saat içinde) dönüş yapalım.
                  </p>
                </div>

                {/* Contact Bileşeni (Form) - Burada arka planı uyumlu hale getirmek için props geçebilir veya CSS ile oynayabiliriz ama şimdilik standart bileşeni koyuyoruz, koyu zeminde de çalışır. */}
                <div className="bg-white rounded-3xl p-6 md:p-8 text-slate-900">
                   <Contact />
                </div>
             </div>
          </div>

        </div>
      </div>

      
    </div>
  );
}