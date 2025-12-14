import Link from "next/link";
import { services } from "@/data/servicesData"; // Veriyi doğru import ediyoruz
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Services() {
  return (
    <section id="hizmetler" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Başlık Alanı */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">
            HİZMETLERİMİZ
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-4">
            İşletmeniz İçin <span className="text-primary">En İyi Çözüm</span>
          </h2>
          <p className="text-gray-500">
            Şahıs firmanıza, şirket ihtiyaçlarına ve büyüklüğüne özel hizmetler sunuyoruz.
          </p>
        </div>

        {/* Kartlar - Grid Yapısı (4 Sütun) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* İkon */}
              <div className="mb-6 p-4 bg-gray-50 rounded-full group-hover:bg-primary/10 transition-colors">
                {service.icon}
              </div>

              {/* Başlık */}
              <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Açıklama */}
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Alt Özellikler Listesi */}
              <ul className="text-left w-full space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-500">
                    <CheckCircle2 size={16} className="text-primary mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Buton (Süs amaçlı, tıklanınca iletişime gider) */}
              <Link 
                href="/iletisim" 
                className="mt-auto inline-flex items-center text-primary font-bold text-sm hover:underline"
              >
                Detaylı Bilgi <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}