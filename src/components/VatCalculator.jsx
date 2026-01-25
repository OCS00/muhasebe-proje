"use client";

import React, { useState, useEffect } from "react";
import { Calculator, Copy, RefreshCcw, History, Trash2, CheckCircle2, ArrowRightLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Para birimi formatlayıcı (Türk Lirası)
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export default function VatCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState(20);
  const [mode, setMode] = useState("hariç"); // 'hariç' | 'dahil'
  const [history, setHistory] = useState([]);
  const [copied, setCopied] = useState(null);

  // Hesaplama Mantığı
  const numericAmount = parseFloat(amount) || 0;
  let base = 0, vat = 0, total = 0;

  if (numericAmount > 0) {
    if (mode === "hariç") {
      base = numericAmount;
      vat = numericAmount * (rate / 100);
      total = base + vat;
    } else {
      // Dahil hesaplama formülü: Tutar / (1 + (Oran/100))
      base = numericAmount / (1 + rate / 100);
      total = numericAmount;
      vat = total - base;
    }
  }

  // Geçmişe Kaydetme Fonksiyonu
  const addToHistory = () => {
    if (numericAmount <= 0) return;
    
    // Aynı işlemi tekrar eklememek için kontrol
    if (history.length > 0 && history[0].total === total && history[0].mode === mode) return;

    const newEntry = {
      id: Date.now(),
      base,
      vat,
      total,
      rate,
      mode,
      time: new Date().toLocaleTimeString("tr-TR", { hour: '2-digit', minute: '2-digit' })
    };
    
    // En son 5 işlemi tut
    setHistory(prev => [newEntry, ...prev].slice(0, 5));
  };

  // Kopyalama Fonksiyonu
  const handleCopy = (val, key) => {
    navigator.clipboard.writeText(val);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  // Tutar değiştiğinde otomatik geçmişe atmasın, kullanıcı butona basınca atsın
  // veya "Enter" tuşuna basınca atsın. Biz buton koyacağız.

  return (
    <div className="flex flex-col h-full bg-white relative">
      
      {/* --- HEADER --- */}
      <div className="bg-[#0f172a] p-8 pb-12 rounded-t-[2rem] relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600 rounded-full blur-[60px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-md border border-white/10">
              <Calculator className="text-blue-400" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">KDV Hesaplama</h3>
              <p className="text-slate-400 text-xs font-medium">Hızlı & Hatasız</p>
            </div>
          </div>
          <button 
            onClick={() => { setAmount(""); setHistory([]); }}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
            title="Tümünü Sıfırla"
          >
            <RefreshCcw size={18} />
          </button>
        </div>
      </div>

      {/* --- BODY --- */}
      <div className="flex-grow bg-slate-50 relative -mt-6 rounded-t-[2rem] p-6 md:p-8 flex flex-col gap-6 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
        
        {/* INPUT ALANI */}
        <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg">₺</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full text-right text-3xl font-black text-slate-900 bg-transparent py-4 pr-4 pl-10 focus:outline-none placeholder:text-slate-200"
            />
          </div>
        </div>

        {/* KONTROLLER (Grid Yapısı) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Oran Seçimi */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">KDV Oranı</label>
            <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
              {[1, 10, 20].map((r) => (
                <button
                  key={r}
                  onClick={() => setRate(r)}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all relative overflow-hidden ${
                    rate === r 
                      ? "text-blue-600 bg-blue-50 ring-1 ring-blue-200" 
                      : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  %{r}
                  {rate === r && (
                    <motion.div 
                      layoutId="activeRate"
                      className="absolute inset-0 bg-blue-100/50 mix-blend-multiply"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Dahil/Hariç Seçimi */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Hesaplama Türü</label>
            <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
              {[
                { id: "hariç", label: "KDV Hariç" },
                { id: "dahil", label: "KDV Dahil" }
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMode(m.id)}
                  className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all relative ${
                    mode === m.id 
                      ? "bg-slate-900 text-white shadow-md" 
                      : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SONUÇ KARTI */}
        <div className="bg-gradient-to-br from-white to-blue-50/50 border border-blue-100 rounded-[1.5rem] p-6 relative overflow-hidden group">
           {/* Arka plan süsü */}
           <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>

           <div className="space-y-4 relative z-10">
             {/* Matrah */}
             <div className="flex justify-between items-center pb-3 border-b border-dashed border-blue-200">
               <span className="text-slate-500 text-sm font-medium">Matrah</span>
               <div className="flex items-center gap-2 group/copy">
                 <span className="font-bold text-slate-700 text-lg tracking-tight">{formatCurrency(base)}</span>
                 <button onClick={() => handleCopy(base.toFixed(2), 'base')} className="text-slate-300 hover:text-blue-500 transition-colors">
                    {copied === 'base' ? <CheckCircle2 size={16} className="text-green-500"/> : <Copy size={16}/>}
                 </button>
               </div>
             </div>

             {/* KDV Tutarı */}
             <div className="flex justify-between items-center pb-3 border-b border-dashed border-blue-200">
               <span className="text-slate-500 text-sm font-medium">KDV (%{rate})</span>
               <div className="flex items-center gap-2">
                 <span className="font-bold text-red-500 text-lg tracking-tight">+{formatCurrency(vat)}</span>
                 <button onClick={() => handleCopy(vat.toFixed(2), 'vat')} className="text-slate-300 hover:text-red-500 transition-colors">
                    {copied === 'vat' ? <CheckCircle2 size={16} className="text-green-500"/> : <Copy size={16}/>}
                 </button>
               </div>
             </div>

             {/* Genel Toplam */}
             <div className="flex justify-between items-center pt-1">
               <span className="text-slate-900 font-bold text-sm">TOPLAM</span>
               <div className="flex items-center gap-2">
                 <span className="font-black text-blue-700 text-2xl tracking-tight">{formatCurrency(total)}</span>
                 <button onClick={() => handleCopy(total.toFixed(2), 'total')} className="text-blue-200 hover:text-blue-600 transition-colors">
                    {copied === 'total' ? <CheckCircle2 size={20} className="text-green-500"/> : <Copy size={20}/>}
                 </button>
               </div>
             </div>
           </div>
        </div>

        {/* Aksiyon Butonu */}
        <button 
          onClick={addToHistory}
          disabled={total === 0}
          className="w-full py-3 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <History size={16} /> Sonucu Kaydet
        </button>

        {/* GEÇMİŞ LİSTESİ */}
        <AnimatePresence>
          {history.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Son İşlemler</span>
                <button onClick={() => setHistory([])} className="text-[10px] text-red-400 hover:text-red-600 flex items-center gap-1">
                  <Trash2 size={10} /> Temizle
                </button>
              </div>
              
              <div className="space-y-2">
                {history.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex justify-between items-center bg-white border border-slate-100 p-3 rounded-xl hover:border-blue-200 transition-colors"
                  >
                    <div>
                      <div className="font-bold text-slate-700 text-sm">{formatCurrency(item.total)}</div>
                      <div className="text-[10px] text-slate-400 flex items-center gap-1">
                         %{item.rate} {item.mode} <span className="w-1 h-1 rounded-full bg-slate-300"></span> {item.time}
                      </div>
                    </div>
                    <div className="bg-slate-50 px-2 py-1 rounded-md text-[10px] font-bold text-slate-500 border border-slate-100">
                      KDV: {formatCurrency(item.vat)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}