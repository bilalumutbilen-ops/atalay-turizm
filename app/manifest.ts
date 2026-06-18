import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Atalay Turizm",
    short_name: "Atalay",
    description:
      "Personel taşımacılığı, öğrenci servisleri ve kurumsal ulaşım çözümleri.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    lang: "tr",
    icons: [
      {
        src: "/atalay-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}