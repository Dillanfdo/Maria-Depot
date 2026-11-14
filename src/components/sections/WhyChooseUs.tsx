import { Gem, Globe, PenLine, Ruler, Church } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Gem, PenLine, Ruler, Church, Globe];

export function WhyChooseUs() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why churches write to us"
          title="Fine cloth, a patient hand, and a price that includes the journey."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {site.why.map((item, index) => {
            const Icon = icons[index] ?? Gem;
            return (
              <FadeIn key={item.title} delay={index * 0.05} className={index === 4 ? "lg:col-span-1" : undefined}>
                <article className="h-full border border-gold/30 bg-white/60 p-6">
                  <Icon className="h-6 w-6 text-gold-ink" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-xl text-burgundy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{item.text}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
