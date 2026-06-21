"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="iletisim"
      className="relative overflow-hidden bg-[#050505] px-6 py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(196,0,0,.22),transparent_30%),radial-gradient(circle_at_right,rgba(255,255,255,.05),transparent_30%)]" />

      <motion.div
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        className="relative z-10 mx-auto max-w-7xl overflow-hidden rounded-[2.8rem] border border-white/10 bg-white/[0.045] backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#101010] to-[#2a0000]" />

        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#C40000]/30 blur-3xl animate-pulse" />

        <div className="absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10 grid gap-12 p-10 md:grid-cols-[1fr_auto] md:items-center md:p-16">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >
            <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-[#E00000]">
              Teklif ve İletişim
            </p>

            <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-[-0.05em] md:text-6xl">
              Güvenli ulaşım için profesyonel çözüm ortağınız olmaya hazırız.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Personel taşımacılığı, öğrenci servisleri, kurumsal ulaşım ve özel
              organizasyonlar için size özel operasyon planı hazırlayalım.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7, delay: .15 }}
            className="flex flex-col gap-4"
          >
            <a
              href="tel:+905340630779"
              aria-label="Hemen ara: +90 534 063 07 79"
              title="+90 534 063 07 79"
              className="group relative overflow-hidden rounded-lg bg-[#C40000] px-9 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-2 hover:bg-[#990000]"
            >
              <span className="relative z-10">Hemen Ara</span>

              <span className="absolute inset-y-0 -left-20 w-10 rotate-12 bg-white/40 blur-md transition-all duration-700 group-hover:left-[120%]" />
            </a>

            <a
              href="https://wa.me/905340630779"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg border border-white/15 bg-white/[0.03] px-9 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-white transition duration-300 hover:-translate-y-2 hover:border-white/40 hover:bg-white/[0.08]"
            >
              <span className="relative z-10">
                WhatsApp ile Yaz
              </span>

              <span className="absolute inset-y-0 -left-20 w-10 rotate-12 bg-white/30 blur-md transition-all duration-700 group-hover:left-[120%]" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
