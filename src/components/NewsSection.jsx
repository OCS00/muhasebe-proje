'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NewsSection() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        // API'ye istek atıyoruz
        const res = await fetch('/api/haberler');
        const data = await res.json();
        
        if (data.success && Array.isArray(data.data)) {
          setNews(data.data);
        }
      } catch (error) {
        console.error('Haber yüklenemedi:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  // Tarihi Türkçe formatına çeviren fonksiyon
  const formatDate = (dateString) => {
    try {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('tr-TR', options);
    } catch (e) {
      return dateString;
    }
  };

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200" id="haberler">
      <div className="max-w-7xl mx-auto px-6">
        


        {/* Yükleniyor Durumu */}
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          /* Haber Kartları */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Link 
                href={item.link} 
                target="_blank" 
                key={index}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                    {item.source}
                  </span>
                  <span className="text-gray-400 text-xs">
                    {formatDate(item.pubDate)}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {item.content}
                </p>

                <div className="mt-auto text-blue-600 text-sm font-semibold group-hover:underline">
                  Haberi Oku &rarr;
                </div>
              </Link>
            ))}
          </div>
        )}
        
        {/* Haber bulunamazsa */}
        {!loading && news.length === 0 && (
          <p className="text-center text-gray-500">Şu an güncel haber bulunamadı.</p>
        )}

      </div>
    </section>
  );
}