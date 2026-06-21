import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Atalay Turizm'in personel taşımacılığı, öğrenci servisi ve kurumsal ulaşım hizmetlerindeki yaklaşımını keşfedin.",
};

const values = [
  "Güvenli ulaşım standardı",
  "Dakik operasyon yönetimi",
  "Deneyimli sürücü kadrosu",
  "Planlı güzergâh takibi",
  "Kurumsal hizmet disiplini",
  "Müşteri memnuniyeti odaklı yaklaşım",
];

const references = [
  "Kurumsal işletmeler",
  "Eğitim kurumları",
  "Fabrika ve üretim tesisleri",
  "Organizasyon firmaları",
  "Özel grup taşımacılığı",
  "Tur ve etkinlik programları",
];

export default function HakkimizdaPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      <section className="relative px-6 pb-24 pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,0,0,.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,.07),transparent_30%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#E00000]">
              Hakkımızda
            </p>

            <h1 className="mt-5 text-5xl font-black leading-tight tracking-[-0.055em] md:text-7xl">
              Güvenli ulaşımın
              <span className="block text-[#E00000]">
                profesyonel adresi.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/65">
              Atalay Turizm; personel taşımacılığı, öğrenci servisleri,
              kurumsal ulaşım çözümleri ve özel organizasyon transferleri
              alanlarında hizmet veren kurumsal bir taşımacılık markasıdır.
              Planlı operasyon yapısı, modern araç filosu ve güvenli hizmet
              anlayışıyla sürdürülebilir ulaşım çözümleri sunar.
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-24">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          {[
            {
              label: "Misyonumuz",
              title: "Güvenli ve Planlı Ulaşım",
              text: "Müşterilerimizin ulaşım ihtiyaçlarını zamanında, güvenli ve konforlu şekilde karşılamak; personel, öğrenci ve kurumsal taşımacılık süreçlerinde düzenli, takip edilebilir ve profesyonel çözümler sunmak temel misyonumuzdur.",
            },
            {
              label: "Vizyonumuz",
              title: "Bölgenin Güvenilir Markası",
              text: "Ulaşım sektöründe kalite, güven ve müşteri memnuniyetini ön planda tutarak bölgede tercih edilen, operasyonel gücü yüksek ve güvenilir taşımacılık markalarından biri olmak.",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-10 backdrop-blur-xl"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E00000]">
                {item.label}
              </p>

              <h2 className="mt-4 text-3xl font-black">{item.title}</h2>

              <p className="mt-6 leading-8 text-white/60">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(196,0,0,.16),transparent_34%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#E00000]">
              Kurumsal Yaklaşım
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] md:text-6xl">
              Her yolculukta güven, düzen ve süreklilik.
            </h2>

            <p className="mt-7 text-lg leading-8 text-white/65">
              Atalay Turizm için taşımacılık yalnızca bir ulaşım hizmeti değil;
              zaman yönetimi, güvenlik, sorumluluk ve kurumsal temsil sürecidir.
              Bu anlayışla her operasyon; güzergâh, saat, araç ve sürücü
              planlaması dikkate alınarak yönetilir.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((item) => (
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
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.8rem] border border-white/10 bg-white/[0.045] p-10 backdrop-blur-xl md:p-14">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#E00000]">
                Referans Alanlarımız
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
                Farklı ihtiyaçlara uygun profesyonel ulaşım çözümleri.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                Kurumsal servis taşımacılığından eğitim kurumlarına, özel
                organizasyonlardan grup transferlerine kadar farklı alanlarda
                düzenli ve güvenilir ulaşım hizmeti sunuyoruz.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {references.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/30 p-6 transition hover:-translate-y-1 hover:border-[#E00000]/50"
                >
                  <p className="text-lg font-black">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-28 pt-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#C40000]/25 bg-[#C40000]/10 p-12 text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#E00000]">
            Atalay Turizm
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Planlı. Dakik. Güvenli.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/65">
            Her yolculuğun bir sorumluluk olduğunun bilinciyle hareket ediyor,
            modern araçlarımız ve profesyonel ekibimizle güvenilir ulaşım
            hizmeti sunuyoruz.
          </p>
        </div>
      </section>
    </main>
  );
}
