import type { Metadata } from "next";
import { site } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SiteImage } from "@/components/ui/SiteImage";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = createPageMetadata({
  title: "Our Story",
  description: `The story of ${site.name}, a three-generation vestment workshop in ${site.contact.locality}.`,
  path: "/about",
  image: site.images.heritage,
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the house"
        title="A family workshop beside the harbour."
        text={`${site.name} has been making vestments in ${site.contact.locality} since ${site.foundedYear}. The work is still cut, embroidered, and inspected by the family.`}
      />
      <section className="bg-ivory py-20">
        <Container className="max-w-3xl">
          <ol className="relative space-y-12 border-l border-gold/50 pl-8">
            {site.timeline.map((entry) => (
              <li key={entry.year} className="relative">
                <span className="absolute top-1 -left-[39px] h-3 w-3 rotate-45 border border-gold bg-ivory" aria-hidden="true" />
                <p className="font-display text-sm tracking-[0.22em] text-gold-ink uppercase">{entry.year}</p>
                <h2 className="mt-2 font-display text-3xl text-burgundy">{entry.title}</h2>
                <p className="mt-3 leading-relaxed text-stone">{entry.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
      <section className="bg-ivory-deep py-20">
        <Container>
          <h2 className="font-display text-3xl text-burgundy">How the work is done</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[site.images.aboutWorkshop, site.images.aboutEmbroidery, site.images.aboutFinishing].map((image) => (
              <figure key={image.file} className="border border-gold/35 bg-ivory">
                <div className="relative aspect-[4/5]">
                  <SiteImage image={image} sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <figcaption className="px-4 py-3 text-sm text-stone">{image.alt}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {site.values.map((value) => (
              <article key={value.title} className="border border-gold/30 bg-ivory p-6">
                <h3 className="font-display text-2xl text-burgundy">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-stone">{value.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-ivory py-20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl text-burgundy">Tuticorin</h2>
          <p className="mt-4 leading-relaxed text-stone">{site.locationNote}</p>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
