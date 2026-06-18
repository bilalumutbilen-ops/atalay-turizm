"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Anasayfa", href: "/", active: pathname === "/" },
    { name: "Kurumsal", href: "/hakkimizda", active: pathname === "/hakkimizda" },
    { name: "Hizmetlerimiz", href: "/#hizmetler", active: false },
    { name: "Araç Filomuz", href: "/filomuz", active: pathname === "/filomuz" },
    { name: "İletişim", href: "/iletisim", active: pathname === "/iletisim" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-[999] w-full border-b border-white/10 bg-black/80 shadow-2xl shadow-black/20 backdrop-blur-xl">
      <div className="mx-auto grid max-w-[1700px] grid-cols-[300px_1fr_280px] items-center px-10 py-5">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center justify-start"
          aria-label="Atalay ana sayfa"
        >
          <Image
            src="/images/atalay-main-logo.png"
            alt="Atalay"
            width={260}
            height={90}
            priority
            className="h-14 w-auto object-contain brightness-0 invert"
          />
        </Link>

        <nav className="hidden items-center justify-center gap-12 lg:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative whitespace-nowrap text-lg font-medium transition ${
                link.active ? "text-white" : "text-white/85 hover:text-white"
              } ${
                link.active
                  ? "after:absolute after:-bottom-3 after:left-0 after:h-[2px] after:w-full after:bg-white"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-5 lg:flex">
          <div className="h-10 w-px bg-white/25" />

          <a
            href="tel:02662435252"
            className="flex items-center gap-3 text-lg font-medium text-white transition hover:text-white/75"
          >
            <span className="text-2xl">☎</span>
            <span>0266 243 52 52</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Mobil menüyü aç veya kapat"
          className="col-start-3 justify-self-end rounded-md border border-white/40 px-4 py-2 text-sm font-bold text-white transition hover:bg-white hover:text-black lg:hidden"
        >
          {isOpen ? "Kapat" : "Menü"}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 py-6 shadow-xl backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold text-white/90 transition hover:text-[#C40000]"
              >
                {link.name}
              </Link>
            ))}

            <a
              href="tel:02662435252"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-md border border-white/25 px-5 py-3 text-center font-bold text-white"
            >
              0266 243 52 52
            </a>

            <Link
              href="/iletisim"
              onClick={() => setIsOpen(false)}
              className="rounded-md bg-[#C40000] px-5 py-3 text-center font-black uppercase tracking-widest text-white"
            >
              Teklif Al
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}