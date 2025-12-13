import { servicesData } from "@/data/servicesData";
import { siteConfig } from "@/data/siteConfig";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";

// Bu fonksiyon, hangi sayfaların oluşturulacağını belirler (Static Generation)
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetail({ params }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      
      {/* ÜST BAŞLIK ALANI */}
      <div className="bg-primary pt-32 pb-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold font-playfair mb-4">{service.title}</h1>
          <div className="flex justify-center items-center gap-2 text-blue-200 text-sm">
            <Link href="/" className="hover:text-white">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/#hizmetler" className="hover:text-white">Hizmetler</Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* SOL TARAFI: İÇERİK */}
          <div className="lg:col-span-2">
            {/* İkon ve Başlık */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-blue-50 text-primary rounded-lg">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-secondary">Hizmet Detayları</h2>
            </div>

            {/* İçerik Metni (HTML formatında geliyorsa) */}
            <div 
              className="prose prose-lg prose-blue text-secondary-light max-w-none"
              dangerouslySetInnerHTML={{ __html: service.content }} 
            />
            
            {/* Geri Dön Butonu */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <Link href="/#hizmetler" className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                <ArrowLeft size={20} /> Tüm Hizmetlere Dön
              </Link>
            </div>
          </div>

          {/* SAĞ TARAF: YAN MENÜ (Sidebar) */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* İletişim Kutusu */}
            <div className="bg-secondary p-8 rounded-lg text-white text-center">
              <h3 className="text-xl font-bold mb-4">Profesyonel Destek Alın</h3>
              <p className="text-gray-300 mb-6 text-sm">
                İşletmeniz için en doğru mali çözümleri sunmaya hazırız.
              </p>
              <a 
                href={`tel:${siteConfig.phone}`} 
                className="inline-flex items-center justify-center gap-2 w-full bg-primary py-4 rounded font-bold hover:bg-blue-800 transition-colors"
              >
                <Phone size={20} />
                Hemen Arayın
              </a>
            </div>

            {/* Diğer Hizmetler Listesi */}
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-secondary mb-4 border-b pb-2">Diğer Hizmetlerimiz</h3>
              <ul className="space-y-3">
                {servicesData.filter(s => s.slug !== params.slug).map((item) => (
                  <li key={item.slug}>
                    <Link 
                      href={`/uzmanliklar/${item.slug}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors text-sm group"
                    >
                      <CheckCircle2 size={16} className="text-gray-300 group-hover:text-primary" />
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}