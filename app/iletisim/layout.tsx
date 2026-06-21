import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Atalay Turizm iletişim bilgileri, teklif talep formu, WhatsApp ve Gemlik/Bursa adres bilgileri.",
};

export default function IletisimLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
