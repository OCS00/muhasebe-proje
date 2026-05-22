import HakkimdaContent from "./HakkimdaContent";

export const metadata = {
  title: "Hakkımızda | Yavuz Şahin SMMM",
  description: "Mersin'in köklü mali müşavirlik ofisi Yavuz Şahin SMMM hakkında bilgi edinin. 2010'dan bu yana 100+ mükellefe vergi danışmanlığı, şirket kuruluşu ve finansal raporlama hizmetleri sunuyoruz.",
  keywords: ["Yavuz Şahin", "Mali Müşavir Mersin", "SMMM Mersin", "Muhasebe Ofisi", "Vergi Danışmanı"],
  openGraph: {
    title: "Hakkımızda | Yavuz Şahin SMMM",
    description: "Mersin merkezli profesyonel mali müşavirlik ofisi Yavuz Şahin SMMM. 2010'dan bu yana 100+ mükellefe güvenilir vergi danışmanlığı ve muhasebe çözümleri sunuyoruz.",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "https://www.yavuzsahin.com/smmm-logo.png", width: 400, height: 400, alt: "Yavuz Şahin SMMM" }],
  },
  alternates: {
    canonical: "https://www.yavuzsahin.com/hakkimda",
  },
};

export default function HakkimdaPage() {
  return <HakkimdaContent />;
}
