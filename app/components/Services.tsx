"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Personel Taşımacılığı",
    desc: "Vardiya düzenine uygun, dakik, güvenli ve sürdürülebilir personel servis operasyonları.",
  },
  {
    number: "02",
    title: "Öğrenci Servisleri",
    desc: "Güvenlik, takip ve düzen esaslı okul taşımacılığı çözümleri.",
  },
  {
    number: "03",
    title: "Kurumsal Ulaşım",
    desc: "Şirket, fabrika, toplantı ve işletme ihtiyaçlarına özel planlı ulaşım desteği.",
  },
  {
    number: "04",
    title: "Organizasyon Transferleri",
    desc: "Düğün, etkinlik ve grup organizasyonları için konforlu ulaşım planlaması.",
  },
];

export default function Services() {
  return (
    <section
      id="hizmetler"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(196,0,0,0.22),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_28%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-end"
        >
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#E00000]">
              Hizmetlerimiz
            </p>

            <h2 className="mt-5 max-w-2xl text-5xl font-black leading-tight tracking-[-0.055em] md:text-6xl">
              Kurumsal ulaşımda güçlü operasyon kabiliyeti.
            </h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-white/65 lg:ml-auto">
            Atalay Turizm; personel taşımacılığı, öğrenci servisleri,
            organizasyon transferleri ve kurumsal ulaşım ihtiyaçlarında planlı,
            güvenli ve konforlu hizmet sunar.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 42 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#E00000]/50 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-red-950/20"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#E00000]/10 blur-2xl transition duration-300 group-hover:bg-[#E00000]/25" />

              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="text-sm font-black tracking-[0.35em] text-[#E00000]">
                    {service.number}
                  </span>

                  <h3 className="mt-6 text-3xl font-black tracking-[-0.045em] text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-base leading-7 text-white/60">
                    {service.desc}
                  </p>
                </div>

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/30 text-xl text-white/70 transition duration-300 group-hover:translate-x-1 group-hover:border-[#E00000]/60 group-hover:bg-[#C40000] group-hover:text-white">
                  →
                </span>
              </div>

              <div className="mt-8 h-px w-full bg-white/10">
                <div className="h-px w-0 bg-[#E00000] transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="/iletisim"
            className="inline-flex w-fit items-center justify-center rounded-md bg-[#C40000] px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition duration-300 hover:-translate-y-1 hover:bg-[#990000]"
          >
            Teklif Al
          </a>

          <a
            href="/filomuz"
            className="inline-flex w-fit items-center justify-center rounded-md border border-white/15 bg-white/[0.03] px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition duration-300 hover:-translate-y-1 hover:border-white/35 hover:bg-white/[0.07]"
          >
            Araç Filomuz
          </a>
        </motion.div>
      </div>
    </section>
  );
}