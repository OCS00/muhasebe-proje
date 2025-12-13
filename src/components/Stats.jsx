"use client";

const stats = [
  { value: "25+", label: "Yıllık Tecrübe" },
  { value: "400+", label: "Kurumsal Mükellef" },
  { value: "%100", label: "Mevzuat Uyumu" },
  { value: "50+", label: "Sektörel Uzmanlık" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-primary"> {/* Arka plan MAVİ oldu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
          {stats.map((stat, index) => (
            <div key={index} className="p-4 group">
              <div className="text-4xl md:text-5xl font-playfair font-bold text-white mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-blue-100 font-bold uppercase tracking-widest text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}