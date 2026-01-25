"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ExternalLink, 
  Building2, 
  FileText, 
  Globe2, 
  Scale, 
  Briefcase,
  Users // SGK için Users ikonunu ekledik
} from "lucide-react";

const links = [
  {
    title: "GİB İnternet Vergi Dairesi",
    desc: "Vergi borcu sorgulama, beyanname işlemleri ve borcu yoktur yazısı.",
    url: "https://ivd.gib.gov.tr",
    icon: <Building2 size={32} />,
    color: "bg-red-50 text-red-600 hover:bg-red-600 hover:text-white"
  },
  {
    title: "E-Devlet Kapısı",
    desc: "Tüm kamu hizmetlerine tek noktadan güvenli erişim portalı.",
    url: "https://www.turkiye.gov.tr",
    icon: <Globe2 size={32} />,
    color: "bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white"
  },
  {
    title: "SGK İşveren Sistemi",
    desc: "Sigortalı işe giriş-çıkış, e-bildirge ve borç görüntüleme işlemleri.",
    url: "https://uyg.sgk.gov.tr/IsverenSistemi",
    icon: <Users size={32} />, // Burada artık standart Lucide ikonu kullanıyoruz, hata vermez
    color: "bg-orange-50 text-orange-600 hover:bg-orange-600 hover:text-white"
  },
  {
    title: "Ticaret Sicil Gazetesi",
    desc: "Şirket kuruluş, tadil ve kapanış ilanlarının sorgulanması.",
    url: "https://www.ticaretsicil.gov.tr",
    icon: <FileText size={32} />,
    color: "bg-slate-50 text-slate-600 hover:bg-slate-800 hover:text-white"
  },
  {
    title: "KOSGEB E-Hizmetler",
    desc: "Girişimcilik destekleri, hibe başvuruları ve kredi faiz destekleri.",
    url: "https://edevlet.kosgeb.gov.tr",
    icon: <Briefcase size={32} />,
    color: "bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white"
  },
  {
    title: "Resmi Gazete",
    desc: "Yayınlanan yeni kanunlar, tebliğler ve yönetmeliklerin takibi.",
    url: "https://www.resmigazete.gov.tr",
    icon: <Scale size={32} />,
    color: "bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white"
  }
];

export default function UsefulLinks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {links.map((link, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Link 
            href={link.url} 
            target="_blank"
            className="group flex flex-col h-full bg-white p-6 rounded-[2rem] border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            {/* External Icon */}
            <div className="absolute top-6 right-6 text-slate-300 group-hover:text-slate-500 transition-colors">
              <ExternalLink size={20} />
            </div>

            {/* İkon */}
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${link.color}`}>
              {link.icon}
            </div>

            {/* İçerik */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {link.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {link.desc}
              </p>
            </div>

            {/* Alt Çizgi Animasyonu */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}