"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  Filter, 
  AlertCircle, 
  ChevronRight, 
  Download, 
  BellRing, 
  CheckCircle2, 
  ArrowRight,
  CalendarDays,
  FileText,
  PieChart
} from "lucide-react";

// --- DİNAMİK TARİH HESAPLAYICI ---
// Bu fonksiyonlar sayesinde takvim her zaman güncel kalır (2025, 2026 fark etmez)
const getNextDate = (dayOfMonth) => {
  const today = new Date();
  let targetDate = new Date(today.getFullYear(), today.getMonth(), dayOfMonth);
  
  // Eğer bu ayki tarih geçtiyse, bir sonraki aya at
  if (targetDate < today) {
    targetDate = new Date(today.getFullYear(), today.getMonth() + 1, dayOfMonth);
  }
  
  // YYYY-MM-DD formatına çevir
  return targetDate.toISOString().split('T')[0];
};

const getLastDayOfMonth = () => {
  const today = new Date();
  let lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0); // Bu ayın son günü
  
  if (lastDay < today) {
    lastDay = new Date(today.getFullYear(), today.getMonth() + 2, 0); // Gelecek ayın son günü
  }
  return lastDay.toISOString().split('T')[0];
};

// --- OTOMATİK OLUŞTURULAN VERİ SETİ ---
// Her render'da güncel tarihleri hesaplar
const generateTaxEvents = () => [
  { 
    id: 1, 
    title: "KDV Beyannamesi", 
    date: getNextDate(28), // Her ayın 28'i (veya bir sonrakini bulur)
    category: "Beyanname", 
    priority: "high", 
    desc: "Aylık KDV beyannamelerinin verilmesi ve tahakkuk eden vergilerin ödenmesi." 
  },
  { 
    id: 2, 
    title: "Muhtasar ve Prim Hizmet", 
    date: getNextDate(26), // Her ayın 26'sı
    category: "Beyanname", 
    priority: "high", 
    desc: "Ücret ödemeleri, kira stopajı ve SGK primlerinin tek beyanname ile bildirilmesi." 
  },
  { 
    id: 3, 
    title: "SGK Prim Ödemesi", 
    date: getLastDayOfMonth(), // Her ayın son günü
    category: "Ödeme", 
    priority: "medium", 
    desc: "4/a kapsamında çalışan personellerin cari ay sigorta primlerinin ödenmesi." 
  },
  { 
    id: 4, 
    title: "Form Ba-Bs Bildirimi", 
    date: getLastDayOfMonth(), // Her ayın son günü
    category: "Bildirim", 
    priority: "low", 
    desc: "Belirlenen limiti aşan mal/hizmet alım ve satımlarının vergi dairesine bildirilmesi." 
  },
  { 
    id: 5, 
    title: "Geçici Vergi", 
    date: getNextDate(17), // Ayın 17'si (Normalde 3 ayda birdir ama demo için her ayın 17'si gibi dinamik yaptık)
    category: "Beyanname", 
    priority: "high", 
    desc: "Ticari kazançlar üzerinden hesaplanan geçici verginin beyanı ve ödemesi." 
  },
  { 
    id: 6, 
    title: "E-Defter Beratı", 
    date: getLastDayOfMonth(), // Ayın son günü
    category: "E-Dönüşüm", 
    priority: "medium", 
    desc: "İlgili döneme ait E-Defter beratlarının GİB sistemine yüklenmesi ve onaylanması." 
  },
];

// --- YARDIMCI FONKSİYONLAR ---
const getCategoryIcon = (cat) => {
  switch (cat) {
    case "Beyanname": return <FileText size={14} />;
    case "Ödeme": return <PieChart size={14} />;
    case "E-Dönüşüm": return <Download size={14} />;
    default: return <CalendarDays size={14} />;
  }
};

export default function TaxCalendar() {
  const [filter, setFilter] = useState("Tümü");
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });
  const [notificationStatus, setNotificationStatus] = useState("idle");
  const [events, setEvents] = useState([]);

  // Sayfa yüklendiğinde güncel tarihleri oluştur
  useEffect(() => {
    setEvents(generateTaxEvents());
  }, []);

  // En yakın tarihi bul
  const upcomingEvent = useMemo(() => {
    if (events.length === 0) return null;
    return events.sort((a, b) => new Date(a.date) - new Date(b.date))[0];
  }, [events]);

  // Filtrelenmiş Liste
  const filteredEvents = useMemo(() => {
    if (filter === "Tümü") return events;
    return events.filter(e => e.category === filter);
  }, [filter, events]);

  // Geri Sayım Sayacı
  useEffect(() => {
    if (!upcomingEvent) return;

    const calculateTime = () => {
      const difference = +new Date(upcomingEvent.date) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 60000);
    return () => clearInterval(timer);
  }, [upcomingEvent]);

  // Bildirim Simülasyonu
  const handleSetReminder = (e) => {
    e.stopPropagation();
    setNotificationStatus("loading");
    setTimeout(() => {
      setNotificationStatus("sent");
      setTimeout(() => setNotificationStatus("idle"), 3000);
    }, 1500);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col h-full bg-white relative">
      
      {/* --- ÜST PANEL --- */}
      <div className="bg-[#0f172a] p-8 pb-12 relative overflow-hidden text-white rounded-t-[2rem]">
        {/* Dekoratif Arka Plan */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-600 rounded-full blur-[60px] opacity-10 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3 animate-pulse">
                <AlertCircle size={14} />
                Sıradaki Kritik İşlem
              </div>
              <h3 className="text-2xl md:text-3xl font-black leading-tight mb-2">
                {upcomingEvent?.title || "Yükleniyor..."}
              </h3>
              <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                {upcomingEvent?.desc.substring(0, 80)}...
              </p>
            </div>
            
            {/* Büyük Tarih Kutusu */}
            {upcomingEvent && (
              <div className="hidden md:block text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 min-w-[100px]">
                 <div className="text-3xl font-black">{new Date(upcomingEvent.date).getDate()}</div>
                 <div className="text-xs font-bold uppercase text-slate-400">
                   {new Date(upcomingEvent.date).toLocaleString('tr-TR', { month: 'short' })}
                 </div>
                 <div className="text-[10px] text-blue-400 font-bold mt-1 border-t border-white/10 pt-1">
                   {new Date(upcomingEvent.date).getFullYear()}
                 </div>
              </div>
            )}
          </div>

          {/* Geri Sayım Widget'ı */}
          <div className="flex items-center gap-4 bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50 backdrop-blur-sm">
            <div className="p-3 bg-blue-600 rounded-xl shadow-lg shadow-blue-900/50">
              <Clock className="text-white" size={24} />
            </div>
            <div className="flex gap-6 text-center">
              <div>
                <div className="text-2xl font-black font-mono">{timeLeft.days}</div>
                <div className="text-[10px] uppercase text-slate-400 font-bold">Gün</div>
              </div>
              <div className="w-px h-full bg-slate-700"></div>
              <div>
                <div className="text-2xl font-black font-mono">{timeLeft.hours}</div>
                <div className="text-[10px] uppercase text-slate-400 font-bold">Saat</div>
              </div>
              <div className="w-px h-full bg-slate-700"></div>
              <div>
                <div className="text-2xl font-black font-mono">{timeLeft.minutes}</div>
                <div className="text-[10px] uppercase text-slate-400 font-bold">Dk</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- ALT PANEL --- */}
      <div className="flex-grow bg-slate-50 relative -mt-6 rounded-t-[2rem] p-6 md:p-8 flex flex-col gap-6 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.2)]">
        
        {/* Filtreler */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {["Tümü", "Beyanname", "Ödeme", "Bildirim", "E-Dönüşüm"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 border ${
                filter === cat
                  ? "bg-slate-900 text-white border-slate-900 shadow-md"
                  : "bg-white text-slate-500 border-slate-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Liste */}
        <div className="space-y-3 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event) => {
              const isSelected = selectedEventId === event.id;
              const dateObj = new Date(event.date);

              return (
                <motion.div
                  key={event.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onClick={() => setSelectedEventId(isSelected ? null : event.id)}
                  className={`group bg-white rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                    isSelected 
                      ? "border-blue-500 shadow-xl shadow-blue-900/5 ring-1 ring-blue-500" 
                      : "border-slate-200 hover:border-blue-300 hover:shadow-md"
                  }`}
                >
                  <div className="p-5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Tarih İkonu */}
                      <div className={`flex flex-col items-center justify-center w-14 h-14 rounded-xl border ${
                        event.priority === 'high' ? 'bg-red-50 border-red-100 text-red-600' : 
                        event.priority === 'medium' ? 'bg-orange-50 border-orange-100 text-orange-600' : 
                        'bg-blue-50 border-blue-100 text-blue-600'
                      }`}>
                        <span className="text-xl font-black leading-none">{dateObj.getDate()}</span>
                        <span className="text-[10px] font-bold uppercase">{dateObj.toLocaleString('tr-TR', { month: 'short' })}</span>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-wide bg-slate-100 px-2 py-0.5 rounded-md">
                            {getCategoryIcon(event.category)}
                            {event.category}
                          </span>
                          {event.priority === 'high' && (
                            <span className="text-[10px] font-bold text-red-500 flex items-center gap-1">
                              <AlertCircle size={10} /> Kritik
                            </span>
                          )}
                        </div>
                        <h4 className={`font-bold text-base transition-colors ${isSelected ? 'text-blue-600' : 'text-slate-800'}`}>
                          {event.title}
                        </h4>
                      </div>
                    </div>

                    <ChevronRight 
                      className={`text-slate-300 transition-transform duration-300 ${isSelected ? 'rotate-90 text-blue-500' : 'group-hover:translate-x-1'}`} 
                      size={20} 
                    />
                  </div>

                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-slate-50/50 border-t border-slate-100"
                      >
                        <div className="p-5 pt-2 text-sm text-slate-500 leading-relaxed">
                          <p className="mb-4">{event.desc}</p>
                          <div className="flex gap-3">
                            <button 
                              onClick={handleSetReminder}
                              className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-2.5 rounded-lg font-bold text-xs hover:bg-slate-800 transition-all active:scale-95"
                            >
                              {notificationStatus === "sent" ? (
                                <> <CheckCircle2 size={14} className="text-green-400"/> Hatırlatıcı Eklendi </>
                              ) : (
                                <> <BellRing size={14} /> Takvime Ekle </>
                              )}
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 py-2.5 rounded-lg font-bold text-xs hover:bg-slate-50 transition-all">
                               <Download size={14} /> Detay PDF
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
          
          {filteredEvents.length === 0 && (
            <div className="text-center py-10 text-slate-400">
              <Filter size={32} className="mx-auto mb-2 opacity-20" />
              <p>Bu kategoride işlem bulunamadı.</p>
            </div>
          )}
        </div>
        
        <div className="text-center pt-2">
           <button className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors group">
             {currentYear} Yılı Resmi Takvimi
             <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>

      </div>
    </div>
  );
}