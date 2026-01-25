"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search, MessageCircle } from "lucide-react";

const allFaqs = [
  {
    category: "Kuruluş",
    q: "Şirket kuruluşu için hangi belgeler gerekli?",
    a: "Şirket türüne (Limited, A.Ş., Şahıs) göre değişmekle birlikte; kimlik fotokopisi, ikametgah, kira kontratı ve imza beyannamesi temel evraklardır. Detaylı liste için ofisimizle iletişime geçebilirsiniz."
  },
  {
    category: "Genel",
    q: "Şahıs şirketi mi Limited şirket mi kurmalıyım?",
    a: "Cironuz, iş modeliniz ve ortaklık yapınız belirleyicidir. Yıllık cironuz belirli bir limitin altındaysa ve tek başınaysanız Şahıs şirketi vergi avantajı sağlar. Ancak kurumsallık ve prestij için Limited şirket önerilir."
  },
  {
    category: "Vergi",
    q: "Genç Girişimci desteğinden kimler yararlanabilir?",
    a: "18-29 yaş arası, ilk defa mükellefiyet açan girişimciler; 3 yıl boyunca yıllık 150.000 TL'ye kadar gelir vergisinden muaf tutulur ve 1 yıl boyunca Bağ-Kur primleri devlet tarafından ödenir."
  },
  {
    category: "E-Dönüşüm",
    q: "E-Fatura kullanmak zorunlu mu?",
    a: "2023 yılı brüt satış hasılatı 3 Milyon TL ve üzeri olan mükellefler için zorunludur. Ayrıca e-ticaret yapanlar için limitler daha düşüktür."
  },
  {
    category: "Maliyet",
    q: "Aylık muhasebe ücretleri neye göre belirleniyor?",
    a: "İşlem hacminiz, çalışan sayınız, fatura adediniz ve faaliyet gösterdiğiniz sektöre göre Mali Müşavirler Odası'nın belirlediği asgari tarife üzerinden hesaplanır."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  // Arama Filtresi
  const filteredFaqs = allFaqs.filter(item => 
    item.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-8">
      
      {/* --- ARAMA KUTUSU --- */}
      <div className="relative">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="text-slate-500" size={20} />
        </div>
        <input 
          type="text" 
          placeholder="Sorunuzu arayın (örn: şirket kuruluşu, vergi...)" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-blue-500 focus:bg-slate-900 transition-all placeholder:text-slate-600"
        />
      </div>

      {/* --- SORU LİSTESİ --- */}
      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index 
                  ? "bg-slate-800 border-blue-500/50 shadow-lg shadow-blue-900/10" 
                  : "bg-slate-800/20 border-slate-700/50 hover:bg-slate-800/40"
              }`}
            >
              <button
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left gap-4"
              >
                <div className="flex items-start gap-4">
                  <span className={`mt-1 p-2 rounded-lg text-xs font-bold uppercase tracking-wider hidden sm:block ${
                    openIndex === index ? "bg-blue-500/20 text-blue-400" : "bg-slate-700 text-slate-400"
                  }`}>
                    {item.category}
                  </span>
                  <span className={`font-bold text-lg leading-snug transition-colors ${
                    openIndex === index ? "text-white" : "text-slate-300"
                  }`}>
                    {item.q}
                  </span>
                </div>
                
                <span className={`p-2 rounded-full transition-all shrink-0 ${
                  openIndex === index ? "bg-blue-600 text-white rotate-180" : "bg-slate-700 text-slate-400"
                }`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-6 sm:pl-24 pr-8">
                       <p className="text-slate-400 leading-relaxed border-l-2 border-slate-600 pl-4 py-1">
                         {item.a}
                       </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-10 text-slate-500">
            <MessageCircle size={48} className="mx-auto mb-4 opacity-20" />
            <p>Aradığınız kriterde soru bulunamadı.</p>
            <button onClick={() => setSearchTerm("")} className="text-blue-500 font-bold mt-2">Tümünü Göster</button>
          </div>
        )}
      </div>

      <div className="text-center mt-4">
        <p className="text-slate-400 text-sm">
          Aradığınız cevabı bulamadınız mı? 
          <a href="/iletisim" className="text-blue-400 font-bold ml-1 hover:text-blue-300 hover:underline">
            Bize Danışın
          </a>
        </p>
      </div>

    </div>
  );
}