"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Hizmetler", href: "/#hizmetler" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Filomuz", href: "/filomuz" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3">
        <a
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex shrink-0 items-center"
          aria-label="Atalay Turizm ana sayfa"
        >
          <Image
            src="/images/atalay-logo.png"
            alt="Atalay Turizm"
            width={260}
            height={90}
            priority
            className="h-14 w-auto object-contain"
          />
        </a>

        <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative whitespace-nowrap text-xs font-black uppercase tracking-[0.22em] text-gray-700 transition hover:text-[#C40000] after:absolute after:-bottom-2 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-[#C40000] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="/iletisim"
          className="hidden shrink-0 rounded-full bg-[#C40000] px-7 py-3 text-xs font-black uppercase tracking-[0.18em] text-white shadow-lg shadow-red-100 transition hover:-translate-y-0.5 hover:bg-[#990000] lg:block"
        >
          Teklif Al
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Mobil menüyü aç veya kapat"
          className="rounded-full border border-gray-300 px-4 py-2 text-sm font-bold text-gray-800 transition hover:border-[#C40000] hover:text-[#C40000] lg:hidden"
        >
          {isOpen ? "Kapat" : "Menü"}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-6 shadow-xl lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-gray-700 transition hover:text-[#C40000]"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/iletisim"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-full bg-[#C40000] px-5 py-3 text-center font-black uppercase tracking-widest text-white transition hover:bg-[#990000]"
            >
              Teklif Al
            </a>
          </div>
        </div>
      )}
    </header>
  );
}