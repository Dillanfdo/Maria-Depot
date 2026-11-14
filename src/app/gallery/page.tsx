import type { Metadata } from "next";
import { site } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = createPageMetadata({
  title: "Gallery",
  description: `Photographs of vestments, embroidery, and the workshop of ${site.name} in ${site.contact.locality}.`,
  path: "/gallery",
  image: site.gallery[0],
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Cloth, thread, and the finished piece."
        text="Vestments, copes, linens, and embroidery from church treasuries. These free reference photographs can be replaced with pictures from the workshop."
      />
      <section className="bg-ivory py-16">
        <Container wide>
          <GalleryGrid />
        </Container>
      </section>
    </>
  );
}
