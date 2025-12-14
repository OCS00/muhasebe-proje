"use client";
import { services } from "@/data/servicesData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* 🔥 ÜST BAŞLIK ALANI: bg-gray-50 YERİNE bg-blue-900 YAPTIK */}
      <section className="bg-blue-900 py-24 text-white border-b border-blue-800 relative overflow-hidden">
        {/* Hafif bir arka plan efekti ekleyelim */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Hizmetlerimiz
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            İşletmenizin büyümesi, kurumsallaşması ve yasal süreçlerin hatasız ilerlemesi için profesyonel çözümler sunuyoruz.
          </p>
        </div>
      </section>

      {/* Hizmet Kartları */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-start hover:-translate-y-1"
              >
                {/* İkon */}
                <div className="p-4 bg-blue-50 text-blue-900 rounded-xl group-hover:bg-blue-900 group-hover:text-white transition-colors shrink-0">
                  {service.icon}
                </div>

                {/* İçerik */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Özellik Listesi */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600 font-medium">
                        <CheckCircle2 size={16} className="text-blue-900 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href="/iletisim" className="inline-flex items-center text-sm font-bold text-blue-900 hover:underline">
                    Teklif Alın <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Alt Çağrı Alanı (Burayı da aynı mavi yapalım ki bütünlük olsun) */}
      <section className="bg-blue-900 py-20 border-t border-blue-800 text-white text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-playfair font-bold text-white mb-4">
            Özel Bir Çözüme mi İhtiyacınız Var?
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Sektörünüze ve şirket yapınıza uygun butik danışmanlık hizmetlerimiz için kahve içmeye bekleriz.
          </p>
          
          <Link 
            href="/iletisim" 
            className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg"
          >
            <Phone size={20} />
            Hemen Arayın
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}