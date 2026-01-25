"use client";

import React, { useState, useEffect, useRef } from "react";
import { Calculator, Copy, RefreshCcw, History, Trash2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Yardımcı Fonksiyon: Class birleştirici
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Yardımcı Fonksiyon: Para Birimi Formatlayıcı
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 2,
  }).format(amount);
};

export default function VatCalculator() {
  // --- STATE YÖNETİMİ ---
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState(20);
  const [mode, setMode] = useState("hariç"); // 'hariç' | 'dahil'
  const [history, setHistory] = useState([]);
  const [copiedField, setCopiedField] = useState(null);
  
  // Hesaplanan Değerler
  const numericAmount = parseFloat(amount) || 0;
  const [results, setResults] = useState({ base: 0, vat: 0, total: 0 });

  // --- HESAPLAMA MANTIĞI (Effect) ---
  useEffect(() => {
    let base = 0;
    let vat = 0;
    let total = 0;

    if (numericAmount > 0) {
      if (mode === "hariç") {
        base = numericAmount;
        vat = numericAmount * (rate / 100);
        total = base + vat;
      } else {
        base = numericAmount / (1 + rate / 100);
        total = numericAmount;
        vat = total - base;
      }
    }

    setResults({ base, vat, total });
  }, [amount, rate, mode, numericAmount]);

  // --- AKSİYONLAR ---
  
  // Geçmişe Ekleme
  const addToHistory = () => {
    if (results.total === 0) return;
    const newEntry = {
      id: Date.now(),
      amount: numericAmount,
      rate,
      mode,
      total: results.total,
      date: new Date().toLocaleTimeString("tr-TR"),
    };
    setHistory((prev) => [newEntry, ...prev].slice(0, 5)); // Son 5 kayıt
  };

  // Panoya Kopyalama
  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  // Formu Temizle
  const handleReset = () => {
    setAmount("");
    setResults({ base: 0, vat: 0, total: 0 });
  };

  return (
    <div className="w-full bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col h-full">
      
      {/* --- BAŞLIK ALANI --- */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 flex justify-between items-center text-white">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
            <Calculator className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="font-bold text-lg tracking-tight">KDV Hesaplama</h3>
            <p className="text-xs text-slate-400 font-medium">Profesyonel Hesaplayıcı</p>
          </div>
        </div>
        <button 
          onClick={handleReset}
          className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white"
          title="Sıfırla"
        >
          <RefreshCcw className="w-5 h-5" />
        </button>
      </div>

      {/* --- İÇERİK ALANI --- */}
      <div className="p-6 space-y-8 flex-grow">
        
        {/* 1. TUTAR GİRİŞİ */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 ml-1">İşlem Tutarı</label>
          <div className="relative group">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full bg-gray-50 border-2 border-gray-200 text-gray-900 text-2xl font-bold py-4 px-5 rounded-2xl outline-none focus:border-blue-500 focus:bg-white transition-all placeholder:text-gray-300"
            />
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-xl">₺</span>
          </div>
        </div>

        {/* 2. ORAN VE TÜR SEÇİMİ (Grid Yapısı) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* KDV Oranı Seçimi */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">KDV Oranı</label>
            <div className="flex bg-gray-100 p-1.5 rounded-xl">
              {[1, 10, 20].map((r) => (
                <button
                  key={r}
                  onClick={() => setRate(r)}
                  className={cn(
                    "flex-1 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 relative",
                    rate === r ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
                  )}
                >
                  %{r}
                  {rate === r && (
                    <motion.div
                      layoutId="activeRate"
                      className="absolute inset-0 border-2 border-blue-100 rounded-lg pointer-events-none"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Hesaplama Türü (Dahil/Hariç) */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Hesap Türü</label>
            <div className="flex bg-gray-100 p-1.5 rounded-xl">
              {["hariç", "dahil"].map((m) => (
                <button
                  key={m}
                  onClick={() => setMode(m)}
                  className={cn(
                    "flex-1 py-2.5 rounded-lg text-sm font-bold capitalize transition-all duration-200",
                    mode === m ? "bg-slate-800 text-white shadow-md" : "text-gray-500 hover:text-gray-700"
                  )}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3. SONUÇ KARTLARI (Animasyonlu) */}
        <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 space-y-4">
          
          {/* Matrah Satırı */}
          <div className="flex justify-between items-center group">
            <span className="text-gray-500 font-medium">Matrah (KDV'siz)</span>
            <div className="flex items-center gap-3">
              <span className="font-bold text-gray-700 text-lg">{formatCurrency(results.base)}</span>
              <button onClick={() => handleCopy(results.base.toFixed(2), 'base')} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 hover:text-blue-600">
                {copiedField === 'base' ? <CheckCircle2 size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          {/* KDV Satırı */}
          <div className="flex justify-between items-center group">
            <span className="text-gray-500 font-medium">KDV Tutarı</span>
            <div className="flex items-center gap-3">
              <span className="font-bold text-red-500 text-lg">+{formatCurrency(results.vat)}</span>
              <button onClick={() => handleCopy(results.vat.toFixed(2), 'vat')} className="opacity-0 group-hover:opacity-100 transition-opacity text-red-300 hover:text-red-500">
                {copiedField === 'vat' ? <CheckCircle2 size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          {/* Toplam Satırı (Vurgulu) */}
          <div className="pt-4 border-t border-blue-200 flex justify-between items-center group">
            <span className="text-blue-900 font-bold text-lg">GENEL TOPLAM</span>
            <div className="flex items-center gap-3">
              <span className="font-black text-blue-600 text-3xl tracking-tight">
                {formatCurrency(results.total)}
              </span>
              <button onClick={() => handleCopy(results.total.toFixed(2), 'total')} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 hover:text-blue-600">
                {copiedField === 'total' ? <CheckCircle2 size={20} /> : <Copy size={20} />}
              </button>
            </div>
          </div>

          <button 
            onClick={addToHistory}
            disabled={results.total === 0}
            className="w-full mt-4 bg-white border border-blue-200 text-blue-600 py-3 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <History size={16} />
            Sonucu Kaydet
          </button>
        </div>

        {/* 4. GEÇMİŞ (History) BÖLÜMÜ */}
        {history.length > 0 && (
          <div className="pt-6 border-t border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Son İşlemler</h4>
              <button onClick={() => setHistory([])} className="text-xs text-red-400 hover:text-red-600 flex items-center gap-1">
                <Trash2 size={12} /> Temizle
              </button>
            </div>
            <div className="space-y-2">
              <AnimatePresence>
                {history.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex justify-between items-center text-sm p-3 bg-gray-50 rounded-lg border border-gray-100"
                  >
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-700">{formatCurrency(item.total)}</span>
                      <span className="text-[10px] text-gray-400">%{item.rate} KDV {item.mode}</span>
                    </div>
                    <span className="text-xs text-gray-400 font-medium">{item.date}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}