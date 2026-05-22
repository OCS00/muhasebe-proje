import HizmetlerContent from "./HizmetlerContent";

export const metadata = {
  title: "Hizmetlerimiz | Yavuz Şahin SMMM",
  description: "Şirket kuruluşu, vergi danışmanlığı, bordrolama, SGK yönetimi, finansal raporlama ve e-dönüşüm hizmetleri. Mersin'de profesyonel mali müşavirlik çözümleri.",
  keywords: ["Mali Müşavirlik Hizmetleri", "Şirket Kuruluşu Mersin", "Vergi Danışmanlığı", "Bordrolama", "SGK", "E-Fatura", "KDV İadesi"],
  openGraph: {
    title: "Hizmetlerimiz | Yavuz Şahin SMMM",
    description: "Şirket kuruluşu, vergi danışmanlığı, bordrolama, SGK yönetimi ve e-dönüşüm. Mersin'de profesyonel mali müşavirlik hizmetleri.",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "https://www.yavuzsahin.com/smmm-logo.png", width: 400, height: 400, alt: "Yavuz Şahin SMMM Hizmetleri" }],
  },
  alternates: {
    canonical: "https://www.yavuzsahin.com/hizmetler",
  },
};

export default function HizmetlerPage() {
  return <HizmetlerContent />;
}
