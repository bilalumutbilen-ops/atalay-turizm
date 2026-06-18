"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("atalay-loader");

    if (alreadyShown) return;

    sessionStorage.setItem("atalay-loader", "true");
    setVisible(true);

    const closeTimer = setTimeout(() => {
      setClosing(true);
    }, 1500);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 2200);

    return () => {
      clearTimeout(closeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-700 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`flex flex-col items-center transition-all duration-700 ${
          closing
            ? "translate-y-3 scale-95 opacity-0"
            : "translate-y-0 scale-100 opacity-100"
        }`}
      >
        <Image
          src="/images/atalay-logo.png"
          alt="Atalay Turizm"
          width={700}
          height={220}
          priority
          className="h-auto w-[650px] max-w-[88vw]"
        />

        <div className="mt-2 flex items-center gap-4">
          <div className="h-[1px] w-20 bg-[#C40000]/60" />

          <p className="text-[14px] font-bold uppercase tracking-[0.28em] text-neutral-600">
            TURİZM • TAŞIMACILIK
          </p>

          <div className="h-[1px] w-20 bg-[#C40000]/60" />
        </div>
      </div>
    </div>
  );
}