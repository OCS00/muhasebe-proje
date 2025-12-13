import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats"; // Sayaçları buraya da koyduk
import { ShieldCheck, TrendingUp, Users, Clock } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata = {
  title: "Hakkımızda",
};

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* 1. HERO (BAŞLIK) */}
      <div className="bg-primary pt-40 pb-20 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-4 relative z-10">Hakkımızda</h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto relative z-10">
          Güven, Şeffaflık ve Çözüm Odaklı Mali Danışmanlık
        </p>
      </div>

      {/* 2. HİKAYE & VİZYON */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-blue-50 rounded-lg -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop" 
              alt="Mali Müşavir Ofisi" 
              className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-secondary font-playfair">
              İşletmenizin <span className="text-primary">Finansal Pusulası</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              SMMM {siteConfig.name} olarak, 25 yılı aşkın süredir işletmelerin büyüme yolculuklarına eşlik ediyoruz. Klasik muhasebe anlayışının ötesine geçerek, işletmenizin finansal röntgenini çekiyor ve stratejik kararlarınızda size rehberlik ediyoruz.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Teknolojiyi iş süreçlerimizin merkezine koyuyoruz. E-Dönüşüm, dijital raporlama ve bulut tabanlı muhasebe sistemleri konusundaki uzmanlığımızla, size zaman ve maliyet avantajı sağlıyoruz.
            </p>
          </div>
        </div>
      </div>

      {/* 3. NEDEN BİZ? (KUTULAR) */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-secondary font-playfair">Neden Bizi Seçmelisiniz?</h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck size={32} />, title: "Güvenilir Hizmet", desc: "Verileriniz ve ticari sırlarız bizimle güvende." },
              { icon: <TrendingUp size={32} />, title: "Büyüme Odaklı", desc: "Sadece kayıt tutmuyor, büyümenizi planlıyoruz." },
              { icon: <Users size={32} />, title: "Uzman Kadro", desc: "Alanında uzman, dinamik ve tecrübeli ekip." },
              { icon: <Clock size={32} />, title: "Zamanında İşlem", desc: "Beyannameler ve bildirgeler tam zamanında." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border-b-4 border-primary">
                <div className="text-primary mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. RAKAMLARLA BİZ */}
      <Stats />

      {/* 5. ALT ÇAĞRI (CTA) */}
      <div className="bg-secondary py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">İşinizi Büyütmeye Hazır mısınız?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Karmaşık vergi süreçlerini bize bırakın, siz sadece işinize odaklanın. Tanışmak için kahveye bekleriz.
        </p>
        <a href="/iletisim" className="bg-primary text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition-colors">
          Bize Ulaşın
        </a>
      </div>

      <Footer />
    </main>
  );
}