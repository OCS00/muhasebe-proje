import IletisimContent from "./IletisimContent";

export const metadata = {
  title: "İletişim | Yavuz Şahin SMMM",
  description: "Yavuz Şahin SMMM ile iletişime geçin. Mersin'de profesyonel mali müşavirlik için randevu alın. Adres: Ofis Royal İş Merkezi, Akdeniz / Mersin. Tel: +90 (506) 892 60 26",
  keywords: ["Mali Müşavir İletişim", "Muhasebe Ofisi Mersin", "Randevu", "SMMM İletişim"],
  openGraph: {
    title: "İletişim | Yavuz Şahin SMMM",
    description: "Mersin Akdeniz'de profesyonel mali danışmanlık için bizimle iletişime geçin.",
    locale: "tr_TR",
    type: "website",
  },
  alternates: {
    canonical: "/iletisim",
  },
};

export default function IletisimPage() {
  return <IletisimContent />;
}
