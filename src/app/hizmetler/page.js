import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Hizmetlerimiz",
};

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* 1. HERO */}
      <div className="bg-primary pt-40 pb-20 text-center text-white relative">
        <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-4">Hizmetlerimiz</h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">
          İşletmenizin ihtiyaç duyduğu tüm mali ve hukuki çözümler tek çatı altında.
        </p>
      </div>

      {/* 2. HİZMET KARTLARI (GRID) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-10">
          {servicesData.map((service, index) => (
            <div key={index} className="group bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-50 text-primary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                  <Link 
                    href={`/uzmanliklar/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:gap-3 transition-all"
                  >
                    Detaylı İncele <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. SÜREÇ (NASIL ÇALIŞIYORUZ) */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary font-playfair">Çalışma Sürecimiz</h2>
            <p className="text-gray-500 mt-4">Sizin için karmaşık olanı, biz basitleştiriyoruz.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm relative">
              <div className="text-6xl font-bold text-gray-100 absolute top-4 right-4">01</div>
              <h3 className="text-xl font-bold text-secondary mb-3 relative z-10">Analiz & Planlama</h3>
              <p className="text-gray-500 relative z-10">İşletmenizi dinliyor, sektörünüze uygun vergi ve muhasebe modelini kurguluyoruz.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm relative">
              <div className="text-6xl font-bold text-gray-100 absolute top-4 right-4">02</div>
              <h3 className="text-xl font-bold text-secondary mb-3 relative z-10">Uygulama</h3>
              <p className="text-gray-500 relative z-10">Aylık belge akışını düzenliyor, beyannameleri hazırlıyor ve yasal süreçleri yönetiyoruz.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm relative">
              <div className="text-6xl font-bold text-gray-100 absolute top-4 right-4">03</div>
              <h3 className="text-xl font-bold text-secondary mb-3 relative z-10">Raporlama</h3>
              <p className="text-gray-500 relative z-10">Her ay düzenli finansal raporlarla işletmenizin durumunu net bir şekilde görmenizi sağlıyoruz.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4. HANGİ SEKTÖRLER? */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-secondary rounded-2xl p-12 text-white flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Hizmet Verdiğimiz Sektörler</h2>
            <p className="text-gray-300 leading-relaxed">
              Teknolojiden inşaata, e-ticaretten sağlığa kadar geniş bir yelpazede yüzlerce firmaya mali danışmanlık hizmeti sunuyoruz. Sektörel teşviklere hakimiz.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {["E-Ticaret", "Yazılım & Teknoloji", "İnşaat & Gayrimenkul", "Sağlık & Medikal", "Üretim & Sanayi", "Perakende"].map((sector) => (
              <div key={sector} className="flex items-center gap-2 bg-white/10 p-4 rounded-lg">
                <CheckCircle2 className="text-primary" size={20} />
                <span className="font-medium">{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}