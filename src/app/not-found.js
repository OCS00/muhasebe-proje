import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="text-center px-4">
          <div className="w-24 h-24 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
            <FileQuestion size={48} />
          </div>
          
          <h1 className="text-4xl font-bold font-playfair text-secondary mb-4">
            Sayfa Bulunamadı
          </h1>
          
          <p className="text-gray-500 mb-8 max-w-md mx-auto">
            Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir. 
            Ana sayfaya dönerek işlemlerinize devam edebilirsiniz.
          </p>
          
          <Link 
            href="/" 
            className="inline-block bg-primary text-white px-8 py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-blue-900 transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}