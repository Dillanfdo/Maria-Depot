import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { categories } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/collections", "/export", "/gallery", "/contact", "/privacy-policy"];

  return [
    ...paths.map((path) => ({
      url: `${site.url}${path || "/"}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...categories.map((category) => ({
      url: `${site.url}/collections/${category.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
