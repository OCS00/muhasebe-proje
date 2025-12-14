"use client";
import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Tarayıcı hafızasına bak, daha önce kabul etmiş mi?
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Etmediyse 1 saniye sonra göster
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    // Kabul edince hafızaya kaydet, bir daha sorma
    localStorage.setItem("cookieConsent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900/95 backdrop-blur-md text-white p-4 shadow-2xl z-50 border-t border-gray-700 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3 text-sm text-gray-300 text-center md:text-left">
          <div className="p-2 bg-gray-800 rounded-full shrink-0">
            <Cookie size={20} className="text-yellow-500" />
          </div>
          <p>
            <span className="font-bold text-white">Çerez Politikası:</span> Size daha iyi hizmet sunmak ve site trafiğini analiz etmek için çerezleri (cookies) kullanıyoruz.
          </p>
        </div>

        <div className="flex gap-3">
          <button 
            onClick={acceptCookies}
            className="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap shadow-lg shadow-blue-900/20"
          >
            Kabul Et
          </button>
          <button 
            onClick={() => setShow(false)} 
            className="p-2 hover:bg-gray-800 rounded-full transition-colors text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

      </div>
    </div>
  );
}