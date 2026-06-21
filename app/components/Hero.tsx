"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const heroImages = [
  "/images/hero-1.png",
  "/images/hero-2.jpg",
  "/images/hero-4.jpg",
  "/images/hero-5.jpg",
  "/images/hero-school-service-white.png",
  "/images/hero-6.png",
];

const mobileImagePositions = [
  "object-[52%_center]",
  "object-[54%_center]",
  "object-[55%_center]",
  "object-[58%_center]",
  "object-[60%_center]",
  "object-[56%_center]",
];

const SLIDE_DURATION = 6500;

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentImage(index);
    setProgressKey((prev) => prev + 1);
  };

  const advanceSlide = useCallback(() => {
    setCurrentImage((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    setProgressKey((prev) => prev + 1);
  }, []);

  const nextSlide = () => {
    advanceSlide();
  };

  const prevSlide = () => {
    goToSlide(currentImage === 0 ? heroImages.length - 1 : currentImage - 1);
  };

  useEffect(() => {
    const slider = window.setTimeout(() => {
      advanceSlide();
    }, SLIDE_DURATION);

    return () => window.clearTimeout(slider);
  }, [advanceSlide, currentImage]);

  return (
    <section className="relative h-screen min-h-[720px] overflow-hidden bg-black text-white">
      {heroImages.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt={`Atalay araç filosu ${index + 1}`}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`absolute inset-0 object-cover ${mobileImagePositions[index]} transition-[opacity,transform] duration-[1800ms] ease-out md:object-center ${
            currentImage === index
              ? "scale-100 opacity-100 md:scale-110"
              : "scale-100 opacity-0"
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 pt-20">
        <div className="max-w-3xl animate-[heroTextIn_1s_ease-out_forwards]">
          <p className="mb-5 text-2xl font-black uppercase tracking-[0.18em] text-[#E00000] md:text-4xl">
            Konforlu, Güvenli ve
          </p>

          <h1 className="text-5xl font-black leading-[1.02] tracking-[-0.06em] md:text-7xl">
            Zamanında Ulaşım
          </h1>

          <p className="mt-6 max-w-xl text-base font-medium leading-8 text-white/78 md:text-lg">
            Modern araç filomuz, deneyimli kadromuz ve kaliteli hizmet
            anlayışımızla personel taşımacılığı, öğrenci servisi ve kurumsal
            ulaşım çözümlerinde yanınızdayız.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#hizmetler"
              className="group inline-flex items-center gap-5 rounded-lg border border-white/35 bg-white/[0.04] px-7 py-4 text-sm font-black uppercase tracking-widest text-white backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
            >
              Hizmetlerimiz
              <span className="text-xl transition group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="/iletisim"
              className="inline-flex items-center rounded-lg bg-[#C40000] px-7 py-4 text-sm font-black uppercase tracking-widest text-white shadow-2xl shadow-red-950/40 transition duration-300 hover:-translate-y-1 hover:bg-[#990000]"
            >
              Teklif Al
            </a>
          </div>

          <div className="mt-20 flex items-center gap-5">
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Önceki görsel"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-3xl text-white/80 backdrop-blur-xl transition hover:border-white/50 hover:bg-white/10 hover:text-white"
            >
              ‹
            </button>

            <span className="text-lg font-black">
              {String(currentImage + 1).padStart(2, "0")}
            </span>

            <div className="relative h-px w-32 overflow-hidden bg-white/25">
              <div
                key={progressKey}
                className="h-px origin-left animate-[heroProgress_6.5s_linear_forwards] bg-white"
              />
            </div>

            <span className="text-lg font-semibold text-white/45">
              {String(heroImages.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Sonraki görsel"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-3xl text-white/80 backdrop-blur-xl transition hover:border-white/50 hover:bg-white/10 hover:text-white"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 z-20 hidden items-center gap-3 lg:flex">
        {heroImages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`${index + 1}. görsele geç`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentImage === index
                ? "w-10 bg-[#C40000]"
                : "w-2 bg-white/35 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
