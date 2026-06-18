"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Planlı Operasyon Yönetimi",
    description:
      "Servis güzergâhları, saat planlaması ve organizasyon akışı önceden hazırlanarak ulaşım süreci kontrollü şekilde yürütülür.",
  },
  {
    title: "Güvenli Taşımacılık Anlayışı",
    description:
      "Personel, öğrenci ve misafir taşımacılığında güvenlik, düzen ve sorumluluk bilinci hizmetin temelini oluşturur.",
  },
  {
    title: "Deneyimli Sürücü Kadrosu",
    description:
      "Tecrübeli sürücülerimizle dakik, dikkatli ve profesyonel ulaşım standardı sunulur.",
  },
  {
    title: "Kurumsal Hizmet Disiplini",
    description:
      "Kurumlar, işletmeler ve özel organizasyonlar için ihtiyaca uygun, sürdürülebilir ulaşım çözümleri geliştirilir.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="kurumsal"
      className="relative overflow-hidden bg-[#050505] px-6 py-28 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,0,0,0.18),transparent_34%),linear-gradient(180deg,transparent,rgba(255,255,255,0.03),transparent)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#E00000]">
            Neden Atalay Turizm?
          </p>

          <h2 className="mt-5 max-w-xl text-4xl font-black leading-tight tracking-[-0.04em] md:text-6xl">
            Her yolculukta güven veren kurumsal yaklaşım.
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
            Atalay Turizm; personel taşımacılığı, öğrenci servisi, kurumsal
            ulaşım ve özel organizasyonlarda planlı hareket eden, güveni
            merkeze alan ve hizmet standardını koruyan bir ulaşım markasıdır.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["Planlama", "Güvenlik", "Dakiklik"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#E00000]/50 hover:bg-white/[0.07]"
              >
                <div className="mb-4 h-2 w-10 rounded-full bg-[#C40000]" />
                <p className="text-sm font-black uppercase tracking-widest text-white/75">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-5">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#E00000]/50 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-red-950/20"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

              <div className="absolute right-6 top-5 text-5xl font-black text-white/[0.04] transition group-hover:text-[#E00000]/12">
                0{index + 1}
              </div>

              <div className="relative z-10 mb-5 h-3 w-3 rounded-full bg-[#C40000] transition-all duration-300 group-hover:w-10 group-hover:rounded-full" />

              <h3 className="relative z-10 text-xl font-black tracking-[-0.03em] text-white">
                {item.title}
              </h3>

              <p className="relative z-10 mt-3 max-w-2xl text-sm leading-7 text-white/60">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}