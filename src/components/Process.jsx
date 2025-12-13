import { FileInput, Calculator, PieChart, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "1. Belge Transferi",
    desc: "Faturalarınızı ve evraklarınızı dijital ortamda veya elden bize ulaştırırsınız.",
    icon: <FileInput size={32} />
  },
  {
    title: "2. İşleme ve Kontrol",
    desc: "Uzman ekibimiz evraklarınızı mevzuata uygun şekilde muhasebeleştirir.",
    icon: <Calculator size={32} />
  },
  {
    title: "3. Raporlama",
    desc: "Vergisel durumunuz ve mali tablolarınız size raporlanır, sürpriz yaşamazsınız.",
    icon: <PieChart size={32} />
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">
            Nasıl Çalışıyoruz?
          </span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-secondary mb-6">
            Aylık Muhasebe Döngüsü
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Bağlantı Çizgisi (Masaüstü) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              {/* İkon Kutusu */}
              <div className="w-24 h-24 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center text-primary mb-6 shadow-lg group-hover:scale-110 group-hover:border-primary transition-all duration-500 z-10">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-playfair font-bold text-secondary mb-3">
                {step.title}
              </h3>
              <p className="text-secondary-light text-sm leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}