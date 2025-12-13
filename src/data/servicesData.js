import { Calculator, Building2, Users, FileText, TrendingUp, Laptop } from "lucide-react";

export const servicesData = [
  {
    slug: "sirket-kurulusu",
    title: "Şirket Kuruluş İşlemleri",
    icon: <Building2 size={48} />,
    shortDesc: "Limited, Anonim ve Şahıs şirketlerinin anahtar teslim kuruluşu.",
    content: `<h3>Hızlı ve Güvenli Şirket Kuruluşu</h3><p>Girişimcilerin fikirlerini hayata geçirirken boğuldukları bürokratik süreçleri biz yönetiyoruz.</p>`
  },
  {
    slug: "vergi-danismanligi",
    title: "Vergi Danışmanlığı",
    icon: <Calculator size={48} />,
    shortDesc: "KDV, Muhtasar ve Kurumlar Vergisi beyannamelerinin yönetimi.",
    content: `<h3>Vergi Süreçlerinde Profesyonel Destek</h3><p>Vergi mevzuatındaki değişiklikleri anlık takip ederek, işletmenizi cezai yaptırımlardan koruyoruz.</p>`
  },
  {
    slug: "bordro-sgk",
    title: "Bordro ve SGK Hizmetleri",
    icon: <Users size={48} />,
    shortDesc: "Personel maaş hesaplamaları, işe giriş-çıkış ve teşvik yönetimi.",
    content: `<h3>Personel ve SGK Yönetimi</h3><p>Çalışanlarınızın maaş, prim ve özlük haklarının yasalara uygun şekilde takibini yapıyoruz.</p>`
  },
  {
    slug: "e-donusum",
    title: "E-Dönüşüm Çözümleri",
    icon: <Laptop size={48} />,
    shortDesc: "E-Fatura, E-Defter ve E-Arşiv geçiş süreçlerinde teknik destek.",
    content: `<h3>Dijital Muhasebe Çağı</h3><p>Kağıt faturadan dijital faturaya geçiş sürecinizde teknik ve yasal rehberlik sağlıyoruz.</p>`
  },
];