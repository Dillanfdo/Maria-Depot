import type { Metadata } from "next";
import { categories } from "@/data/products";
import { site } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { CollectionBrowser } from "@/components/sections/CollectionBrowser";

export const metadata: Metadata = createPageMetadata({
  title: "Collections",
  description:
    "Chasubles, copes, stoles, linens, banners, and liturgical cloth from a family workshop in Tuticorin. Prices are quoted, and shipping is included.",
  path: "/collections",
});

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Collections"
        title="Vestments, linens, and the cloth they are made from."
        text={`${site.ui.pricesNote} ${site.ui.shippingPromise}`}
      />
      <section className="bg-ivory py-16 sm:py-20">
        <Container wide>
          <CollectionBrowser categories={categories} />
        </Container>
      </section>
    </>
  );
}
