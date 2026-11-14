import type { Metadata } from "next";
import { site, fullAddress } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy policy",
  description: `How ${site.name} handles enquiries, files, and contact details sent through this website.`,
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="How we treat what you send us."
        text="This is a placeholder policy written for the enquiry form on this site. Replace it with the policy your counsel approves before the site is public."
      />
      <section className="bg-ivory py-16">
        <Container className="max-w-3xl space-y-8 leading-relaxed text-stone">
          <div>
            <h2 className="font-display text-2xl text-burgundy">Who we are</h2>
            <p className="mt-3">
              {site.name}, {fullAddress()}. Email {site.contact.email}. Telephone {site.contact.phoneDisplay}.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-burgundy">What the enquiry form collects</h2>
            <p className="mt-3">
              If you write to us, we receive your name, email address, country, the product you ask about, and your message. Phone, organisation, colours, quantity, customisation notes, and a design file are collected only if you provide them. The file may be a photograph or a PDF no larger than 5 MB.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-burgundy">How it is used</h2>
            <p className="mt-3">
              The details are emailed to the workshop so we can prepare a quotation, and a confirmation is emailed to you. We do not add you to a marketing list. We do not sell the information. We do not keep it in a database on this website. The message lives in the workshop’s email account, and it is kept for as long as the conversation, the order, and ordinary business records require.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-burgundy">Email delivery</h2>
            <p className="mt-3">
              Messages are sent through Resend, an email delivery service. Their systems process the message in order to deliver it. A hidden field on the form is used to ignore automated spam, and repeated submissions from the same network may be refused for a short time. That count is held in memory and is not stored as a customer record.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-burgundy">Maps, WhatsApp, and links</h2>
            <p className="mt-3">
              The contact page embeds a Google Map of {site.contact.locality}. Opening the map can send your network address to Google. The WhatsApp button opens a chat with {site.contact.whatsappDisplay} in WhatsApp, which has its own privacy terms. Social links leave this site.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-burgundy">Cookies</h2>
            <p className="mt-3">
              This website does not set advertising or analytics cookies. Your browser may store whatever it needs to load the pages.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl text-burgundy">Your requests</h2>
            <p className="mt-3">
              Write to {site.contact.email} if you would like a copy of an enquiry we still hold, or if you would like us to delete a message that is not required for an order or a legal duty.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
