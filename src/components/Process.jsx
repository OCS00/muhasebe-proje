import { Search, Map, FileText, BarChart } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Analiz & Tanışma",
    desc: "Sektörünüzü ve mali yapınızı analiz ediyor, ihtiyaçlarınızı belirliyoruz.",
    icon: <Search className="w-6 h-6 text-primary" />
  },
  {
    id: 2,
    title: "Yol Haritası",
    desc: "Size en uygun şirket türünü ve vergi avantajlarını planlıyoruz.",
    icon: <Map className="w-6 h-6 text-primary" />
  },
  {
    id: 3,
    title: "Süreç Yönetimi",
    desc: "Kuruluş, beyanname ve SGK işlemlerini hatasız yürütüyoruz.",
    icon: <FileText className="w-6 h-6 text-primary" />
  },
  {
    id: 4,
    title: "Raporlama",
    desc: "Finansal durumunuzu düzenli raporlarla takip etmenizi sağlıyoruz.",
    icon: <BarChart className="w-6 h-6 text-primary" />
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">
            NASIL ÇALIŞIYORUZ?
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary">
            Adım Adım <span className="text-primary">Süreç</span>
          </h2>
        </div>

        {/* DÜZELTME: Kartları 4 yan yana değil, 2'li gruplar halinde geniş yaptık */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex items-start gap-5">
              
              {/* Numara ve İkon */}
              <div className="relative shrink-0">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100">
                  {step.icon}
                </div>
                <span className="absolute -top-3 -right-3 w-6 h-6 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  {step.id}
                </span>
              </div>

              {/* Metin */}
              <div>
                <h3 className="font-bold text-lg text-secondary mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}