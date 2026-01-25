import React from 'react';

const services = [
  { title: "Vergi Danışmanlığı", desc: "Mevzuata tam uyum ve vergi optimizasyonu.", icon: "01" },
  { title: "Şirket Kuruluşu", desc: "Limited ve Anonim şirket kuruluş süreçleri.", icon: "02" },
  { title: "Finansal Raporlama", desc: "Aylık ve yıllık detaylı bilanço analizleri.", icon: "03" },
  { title: "SGK & Bordro", desc: "Personel maaş, prim ve bildirge işlemleri.", icon: "04" },
  { title: "KDV İadesi", desc: "İhracat ve indirimli oran iade süreçleri.", icon: "05" },
  { title: "E-Dönüşüm", desc: "E-Fatura, E-Defter geçiş ve teknik destek.", icon: "06" },
];

export default function Services() {
  return (
    <section className="w-full" id="hizmetler">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-200">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-10 border-r border-b border-gray-200 hover:bg-slate-900 transition-colors duration-500 cursor-pointer"
            >
              {/* Numara */}
              <span className="text-4xl font-black text-gray-200 group-hover:text-blue-500 transition-colors font-sans mb-6 block">
                {service.icon}
              </span>
              
              {/* Başlık */}
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white mb-4 font-sans">
                {service.title}
              </h3>
              
              {/* Açıklama */}
              <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* Ok İkonu */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}