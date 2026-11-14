import Link from "next/link";
import { getFeaturedCategories } from "@/data/products";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SiteImage } from "@/components/ui/SiteImage";
import { site } from "@/config/site";

export function FeaturedCollections() {
  const categories = getFeaturedCategories();

  return (
    <section className="bg-ivory-deep py-20 sm:py-28">
      <Container wide>
        <SectionHeading
          eyebrow="Collections"
          title="Vestments and textiles for the life of a church."
          text={site.ui.pricesNote}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <FadeIn key={category.slug} delay={index * 0.05}>
              <Link
                href={`/collections/${category.slug}`}
                className="group block border border-gold/35 bg-ivory shadow-soft transition duration-300 motion-safe:hover:-translate-y-1"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <SiteImage
                    image={category.image}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 motion-safe:group-hover:scale-[1.03]"
                  />
                </div>
                <div className="border-t border-gold/30 px-5 py-5">
                  <h3 className="font-display text-xl tracking-wide text-burgundy">{category.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{category.tagline}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link
            href="/collections"
            className="font-display text-xs tracking-[0.22em] text-burgundy uppercase underline decoration-gold underline-offset-8"
          >
            View the full collection
          </Link>
        </p>
      </Container>
    </section>
  );
}
