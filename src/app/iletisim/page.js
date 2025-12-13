import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact"; 
import Faq from "@/components/Faq"; 
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "İletişim",
};

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* 1. HERO BÖLÜMÜ (Devasa Mavi Alan) */}
      <div className="bg-primary pt-48 pb-48 relative overflow-hidden">
        {/* Arka plan desenleri (Premium hissi için) */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -ml-10 -mb-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-blue-200 font-bold tracking-[0.2em] uppercase text-sm mb-4 block animate-pulse">
            Bize Ulaşın
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-playfair text-white mb-6 leading-tight">
            Size Nasıl Yardımcı <br/> Olabiliriz?
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Vergi süreçleri, şirket kuruluşu veya mali danışmanlık ihtiyaçlarınız için
            uzman ekibimizle iletişime geçin. Çözüm üretmek için buradayız.
          </p>
        </div>
      </div>

      {/* 2. YÜZEN KARTLAR (Floating Cards) - Sayfanın yıldızı burası */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Telefon Kartı */}
          <div className="bg-white p-10 rounded-xl shadow-2xl border-b-4 border-primary hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
              <Phone size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-2 font-playfair">Telefon</h3>
            <p className="text-gray-400 text-sm mb-4">Hafta içi 09:00 - 18:00</p>
            <a href={`tel:${siteConfig.phone}`} className="text-xl font-bold text-primary hover:text-blue-800 transition-colors flex items-center gap-2">
              {siteConfig.phone}
            </a>
          </div>

          {/* E-Posta Kartı */}
          <div className="bg-white p-10 rounded-xl shadow-2xl border-b-4 border-primary hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
              <Mail size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-2 font-playfair">E-Posta</h3>
            <p className="text-gray-400 text-sm mb-4">7/24 Bize yazabilirsiniz</p>
            <a href={`mailto:${siteConfig.email}`} className="text-lg font-bold text-primary hover:text-blue-800 transition-colors break-all flex items-center gap-2">
              {siteConfig.email}
            </a>
          </div>

          {/* Ofis Kartı */}
          <div className="bg-white p-10 rounded-xl shadow-2xl border-b-4 border-primary hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
              <MapPin size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-2 font-playfair">Ofis</h3>
            <p className="text-gray-400 text-sm mb-4">İstanbul / Şişli</p>
            <p className="text-gray-600 font-medium leading-relaxed">
              {siteConfig.address}
            </p>
          </div>

        </div>
      </div>

      {/* 3. FORM VE ÇAĞRI ALANI (Geniş ve Modern) */}
      <div className="bg-gray-50 pt-32 pb-24 mt-[-100px]"> {/* Kartların altına denk gelsin diye padding ayarı */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Sol Taraf: Metin */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-secondary font-playfair leading-tight">
                Bir Kahve İçmeye <br/>
                <span className="text-primary underline decoration-4 decoration-blue-200">Bekleriz.</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                İşletmenizin finansal sağlığı için endişelenmeyi bırakın. Profesyonel ekibimizle tanışın, size özel çözümlerimizi anlatalım. 
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm font-bold">01</div>
                  <div>
                    <h4 className="font-bold text-secondary">Randevu Alın</h4>
                    <p className="text-sm text-gray-500">Telefonla veya form üzerinden.</p>
                  </div>
                </div>
                <div className="w-px h-8 bg-gray-300 ml-6"></div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm font-bold">02</div>
                  <div>
                    <h4 className="font-bold text-secondary">Analiz Yapalım</h4>
                    <p className="text-sm text-gray-500">İhtiyaçlarınızı belirleyelim.</p>
                  </div>
                </div>
                <div className="w-px h-8 bg-gray-300 ml-6"></div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm font-bold">03</div>
                  <div>
                    <h4 className="font-bold text-secondary">Çözüm Sunalım</h4>
                    <p className="text-sm text-gray-500">Size en uygun yol haritasını çizelim.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Taraf: Form Componenti */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
               <Contact />
            </div>

          </div>
        </div>
      </div>

      {/* 4. SSS (FAQ) */}
      <div className="bg-white py-24 border-t border-gray-100">
        <Faq />
      </div>

      <Footer />
    </main>
  );
}