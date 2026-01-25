"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ShieldCheck, PieChart, TrendingUp } from "lucide-react";

export default function Hero() {
  // Arka plan şekilleri için animasyon ayarları
  const blobAnimation = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      scale: [1, 1.1, 1],
      rotate: [0, 5, -5, 0],
      transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden pt-20">
      
      {/* --- ARKA PLAN DEKORASYONU (Hareketli Bloblar) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          variants={blobAnimation}
          animate="animate"
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px] mix-blend-multiply" 
        />
        <motion.div 
          variants={blobAnimation}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-[100px] mix-blend-multiply" 
        />
        <motion.div 
          variants={blobAnimation}
          animate="animate"
          transition={{ delay: 4 }}
          className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-indigo-400/20 rounded-full blur-[120px] mix-blend-multiply" 
        />
        {/* Grid Deseni */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{ backgroundSize: '30px 30px', opacity: 0.4 }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* SOL: Yazı ve Butonlar */}
        <div className="flex flex-col gap-8 text-center lg:text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm self-center lg:self-start"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <span className="text-sm font-bold text-slate-600 tracking-wide">Yeni Nesil Mali Müşavirlik</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight font-sans"
          >
            Vergileriniz <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Dert Olmasın.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-lg mx-auto lg:mx-0"
          >
            Geleneksel muhasebeyi dijital çözümlerle birleştiriyoruz. 
            Şirketinizin finansal rotasını belirlerken, siz sadece işinizi büyütmeye odaklanın.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link 
              href="#iletisim" 
              className="group bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/20 hover:shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              Hemen Teklif Al
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#araclar" 
              className="bg-white text-slate-700 px-8 py-4 rounded-xl font-bold text-lg border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all flex items-center justify-center"
            >
              Hesaplama Araçları
            </Link>
          </motion.div>

          {/* Güven Rozetleri */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="pt-8 border-t border-slate-200 flex items-center justify-center lg:justify-start gap-6 opacity-80"
          >
            <div className="flex items-center gap-2">
               <ShieldCheck size={20} className="text-emerald-500" />
               <span className="text-sm font-bold text-slate-600">Resmi Lisanslı</span>
            </div>
            <div className="flex items-center gap-2">
               <TrendingUp size={20} className="text-blue-500" />
               <span className="text-sm font-bold text-slate-600">300+ Referans</span>
            </div>
          </motion.div>
        </div>

        {/* SAĞ: 3D Efektli Görsel Kartlar */}
        <div className="hidden lg:block relative h-[600px]">
           {/* Ana Kart (Ofis Resmi gibi) */}
           <motion.div 
             initial={{ opacity: 0, x: 50, rotate: 6 }}
             animate={{ opacity: 1, x: 0, rotate: 6 }}
             transition={{ duration: 1, delay: 0.5 }}
             className="absolute top-10 right-10 w-4/5 h-4/5 bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border-4 border-white transform rotate-6 z-10"
           >
             {/* Buraya gerçek bir görsel gelebilir, şimdilik modern bir gradient placeholder */}
             <div className="w-full h-full bg-gradient-to-br from-slate-800 to-black relative">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
               <div className="absolute bottom-0 left-0 p-8">
                 <div className="text-white text-2xl font-black mb-2">Profesyonel<br/>Çözümler</div>
                 <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
               </div>
             </div>
           </motion.div>

           {/* Yüzen Kart 1 (İstatistik) */}
           <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 left-0 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-20 w-48"
           >
             <div className="flex items-center gap-3 mb-2">
               <div className="p-2 bg-green-100 rounded-lg text-green-600"><PieChart size={20}/></div>
               <div>
                 <div className="text-xs text-slate-400 font-bold">Vergi İadesi</div>
                 <div className="text-lg font-black text-slate-800">%18</div>
               </div>
             </div>
             <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
               <div className="h-full bg-green-500 w-[70%] rounded-full"></div>
             </div>
           </motion.div>

           {/* Yüzen Kart 2 (Bildirim) */}
           <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 right-0 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-30 flex items-center gap-3"
           >
             <div className="p-3 bg-blue-600 rounded-full text-white">
               <ShieldCheck size={24} />
             </div>
             <div>
               <div className="text-sm font-black text-slate-800">Denetim Tamamlandı</div>
               <div className="text-xs text-slate-500">Tüm belgeler onaylandı.</div>
             </div>
           </motion.div>
        </div>

      </div>

      {/* Aşağı Kaydır İkonu */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}