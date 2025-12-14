import { Search, Map, FileText, BarChart } from "lucide-react"; // 🔥 EKSİK OLAN BU SATIRDI

const steps = [
  {
    id: 1,
    title: "Mevcut Durum Analizi",
    desc: "Önce sizi dinliyoruz. Şirketinizin mali yapısını, sektör risklerini ve vergi avantajlarını detaylıca inceliyoruz.",
    icon: <Search className="w-8 h-8 text-white" />
  },
  {
    id: 2,
    title: "Stratejik Planlama",
    desc: "Size özel yol haritası çıkarıyoruz. Vergi optimizasyonu ve teşviklerden yararlanmanız için en uygun modeli kurguluyoruz.",
    icon: <Map className="w-8 h-8 text-white" />
  },
  {
    id: 3,
    title: "Süreç Yönetimi",
    desc: "Yasal defterler, beyannameler ve SGK bildirgelerinizi mevzuata tam uyumlu ve hatasız şekilde yönetiyoruz.",
    icon: <FileText className="w-8 h-8 text-white" />
  },
  {
    id: 4,
    title: "Raporlama & Büyüme",
    desc: "Sadece vergi ödemeyi değil, kar etmeyi hedefliyoruz. Düzenli finansal raporlarla büyümenize rehberlik ediyoruz.",
    icon: <BarChart className="w-8 h-8 text-white" />
  }
];

export default function Process() {
  return (
    <section id="surec" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">
            ÇALIŞMA MODELİMİZ
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary">
            Süreç Nasıl <span className="text-primary">İşliyor?</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Karmaşık mali süreçleri sizin için basitleştiriyor, adım adım başarıya giden yolu çiziyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative group">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center z-10 relative">
                
                {/* İkon Kutusu */}
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold text-secondary mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>

                {/* Adım Numarası (Arka Planda Silik) */}
                <span className="absolute top-4 right-4 text-6xl font-black text-gray-50 -z-10 select-none group-hover:text-blue-50 transition-colors">
                  {step.id}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}