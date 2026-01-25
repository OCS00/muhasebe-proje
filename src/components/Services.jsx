"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  PieChart, 
  FileText, 
  Users, 
  TrendingUp, 
  Landmark, 
  ArrowRight,
  Check
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Şirket Kuruluş & Yapılandırma",
    desc: "Girişiminiz için en doğru hukuki yapıyı (Limited, A.Ş., Şahıs) belirliyor, ana sözleşmeden ticaret sicil tesciline kadar tüm süreci anahtar teslim yönetiyoruz.",
    features: ["Ana Sözleşme Hazırlığı", "Ticaret Odası Tescili", "Vergi Levhası Açılışı", "E-İmza & KEP Temini"],
    color: "blue"
  },
  {
    icon: <PieChart className="w-8 h-8" />,
    title: "Vergi Danışmanlığı & Planlama",
    desc: "Vergi yükünüzü yasal çerçevede optimize ediyor, riskleri minimize ediyor ve teşviklerden maksimum düzeyde yararlanmanızı sağlıyoruz.",
    features: ["Vergi Planlaması", "Risk Analizi", "KDV İadesi", "Teşvik Takibi"],
    color: "indigo"
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Genel Muhasebe & Defter",
    desc: "Tüm mali verilerinizi Tek Düzen Muhasebe Sistemi'ne uygun olarak kaydediyor, yasal defterlerinizi titizlikle tutuyoruz.",
    features: ["Beyanname Düzenleme", "Bilanço & Gelir Tablosu", "BA/BS Mutabakatları", "E-Defter Gönderimi"],
    color: "emerald"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Bordrolama & SGK Yönetimi",
    desc: "Personel süreçlerinizi iş kanununa uygun yönetiyor, maaş hesaplamaları ve SGK bildirgelerini hatasız tamamlıyoruz.",
    features: ["Maaş Bordroları", "İşe Giriş/Çıkış", "Kıdem/İhbar Tazminatı", "SGK Teşvikleri"],
    color: "orange"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Finansal Raporlama & Analiz",
    desc: "Şirketinizin mali sağlığını görebilmeniz için anlaşılır, detaylı ve periyodik yönetim raporları sunuyoruz.",
    features: ["Nakit Akış Tablosu", "Karlılık Analizi", "Bütçe Planlama", "Yönetim Raporları"],
    color: "purple"
  },
  {
    icon: <Landmark className="w-8 h-8" />,
    title: "E-Dönüşüm Danışmanlığı",
    desc: "Dijitalleşen mali dünyaya uyum sağlamanız için E-Fatura, E-Arşiv ve E-Defter süreçlerine geçişinizi yönetiyoruz.",
    features: ["Sistem Kurulumu", "Entegrasyon", "Personel Eğitimi", "Teknik Destek"],
    color: "cyan"
  }
];

export default function Services() {
  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white border-blue-100",
      indigo: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white border-indigo-100",
      emerald: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white border-emerald-100",
      orange: "bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white border-orange-100",
      purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white border-purple-100",
      cyan: "bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white border-cyan-100",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
        >
          {/* Arka Plan Dekorasyon */}
          <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] opacity-20 transition-all duration-500 group-hover:scale-150 ${service.color === 'blue' ? 'bg-blue-500' : 'bg-slate-200'}`}></div>

          <div className="relative z-10 flex flex-col h-full">
            {/* İkon */}
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-500 mb-8 ${getColorClasses(service.color)}`}>
              {service.icon}
            </div>

            {/* Başlık */}
            <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-900 transition-colors">
              {service.title}
            </h3>

            {/* Açıklama */}
            <p className="text-slate-500 leading-relaxed mb-8 flex-grow">
              {service.desc}
            </p>

            {/* Özellikler Listesi */}
            <ul className="space-y-3 mb-8">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-600">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 opacity-50 group-hover:opacity-100 transition-opacity bg-slate-100 text-slate-500`}>
                    <Check size={12} />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Link */}
            <Link 
              href="/hizmetler" 
              className="mt-auto inline-flex items-center gap-2 font-bold text-slate-900 hover:text-blue-600 transition-colors group/link"
            >
              Hizmet Detaylarını İncele
              <ArrowRight size={18} className="transition-transform duration-300 group-hover/link:translate-x-2" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}