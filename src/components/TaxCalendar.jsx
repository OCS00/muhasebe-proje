"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Clock, CheckCircle2, ChevronRight, AlertCircle, CalendarPlus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- VERİ (Gerçek hayatta bu API'den gelebilir) ---
const taxEvents = [
  { id: 1, title: "KDV Beyannamesi", date: "2024-02-26", desc: "Aylık KDV beyanlarının verilmesi ve ödenmesi." },
  { id: 2, title: "Muhtasar ve Prim", date: "2024-02-26", desc: "Muhtasar ve Prim Hizmet Beyannamesi." },
  { id: 3, title: "Ba-Bs Formları", date: "2024-02-29", desc: "Mal ve hizmet alım/satım bildirimleri." },
  { id: 4, title: "Gelir Vergisi (1. Taksit)", date: "2024-03-31", desc: "Yıllık Gelir Vergisi beyanı ve ilk taksit ödemesi." },
  { id: 5, title: "Kurumlar Vergisi", date: "2024-04-30", desc: "Kurumlar Vergisi beyannamesi verilmesi." },
];

export default function TaxCalendar() {
  const [activeTab, setActiveTab] = useState("upcoming"); // 'upcoming' | 'all'
  const [timeLeft, setTimeLeft] = useState("");
  const [nextEvent, setNextEvent] = useState(null);

  // --- MANTIK: En yakın vergiyi bul ve geri sayım yap ---
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      // Tarihi geçmemiş en yakın olayı bul
      const upcoming = taxEvents
        .map(ev => ({ ...ev, objDate: new Date(ev.date) }))
        .filter(ev => ev.objDate >= now)
        .sort((a, b) => a.objDate - b.objDate)[0];

      if (upcoming) {
        setNextEvent(upcoming);
        const diff = upcoming.objDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        setTimeLeft(`${days} Gün ${hours} Saat`);
      } else {
        setTimeLeft("Bu dönem için vergi takvimi tamamlandı.");
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Her dakika güncelle
    return () => clearInterval(timer);
  }, []);

  // Google Takvim Linki Oluşturucu
  const createCalendarLink = (event) => {
    const text = encodeURIComponent(event.title);
    const details = encodeURIComponent(event.desc);
    const dates = event.date.replace(/-/g, "") + "/" + event.date.replace(/-/g, ""); // Basit format
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}`;
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col h-full">
      
      {/* --- BAŞLIK & GERİ SAYIM KARTI --- */}
      <div className="bg-gradient-to-br from-red-600 to-red-700 p-6 text-white relative overflow-hidden">
        {/* Dekoratif Arka Plan */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-10 translate-x-10 pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-md">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            {nextEvent && (
              <span className="bg-red-800/50 px-3 py-1 rounded-full text-xs font-bold border border-red-400/30 animate-pulse">
                Sıradaki Ödeme
              </span>
            )}
          </div>
          
          <h3 className="text-lg font-bold opacity-90">Vergi Takvimi</h3>
          
          {nextEvent ? (
            <div className="mt-4">
              <p className="text-red-100 text-xs font-medium uppercase tracking-wider mb-1">Kalan Süre</p>
              <h2 className="text-3xl font-black tracking-tight">{timeLeft}</h2>
              <p className="text-sm text-red-100 mt-1 font-medium flex items-center gap-2">
                <ChevronRight size={14} /> {nextEvent.title}
              </p>
            </div>
          ) : (
             <div className="mt-4 text-xl font-bold">Takvim Güncel</div>
          )}
        </div>
      </div>

      {/* --- İÇERİK & LİSTE --- */}
      <div className="p-6 flex-grow flex flex-col">
        
        {/* Filtreleme Butonları */}
        <div className="flex p-1 bg-gray-100 rounded-xl mb-6">
          {["upcoming", "all"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 text-xs font-bold uppercase tracking-wide rounded-lg transition-all ${
                activeTab === tab ? "bg-white text-red-600 shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab === "upcoming" ? "Yaklaşanlar" : "Tüm Liste"}
            </button>
          ))}
        </div>

        {/* Liste Alanı */}
        <div className="space-y-3 overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
          {taxEvents.map((item, index) => {
            const isPast = new Date(item.date) < new Date();
            if (activeTab === "upcoming" && isPast) return null;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`group p-4 rounded-xl border transition-all hover:shadow-md ${
                  isPast 
                    ? "bg-gray-50 border-gray-100 opacity-60 grayscale" 
                    : "bg-white border-gray-100 hover:border-red-200"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${isPast ? "bg-gray-400" : "bg-red-500"}`}></div>
                    <span className="font-bold text-gray-800 text-sm">{item.date.split('-').reverse().join('.')}</span>
                  </div>
                  {/* Takvime Ekle Butonu */}
                  {!isPast && (
                    <a 
                      href={createCalendarLink(item)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-600 transition-colors"
                      title="Google Takvime Ekle"
                    >
                      <CalendarPlus size={16} />
                    </a>
                  )}
                </div>
                
                <h4 className={`font-bold ${isPast ? "text-gray-500 line-through" : "text-gray-900"}`}>
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>

                {isPast && (
                  <div className="mt-2 flex items-center gap-1 text-xs text-green-600 font-bold">
                    <CheckCircle2 size={12} /> Dönem Kapandı
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-400 flex items-center justify-center gap-2">
            <AlertCircle size={12} />
            Resmi tatillerde tarihler değişebilir.
          </p>
        </div>

      </div>
    </div>
  );
}