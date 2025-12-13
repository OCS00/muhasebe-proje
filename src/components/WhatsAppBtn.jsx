"use client";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function WhatsAppBtn() {
  // Telefon numarasındaki boşlukları ve +'yı temizle
  const cleanPhone = siteConfig.phone.replace(/[^0-9]/g, "");

  return (
    <a
      href={`https://wa.me/${cleanPhone}?text=Merhaba, mali müşavirlik hizmetleri hakkında bilgi almak istiyorum.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 group flex items-center gap-2"
    >
      <MessageCircle size={28} fill="white" className="text-green-500" />
      {/* Hover olunca çıkan yazı (İsteğe bağlı) */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
        WhatsApp'tan Yazın
      </span>
    </a>
  );
}