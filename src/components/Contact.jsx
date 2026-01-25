"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2, User, Mail, Phone, MessageSquare } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Ad Soyad gereklidir.";
    if (!form.email.match(/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i)) newErrors.email = "Geçerli bir e-posta giriniz.";
    if (!form.phone.match(/^[0-9\s\+\(\)-]{10,}$/)) newErrors.phone = "Geçerli bir telefon giriniz.";
    if (!form.message.trim()) newErrors.message = "Mesajınız boş olamaz.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    // Simüle Edilmiş Gönderim (Backend olmadığı için)
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000); // 5 sn sonra sıfırla
    }, 2000);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  return (
    <div className="w-full relative">
      <AnimatePresence mode="wait">
        
        {/* --- BAŞARI EKRANI --- */}
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center justify-center text-center py-12"
          >
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 animate-bounce">
              <CheckCircle2 size={48} />
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Mesajınız Alındı!</h3>
            <p className="text-slate-500 max-w-md mx-auto">
              Talebiniz bize ulaştı. Uzman ekibimiz en kısa sürede (genellikle 24 saat içinde) sizinle iletişime geçecektir.
            </p>
            <button 
              onClick={() => setStatus("idle")}
              className="mt-8 px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors"
            >
              Yeni Mesaj Gönder
            </button>
          </motion.div>
        ) : (
          
          /* --- FORM EKRANI --- */
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Ad Soyad */}
            <div className="relative group col-span-2 md:col-span-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                <User size={20} />
              </div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Adınız Soyadınız"
                className={`w-full bg-white border-2 rounded-xl py-4 pl-12 pr-4 outline-none transition-all font-medium ${errors.name ? 'border-red-300 focus:border-red-500' : 'border-slate-100 focus:border-blue-500'}`}
              />
              {errors.name && <span className="text-xs text-red-500 mt-1 ml-1 flex items-center gap-1"><AlertCircle size={10}/> {errors.name}</span>}
            </div>

            {/* Telefon */}
            <div className="relative group col-span-2 md:col-span-1">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                <Phone size={20} />
              </div>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Telefon Numaranız"
                className={`w-full bg-white border-2 rounded-xl py-4 pl-12 pr-4 outline-none transition-all font-medium ${errors.phone ? 'border-red-300 focus:border-red-500' : 'border-slate-100 focus:border-blue-500'}`}
              />
              {errors.phone && <span className="text-xs text-red-500 mt-1 ml-1 flex items-center gap-1"><AlertCircle size={10}/> {errors.phone}</span>}
            </div>

            {/* E-Posta */}
            <div className="relative group col-span-2">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                <Mail size={20} />
              </div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="E-Posta Adresiniz"
                className={`w-full bg-white border-2 rounded-xl py-4 pl-12 pr-4 outline-none transition-all font-medium ${errors.email ? 'border-red-300 focus:border-red-500' : 'border-slate-100 focus:border-blue-500'}`}
              />
              {errors.email && <span className="text-xs text-red-500 mt-1 ml-1 flex items-center gap-1"><AlertCircle size={10}/> {errors.email}</span>}
            </div>

            {/* Mesaj */}
            <div className="relative group col-span-2">
              <div className="absolute top-4 left-4 pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors">
                <MessageSquare size={20} />
              </div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                placeholder="Nasıl yardımcı olabiliriz? Konuyu kısaca özetleyiniz."
                className={`w-full bg-white border-2 rounded-xl py-4 pl-12 pr-4 outline-none transition-all font-medium resize-none ${errors.message ? 'border-red-300 focus:border-red-500' : 'border-slate-100 focus:border-blue-500'}`}
              ></textarea>
              {errors.message && <span className="text-xs text-red-500 mt-1 ml-1 flex items-center gap-1"><AlertCircle size={10}/> {errors.message}</span>}
            </div>

            {/* Gönder Butonu */}
            <div className="col-span-2 pt-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-2 ${status === 'loading' ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:-translate-y-1'}`}
              >
                {status === "loading" ? (
                  <> <Loader2 className="animate-spin" /> Gönderiliyor... </>
                ) : (
                  <> Mesajı Gönder <Send size={20} /> </>
                )}
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">
                Formu göndererek, kişisel verilerinizin işlenmesini kabul etmiş sayılırsınız.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}