import { site } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SiteImage } from "@/components/ui/SiteImage";

export function Hero() {
  return (
    <section className="relative -mt-20 flex min-h-[100svh] items-end overflow-hidden bg-burgundy text-ivory">
      <div className="absolute inset-0">
        <SiteImage image={site.images.hero} priority sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-burgundy via-burgundy/88 to-burgundy-deep/75" />
      <div className="bg-damask pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-6xl px-5 pt-32 pb-20 sm:px-8 sm:pb-28">
        <p className="font-display text-[0.72rem] tracking-[0.32em] text-gold-light uppercase">
          {site.contact.locality} · Est. {site.foundedYear}
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.15] font-medium sm:text-6xl">
          Vestments woven with faith. Crafted for three generations.
        </h1>
        <GoldDivider className="mt-6 max-w-sm" />
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/85 sm:text-lg">
          From our family workshop in Tuticorin, we design and hand-finish chasubles, copes, linens,
          and church textiles for parishes and cathedrals across the world. Every quotation includes
          the shipping.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/collections">{site.ui.exploreCta}</Button>
          <Button href="/contact" variant="outline">
            {site.ui.quoteCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
