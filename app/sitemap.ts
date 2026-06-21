import type { MetadataRoute } from "next";

const siteUrl = "https://www.atalaytur.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-21");

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/hakkimizda`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/filomuz`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/iletisim`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/kvkk-aydinlatma-metni`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/gizlilik-politikasi`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/cerez-politikasi`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/yasal-uyari`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
