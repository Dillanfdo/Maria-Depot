import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LiturgicalColours() {
  return (
    <section className="relative overflow-hidden bg-burgundy py-20 text-ivory sm:py-28">
      <div className="bg-damask pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
      <Container className="relative">
        <SectionHeading
          light
          eyebrow="The colours of the year"
          title="Cloth for the season you are keeping."
          text="Tell us the Sunday, the feast, or the tradition, and we will propose a colour that reads truly under church light."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.colours.map((colour) => (
            <li key={colour.name} className="border border-gold/30 bg-black/10 p-5">
              <div className="flex items-center gap-4">
                <span
                  className="h-12 w-12 shrink-0 border border-gold/50"
                  style={{ backgroundColor: colour.hex }}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display text-xl">{colour.name}</h3>
                  <p className="text-sm text-gold-light">{colour.seasons}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ivory/75">{colour.note}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
