"use client";
import { CheckCircle, Loader2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    const currentDate = new Date().toLocaleString("tr-TR");

    const data = {
      Tarih: currentDate,
      Isim: formData.get("name"),
      Telefon: formData.get("phone"),
      Mesaj: formData.get("message")
    };

    try {
      const response = await fetch(siteConfig.sheetDbUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: data }),
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <div className="w-full">
      {status === "success" ? (
        <div className="text-center py-8 bg-green-50 rounded-lg border border-green-100">
          <CheckCircle size={48} className="text-green-600 mx-auto mb-3" />
          <h3 className="text-xl font-bold text-green-800">Mesajınız İletildi</h3>
          <p className="text-green-600 text-sm mt-1">En kısa sürede size döneceğiz.</p>
          <button onClick={() => setStatus("")} className="mt-4 text-sm font-bold text-green-700 underline">
            Yeni Mesaj
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block ml-1">Ad Soyad</label>
            <input type="text" name="name" required className="w-full bg-gray-50 border border-gray-200 text-gray-800 p-4 rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium" placeholder="Adınız Soyadınız" />
          </div>
          
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block ml-1">Telefon</label>
            <input type="tel" name="phone" required className="w-full bg-gray-50 border border-gray-200 text-gray-800 p-4 rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium" placeholder="05XX XXX XX XX" />
          </div>
          
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block ml-1">Mesajınız</label>
            <textarea name="message" required rows="4" className="w-full bg-gray-50 border border-gray-200 text-gray-800 p-4 rounded-lg outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-medium resize-none" placeholder="Konu hakkında kısa bilgi..."></textarea>
          </div>
          
          <button type="submit" disabled={status === "loading"} className="w-full bg-primary text-white font-bold py-4 rounded-lg uppercase tracking-widest text-sm hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
            {status === "loading" ? <><Loader2 className="animate-spin w-5 h-5" /> Gönderiliyor</> : "GÖNDER"}
          </button>
        </form>
      )}
    </div>
  );
}