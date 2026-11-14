import Image from "next/image";
import { media, type MediaAsset } from "@/config/site";

export function SiteImage({
  image,
  className = "object-cover",
  priority = false,
  sizes,
}: {
  image: MediaAsset | { readonly file: string; readonly remote: string; readonly alt: string };
  className?: string;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <Image
      src={media(image)}
      alt={image.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
