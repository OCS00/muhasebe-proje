"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats"; 
import { Target, ShieldCheck, Users, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* 1. HERO BÖLÜMÜ: ARTIK KESİN MAVİ (bg-blue-900) */}
      <section className="bg-blue-900 py-24 text-white relative overflow-hidden">
         {/* Arka plan süsü */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <span className="text-blue-200 font-bold tracking-widest uppercase text-xs mb-3 block">
            KURUMSAL KİMLİK
          </span>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Rakamların Ötesinde, <br/><span className="text-blue-200">Stratejik Çözüm Ortağınız</span>
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
            Klasik muhasebe anlayışını dijital çağın gereklilikleriyle birleştiriyor; şeffaf, güvenilir ve proaktif bir danışmanlık deneyimi sunuyoruz.
          </p>
        </div>
      </section>

      {/* 2. HİKAYE VE VİZYON */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Sol: Görsel */}
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-50 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gray-100 rounded-full z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000" 
                alt="Ofis Toplantısı" 
                className="relative z-10 rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute bottom-10 -right-10 bg-blue-900 text-white p-6 rounded-xl shadow-xl z-20 hidden md:block border-4 border-white">
                <p className="text-white font-bold text-4xl font-playfair">30</p>
                <p className="text-blue-200 text-xs uppercase tracking-wider font-bold">Yıllık Tecrübe</p>
              </div>
            </div>

            {/* Sağ: Metin */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
                Mali Süreçlerinizi Bir <span className="text-blue-900">Yük Olmaktan Çıkarıyoruz</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                İş dünyası hızla değişiyor. Artık sadece vergi hesaplamak yetmiyor; doğru stratejiyi kurmak gerekiyor. Biz, işletmenizin sadece "muhasebecisi" değil, büyüme yolculuğunuzdaki "mali pusulanız" olmayı hedefliyoruz.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-900 shrink-0" />
                  <span className="text-gray-700 font-medium">Güncel Mevzuat Hakimiyeti</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-900 shrink-0" />
                  <span className="text-gray-700 font-medium">Dijital Muhasebe Altyapısı</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-blue-900 shrink-0" />
                  <span className="text-gray-700 font-medium">Kişiye Özel Butik Danışmanlık</span>
                </div>
              </div>

              <div className="mt-10">
                <Link href="/iletisim" className="bg-blue-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-800 transition-colors inline-flex items-center gap-2 shadow-lg shadow-blue-900/20">
                  Tanışalım <ArrowRight size={18} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. DEĞERLERİMİZ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
              Bizi Farklı Kılan <span className="text-blue-900">Değerlerimiz</span>
            </h2>
            <p className="text-gray-500">
              Güven, şeffaflık ve sürdürülebilirlik üzerine kurulu bir iş modelini benimsiyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Şeffaflık", desc: "Sürpriz maliyetler yok. Tüm süreçlerimiz açık ve anlaşılır.", icon: <ShieldCheck size={40} /> },
              { title: "Odaklanma", desc: "Sektörünüze özel çözümler üreterek riskleri minimize ediyoruz.", icon: <Target size={40} /> },
              { title: "İnovasyon", desc: "Kağıt yığınları arasında değil, dijital sistemlerde çalışıyoruz.", icon: <TrendingUp size={40} /> },
              { title: "Ulaşılabilirlik", desc: "Sorularınıza anında dönüş yapıyor, iletişimde kopukluk yaşatmıyoruz.", icon: <Users size={40} /> },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
                <div className="text-white mb-6 group-hover:scale-110 transition-transform duration-300 bg-blue-900 inline-block p-4 rounded-xl shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Footer />
    </main>
  );
}