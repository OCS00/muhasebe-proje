import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import HomeBlog from "@/components/HomeBlog"; 
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <HomeBlog />
      <Faq />
      
      {/* İLETİŞİM BÖLÜMÜ - MAVİ ARKA PLAN KALDIRILDI */}
      <section className="bg-gray-50 py-24 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">
            İletişim
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-6">
            Size Nasıl Yardımcı Olabiliriz?
          </h2>
          <p className="text-gray-500 mb-10 max-w-lg mx-auto">
            Aklınıza takılan sorular veya mali danışmanlık talepleriniz için aşağıdaki formu doldurabilirsiniz.
          </p>
          
          {/* Form Alanı (Sade Beyaz Kutu) */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
            <Contact />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}