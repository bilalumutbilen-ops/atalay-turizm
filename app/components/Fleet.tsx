import Image from "next/image";

const fleet = [
  {
    title: "Mercedes-Benz Sprinter",
    image: "/images/hero-vehicle.jpg",
    desc: "Personel taşımacılığı, öğrenci servisi ve grup ulaşımı için konforlu ve güvenli çözüm.",
  },
];

export default function Fleet() {
  return (
    <section
      id="filo"
      className="relative overflow-hidden bg-[#F8F8F8] px-6 py-24 text-[#171717]"
    >
      <div className="absolute -right-32 top-20 h-[360px] w-[360px] rounded-full bg-red-100/70 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-[#C40000]">
          Filomuz
        </p>

        <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
          Konforlu ve güvenli ulaşım için modern araç standardı.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="rounded-[2.5rem] border border-gray-200 bg-white p-6 shadow-2xl shadow-gray-200">
            <div className="relative h-[420px] overflow-hidden rounded-[2rem] bg-gray-100">
              <Image
                src={fleet[0].image}
                alt={fleet[0].title}
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-gray-200 bg-white p-10 shadow-sm">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[#C40000]">
              Mercedes Sprinter
            </p>

            <h3 className="mt-4 text-4xl font-black tracking-[-0.04em]">
              Personel ve öğrenci taşımacılığı için güçlü filo çözümü.
            </h3>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Mercedes-Benz Sprinter araçlarımızla kurumlara, okullara ve özel
              organizasyonlara yönelik güvenli, konforlu ve planlı ulaşım
              hizmeti sunuyoruz.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Kullanım", "Personel ve öğrenci servisi"],
                ["Bölge", "Gemlik / Bursa"],
                ["Standart", "Konforlu yolculuk"],
                ["Operasyon", "Planlı güzergâh yönetimi"],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-3xl bg-[#F8F8F8] p-5">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#C40000]">
                    {title}
                  </p>
                  <p className="mt-2 font-bold text-gray-700">{desc}</p>
                </div>
              ))}
            </div>

            <a
              href="/iletisim"
              className="mt-8 inline-flex rounded-full bg-[#C40000] px-8 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-[#990000]"
            >
              Filo İçin Teklif Al
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}