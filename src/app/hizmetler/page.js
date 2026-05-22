import HizmetlerContent from "./HizmetlerContent";

export const metadata = {
  title: "Hizmetlerimiz | Yavuz Şahin SMMM",
  description: "Şirket kuruluşu, vergi danışmanlığı, bordrolama, SGK yönetimi, finansal raporlama ve e-dönüşüm hizmetleri. Mersin'de profesyonel mali müşavirlik çözümleri.",
  keywords: ["Mali Müşavirlik Hizmetleri", "Şirket Kuruluşu Mersin", "Vergi Danışmanlığı", "Bordrolama", "SGK", "E-Fatura", "KDV İadesi"],
  openGraph: {
    title: "Hizmetlerimiz | Yavuz Şahin SMMM",
    description: "Şirket kuruluşundan e-dönüşüme kadar tüm mali süreçlerinizde yanınızdayız.",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "/hizmetler",
  },
};

export default function HizmetlerPage() {
  return <HizmetlerContent />;
}
