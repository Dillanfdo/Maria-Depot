import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { addressLines, site } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { EnquiryForm } from "@/components/enquiry/EnquiryForm";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: `Request a quotation from ${site.name}. Shipping is included. We reply within ${site.contact.responseTime}.`,
  path: "/contact",
});

function FormFallback() {
  return <div className="h-[640px] animate-pulse border border-gold/30 bg-white" aria-hidden="true" />;
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Write to the workshop."
        text={`Share the vestment, the colour, and the church it is for. We reply within ${site.contact.responseTime}, with shipping included in the quotation.`}
      />
      <section className="bg-ivory py-16">
        <Container className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Suspense fallback={<FormFallback />}>
            <EnquiryForm />
          </Suspense>
          <aside className="space-y-6">
            <div className="border border-gold/40 bg-white p-6">
              <h2 className="font-display text-2xl text-burgundy">The workshop</h2>
              <ul className="mt-5 space-y-4 text-sm leading-relaxed text-stone">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-ink" aria-hidden="true" />
                  <address className="not-italic">
                    <a href={site.contact.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {addressLines().map((line) => (
                        <span key={line} className="block underline decoration-gold/60 underline-offset-4">
                          {line}
                        </span>
                      ))}
                    </a>
                  </address>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-gold-ink" aria-hidden="true" />
                  <a href={site.contact.phoneHref}>{site.contact.phoneDisplay}</a>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-gold-ink" aria-hidden="true" />
                  <a href={site.contact.emailHref}>{site.contact.email}</a>
                </li>
                <li className="flex gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-gold-ink" aria-hidden="true" />
                  <span>{site.contact.hours}</span>
                </li>
              </ul>
            </div>
            <iframe
              title={`Map showing ${site.name} in ${site.contact.locality}`}
              src={site.contact.mapEmbed}
              className="h-72 w-full border border-gold/40"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <p className="text-xs leading-relaxed text-stone">
              <a
                className="underline decoration-gold underline-offset-4"
                href={site.contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open {site.name} in Google Maps
              </a>
            </p>
          </aside>
        </Container>
      </section>
    </>
  );
}
