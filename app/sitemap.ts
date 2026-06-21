import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-21");

  return [
    {
      url: "https://atalayturizm.com",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://atalayturizm.com/hakkimizda",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://atalayturizm.com/filomuz",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://atalayturizm.com/iletisim",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://atalayturizm.com/kvkk-aydinlatma-metni",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://atalayturizm.com/gizlilik-politikasi",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://atalayturizm.com/cerez-politikasi",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://atalayturizm.com/yasal-uyari",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
