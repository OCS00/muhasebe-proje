"use client";
import React from "react";
import { Search, FileSignature, TrendingUp, CheckCheck } from "lucide-react";

const steps = [
  {
    icon: <Search size={24} />,
    title: "Analiz",
    desc: "İhtiyaçlarınızı dinliyor ve mali yapınızı analiz ediyoruz."
  },
  {
    icon: <FileSignature size={24} />,
    title: "Planlama",
    desc: "Size en uygun şirket yapısını ve vergi modelini belirliyoruz."
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Uygulama",
    desc: "Resmi süreçleri başlatıyor ve tüm bürokrasiyi yönetiyoruz."
  },
  {
    icon: <CheckCheck size={24} />,
    title: "Raporlama",
    desc: "Düzenli raporlarla finansal durumunuzu takip ediyoruz."
  }
];

export default function Process() {
  return (
    <div className="grid md:grid-cols-4 gap-6 relative">
      {/* Çizgi (Sadece Masaüstü) */}
      <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 -z-10"></div>
      
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center text-center group">
          <div className="w-20 h-20 bg-white rounded-full border-4 border-slate-50 shadow-lg flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-100 transition-all duration-300 mb-6 bg-white">
            {step.icon}
          </div>
          <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
          <p className="text-sm text-slate-500 max-w-[200px] leading-relaxed">
            {step.desc}
          </p>
        </div>
      ))}
    </div>
  );
}