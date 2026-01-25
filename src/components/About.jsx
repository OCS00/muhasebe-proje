"use client";
import React from "react";
import { ShieldCheck, Target, Users } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col gap-8">
      {/* Üst Kısım: Başlık ve Yazı */}
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Biz Kimiz?
        </h3>
        <p className="text-slate-500 leading-relaxed mb-6">
          Sektördeki 15 yılı aşkın tecrübemizle, şirketlerin finansal süreçlerini sadece "kayıt tutmak" olarak değil, "geleceği planlamak" olarak görüyoruz. 
          Amacımız; vergi yükünüzü yasal çerçevede minimize ederken, işletmenizin büyüme potansiyelini maksimize etmektir.
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg text-blue-700 font-bold text-sm">
            <ShieldCheck size={18} />
            <span>Güvenilir</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg text-blue-700 font-bold text-sm">
            <Target size={18} />
            <span>Sonuç Odaklı</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg text-blue-700 font-bold text-sm">
            <Users size={18} />
            <span>Uzman Kadro</span>
          </div>
        </div>
      </div>

      {/* Alt Kısım: Görsel veya Vurgu */}
      <div className="bg-slate-900 text-white p-8 rounded-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h4 className="text-xl font-bold mb-2">Tanışmaya Bekleriz</h4>
          <p className="text-slate-300 text-sm mb-6">
            Size özel çözümlerimizi anlatmak için ofisimizde kahve içmeye davetlisiniz.
          </p>
          <Link 
            href="/iletisim" 
            className="inline-block bg-white text-slate-900 px-6 py-2 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors"
          >
            Randevu Alın
          </Link>
        </div>
        {/* Dekoratif Arka Plan */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      </div>
    </div>
  );
}