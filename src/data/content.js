import { Calculator, Users, CheckCircle2 } from "lucide-react";

// 1. SIKÇA SORULAN SORULAR (FAQ)
export const faqs = [
  {
    question: "Şirket kurmak ne kadar sürer?",
    answer: "Gerekli evraklar (imza beyannamesi, kira kontratı vb.) tamamlandığında, şahıs şirketleri aynı gün, Limited ve Anonim şirketler ortalama 2-3 iş günü içinde kurulur."
  },
  {
    question: "Aylık muhasebe ücreti neye göre belirlenir?",
    answer: "Mali Müşavirlik ücretleri, her yıl Resmi Gazete'de yayımlanan asgari ücret tarifesi ve firmanızın işlem hacmi (fatura sayısı, personel sayısı) baz alınarak belirlenir."
  },
  {
    question: "Şahıs şirketi mi yoksa Limited şirket mi kurmalıyım?",
    answer: "Yıllık cironuz ve kar beklentiniz düşükse vergi avantajı nedeniyle Şahıs Şirketi; cironuz yüksekse ve kurumsallık ön plandaysa Limited Şirket öneriyoruz. Analiz için bizimle görüşebilirsiniz."
  },
  {
    question: "E-Fatura'ya geçmek zorunlu mu?",
    answer: "Yıllık ciro limitlerini aşan firmalar ve e-ticaret yapanlar için zorunludur. Ancak ciro şartı olmaksızın, kağıt fatura maliyetinden kurtulmak için gönüllü olarak da geçebilirsiniz."
  },
  {
    question: "Home-ofis olarak şirket kurabilir miyim?",
    answer: "Evet, yaptığınız işin niteliği uygunsa (yazılımcı, danışman, tasarımcı vb.) evinizin bir odasını ofis göstererek şahıs veya sermaye şirketi kurabilirsiniz."
  }
];

// 2. MÜŞTERİ YORUMLARI
export const reviews = [
  {
    name: "Ahmet K.",
    title: "Yazılım Şirketi Sahibi",
    text: "Şirket kuruluş sürecimdeki hızları ve e-dönüşüm konusundaki teknik bilgileri sayesinde işime odaklanabildim."
  },
  {
    name: "Selin B.",
    title: "E-Ticaret Girişimcisi",
    text: "Vergi takibi ve SGK teşvikleri konusunda bizi sürekli bilgilendirmeleri sayesinde maliyetlerimizi düşürdük."
  },
  {
    name: "Mehmet Y.",
    title: "İnşaat Firması",
    text: "Yıllardır tüm muhasebe süreçlerimizi titizlikle yönetiyorlar. Güvenilir bir çözüm ortağı."
  }
];

// 3. SÜREÇ ADIMLARI
export const processSteps = [
  {
    title: "1. Belge Teslimi",
    desc: "Aylık evraklarınızı dijital veya fiziksel olarak bize ulaştırırsınız.",
    icon: <Calculator size={32} />
  },
  {
    title: "2. İşleme & Kontrol",
    desc: "Uzman ekibimiz kayıtlarınızı tek düzen hesap planına göre işler.",
    icon: <Users size={32} />
  },
  {
    title: "3. Beyan & Rapor",
    desc: "Vergileriniz tahakkuk ettirilir ve mali durumunuz raporlanır.",
    icon: <CheckCircle2 size={32} />
  }
];