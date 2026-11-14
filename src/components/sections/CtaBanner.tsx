import { site } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-burgundy py-20 text-ivory">
      <div className="bg-damask pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <Container className="relative text-center">
        <p className="font-display text-[0.72rem] tracking-[0.28em] text-gold-light uppercase">{site.cta.eyebrow}</p>
        <h2 className="mt-3 font-display text-4xl font-medium sm:text-5xl">{site.cta.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-ivory/80">{site.cta.text}</p>
        <div className="mt-8">
          <Button href="/contact">{site.ui.quoteCta}</Button>
        </div>
      </Container>
    </section>
  );
}
