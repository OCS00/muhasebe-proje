import React from 'react';

// İstatistik Verileri
const stats = [
  { label: "MUTLU MÜKELLEF", value: "250+" },
  { label: "YILLIK TECRÜBE", value: "15+" },
  { label: "TAMAMLANAN DENETİM", value: "1200+" },
  { label: "UZMAN KADRO", value: "8 Kişi" },
  { label: "ŞİRKET KURULUŞU", value: "500+" },
  { label: "SEKTÖREL ÇÖZÜM", value: "20+" },
];

export default function Stats() {
  return (
    <div className="w-full overflow-hidden bg-transparent">
      {/* Sonsuz kaydırma animasyonu */}
      <div className="flex animate-scroll w-max whitespace-nowrap">
        
        {/* GRUP 1 */}
        <div className="flex items-center gap-16 mx-8">
          {stats.map((stat, index) => (
            <div key={`s1-${index}`} className="flex items-center gap-3 group cursor-default">
              {/* İkon / Nokta */}
              <div className="w-3 h-3 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-300"></div>
              
              <div className="flex flex-col">
                {/* 🔥 FONT DEĞİŞİKLİĞİ BURADA: font-inter ve font-black (Ekstra Kalın) */}
                <span className="text-4xl md:text-6xl font-black text-white font-inter tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm font-bold text-blue-200 font-inter tracking-widest uppercase">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* GRUP 2 (Döngü İçin Kopya) */}
        <div className="flex items-center gap-16 mx-8">
          {stats.map((stat, index) => (
            <div key={`s2-${index}`} className="flex items-center gap-3 group cursor-default">
              <div className="w-3 h-3 rounded-full bg-blue-500 group-hover:scale-150 transition-transform duration-300"></div>
              
              <div className="flex flex-col">
                {/* 🔥 AYNI DEĞİŞİKLİK BURADA DA VAR */}
                <span className="text-4xl md:text-6xl font-black text-white font-inter tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm font-bold text-blue-200 font-inter tracking-widest uppercase">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
