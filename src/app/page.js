import React from "react";
import { Zap, TrendingUp, HelpCircle, MousePointer2, Activity } from "lucide-react";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import NewsSection from "@/components/NewsSection";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import UsefulLinks from "@/components/UsefulLinks";
import VatCalculator from "@/components/VatCalculator";
import TaxCalendar from "@/components/TaxCalendar";
import SectionHeader from "@/components/SectionHeader";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white relative font-sans selection:bg-blue-600 selection:text-white">

      {/* Scroll İlerleme Çubuğu */}
      <ScrollProgressBar />

      {/* 1. HERO */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* 2. HİZMETLER */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50 relative overflow-hidden border-t border-slate-100">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeader
            title="Uzmanlık Alanlarımız"
            subtitle="Şirketinizin kuruluşundan büyüme aşamasına kadar ihtiyacınız olan tüm mali süreçleri tek çatı altında yönetiyoruz."
            icon={Activity}
          />
          <Services />
        </div>
      </section>

      {/* 3. KURUMSAL VİZYON */}
      <section className="py-16 md:py-24 lg:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <About />
        </div>
      </section>

      {/* 4. DİJİTAL ARAÇLAR */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#0b1120] relative overflow-hidden" id="araclar">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeader
            dark
            title="Dijital Operasyon Merkezi"
            subtitle="Ofise gelmenize gerek kalmadan vergilerinizi hesaplayın, ödeme takviminizi kontrol edin."
            icon={Zap}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 items-start">
            <div className="md:col-span-1 lg:col-span-7">
              <div className="bg-slate-800/50 p-2 rounded-[2rem] md:rounded-[2.5rem] border border-slate-700/50 backdrop-blur-sm">
                <div className="bg-white rounded-[1.75rem] md:rounded-[2rem] overflow-hidden shadow-2xl">
                  <VatCalculator />
                </div>
              </div>
            </div>

            <div className="md:col-span-1 lg:col-span-5">
              <div className="bg-slate-800/50 p-2 rounded-[2rem] md:rounded-[2.5rem] border border-slate-700/50 backdrop-blur-sm h-full">
                <div className="bg-white rounded-[1.75rem] md:rounded-[2rem] overflow-hidden shadow-2xl h-full">
                  <TaxCalendar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ÇALIŞMA SÜRECİ */}
      <section className="py-16 md:py-24 lg:py-32 bg-slate-50 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Nasıl Çalışıyoruz?"
            subtitle="Karmaşık mali süreçleri sizin için sadeleştirilmiş, şeffaf ve izlenebilir adımlara bölüyoruz."
            icon={TrendingUp}
          />
          <Process />
        </div>
      </section>

      {/* 6. MEVZUAT HABERLERİ */}
      <section className="py-16 md:py-24 lg:py-32 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            title="Mevzuat Gündemi"
            subtitle="Vergi dünyasındaki son değişiklikler, resmi gazete özetleri ve ekonomik analizler."
            icon={Activity}
          />
          <NewsSection />
        </div>
      </section>

      {/* 7. RESMİ KURUM LİNKLERİ */}
      <section className="py-16 md:py-20 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center justify-center gap-3">
              <MousePointer2 className="text-blue-600" />
              Resmi Kurum Portalları
            </h3>
          </div>
          <UsefulLinks />
        </div>
      </section>

      {/* 8. SIKÇA SORULAN SORULAR */}
      <section className="py-16 md:py-24 lg:py-32 bg-[#1e293b] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionHeader
            dark
            title="Merak Edilenler"
            subtitle="Mükelleflerimizden gelen soruları sizin için derledik."
            icon={HelpCircle}
          />
          <div className="bg-slate-800/50 rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-8 border border-slate-700 shadow-2xl">
            <Faq />
          </div>
        </div>
      </section>

      {/* 9. İLETİŞİM */}
      <section className="bg-white py-16 md:py-24 lg:py-32" id="iletisim">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 md:mb-8 font-sans">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-slate-500 text-lg md:text-xl mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            Profesyonel destek almak, tanışmak veya kahvemizi içmek için formu doldurun. En kısa sürede size dönüş yapalım.
          </p>

          <div className="bg-slate-50 rounded-[1.5rem] md:rounded-[2.5rem] p-6 sm:p-10 md:p-16 border border-slate-100 shadow-2xl text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-[80px] opacity-50 pointer-events-none"></div>
            <div className="relative z-10">
              <Contact />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
