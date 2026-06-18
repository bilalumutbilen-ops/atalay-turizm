"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Yıllık Sektör Deneyimi" },
  { value: 24, prefix: "7/", label: "Operasyon Takibi" },
  { value: 100, suffix: "%", label: "Planlı Hizmet Anlayışı" },
];

function Counter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 1800 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });

    return () => unsubscribe();
  }, [springValue]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent),radial-gradient(circle_at_center,rgba(196,0,0,0.18),transparent_38%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 rounded-[2.4rem] border border-white/10 bg-white/[0.045] p-8 backdrop-blur-xl md:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#E00000]">
            Rakamlarla Atalay
          </p>

          <h2 className="mt-5 max-w-xl text-4xl font-black leading-tight tracking-[-0.04em] md:text-5xl">
            Güvenli ulaşım, güçlü operasyon disipliniyle başlar.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
            Atalay Turizm; planlama, takip ve zaman yönetimini merkeze alarak
            her yolculukta güvenilir hizmet standardı oluşturur.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/35 p-7 transition duration-300 hover:-translate-y-2 hover:border-[#E00000]/50 hover:bg-black/50"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

              <p className="text-5xl font-black tracking-[-0.05em] text-white md:text-6xl">
                <Counter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </p>

              <p className="mt-5 text-xs font-black uppercase tracking-[0.22em] text-white/55">
                {stat.label}
              </p>

              <div className="mt-8 h-1 w-12 rounded-full bg-[#C40000] transition-all duration-300 group-hover:w-24" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}