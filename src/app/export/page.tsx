import type { Metadata } from "next";
import { site } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { ExportMap } from "@/components/sections/ExportMap";
import { FaqList } from "@/components/sections/FaqList";
import { SiteImage } from "@/components/ui/SiteImage";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = createPageMetadata({
  title: "Export & Shipping",
  description: `${site.name} ships church vestments worldwide from Tuticorin. Shipping charges are included in every quotation.`,
  path: "/export",
  image: site.images.export,
});

export default function ExportPage() {
  return (
    <>
      <PageHero
        eyebrow="Export & shipping"
        title="The quotation includes the journey."
        text={site.shipping.promise}
      />
      <section className="bg-ivory py-16 sm:py-20">
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <ExportMap />
          <div>
            <h2 className="font-display text-3xl text-burgundy">Regions we serve</h2>
            <p className="mt-4 leading-relaxed text-stone">{site.shipping.detail}</p>
            <ul className="mt-6 space-y-4">
              {site.shipping.regions.map((region) => (
                <li key={region.name} className="border-l-2 border-gold pl-4">
                  <p className="font-display text-lg text-burgundy">{region.name}</p>
                  <p className="text-sm text-stone">{region.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <section className="bg-ivory-deep py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[4/5] border border-gold/35">
            <SiteImage image={site.images.export} sizes="(max-width: 1024px) 100vw, 40vw" />
          </div>
          <div>
            <h2 className="font-display text-3xl text-burgundy">Packing and papers</h2>
            <ol className="mt-6 space-y-5">
              {site.shipping.process.map((step, index) => (
                <li key={step.title}>
                  <p className="font-display text-sm tracking-[0.2em] text-gold-ink">0{index + 1}</p>
                  <h3 className="mt-1 font-display text-xl text-burgundy">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-stone">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>
      <section className="bg-ivory py-16">
        <Container>
          <h2 className="font-display text-3xl text-burgundy">Typical lead times</h2>
          <p className="mt-3 max-w-2xl text-stone">{site.shipping.leadNote}</p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {site.shipping.leadTimes.map((item) => (
              <div key={item.label} className="border border-gold/35 bg-white p-5">
                <dt className="text-sm text-stone">{item.label}</dt>
                <dd className="mt-2 font-display text-2xl text-burgundy">{item.time}</dd>
              </div>
            ))}
          </dl>
          <h2 className="mt-16 font-display text-3xl text-burgundy">Questions we are often asked</h2>
          <div className="mt-6">
            <FaqList />
          </div>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
