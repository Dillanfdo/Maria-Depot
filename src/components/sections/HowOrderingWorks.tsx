import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowOrderingWorks() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How an order begins"
          title="Four quiet steps, from a letter to your sacristy."
        />
        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {site.ordering.map((step) => (
            <li key={step.step} className="relative">
              <p className="font-display text-sm tracking-[0.28em] text-gold-ink">{step.step}</p>
              <h3 className="mt-3 font-display text-2xl text-burgundy">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
