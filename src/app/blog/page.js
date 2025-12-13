import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogData"; // Blog verilerini çekiyoruz
import { Calendar, ArrowRight } from "lucide-react";

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* BAŞLIK */}
      <div className="bg-gray-50 pt-32 pb-20 text-center border-b border-gray-200">
        <h1 className="text-4xl font-bold text-secondary font-playfair mb-4">Mali Müşavirlik Bloğu</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Vergi mevzuatı, SGK teşvikleri ve şirket yönetimi hakkında güncel bilgiler ve makaleler.
        </p>
      </div>

      {/* YAZI LİSTESİ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              href={`/blog/${post.id}`} 
              key={post.id}
              className="group bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Resim Alanı */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              
              {/* İçerik */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-1 text-primary text-sm font-bold uppercase tracking-wider mt-auto">
                  Devamını Oku <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}