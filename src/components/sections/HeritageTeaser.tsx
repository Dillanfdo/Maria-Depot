import Link from "next/link";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SiteImage } from "@/components/ui/SiteImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HeritageTeaser() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <div className="relative aspect-[4/5] overflow-hidden border border-gold/40 shadow-soft">
            <SiteImage image={site.images.heritage} sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <SectionHeading
            align="left"
            eyebrow={site.heritage.eyebrow}
            title={site.heritage.title}
            text={site.heritage.body}
          />
          <Link
            href="/about"
            className="mt-8 inline-flex font-display text-xs tracking-[0.22em] text-burgundy uppercase underline decoration-gold underline-offset-8"
          >
            {site.heritage.linkLabel}
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
