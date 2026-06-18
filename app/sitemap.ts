import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://atalayturizm.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://atalayturizm.com/hakkimizda",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://atalayturizm.com/filomuz",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://atalayturizm.com/iletisim",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}