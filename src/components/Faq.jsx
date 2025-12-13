"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/content"; // Veriyi buradan çekiyoruz

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // İlki açık gelsin

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* BAŞLIK */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">
            Aklınızdaki Sorular
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-6">
            Sıkça Sorulan Sorular
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* SORULAR */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-sm transition-all duration-300 ${
                openIndex === index 
                  ? "bg-blue-50 border-primary/30 shadow-md" // Açıkken Mavimtırak
                  : "bg-white border-gray-200 hover:border-primary/50" // Kapalıyken Beyaz
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`font-bold text-lg transition-colors ${
                  openIndex === index ? "text-primary" : "text-secondary"
                }`}>
                  {faq.question}
                </span>
                
                {openIndex === index ? (
                  <div className="bg-primary text-white rounded-full p-1 shadow-sm">
                    <Minus size={16} strokeWidth={3} />
                  </div>
                ) : (
                  <div className="bg-gray-100 text-gray-500 rounded-full p-1 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Plus size={16} strokeWidth={3} />
                  </div>
                )}
              </button>
              
              {/* Cevap Alanı */}
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-secondary-light leading-relaxed text-sm border-t border-primary/10 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}