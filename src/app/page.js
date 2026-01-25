"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Zap, 
  TrendingUp, 
  HelpCircle, 
  MousePointer2, 
  Activity, 
} from "lucide-react";

// --- BİLEŞENLER ---
import Hero from "@/components/Hero";
// Stats YOK
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import NewsSection from "@/components/NewsSection"; 
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import UsefulLinks from "@/components/UsefulLinks";
import VatCalculator from "@/components/VatCalculator";
import TaxCalendar from "@/components/TaxCalendar";
import Navbar from "@/components/Navbar";

// --- ORTAK BAŞLIK BİLEŞENİ ---
const SectionHeader = ({ title, subtitle, icon: Icon, dark = false, align = "center" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`mb-16 px-4 relative z-10 ${align === "left" ? "text-left" : "text-center"} ${dark ? "text-white" : "text-slate-900"}`}
  >
    {Icon && (
      <div className={`inline-flex items-center justify-center p-3 mb-6 rounded-2xl ${dark ? "bg-white/10 text-white backdrop-blur-sm border border-white/10" : "bg-blue-50 text-blue-600 border border-blue-100"} ${align === "center" ? "mx-auto" : ""}`}>
        <Icon size={24} />
      </div>
    )}
    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 font-sans">
      {title}
    </h2>
    <div className={`h-1.5 w-24 rounded-full mb-6 ${align === "center" ? "mx-auto" : ""} ${dark ? "bg-blue-500" : "bg-blue-600"}`}></div>
    <p className={`text-lg md:text-xl max-w-3xl font-medium leading-relaxed ${align === "center" ? "mx-auto" : ""} ${dark ? "text-slate-400" : "text-slate-500"}`}>
      {subtitle}
    </p>
  </motion.div>
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="flex flex-col w-full bg-white relative font-sans selection:bg-blue-600 selection:text-white">
      
      {/* 1. İLERLEME ÇUBUĞU */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      

      {/* 2. HERO (GİRİŞ) */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* 3. HİZMETLER (Hero'dan Sonra Direkt Burası Geliyor) */}
      <section className="py-32 bg-slate-50 relative overflow-hidden border-t border-slate-100">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <SectionHeader 
             title="Uzmanlık Alanlarımız" 
             subtitle="Şirketinizin kuruluşundan büyüme aşamasına kadar ihtiyacınız olan tüm mali ve hukuki süreçleri tek çatı altında yönetiyoruz."
             icon={Activity}
           />
           <Services />
        </div>
      </section>

      {/* 4. KURUMSAL VİZYON */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
           <About />
        </div>
      </section>

      {/* 5. DİJİTAL ARAÇLAR */}
      <section className="py-32 bg-[#0b1120] relative overflow-hidden" id="araclar">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader 
            dark
            title="Dijital Operasyon Merkezi" 
            subtitle="Ofise gelmenize gerek kalmadan vergilerinizi hesaplayın, ödeme takviminizi kontrol edin."
            icon={Zap}
          />

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
               <div className="bg-slate-800/50 p-2 rounded-[2.5rem] border border-slate-700/50 backdrop-blur-sm">
                 <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl">
                    <VatCalculator />
                 </div>
               </div>
            </div>

            <div className="lg:col-span-5">
               <div className="bg-slate-800/50 p-2 rounded-[2.5rem] border border-slate-700/50 backdrop-blur-sm h-full">
                 <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl h-full">
                    <TaxCalendar />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ÇALIŞMA SÜRECİ */}
      <section className="py-32 bg-slate-50 relative">
        <div className="max-w-6xl mx-auto px-6">
           <SectionHeader 
             title="Nasıl Çalışıyoruz?" 
             subtitle="Karmaşık mali süreçleri sizin için sadeleştirilmiş, şeffaf ve izlenebilir adımlara bölüyoruz."
             icon={TrendingUp}
           />
           <Process />
        </div>
      </section>

      {/* 7. MEVZUAT HABERLERİ */}
      <section className="py-32 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
           <SectionHeader 
             title="Mevzuat Gündemi" 
             subtitle="Vergi dünyasındaki son değişiklikler, resmi gazete özetleri ve ekonomik analizler."
             icon={Activity}
           />
           <NewsSection />
        </div>
      </section>

      {/* 8. RESMİ KURUM LİNKLERİ */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-12">
             <h3 className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-3">
               <MousePointer2 className="text-blue-600" /> 
               Resmi Kurum Portalları
             </h3>
           </div>
           <UsefulLinks />
        </div>
      </section>

      {/* 9. SIKÇA SORULAN SORULAR */}
      <section className="py-32 bg-[#1e293b] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
           <SectionHeader 
             dark
             title="Merak Edilenler" 
             subtitle="Mükelleflerimizden gelen soruları sizin için derledik."
             icon={HelpCircle}
           />
           <div className="bg-slate-800/50 rounded-[2rem] p-8 border border-slate-700 shadow-2xl">
             <Faq />
           </div>
        </div>
      </section>

      {/* 10. İLETİŞİM */}
      <section className="bg-white py-32" id="iletisim">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 font-sans">
              Bizimle İletişime Geçin
            </h2>
            <p className="text-slate-500 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Profesyonel destek almak, tanışmak veya kahvemizi içmek için formu doldurun. En kısa sürede size dönüş yapalım.
            </p>
          </motion.div>

          <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-16 border border-slate-100 shadow-2xl text-left relative overflow-hidden">
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