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
        <div className="bg-white p-8 text-center rounded-xl border border-green-100">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-secondary">Mesajınız Alındı!</h3>
          <p className="text-gray-500 mt-2">En kısa sürede dönüş yapacağız.</p>
          <button onClick={() => setStatus("")} className="mt-6 text-primary font-bold underline">
            Yeni Mesaj Gönder
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input 
              type="text" 
              name="name" 
              required 
              className="w-full bg-gray-50 border border-gray-200 text-secondary p-4 rounded-sm outline-none focus:border-primary focus:ring-1 transition-all" 
              placeholder="Adınız Soyadınız" 
            />
          </div>
          
          <div>
            <input 
              type="tel" 
              name="phone" 
              required 
              className="w-full bg-gray-50 border border-gray-200 text-secondary p-4 rounded-sm outline-none focus:border-primary focus:ring-1 transition-all" 
              placeholder="Telefon Numaranız" 
            />
          </div>
          
          <div>
            <textarea 
              name="message" 
              required 
              rows="4" 
              className="w-full bg-gray-50 border border-gray-200 text-secondary p-4 rounded-sm outline-none focus:border-primary focus:ring-1 transition-all" 
              placeholder="Mesajınız..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={status === "loading"} 
            className="w-full bg-primary text-white font-bold py-4 uppercase tracking-widest text-sm hover:bg-blue-900 transition-all rounded-sm flex items-center justify-center gap-2"
          >
            {status === "loading" ? <><Loader2 className="animate-spin" /> Gönderiliyor</> : "GÖNDER"}
          </button>
        </form>
      )}
    </div>
  );
}