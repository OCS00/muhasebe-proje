import { Calculator, TrendingUp, FileSearch, LifeBuoy } from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Muhasebe & Defter",
    description: "İşletmenizin tüm finansal hareketlerinin Tek Düzen Hesap Planı ve Vergi Usul Kanunu'na (VUK) uygun olarak kayıt altına alınması, yasal defterlerin tutulması ve beyanname süreçlerinin yönetilmesi.",
    icon: <Calculator size={48} className="text-primary" />,
    features: ["Yasal Defter Kayıtları", "KDV, Muhtasar, Kurumlar Beyannameleri", "Maliyet Muhasebesi", "E-Defter & E-Fatura Süreçleri"]
  },
  {
    id: 2,
    title: "Vergi & Mali Danışmanlık",
    description: "Şirketinizin vergi yükünü yasal çerçevede optimize etmek, vergi risklerini önceden tespit etmek ve teşviklerden maksimum düzeyde yararlanmanız için stratejik danışmanlık.",
    icon: <TrendingUp size={48} className="text-primary" />,
    features: ["Vergi Planlaması & Optimizasyonu", "SGK Teşvik Danışmanlığı", "Şirket Birleşme & Nevi Değişikliği", "Yatırım Teşvik Belgesi"]
  },
  {
    id: 3,
    title: "Denetim & Raporlama",
    description: "Şirket içi denetim mekanizmalarının kurulması, mali tabloların uluslararası standartlara (UFRS/TFRS) uygunluğu ve olası hile risklerine karşı finansal check-up hizmetleri.",
    icon: <FileSearch size={48} className="text-primary" />,
    features: ["Bağımsız Denetim Raporlaması", "İç Kontrol Sistemleri", "Hile & Suistimal Denetimi", "KDV İadesi Raporları"]
  },
  {
    id: 4,
    title: "Kurumsal Yönetim",
    description: "Aile şirketlerinin kurumsallaşması, halefiyet planlaması ve şirket anayasasının oluşturulması süreçlerinde yönetim kuruluna profesyonel destek sağlıyoruz.",
    icon: <LifeBuoy size={48} className="text-primary" />,
    features: ["Şirket Değerleme", "Aile Anayasası Yazımı", "Bütçe & Nakit Akış Yönetimi", "Yabancı Sermaye & Çalışma İzni"]
  },
];