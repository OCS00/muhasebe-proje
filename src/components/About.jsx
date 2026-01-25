"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award, Users, TrendingUp, Building2, Quote } from "lucide-react";

export default function About() {
  return (
    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      
      {/* --- SOL TARA: METİN İÇERİĞİ --- */}
      <div className="space-y-10">
        
        {/* Başlık Grubu */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <Building2 size={14} />
            <span>Biz Kimiz?</span>
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
            İşletmenizin Finansal Geleceğini <span className="text-blue-600">Birlikte Tasarlıyoruz.</span>
          </h3>
          <p className="text-slate-500 text-lg leading-relaxed">
            Mali müşavirlik mesleğini sadece defter tutmaktan ibaret görmüyoruz. 
            30 yılı aşkın tecrübemizle, değişen mevzuat ve ekonomik koşullarda işletmelerinize 
            <span className="text-slate-900 font-bold"> stratejik yol arkadaşlığı</span> yapıyoruz. 
            Modern teknolojiyi ve geleneksel güvenilirliği birleştirerek size en doğru çözümleri sunuyoruz.
          </p>
        </div>

        {/* Özellik Listesi (Grid) */}
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { title: "Mevzuat Hakimiyeti", desc: "Güncel yasalara %100 uyum ve risk yönetimi." },
            { title: "Dijital Altyapı", desc: "Bulut tabanlı muhasebe ile 7/24 erişim." },
            { title: "Butik Hizmet", desc: "Her mükellefe özel atanmış danışman." },
            { title: "Teşvik Uzmanlığı", desc: "Hibe ve desteklerden maksimum fayda." }
          ].map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="shrink-0 mt-1">
                <CheckCircle2 className="text-blue-600" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Alıntı Alanı */}
        <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-blue-600 relative">
          <Quote className="absolute top-4 right-4 text-slate-200" size={40} />
          <p className="text-slate-700 italic font-medium relative z-10">
            "Başarılı bir işletmenin arkasında her zaman sağlam bir finansal yönetim vardır. 
            Bizim işimiz, sizin başarınızın temelini oluşturmaktır."
          </p>
          <div className="mt-4 flex items-center gap-3">
             <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
               {/* Avatar resmi buraya gelebilir */}
               <div className="w-full h-full bg-slate-300 flex items-center justify-center text-xs font-bold text-slate-500">M.Y</div>
             </div>
             <div>
               <div className="text-sm font-bold text-slate-900">Yavuz Şahin</div>
               <div className="text-xs text-slate-500">Kurucu Mali Müşavir</div>
             </div>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-4">
           <Link href="/iletisim" className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-xl shadow-slate-900/20">
             Tanışma Randevusu Alın
             <Users size={20} />
           </Link>
        </div>
      </div>

      {/* --- SAĞ TARA: GÖRSEL KOMPOZİSYON --- */}
      <div className="relative">
        
        {/* Arka Plan Şekilleri */}
        <div className="absolute -top-10 -right-10 w-full h-full bg-slate-100 rounded-[3rem] -z-10 rotate-6"></div>
        <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-slate-100 rounded-[3rem] -z-10 -rotate-3"></div>

        {/* Ana Resim Kartı */}
        <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
           <div className="relative h-[600px] w-full rounded-[2rem] overflow-hidden">
             {/* Buraya gerçek ofis resmi gelecek */}
             <img 
               src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" 
               alt="Ofis Ortamı" 
               className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
             
             {/* Resim Üzeri Metin */}
             <div className="absolute bottom-8 left-8 text-white max-w-xs">
                <div className="text-3xl font-black mb-2">1996'dan Beri</div>
                <p className="text-slate-300 text-sm">Sektörde güven, şeffaflık ve istikrarın adresi.</p>
             </div>
           </div>

           {/* Yüzen İstatistik Kartı 1 */}
           <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl animate-bounce-slow">
              <div className="flex items-center gap-4">
                 <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                   <Award size={24} />
                 </div>
                 <div>
                   <div className="text-2xl font-black text-slate-900">30+</div>
                   <div className="text-xs font-bold text-slate-500 uppercase">Yıllık Deneyim</div>
                 </div>
              </div>
           </div>

           {/* Yüzen İstatistik Kartı 2 */}
          
        </div>

      </div>
    </div>
  );
}