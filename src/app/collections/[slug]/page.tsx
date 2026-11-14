import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getCategory, getCategorySlugs } from "@/data/products";
import { site } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SiteImage } from "@/components/ui/SiteImage";
import { Button } from "@/components/ui/Button";

export function generateStaticParams() {
  return getCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Collection" };
  return createPageMetadata({
    title: category.name,
    description: category.description,
    path: `/collections/${category.slug}`,
    image: category.image,
  });
}

export default function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<div className="min-h-[50vh] bg-burgundy" aria-hidden="true" />}>
      <CollectionDetail params={params} />
    </Suspense>
  );
}

async function CollectionDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <article>
      <header className="relative overflow-hidden bg-burgundy text-ivory">
        <div className="bg-damask pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
        <Container className="relative grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-display text-[0.72rem] tracking-[0.24em] text-gold-light uppercase">
              <Link href="/collections" className="underline decoration-gold/60 underline-offset-4">
                Collections
              </Link>
              <span aria-hidden="true"> · </span>
              {category.name}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">{category.name}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ivory/80">{category.description}</p>
            <div className="mt-8">
              <Button href={`/contact?category=${category.slug}`}>Enquire about {category.name}</Button>
            </div>
          </div>
          <div className="relative aspect-[4/5] border border-gold/40">
            <SiteImage image={category.image} sizes="(max-width: 1024px) 100vw, 40vw" priority />
          </div>
        </Container>
      </header>
      <section className="bg-ivory py-16">
        <Container className="space-y-16">
          {category.items.map((item) => (
            <section key={item.slug} id={item.slug} className="grid items-start gap-8 border border-gold/35 bg-white p-5 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="relative aspect-[4/5]">
                <SiteImage image={item.image} sizes="(max-width: 1024px) 100vw, 36vw" />
              </div>
              <div>
                <h2 className="font-display text-3xl text-burgundy">{item.name}</h2>
                <p className="mt-4 leading-relaxed text-stone">{item.description}</p>
                <dl className="mt-6 grid gap-5 sm:grid-cols-3">
                  <div>
                    <dt className="font-display text-xs tracking-[0.18em] text-gold-ink uppercase">Fabrics</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-charcoal">{item.fabrics.join(", ")}</dd>
                  </div>
                  <div>
                    <dt className="font-display text-xs tracking-[0.18em] text-gold-ink uppercase">Colours</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-charcoal">{item.colours.join(", ")}</dd>
                  </div>
                  <div>
                    <dt className="font-display text-xs tracking-[0.18em] text-gold-ink uppercase">Customisation</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-charcoal">{item.customisation.join(", ")}</dd>
                  </div>
                </dl>
                <div className="mt-8">
                  <Button href={`/contact?category=${category.slug}&product=${encodeURIComponent(item.name)}`}>
                    {site.ui.enquire}
                  </Button>
                </div>
              </div>
            </section>
          ))}
        </Container>
      </section>
    </article>
  );
}
