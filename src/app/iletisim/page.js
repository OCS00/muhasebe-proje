"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact"; 
import { MapPin, Phone, Mail, Clock, ArrowDown } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* 1. HERO BÖLÜMÜ: ARTIK KESİN MAVİ (bg-blue-900) */}
      <section className="bg-blue-900 text-white py-24 pb-48 relative overflow-hidden">
        {/* Arka plan süsü */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <span className="text-blue-200 font-bold tracking-widest uppercase text-xs mb-3 block">
            BİZE ULAŞIN
          </span>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Bir Kahve İçmeye <br/> <span className="text-blue-200">Bekleriz</span>
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
            Vergi sorularınız, şirket kuruluşu veya danışmanlık talepleriniz için kapımız her zaman açık.
          </p>
          <ArrowDown className="mx-auto text-blue-200 animate-bounce mt-4" size={32} />
        </div>
      </section>

      {/* 2. İLETİŞİM KARTLARI VE FORM */}
      <section className="bg-gray-50 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Kartlar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 -mt-32 relative z-20">
            {/* Telefon */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-blue-900 text-center group hover:-translate-y-2 transition-transform">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                <Phone size={28} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Telefon</h3>
              <p className="text-gray-500 text-sm mb-4">Hafta içi 08:00 - 18:00</p>
              <a href="tel:+905551234567" className="text-blue-900 font-bold hover:underline text-lg">
                +90 555 123 45 67
              </a>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-orange-500 text-center group hover:-translate-y-2 transition-transform">
              <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <Mail size={28} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">E-Posta</h3>
              <p className="text-gray-500 text-sm mb-4">7/24 Bize yazabilirsiniz</p>
              <a href="mailto:smmmyavuzsahin@hotmail.com" className="text-orange-600 font-bold hover:underline text-lg">
                smmmyavuzsahin@hotmail.com
              </a>
            </div>

            {/* Ofis */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-b-4 border-emerald-500 text-center group hover:-translate-y-2 transition-transform">
              <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <MapPin size={28} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Ofis Adresi</h3>
              <p className="text-gray-500 text-sm mb-4">Ziyaret için randevu alınız</p>
              <p className="text-emerald-700 font-bold text-sm">
                İHSANİYE MAH. BAHÇELER CAD NO:22 <br/>OFİS ROYAL İŞ MERKEZİ KAT:10/122 <br/> AKDENİZ / MERSİN
              </p>
            </div>
          </div>

          {/* Harita ve Form Alanı */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Sol: İletişim Formu */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-2">Mesaj Gönderin</h3>
              <p className="text-gray-500 mb-8 text-sm">Formu doldurun, en geç 24 saat içinde size dönüş yapalım.</p>
              <Contact />
            </div>

            {/* Sağ: Harita ve Ek Bilgi */}
            <div className="space-y-8">
              <div className="w-full h-[400px] bg-gray-200 rounded-3xl overflow-hidden shadow-sm border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3252.9308692840937!2d34.616799175904696!3d36.80188037224673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1527f30accbb1c31%3A0x601faac3409223a8!2sOfis%20Royal%20%C4%B0%C5%9F%20Merkezi!5e1!3m2!1str!2str!4v1765673446520!5m2!1str!2str"
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="bg-blue-900 text-white p-8 rounded-3xl flex items-center gap-6 shadow-lg">
                <div className="bg-white/10 p-4 rounded-full">
                  <Clock size={32} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Çalışma Saatlerimiz</h4>
                  <p className="text-blue-100 text-sm">Pazartesi - Cuma: 08:00 - 18:00</p>
                  <p className="text-blue-100 text-sm">Cumartesi: 08:00 - 13:00</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}