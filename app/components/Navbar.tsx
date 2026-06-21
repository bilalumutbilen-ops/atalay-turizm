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
      <div className="mx-auto grid max-w-[1700px] grid-cols-[420px_1fr_160px] items-center px-10 py-3">
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center justify-start"
          aria-label="Atalay ana sayfa"
        >
          <Image
            src="/images/atalay-main-logo.png"
            alt="Atalay Turizm"
            width={340}
            height={118}
            priority
            className="h-20 w-auto object-contain"
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
                  ? "after:absolute after:-bottom-3 after:left-0 after:h-[2px] after:w-full after:bg-[#C40000]"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block" />

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

            <Link
              href="/iletisim"
              onClick={() => setIsOpen(false)}
              className="rounded-md bg-[#C40000] px-5 py-3 text-center font-black uppercase tracking-widest text-white transition hover:bg-[#E00000]"
            >
              Teklif Al
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
