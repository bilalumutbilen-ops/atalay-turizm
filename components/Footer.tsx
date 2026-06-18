import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Image
              src="/images/atalay-main-logo.png"
              alt="Atalay Turizm"
              width={220}
              height={80}
              className="h-auto w-[180px]"
            />

            <p className="mt-5 text-sm leading-7 text-gray-600">
              Atalay Turizm, Bursa merkezli personel taşımacılığı, öğrenci
              servisi ve kurumsal servis hizmetlerinde güvenli ve konforlu
              ulaşım çözümleri sunmaktadır.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-[#C40000]">
              Hızlı Menü
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-gray-600">
              <a href="/" className="hover:text-[#C40000]">
                Anasayfa
              </a>
              <a href="/hakkimizda" className="hover:text-[#C40000]">
                Hakkımızda
              </a>
              <a href="/filomuz" className="hover:text-[#C40000]">
                Filomuz
              </a>
              <a href="/iletisim" className="hover:text-[#C40000]">
                İletişim
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-[#C40000]">
              İletişim
            </h3>

            <div className="mt-5 space-y-3 text-sm text-gray-600">
              <p>Bursa / Türkiye</p>
              <p>Telefon Numaranız</p>
              <p>E-posta Adresiniz</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Atalay Turizm. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}