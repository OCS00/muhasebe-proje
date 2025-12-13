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
      
      {/* İLETİŞİM BÖLÜMÜ - ARTIK TAMAMEN BEYAZ VE DARALTILDI */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 text-center">
          
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">
            İletişim
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-6">
            Size Nasıl Yardımcı Olabiliriz?
          </h2>
          <p className="text-gray-500 mb-10 mx-auto">
            Aklınıza takılan sorular veya mali danışmanlık talepleriniz için aşağıdaki formu doldurabilirsiniz.
          </p>
          
          {/* Form Alanı */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-left">
            <Contact />
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}