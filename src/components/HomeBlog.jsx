"use client";
import { useEffect, useState } from "react";
import { Calendar, ArrowRight, Rss, Loader2, ExternalLink, FileText } from "lucide-react";

export default function HomeBlog() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        // Ön belleği engellemek için zaman damgası ekliyoruz
        const res = await fetch(`/api/haberler?t=${Date.now()}`);
        const data = await res.json();
        if (Array.isArray(data)) {
          setNews(data);
        }
      } catch (error) {
        console.error("Haber hatası:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BAŞLIK */}
        <div className="mb-12">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 flex items-center gap-2">
            <Rss size={16} />
            Canlı Akış
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary">
            Mevzuat & <span className="text-primary">Güncel Haberler</span>
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Kaynak: TÜRMOB & Resmi Kurumlar
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-primary w-10 h-10" />
          </div>
        ) : (
          /* HABER KARTLARI (Resimsiz - İkonlu Tasarım) */
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-primary/20 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
              >
                {/* Üst Renkli Çizgi */}
                <div className={`absolute top-0 left-0 w-full h-1 ${index === 0 ? 'bg-red-500' : index === 1 ? 'bg-blue-500' : 'bg-orange-500'}`}></div>

                {/* İkon ve Tarih */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-xl transition-colors bg-gray-50 group-hover:text-white ${index === 0 ? 'group-hover:bg-red-500' : index === 1 ? 'group-hover:bg-blue-500' : 'group-hover:bg-orange-500'}`}>
                    <FileText size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                    <Calendar size={12} />
                    {item.date}
                  </div>
                </div>
                
                {/* Başlık ve İçerik */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6">
                    {item.content}
                  </p>
                </div>

                {/* Alt Link */}
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between text-sm font-bold text-gray-400 group-hover:text-primary transition-colors">
                  <span>Kaynağa Git</span>
                  <ExternalLink size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}