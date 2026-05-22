import Link from "next/link";
import { FileQuestion } from "lucide-react";

export const metadata = {
  title: "Sayfa Bulunamadı | Yavuz Şahin SMMM",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="flex-grow flex items-center justify-center py-32 px-4">
      <div className="text-center">
        <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <FileQuestion size={48} />
        </div>

        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Sayfa Bulunamadı
        </h1>

        <p className="text-slate-500 mb-8 max-w-md mx-auto leading-relaxed">
          Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
          Ana sayfaya dönerek işlemlerinize devam edebilirsiniz.
        </p>

        <Link
          href="/"
          className="inline-block bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
