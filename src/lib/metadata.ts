import type { Metadata } from "next";
import { media, site, type MediaAsset } from "@/config/site";

export function createPageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: MediaAsset;
}): Metadata {
  const og = image ?? site.images.og;
  const src = media(og);
  const imageUrl = src.startsWith("http") ? src : `${site.url}${src}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: path,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: og.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [imageUrl],
    },
  };
}
