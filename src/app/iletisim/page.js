import IletisimContent from "./IletisimContent";

export const metadata = {
  title: "İletişim | Yavuz Şahin SMMM",
  description: "Yavuz Şahin SMMM ile iletişime geçin. Mersin'de profesyonel mali müşavirlik için randevu alın. Adres: Ofis Royal İş Merkezi, Akdeniz / Mersin. Tel: +90 (506) 892 60 26",
  keywords: ["Mali Müşavir İletişim", "Muhasebe Ofisi Mersin", "Randevu", "SMMM İletişim"],
  openGraph: {
    title: "İletişim | Yavuz Şahin SMMM",
    description: "Mersin Akdeniz Ofis Royal İş Merkezi'nde profesyonel mali müşavirlik. Tel: +90 (506) 892 60 26 — Hafta içi 08:30-18:00.",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "https://smmmyavuzsahin.com/smmm-logo.png", width: 400, height: 400, alt: "Yavuz Şahin SMMM İletişim" }],
  },
  alternates: {
    canonical: "https://smmmyavuzsahin.com/iletisim",
  },
};

export default function IletisimPage() {
  return <IletisimContent />;
}
