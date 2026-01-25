"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowDown, Star, Zap, Shield, TrendingUp, HelpCircle, MousePointer2 } from "lucide-react";

// --- DOĞRU IMPORTLAR (Senin Dosya İsimlerine Göre) ---
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import HomeBlog from "@/components/HomeBlog"; // NewsSection yerine HomeBlog
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import UsefulLinks from "@/components/UsefulLinks";
import VatCalculator from "@/components/VatCalculator";
import TaxCalendar from "@/components/TaxCalendar";
import Navbar from "@/components/Navbar"; // Navbar'ı layout'tan sildiysen buraya ekle, yoksa layout'ta kalsın. (Genelde Layout'ta olur ama senin page.js örneğinde vardı, buraya ekledim garanti olsun)
import Footer from "@/components/Footer";

// --- Animasyon Ayarları ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// --- Bölüm Başlığı Bileşeni ---
const SectionTitle = ({ title, subtitle, icon: Icon, dark = false }) => (
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    className={`text-center mb-12 max-w-3xl mx-auto px-4 ${dark ? "text-white" : "text-slate-900"}`}
  >
    {Icon && (
      <div className={`inline-flex items-center justify-center p-3 mb-4 rounded-xl ${dark ? "bg-white/10 text-white" : "bg-blue-50 text-blue-600"}`}>
        <Icon size={24} />
      </div>
    )}
    <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 font-sans">
      {title}
    </h2>
    <p className={`text-lg font-medium leading-relaxed ${dark ? "text-slate-400" : "text-slate-500"}`}>
      {subtitle}
    </p>
  </motion.div>
);

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="flex flex-col w-full bg-slate-50 relative overflow-hidden font-sans selection:bg-blue-600 selection:text-white">
      
      {/* İlerleme Çubuğu */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* 1. HERO (Giriş) */}
      <div className="bg-white relative z-10">
        <Hero />
      </div>

      {/* 2. GÜVEN BANDI (Siyah Şerit) */}
      <div className="bg-slate-900 border-y border-slate-800 relative z-20 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <Stats />
        </div>
      </div>

      {/* 3. HİZMETLERİMİZ (Hero'nun Hemen Altında) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
           <SectionTitle 
             title="Hizmetlerimiz" 
             subtitle="İşletmenizin ihtiyacı olan tüm mali çözümler tek çatı altında."
           />
           <Services />
        </div>
      </section>

      {/* 4. MEVZUAT HABERLERİ (Yukarı Taşıdık) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
           <SectionTitle 
             title="Güncel Mevzuat" 
             subtitle="Vergi dünyasındaki son gelişmeler ve ekonomik analizler."
             icon={TrendingUp}
           />
           <HomeBlog />
        </div>
      </section>

      {/* 5. DİJİTAL OFİS (KDV ve Takvim - Alt Alta ve Şık) */}
      <section className="py-24 bg-[#0f172a] relative overflow-hidden">
        {/* Arka Plan Efekti */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <SectionTitle 
            dark
            title="Dijital Asistan" 
            subtitle="Ofise gelmeden vergilerinizi hesaplayın, takviminizi yönetin."
            icon={Zap}
          />

          {/* KDV Hesaplama */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-white rounded-[2rem] p-2 shadow-2xl">
              <VatCalculator />
            </div>
          </motion.div>

          {/* Vergi Takvimi */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-slate-800 rounded-[2rem] p-2 shadow-2xl border border-slate-700">
              {/* Takvimi biraz daha modern göstermek için wrapper */}
              <div className="bg-white rounded-[1.5rem] overflow-hidden">
                 <TaxCalendar />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. KURUMSAL KİMLİK (About + Process) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
           <SectionTitle 
             icon={Shield}
             title="Kurumsal Vizyon" 
             subtitle="Rakamların ötesinde, stratejik iş ortağınız olarak büyümenize odaklanıyoruz."
           />
           
           {/* About Kısmı */}
           <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 mb-16 shadow-lg">
              <About />
           </div>

           {/* Nasıl Çalışıyoruz? */}
           <div className="text-center">
             <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest mb-6">
                SÜREÇ YÖNETİMİ
             </div>
             <Process />
           </div>
        </div>
      </section>

      {/* 7. FAYDALI LİNKLER (Sadeleştirilmiş Alan) */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-10">
             <h3 className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
               <MousePointer2 className="text-blue-600" /> Hızlı Erişim Merkezi
             </h3>
           </div>
           <UsefulLinks />
        </div>
      </section>

      {/* 8. SIKÇA SORULAN SORULAR (KDV'nin Altına Alındı) */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
           <SectionTitle 
             dark
             icon={HelpCircle}
             title="Sıkça Sorulan Sorular" 
             subtitle="Mükelleflerimizin en çok merak ettiği konular."
           />
           <div className="bg-slate-800 rounded-3xl p-6 md:p-10 shadow-xl border border-slate-700">
             <Faq />
           </div>
        </div>
      </section>

      {/* 9. İLETİŞİM (Kompakt ve Şık) */}
      <section className="bg-white py-20" id="iletisim">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-6">
            Bizimle İletişime Geçin
          </h2>
          <p className="text-slate-500 text-lg mb-10">
            Profesyonel destek almak için formu doldurun, sizi arayalım.
          </p>
          <div className="bg-slate-50 rounded-[2rem] p-6 md:p-12 border border-slate-100 shadow-xl text-left">
             <Contact />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}