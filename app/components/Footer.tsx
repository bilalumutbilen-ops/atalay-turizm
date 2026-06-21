import Image from "next/image";
import Link from "next/link";

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "gemlikatalayturizm@gmail.com";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,0,0,.16),transparent_32%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Image
              src="/images/atalay-main-logo.png"
              alt="Atalay Turizm"
              width={220}
              height={80}
              className="h-auto w-[180px]"
            />

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              Atalay Turizm; personel taşımacılığı, öğrenci servisleri ve
              kurumsal ulaşım hizmetlerinde güvenli, dakik ve planlı çözümler
              sunar.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-[#E00000]">
              Hızlı Menü
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              <Link href="/" className="transition hover:text-white">
                Anasayfa
              </Link>

              <Link href="/hakkimizda" className="transition hover:text-white">
                Hakkımızda
              </Link>

              <Link href="/filomuz" className="transition hover:text-white">
                Filomuz
              </Link>

              <Link href="/iletisim" className="transition hover:text-white">
                İletişim
              </Link>
            </div>

            <h3 className="mt-8 text-sm font-black uppercase tracking-widest text-[#E00000]">
              Yasal
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              <Link
                href="/kvkk-aydinlatma-metni"
                className="transition hover:text-white"
              >
                KVKK Aydınlatma Metni
              </Link>

              <Link
                href="/gizlilik-politikasi"
                className="transition hover:text-white"
              >
                Gizlilik Politikası
              </Link>

              <Link
                href="/cerez-politikasi"
                className="transition hover:text-white"
              >
                Çerez Politikası
              </Link>

              <Link href="/yasal-uyari" className="transition hover:text-white">
                Yasal Uyarı
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-[#E00000]">
              İletişim
            </h3>

            <div className="mt-5 space-y-4 text-sm text-white/60">
              <p className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-[#E00000]">
                  📍
                </span>
                Bursa / Türkiye
              </p>

              <a
                href="tel:+905340630779"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-[#E00000]">
                  📞
                </span>
                0534 063 07 79
              </a>

              <a
                href="https://wa.me/905340630779"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-[#E00000]">
                  💬
                </span>
                WhatsApp ile iletişime geç
              </a>

              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-[#E00000]">
                  @
                </span>
                {contactEmail}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-sm text-white/45">
            © {new Date().getFullYear()} Atalay Turizm. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
