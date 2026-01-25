import React from "react";
import { ShieldCheck, Target, Users } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Biz Kimiz?</h3>
        <p className="text-slate-500 leading-relaxed mb-6">
          Sektördeki tecrübemizle, şirketlerin finansal süreçlerini "geleceği planlamak" olarak görüyoruz.
        </p>
        {/* Buraya ikonlu özellikler veya detaylı yazı gelebilir */}
      </div>
    </div>
  );
}