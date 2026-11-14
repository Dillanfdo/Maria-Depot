import { fullAddress, site } from "@/config/site";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    email: site.contact.email,
    telephone: site.contact.phoneDisplay,
    foundingDate: String(site.foundedYear),
    hasMap: site.contact.mapsUrl,
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.contact.latitude,
      longitude: site.contact.longitude,
    },
    address: {
      "@type": "PostalAddress",
      ...(site.contact.street ? { streetAddress: site.contact.street } : {}),
      addressLocality: "Tuticorin",
      addressRegion: site.contact.region,
      ...(site.contact.postalCode ? { postalCode: site.contact.postalCode } : {}),
      addressCountry: "IN",
    },
    areaServed: "Worldwide",
    knowsAbout: [
      "Church vestments",
      "Chasubles",
      "Liturgical textiles",
      "Hand embroidery",
    ],
    sameAs: site.socials.map((item) => item.href),
    slogan: site.tagline,
    location: {
      "@type": "Place",
      name: `${site.name} workshop`,
      address: fullAddress(),
    },
  };
}
