"use client";
import Link from "next/link";
import { blogPosts } from "@/data/blogData"; // Hazır veriyi çekiyoruz
import { Calendar, ArrowRight, FileText } from "lucide-react";

export default function HomeBlog() {
  // Sadece ilk 3 haberi alalım
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BAŞLIK ALANI */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 flex items-center gap-2">
              <FileText size={16} />
              Mevzuat & Haberler
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary">
              Vergi Dünyasından <span className="text-primary">Güncel Gelişmeler</span>
            </h2>
          </div>
          
          <Link 
            href="/blog" 
            className="hidden md:flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm hover:gap-4 transition-all"
          >
            Tümünü Gör <ArrowRight size={16} />
          </Link>
        </div>

        {/* HABER KARTLARI */}
        <div className="grid md:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <Link 
              href={`/blog/${post.id}`} 
              key={post.id}
              className="group flex flex-col h-full hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Resim */}
              <div className="h-56 overflow-hidden rounded-xl relative mb-6">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-secondary text-xs font-bold px-3 py-1 rounded-full z-20">
                  {post.category}
                </div>
              </div>

              {/* İçerik */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                
                <span className="text-primary text-sm font-bold uppercase tracking-wider mt-auto flex items-center gap-1 opacity-80 group-hover:opacity-100">
                  Oku <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobil için Tümünü Gör Butonu */}
        <div className="mt-12 text-center md:hidden">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 bg-gray-100 text-secondary px-6 py-3 rounded-full font-bold text-sm"
          >
            Tüm Haberleri İncele
          </Link>
        </div>

      </div>
    </section>
  );
}