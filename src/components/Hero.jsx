"use client";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig"; // Yolu kontrol et: data içinde mi src içinde mi?

export default function Hero() {
  return (
    // Arka planı gri-beyaz yaptık (bg-bg-alt)
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-bg-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* YAZILAR */}
          <div className="space-y-8 animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              {siteConfig.title}
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold text-secondary leading-tight">
              İşletmeniz İçin <br />
              <span className="text-primary">Güçlü Finansal</span> Gelecek.
            </h1>
            
            <p className="text-lg text-secondary-light leading-relaxed max-w-lg">
              Karmaşık vergi süreçlerini, bordrolama işlemlerini ve şirket kuruluşunu bize bırakın. 
              Siz sadece işinizi büyütmeye odaklanın.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/iletisim" 
                className="bg-primary text-white px-8 py-4 rounded-md font-bold text-center hover:bg-primary-hover transition-all shadow-lg shadow-blue-900/20"
              >
                Ücretsiz Danışın
              </Link>
              <Link 
                href="/uzmanliklar" 
                className="bg-white text-secondary border border-gray-200 px-8 py-4 rounded-md font-bold text-center hover:bg-gray-50 transition-all"
              >
                Hizmetlerimiz
              </Link>
            </div>
          </div>

          {/* GÖRSEL ALANI */}
          <div className="relative lg:h-[500px] w-full hidden lg:block animate-in slide-in-from-right duration-700">
            {/* Muhasebe Görseli (Unsplash'tan Finans Resmi) */}
            <div className="relative z-10 bg-white p-2 rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop" 
                 alt="Mali Müşavir Masası" 
                 className="rounded-xl w-full h-full object-cover"
               />
            </div>
            {/* Arkadaki Süs */}
            <div className="absolute top-10 -right-10 w-full h-full bg-blue-100 rounded-full blur-3xl -z-10 opacity-60"></div>
          </div>

        </div>
      </div>
    </section>
  );
}