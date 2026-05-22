"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  PieChart, 
  Users, 
  Scale, 
  FileText, 
  Check, 
  ArrowRight, 
  Briefcase,
  Calculator,
  Landmark,
  ScrollText,
  BadgeCheck,
  Phone
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- VERİ SETİ: MÜŞAVİRLİK HİZMETLERİ ---
const services = [
  {
    id: "muhasebe",
    title: "Genel Muhasebe & Defter",
    subtitle: "Yasal Mevzuata Tam Uyum",
    icon: <PieChart className="w-6 h-6" />,
    desc: "İşletmenizin ticari faaliyetlerini Tek Düzen Hesap Planı'na uygun olarak kayıt altına alıyor, finansal tablolarınızı uluslararası standartlarda hazırlıyoruz.",
    features: [
      "Yasal Defterlerin Tutulması (Bilanço/İşletme)",
      "KDV, Muhtasar ve Damga Vergisi Beyannameleri",
      "Geçici Vergi ve Kurumlar Vergisi Hazırlığı",
      "Dönem Sonu Kapanış ve Envanter İşlemleri",
      "BA/BS Mutabakatları ve Cari Hesap Kontrolü"
    ]
  },
  {
    id: "danismanlik",
    title: "Vergi & Mali Danışmanlık",
    subtitle: "Stratejik Planlama ve Risk Yönetimi",
    icon: <Scale className="w-6 h-6" />,
    desc: "Vergi kanunlarındaki karmaşık yapıyı sizin için sadeleştiriyoruz. Olası riskleri önceden tespit edip, yasal teşviklerle maliyetlerinizi düşürüyoruz.",
    features: [
      "Şirket Kuruluşu (A.Ş., Ltd., Şahıs) ve Tür Değişikliği",
      "Vergi Planlaması ve Vergi Yükü Analizi",
      "Yatırım Teşvik Belgesi Danışmanlığı",
      "KDV İadesi Süreç Yönetimi",
      "Vergi Uyuşmazlıkları ve Uzlaşma Desteği"
    ]
  },
  {
    id: "bordro",
    title: "Bordrolama & İnsan Kaynakları",
    subtitle: "Personel Süreçlerinde Sıfır Hata",
    icon: <Users className="w-6 h-6" />,
    desc: "Çalışanlarınızın işe girişinden emekliliğine kadar olan tüm süreci yönetiyor, SGK teşviklerinden maksimum düzeyde yararlanmanızı sağlıyoruz.",
    features: [
      "Personel Maaş Bordrolarının Hazırlanması",
      "SGK Bildirgeleri ve İşe Giriş/Çıkış İşlemleri",
      "Kıdem ve İhbar Tazminatı Hesaplamaları",
      "İş Hukuku Danışmanlığı ve Özlük Dosyası",
      "İstihdam Teşvikleri Analizi (6111, 7103 vb.)"
    ]
  },
  {
    id: "denetim",
    title: "İç Denetim & Raporlama",
    subtitle: "Şeffaf ve Ölçülebilir Finans",
    icon: <FileText className="w-6 h-6" />,
    desc: "Şirketinizin finansal sağlığını düzenli olarak kontrol ediyor, yönetime karar alma süreçlerinde destek olacak detaylı raporlar sunuyoruz.",
    features: [
      "Nakit Akış Tabloları ve Bütçe Planlama",
      "Karlılık ve Maliyet Analiz Raporları",
      "İç Kontrol Sisteminin Kurulması",
      "Bankalar İçin Finansal Raporlama (Kredi Süreçleri)",
      "Hile ve Suistimal Denetimi"
    ]
  }
];

// --- SEKTÖRLER ---
const sectors = [
  "İnşaat & Taahhüt", "Uluslararası Taşımacılık", "Üretim & İmalat", 
  "Gıda & Tarım", "Tekstil & Konfeksiyon", "Perakende & Mağazacılık",
  "Sağlık & Medikal", "Enerji & Madencilik", "Turizm & Otelcilik",
  "E-Ticaret & İhracat", "Otomotiv", "Hizmet Sektörü"
];

// --- SIKÇA SORULAN SORULAR ---
const faqs = [
  { q: "Şirket kuruluşu için hangi evraklar gereklidir?", a: "Şirket türüne (Şahıs, Ltd, A.Ş.) göre değişmekle birlikte; kimlik fotokopisi, ikametgah ve kira kontratı temel evraklardır. Vekaletname ile tüm süreci adınıza biz yönetiyoruz." },
  { q: "Mali müşavirlik ücretleri neye göre belirlenir?", a: "Resmi Gazete'de yayımlanan asgari ücret tarifesi baz alınır. İşletmenin defter türü, ciro hacmi, şube sayısı ve personel sayısı ücreti belirleyen faktörlerdir." },
  { q: "Vergi borcum olup olmadığını nasıl öğrenebilirim?", a: "İnteraktif Vergi Dairesi üzerinden sorgulama yapılabilir. Mükelleflerimiz için düzenli borç sorgulaması yapıyor ve ödeme takvimini hatırlatıyoruz." },
  { q: "E-Fatura'ya geçiş zorunlu mu?", a: "Yıllık ciro limitlerine göre zorunluluk vardır. Ancak operasyonel kolaylık ve maliyet avantajı nedeniyle, zorunlu olmasa bile geçiş yapmanızı öneriyoruz." }
];

export default function Hizmetler() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-slate-900 selection:text-white">
      <Navbar />

      {/* --- HERO SECTION: CLEAN CORPORATE --- */}
      <section className="pt-48 pb-24 bg-white relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6 border border-slate-200">
               <BadgeCheck size={14} className="text-blue-600" />
               Profesyonel Çözüm Ortağı
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
              Güvenilir Kayıtlar, <br/>
              <span className="text-blue-700">Güçlü Gelecek.</span>
            </h1>
            
            <p className="text-xl text-slate-500 leading-relaxed font-normal max-w-2xl">
              İşletmenizin sadece defterlerini tutmuyoruz; finansal sürdürülebilirliğinizi sağlamak için 
              mevzuata uygun, şeffaf ve stratejik danışmanlık hizmeti sunuyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- HİZMETLER DETAY (BEYAZ YAKA STİLİ) --- */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <div className="grid lg:grid-cols-12 gap-12">
                
                {/* Sol Taraf: Başlık ve İkon */}
                <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-100 pb-8 lg:pb-0 lg:pr-8">
                   <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-700 mb-6">
                     {service.icon}
                   </div>
                   <h2 className="text-3xl font-bold text-slate-900 mb-3">{service.title}</h2>
                   <p className="text-blue-700 font-medium text-lg mb-4">{service.subtitle}</p>
                   <p className="text-slate-500 leading-relaxed">
                     {service.desc}
                   </p>
                </div>

                {/* Sağ Taraf: Özellik Listesi */}
                <div className="lg:col-span-8 lg:pl-4">
                   <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Hizmet Kapsamı</h3>
                   <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                     {service.features.map((feature, idx) => (
                       <div key={idx} className="flex items-start gap-3">
                          <div className="mt-1 w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0 border border-green-100">
                            <Check size={12} strokeWidth={3} />
                          </div>
                          <span className="text-slate-700 font-medium">{feature}</span>
                       </div>
                     ))}
                   </div>

                   <div className="mt-10 pt-8 border-t border-slate-50 flex items-center gap-4">
                      <a href="/iletisim" className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-blue-700 transition-colors group">
                        Detaylı Bilgi Al <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                      </a>
                   </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SEKTÖREL DENEYİM (MİNİMAL GRID) --- */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">Sektörel Tecrübe</h2>
             <p className="text-slate-400 max-w-2xl mx-auto text-lg">
               Farklı dinamiklere sahip sektörlerin vergi mevzuatına ve işleyişine hakimiz.
             </p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {sectors.map((sector, i) => (
               <div key={i} className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors cursor-default">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="font-medium text-slate-200">{sector}</span>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* --- NEDEN BİZ (SAYILARLA) --- */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid md:grid-cols-4 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
             {[
               { val: "30+", label: "Yıllık Tecrübe" },
               { val: "100+", label: "Aktif Mükellef" },
               { val: "%100", label: "Mevzuat Uyumu" },
               { val: "7/24", label: "Kesintisiz Destek" },
             ].map((stat, i) => (
               <div key={i} className="pt-8 md:pt-0">
                 <div className="text-5xl font-bold text-blue-700 mb-2">{stat.val}</div>
                 <div className="text-slate-500 font-medium uppercase tracking-wide text-sm">{stat.label}</div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* --- SSS (ACCORDION) --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-slate-900 mb-4">Sıkça Sorulan Sorular</h2>
             <p className="text-slate-500">Mükelleflerimizden gelen soruları sizin için derledik.</p>
           </div>

           <div className="space-y-4">
             {faqs.map((item, index) => (
               <div key={index} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                 <button 
                   onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                   className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                 >
                   <span className="font-bold text-slate-900 text-lg">{item.q}</span>
                   <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openFaq === index ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                     <ArrowRight size={16} className="rotate-90" />
                   </div>
                 </button>
                 <AnimatePresence>
                   {openFaq === index && (
                     <motion.div 
                       initial={{ height: 0 }}
                       animate={{ height: "auto" }}
                       exit={{ height: 0 }}
                       className="overflow-hidden"
                     >
                       <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                         {item.a}
                       </div>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* --- CTA (MAVİ KURUMSAL) --- */}
      <section className="py-24 bg-blue-900 text-white text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">İşinizi Profesyonellere Emanet Edin.</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Karmaşık vergi süreçleriyle vakit kaybetmeyin. Biz sizin yerinize tüm finansal süreçleri yönetelim, siz işinizi büyütmeye odaklanın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a href="/iletisim" className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg">
                 <Briefcase size={20} /> Randevu Oluştur
               </a>
               <a href="tel:+905555555555" className="inline-flex items-center justify-center gap-2 bg-blue-800 text-white border border-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors">
                 <Phone size={20} /> Bizi Arayın
               </a>
            </div>
         </div>
      </section>

     
    </div>
  );
}