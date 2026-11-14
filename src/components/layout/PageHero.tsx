import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";

export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <section className="relative overflow-hidden bg-burgundy text-ivory">
      <div className="bg-damask pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <Container className="relative py-16 sm:py-20">
        <p className="font-display text-[0.72rem] tracking-[0.28em] text-gold-light uppercase">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight font-medium sm:text-5xl">{title}</h1>
        <GoldDivider className="mt-6 max-w-xs" />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/80 sm:text-lg">{text}</p>
      </Container>
    </section>
  );
}
