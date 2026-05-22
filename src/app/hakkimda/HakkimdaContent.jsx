"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ShieldCheck, 
  Target, 
  TrendingUp, 
  Award, 
  Briefcase,
  Users,
  Building2,
  CheckCircle2,
  ArrowUpRight,
  Layers,
  PieChart
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- KAYAN YAZI METNİ (GENEL KURUMSAL) ---
const marqueeText = "Mali Müşavirlik • Vergi Danışmanlığı • Şirket Kuruluşu • SGK Teşvikleri • E-Dönüşüm • Finansal Raporlama • ";

// --- TARİHÇE ---
const timelineData = [
  { year: "2010", title: "Kuruluş", desc: "Mersin'de temellerimizi attık. İlk günden itibaren 'güven' odaklı çalışmayı ilke edindik." },
  { year: "2015", title: "Büyüme Dönemi", desc: "Mükellef portföyümüzü genişleterek inşaattan perakendeye farklı sektörlere hizmet vermeye başladık." },
  { year: "2019", title: "Dijitalleşme", desc: "Ofis içi süreçlerimizi tamamen dijitalleştirerek kağıtsız, bulut tabanlı sisteme geçiş yaptık." },
  { year: "2024", title: "Genişleyen Aile", desc: "Bugün 100'den fazla aktif mükellefimizle, Mersin'in en dinamik mali müşavirlik ofislerinden biriyiz." },
];

// --- DEĞERLER (BENTO GRID İÇİN) ---
const values = [
  {
    title: "Sektör Bağımsız Uzmanlık",
    desc: "İnşaat, gıda, tekstil, teknoloji veya hizmet... Hangi sektörde olursanız olun, mevzuatınıza hakimiz.",
    col: "md:col-span-2",
    bg: "bg-blue-600 text-white"
  },
  {
    title: "Gizlilik Esastır",
    desc: "Finansal verileriniz bizimle 'devlet sırrı' niteliğindedir. KVKK uyumlu altyapı.",
    col: "md:col-span-1",
    bg: "bg-white text-slate-900 border border-slate-200"
  },
  {
    title: "100+ Mutlu Mükellef",
    desc: "Yıllardır bizimle çalışan, büyüyen kocaman bir aileyiz.",
    col: "md:col-span-1",
    bg: "bg-slate-900 text-white"
  },
  {
    title: "Proaktif Yaklaşım",
    desc: "Sorunlar çıkmadan önce önlem alır, sizi cezai risklerden koruyan kalkan oluruz.",
    col: "md:col-span-2",
    bg: "bg-slate-50 text-slate-900 border border-slate-200"
  }
];

// --- ALT BİLEŞENLER ---
const Marquee = () => (
  <div className="relative flex overflow-hidden py-6 bg-slate-900 border-y border-slate-800">
    <motion.div 
      className="flex whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
    >
      {[...Array(4)].map((_, i) => (
        <span key={i} className="text-3xl md:text-5xl font-black text-white/20 mx-8 uppercase tracking-tighter">
          {marqueeText}
        </span>
      ))}
    </motion.div>
  </div>
);

const StatCard = ({ label, value, sub }) => (
  <div className="flex flex-col items-center justify-center p-8 border-r last:border-r-0 border-white/10 group hover:bg-white/5 transition-colors duration-300">
    <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter group-hover:text-blue-400 transition-colors">{value}</div>
    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</div>
    <div className="text-xs text-slate-600">{sub}</div>
  </div>
);

export default function Hakkimda() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const yHero = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="bg-white min-h-screen font-sans selection:bg-blue-600 selection:text-white overflow-hidden">
      <Navbar />

      {/* --- HERO: PRESTİJLİ GİRİŞ --- */}
      <section className="relative h-screen flex items-center justify-center bg-[#0f172a] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        
        <motion.div 
          style={{ y: yHero, opacity: opacityHero }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-blue-300 text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Güvenilir Çözüm Ortağınız
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white leading-[1.1] tracking-tight mb-8">
              İŞİNİZİN <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">
                FİNANSAL GÜCÜ.
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-slate-400 font-light max-w-3xl mx-auto leading-relaxed">
              100'den fazla işletmenin güvenle çalıştığı, her sektöre özel çözümler üreten, <span className="text-white font-medium">deneyimli ve dinamik</span> bir yapıyız.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
        </motion.div>
      </section>

      {/* --- MARQUEE --- */}
      <Marquee />

      {/* --- BİZ KİMİZ (GENEL TANITIM) --- */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
                Her Sektörün <br/>
                <span className="text-blue-600">Dilinden Anlıyoruz.</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Yavuz Şahin Mali Müşavirlik olarak, tek bir alana sıkışıp kalmadık. Üretimden hizmete, perakendeden teknolojiye kadar geniş bir yelpazede uzmanlaştık.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                    <Layers className="w-8 h-8 text-blue-600 mb-2" />
                    <div className="font-bold text-slate-900">Çok Yönlü Hizmet</div>
                 </div>
                 <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                    <PieChart className="w-8 h-8 text-blue-600 mb-2" />
                    <div className="font-bold text-slate-900">Analitik Çözümler</div>
                 </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="prose prose-lg text-slate-500 leading-8">
                <p>
                  Mersin merkezli ofisimizde, bölgenin ve Türkiye'nin dört bir yanındaki işletmelere profesyonel mali danışmanlık hizmeti sunuyoruz. Bizim için her mükellef, ayrı bir başarı hikayesidir. Küçük bir şahıs işletmesinden, büyük ölçekli bir sanayi kuruluşuna kadar herkes aynı özeni ve profesyonelliği hak eder.
                </p>
                <p>
                  Ekonomik konjonktürün ve vergi mevzuatının sürekli değiştiği günümüzde, işletmenizin rotasını doğru çizmek hayati önem taşır. Biz, karmaşık kanun maddelerini sizin için sadeleştiriyor, işinize odaklanmanızı sağlıyoruz.
                </p>
              </div>

              <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900 mb-4">Mükellef Portföyümüz</h4>
                <div className="flex flex-wrap gap-3">
                  {["İnşaat", "Gıda", "Tekstil", "E-Ticaret", "Sağlık", "Otomotiv", "Hizmet", "Turizm", "Üretim"].map((sec, i) => (
                    <span key={i} className="px-4 py-2 bg-white text-blue-600 rounded-lg text-sm font-bold shadow-sm">
                      {sec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- DEĞERLER (BENTO GRID) --- */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Prensibimiz</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2">Neden Bizi Tercih Etmelisiniz?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <motion.div 
                key={i} 
                className={`${val.col} ${val.bg} p-10 rounded-[2.5rem] relative overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="relative z-10">
                  <div className="mb-6 p-3 bg-white/10 w-fit rounded-xl backdrop-blur-sm">
                    <ArrowUpRight size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4">{val.title}</h3>
                  <p className="opacity-80 text-lg leading-relaxed">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- İSTATİSTİK (KOYU BÖLÜM) --- */}
      <section className="py-24 bg-[#0b1120] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
             <StatCard label="Mükellef Sayısı" value="100+" sub="Aktif Çalışılan" />
             <StatCard label="Sektörel Tecrübe" value="15+" sub="Yılın Birikimi" />
             <StatCard label="Mevzuat Uyumu" value="%100" sub="Sıfır Hata Payı" />
             <StatCard label="Memnuniyet" value="Yüksek" sub="Uzun Soluklu İşbirlikleri" />
          </div>
        </div>
      </section>

      {/* --- ZAMAN TÜNELİ --- */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black text-slate-900">Yolculuğumuz</h2>
          </div>
          <div className="space-y-12 border-l-2 border-slate-100 ml-4 md:ml-0 md:pl-0">
            {timelineData.map((item, i) => (
              <div key={i} className="relative pl-8 md:pl-0 flex flex-col md:flex-row items-center md:gap-12 group">
                <div className={`md:w-1/2 text-left md:text-right ${i % 2 !== 0 ? "md:order-2 md:text-left" : ""}`}>
                   <span className="text-6xl font-black text-slate-100 group-hover:text-blue-50 transition-colors duration-300">
                     {item.year}
                   </span>
                </div>
                <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] w-3 h-3 rounded-full bg-blue-600 ring-4 ring-white z-10"></div>
                <div className={`md:w-1/2 ${i % 2 !== 0 ? "md:order-1 md:text-right" : ""}`}>
                   <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                   <p className="text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
}