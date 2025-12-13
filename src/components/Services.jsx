"use client";
import Link from "next/link";
import { servicesData } from "@/data/servicesData"; // Veriyi buradan alıyoruz

export default function Services() {
  return (
    <section className="py-24 bg-gray-50" id="uzmanliklar"> {/* Arka plan açık gri */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">
            Çözüm Alanlarımız
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-6">
            Profesyonel Mali Hizmetler
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <Link 
              href={`/uzmanliklar/${service.slug}`}
              key={index} 
              className="group p-8 bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 rounded-sm transition-all duration-300 hover:-translate-y-2 flex flex-col items-start"
            >
              {/* İkon Kutusu */}
              <div className="w-14 h-14 bg-blue-50 text-primary flex items-center justify-center rounded-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-playfair font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-secondary-light leading-relaxed text-sm mb-6 line-clamp-3">
                {service.shortDesc}
              </p>
              
              <div className="mt-auto text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 opacity-80 group-hover:opacity-100">
                İncele <span className="text-lg leading-none">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}