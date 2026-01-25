"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PageHeader({ title, subtitle, badge }) {
  return (
    <div className="relative bg-[#0f172a] pt-40 pb-20 overflow-hidden">
      {/* Arka Plan Efektleri */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              {badge}
            </div>
          )}
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  );
}