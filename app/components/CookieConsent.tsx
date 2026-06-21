"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const consentStorageKey = "atalay-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(!window.localStorage.getItem(consentStorageKey));
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const saveConsent = (value: "accepted" | "rejected") => {
    window.localStorage.setItem(consentStorageKey, value);
    window.dispatchEvent(new Event("atalay-cookie-consent-change"));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-1/2 z-[1000] w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#101010]/95 p-5 text-white shadow-2xl shadow-black/50 backdrop-blur-xl">
      <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[#E00000]">
            Çerez Tercihleri
          </p>

          <p className="mt-3 text-sm leading-6 text-white/70">
            Sitenin çalışması için zorunlu çerezler kullanılır. Analitik
            çerezler ise site kullanımını ölçmek için yalnızca onayınızla
            çalışır. Ayrıntılar için{" "}
            <Link
              href="/cerez-politikasi"
              className="font-bold text-white underline decoration-[#E00000] underline-offset-4 transition hover:text-[#E00000]"
            >
              Çerez Politikası
            </Link>
            &apos;nı inceleyebilirsiniz.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <button
            type="button"
            onClick={() => saveConsent("rejected")}
            className="rounded-lg border border-white/15 px-5 py-3 text-sm font-black uppercase tracking-widest text-white transition hover:border-white/40 hover:bg-white/10"
          >
            Reddet
          </button>

          <button
            type="button"
            onClick={() => saveConsent("accepted")}
            className="rounded-lg bg-[#C40000] px-5 py-3 text-sm font-black uppercase tracking-widest text-white transition hover:bg-[#990000]"
          >
            Kabul Et
          </button>
        </div>
      </div>
    </div>
  );
}
