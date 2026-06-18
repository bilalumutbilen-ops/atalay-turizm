import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 pt-24">
      <div className="max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-600">
          Yanlış güzergâh
        </p>

        <h1 className="mt-6 text-8xl font-black text-red-600">404</h1>

        <h2 className="mt-6 text-4xl font-bold text-gray-900">
          Sayfa Bulunamadı
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Aradığınız sayfa kaldırılmış, taşınmış veya hiç oluşturulmamış olabilir.
          Sizi doğru adrese götürelim.
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center rounded-xl bg-red-600 px-8 py-4 text-white font-semibold transition hover:bg-red-700"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </main>
  );
}