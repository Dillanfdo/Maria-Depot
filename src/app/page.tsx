import type { Metadata } from "next";
import { site } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";
import { organizationJsonLd } from "@/lib/json-ld";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { HeritageTeaser } from "@/components/sections/HeritageTeaser";
import { FeaturedCollections } from "@/components/sections/FeaturedCollections";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { LiturgicalColours } from "@/components/sections/LiturgicalColours";
import { HowOrderingWorks } from "@/components/sections/HowOrderingWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Church vestments from Tuticorin",
    description: site.description,
    path: "/",
    image: site.images.hero,
  }),
  title: { absolute: `${site.name} | Church Vestments from Tuticorin` },
};

export default function HomePage() {
  const jsonLd = organizationJsonLd();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <TrustStrip />
      <HeritageTeaser />
      <FeaturedCollections />
      <WhyChooseUs />
      <LiturgicalColours />
      <HowOrderingWorks />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
