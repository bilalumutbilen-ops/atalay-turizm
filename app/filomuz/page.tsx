import type { Metadata } from "next";
import Image from "next/image";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Filomuz | Atalay Turizm",
  description:
    "Atalay Turizm araç filosunu inceleyin. Personel taşımacılığı, öğrenci servisi ve özel organizasyon ulaşımı için modern araç seçenekleri.",
};

const standards = [
  "Düzenli araç kontrolü",
  "Konforlu yolculuk standardı",
  "Planlı güzergâh yönetimi",
  "Deneyimli sürücü kadrosu",
];

export default function FilomuzPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <section className="relative overflow-hidden px-6 pb-28 pt-44">
        <Image
          src="/images/hero-vehicle.jpg"
          alt="Atalay Turizm araç filosu"
          fill
          priority
          className="object-cover opacity-45"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/45" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(196,0,0,.25),transparent_34%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-[#E00000]">
            Filomuz
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-[-0.055em] md:text-7xl">
            Güvenli, konforlu ve planlı ulaşım için güçlü filo yapısı.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
            Personel taşımacılığı, öğrenci servisi ve organizasyon ulaşımı için
            araçlarımızı operasyon ihtiyacına göre planlıyor, her yolculukta
            güvenli hizmet standardı sunuyoruz.
          </p>

          <div className="mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              ["7/24", "Operasyon Takibi"],
              ["Planlı", "Güzergâh Yönetimi"],
              ["Konforlu", "Yolculuk Standardı"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.08] p-6 backdrop-blur-xl"
              >
                <p className="text-4xl font-black text-white">{title}</p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-white/55">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(196,0,0,.16),transparent_32%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#E00000]">
              Araç Standardımız
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] md:text-6xl">
              Her araç, güvenli yolculuk standardının bir parçasıdır.
            </h2>

            <p className="mt-7 text-lg leading-8 text-white/65">
              Filo yapımız; personel servisi, öğrenci taşımacılığı ve grup
              organizasyonlarında ihtiyaç duyulan güvenlik, konfor ve operasyon
              sürekliliği esas alınarak yönetilir.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {standards.map((item) => (
              <div
                key={item}
                className="group flex min-h-[145px] items-center rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#E00000]/50 hover:bg-white/[0.07]"
              >
                <div>
                  <div className="mb-5 h-2 w-12 rounded-full bg-[#C40000] transition-all group-hover:w-20" />

                  <p className="text-[22px] font-black leading-8 tracking-[-0.035em] text-white">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.8rem] border border-white/10 bg-white/[0.045] p-10 text-center backdrop-blur-xl md:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(196,0,0,.20),transparent_38%)]" />

          <div className="relative z-10">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#E00000]">
              Teklif Al
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
              İhtiyacınıza uygun aracı birlikte belirleyelim.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Personel taşımacılığı, öğrenci servisi ve organizasyon ulaşımı
              için güzergâh, kişi sayısı ve operasyon ihtiyacınıza göre size
              özel çözüm sunalım.
            </p>

            <a
              href="/iletisim"
              className="mt-8 inline-flex rounded-lg bg-[#C40000] px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition hover:-translate-y-1 hover:bg-[#990000]"
            >
              Teklif Al
            </a>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}