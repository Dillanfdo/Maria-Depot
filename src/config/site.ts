/**
 * All placeholder business details live in this file.
 * Replace the values below — components read from here and do not hard-code them.
 *
 * Images: remote URLs are free photographs from Wikimedia Commons.
 * Set `useLocalImages` to true and add files to /public/images
 * using each asset's `file` name when the workshop's own pictures are ready.
 */

export type MediaAsset = {
  file: string;
  remote: string;
  alt: string;
};

/** One-line switch: false = remote placeholders, true = /public/images/{file} */
export const useLocalImages = false;

export function media(asset: { readonly file: string; readonly remote: string }) {
  return useLocalImages ? `/images/${asset.file}` : asset.remote;
}

function plate(file: string, remote: string, alt: string): MediaAsset {
  return { file, remote, alt };
}

export const site = {
  name: "DD Vestments",
  shortName: "DD Vestments",
  legalName: "DD Vestments",
  tagline: "Vestments woven with faith. Crafted for three generations.",
  description:
    "DD Vestments is a family workshop in Tuticorin, Tamil Nadu, making church vestments and liturgical textiles for parishes and cathedrals worldwide. Every quotation includes shipping.",
  mission:
    "To clothe the worship of the Church with work that is patient, honest, and made to be worn for years.",
  /** Placeholder founding year. Replace with the true year. */
  foundedYear: 1924,
  copyrightYear: 2026,
  generations: 3,
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, ""),
  locale: "en_IN",
  contact: {
    phoneDisplay: "+91 98765 43210",
    phoneHref: "tel:+919876543210",
    whatsappDisplay: "+91 98765 43210",
    whatsappHref: "https://wa.me/919876543210",
    email: "ddvestments2023@gmail.com",
    emailHref: "mailto:ddvestments2023@gmail.com",
    hours: "Monday to Saturday, 9:30–18:00 IST. Closed Sunday.",
    responseTime: "24–48 hours",
    street: "",
    locality: "Tuticorin (Thoothukudi)",
    region: "Tamil Nadu",
    postalCode: "",
    country: "India",
    latitude: 8.801769,
    longitude: 78.154684,
    mapsUrl:
      "https://www.google.com/maps/place/DD+Vestments/@8.801769,78.154684,17z/data=!3m1!4b1!4m6!3m5!1s0x3b03ef000a87b3b5:0xfba18bb8bfa6afdc!8m2!3d8.801769!4d78.154684!16s%2Fg%2F11vst238nn",
    mapEmbed: "https://maps.google.com/maps?q=8.801769,78.154684&z=17&output=embed",
  },
  socials: [
    { label: "Facebook", href: "https://facebook.com/yourbusiness" },
    { label: "Instagram", href: "https://instagram.com/yourbusiness" },
    { label: "YouTube", href: "https://youtube.com/@yourbusiness" },
    { label: "WhatsApp", href: "https://wa.me/919876543210" },
    { label: "LinkedIn", href: "https://linkedin.com/company/yourbusiness" },
  ],
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/collections", label: "Collections" },
    { href: "/export", label: "Export & Shipping" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ],
  ui: {
    quoteCta: "Request a Quote",
    exploreCta: "Explore Collections",
    ourStory: "Our Story",
    enquire: "Enquire about this",
    shippingPromise: "Shipping charges are included in your quotation. No hidden costs.",
    pricesNote: "Prices are not listed. Tell us what you need and we will send a quotation.",
  },
  images: {
    hero: plate(
      "hero.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Church_vestments_in_the_treasury_of_Cathedral_of_Vic_%28Spain%29_2012.jpg/1920px-Church_vestments_in_the_treasury_of_Cathedral_of_Vic_%28Spain%29_2012.jpg",
      "Historic church vestments displayed together in a cathedral treasury",
    ),
    heritage: plate(
      "heritage.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/ed/02._Dorz%C3%A1ln%C3%AD_k%C5%99%C3%AD%C5%BE_kazule_z_B%C5%99evnova%2C_detail%2C_Um%C4%9Bleckopr%C5%AFmyslov%C3%A9_muzeum_v_Praze.jpg",
      "Gold embroidery on the cross of a historic chasuble",
    ),
    aboutWorkshop: plate(
      "workshop-floor.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/128_Museu_Episcopal_de_Vic%2C_col%C2%B7lecci%C3%B3_de_teixit_i_indument%C3%A0ria%2C_amb_el_frontal_de_l%27Epifania.jpg/1920px-128_Museu_Episcopal_de_Vic%2C_col%C2%B7lecci%C3%B3_de_teixit_i_indument%C3%A0ria%2C_amb_el_frontal_de_l%27Epifania.jpg",
      "Embroidered altar frontals and vestments in a church textile collection",
    ),
    aboutEmbroidery: plate(
      "embroidery-frame.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/ed/02._Dorz%C3%A1ln%C3%AD_k%C5%99%C3%AD%C5%BE_kazule_z_B%C5%99evnova%2C_detail%2C_Um%C4%9Bleckopr%C5%AFmyslov%C3%A9_muzeum_v_Praze.jpg",
      "Close view of gold thread embroidery on a liturgical vestment",
    ),
    aboutFinishing: plate(
      "finishing-table.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/880Manila_Cathedral_Intramuros_Manila_Landmarks_49.jpg/1920px-880Manila_Cathedral_Intramuros_Manila_Landmarks_49.jpg",
      "Vestments kept in a cathedral sacristy",
    ),
    og: plate(
      "og.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Church_vestments_in_the_treasury_of_Cathedral_of_Vic_%28Spain%29_2012.jpg/1920px-Church_vestments_in_the_treasury_of_Cathedral_of_Vic_%28Spain%29_2012.jpg",
      "DD Vestments, church vestments from Tuticorin",
    ),
    export: plate(
      "packing.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Barasoain_Church_Museum_Malolos_16.jpg/1920px-Barasoain_Church_Museum_Malolos_16.jpg",
      "Historic liturgical vestments laid out in a church museum",
    ),
  },
  trust: [
    { value: 3, suffix: "", label: "Generations" },
    { value: 1924, suffix: "", label: "Since our founding" },
    { value: 40, suffix: "+", label: "Countries shipped" },
    { value: null, suffix: "", display: "Hand", label: "Custom embroidery" },
  ],
  heritage: {
    eyebrow: "The family workshop",
    title: "Three generations, one cutting table.",
    body: "The house began when a Tuticorin tailor started making vestments for the church beside the harbour. His children learned the same stitches. Their children still cut, embroider, and finish every order under this roof. The cloth has changed with the years. The care has not.",
    linkLabel: "Our Story",
  },
  why: [
    {
      title: "Cloth chosen for worship",
      text: "Silk damask, lightweight brocade, linen, and tropical-weight blends, selected for climate, season, and the life of a busy sacristy.",
    },
    {
      title: "Embroidery by hand",
      text: "Orphreys, crosses, vines, and monograms worked in silk and gold thread, at the pace the design requires.",
    },
    {
      title: "Cut to your tradition",
      text: "Gothic, monastic, or a shape your parish already wears. Send a photograph and we will follow it.",
    },
    {
      title: "Single pieces and parish sets",
      text: "A stole for an ordination, or a matched set for a cathedral. Both are welcome.",
    },
    {
      title: "Delivery included",
      text: "Shipping is calculated into the quotation. The figure we send is the figure you approve.",
    },
  ],
  colours: [
    {
      name: "White",
      hex: "#F7F3EA",
      seasons: "Christmas, Easter, and feasts of joy",
      note: "Also used for weddings, baptisms, and funerals of children in many traditions.",
    },
    {
      name: "Red",
      hex: "#8E1B2C",
      seasons: "Pentecost, Passion, and martyrs",
      note: "A deep liturgical red, not a bright scarlet, so gold embroidery still reads.",
    },
    {
      name: "Green",
      hex: "#1F6B45",
      seasons: "Ordinary Time",
      note: "The colour worn for the long weeks of teaching and growth.",
    },
    {
      name: "Violet",
      hex: "#5C3D86",
      seasons: "Advent and Lent",
      note: "A royal violet that stays rich under church lighting.",
    },
    {
      name: "Rose",
      hex: "#C47B8A",
      seasons: "Gaudete and Laetare Sundays",
      note: "Used sparingly, for the two Sundays of quiet rejoicing.",
    },
    {
      name: "Gold",
      hex: "#C9A24B",
      seasons: "Festal substitute for white",
      note: "Offered where a parish reserves cloth of gold for the highest feasts.",
    },
  ],
  ordering: [
    {
      step: "01",
      title: "Enquire",
      text: "Tell us the vestment, the colour, the quantity, and any crest or photograph we should follow.",
    },
    {
      step: "02",
      title: "Receive a quote",
      text: "We reply with a clear quotation. Shipping charges are included. There is nothing extra to discover later.",
    },
    {
      step: "03",
      title: "Approve and produce",
      text: "Once you approve, cloth is reserved, embroidery is planned, and the piece is made in the workshop.",
    },
    {
      step: "04",
      title: "Delivered to your door",
      text: "We pack for a long journey and dispatch to your church, cathedral, or sacristy.",
    },
  ],
  testimonials: [
    {
      quote:
        "The chasubles arrived perfectly packed, and the orphrey matched the photograph of our old set. Our sacristan said they feel made for this church.",
      name: "Rev. A. Fernandes",
      place: "Parish of St. Brigid, County Cork, Ireland",
    },
    {
      quote:
        "We ordered a green set for Ordinary Time and a rose stole for Laetare. The quotation included the freight, which made the parish council’s decision simple.",
      name: "Sacristy team",
      place: "Holy Cross Church, Lagos, Nigeria",
    },
    {
      quote:
        "They asked careful questions about our Lutheran cut before a single stitch was set. The stole sits properly, and the linen alb breathes in our climate.",
      name: "Pastor M. Lindholm",
      place: "Grace Church, Minneapolis, United States",
    },
    {
      quote:
        "A banner for our patronal feast, embroidered with the parish symbol we sent as a sketch. It now leads the procession.",
      name: "Cathedral office",
      place: "San José Cathedral Parish, Costa Rica",
    },
    {
      quote:
        "From Tuticorin to Singapore without a crease that mattered. The cope is dignified, and the lining is lighter than we dared hope.",
      name: "Verger",
      place: "St. Andrew’s Church, Singapore",
    },
  ],
  timeline: [
    {
      year: "1924",
      title: "The founder",
      text: "A harbour tailor begins making vestments for the church in Tuticorin, working silk and cotton by lamplight after the day’s trade is done. The first orders are local, and they are made to last.",
    },
    {
      year: "1962",
      title: "The second generation",
      text: "The workshop takes a name the town already uses, and the founder’s children widen the circle: more hands at the frame, parish sets for churches across Tamil Nadu, and a habit of writing every measurement down.",
    },
    {
      year: "Today",
      title: "The third generation",
      text: "The grandchildren still cut and finish in the same house. Orders now leave for parishes far from the Coromandel coast. The quotation includes the journey, and the last inspection is still done by the family.",
    },
  ],
  values: [
    {
      title: "Reverence",
      text: "These clothes are for prayer. We do not treat them as costume, and we do not hurry a feast-day piece for the sake of a date we cannot keep.",
    },
    {
      title: "Honesty",
      text: "We name the cloth, the thread, and the time. If a design needs more weeks, we say so before you approve.",
    },
    {
      title: "Hospitality",
      text: "Catholic, Anglican, Lutheran, and other congregations write to us. Tell us your tradition and we will cut accordingly.",
    },
    {
      title: "Stewardship",
      text: "Linings, seams, and fastenings are chosen so a vestment can be worn, cleaned, and repaired across many years.",
    },
  ],
  locationNote:
    "The workshop stands in Tuticorin, also called Thoothukudi, on the Coromandel coast of Tamil Nadu. It is a port city, which has always suited a house that sends its work across the sea. Visitors are received by appointment.",
  shipping: {
    promise: "Shipping charges are included in your quotation. No hidden costs.",
    detail:
      "When we price a vestment, we price the cloth, the work, the packing, and the passage to your country. Duties charged by the destination customs authority are the responsibility of the consignee, unless we have agreed otherwise in writing.",
    regions: [
      { name: "India & South Asia", note: "Tamil Nadu, the rest of India, Sri Lanka, and neighbouring countries." },
      { name: "Middle East", note: "Parishes and chaplaincies across the Gulf." },
      { name: "Europe & the British Isles", note: "Including Ireland, Malta, and the continent." },
      { name: "Africa", note: "West, East, and Southern Africa." },
      { name: "The Americas", note: "North America, Latin America, and the Caribbean." },
      { name: "Southeast Asia & Oceania", note: "Singapore, Malaysia, the Philippines, Australia, and New Zealand." },
    ],
    process: [
      { title: "Measure the journey", text: "We confirm the delivery address and the safest service for embroidered work." },
      { title: "Pack for distance", text: "Tissue, muslin bags for embroidery, and a rigid carton. A care note travels inside." },
      { title: "Document the parcel", text: "A commercial invoice and packing list are prepared for customs." },
      { title: "Dispatch and write", text: "We send the tracking details to the email on your quotation." },
    ],
    leadTimes: [
      { label: "Plain and lightly trimmed pieces", time: "3–4 weeks" },
      { label: "Hand embroidery and crests", time: "5–8 weeks" },
      { label: "Large parish or cathedral sets", time: "Quoted with the order" },
      { label: "Cloth and trims by the metre", time: "2–3 weeks, subject to the bolt" },
    ],
    leadNote: "These times are placeholders for planning. Your quotation will name the weeks that apply to your piece, counted from the day you approve.",
  },
  faqs: [
    {
      question: "Is there a minimum order?",
      answer:
        "No. A single stole is as welcome as a full set for a parish. Where a quantity changes the price of cloth, we show that in the quotation.",
    },
    {
      question: "Can you match a vestment we already own?",
      answer:
        "Yes. Send a clear photograph, the measurements, and a note of the cloth if you know it. We will follow the cut and the spirit of the original.",
    },
    {
      question: "Why are there no prices on the website?",
      answer:
        "Each piece is cut for a church, a climate, and a degree of embroidery. A listed price would be a guess. The quotation is the price, and it includes shipping.",
    },
    {
      question: "Are shipping charges extra?",
      answer:
        "No. Shipping charges are included in your quotation. No hidden costs. Import duty at your end, if any, is stated separately so it is never a surprise inside our invoice.",
    },
    {
      question: "How do we pay?",
      answer:
        "A deposit is asked when you approve the quotation, and the balance before dispatch. The quotation names the method — bank transfer is our usual path. These terms are placeholders until you confirm your own.",
    },
    {
      question: "What documents travel with an export order?",
      answer:
        "A commercial invoice and a packing list. If your country asks for anything further, tell us when you enquire and we will say whether we can provide it.",
    },
    {
      question: "How long will it take?",
      answer:
        "Plain pieces are often ready in three to four weeks, and embroidered work in five to eight. Your quotation replaces these placeholders with a date we can keep.",
    },
    {
      question: "Do you work with every tradition?",
      answer:
        "We make the vestments and linens used across Catholic, Anglican, Lutheran, and other churches. Describe the tradition, the minister, and the occasion, and we will cut for that use.",
    },
  ],
  gallery: [
    plate(
      "gallery-01.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1f/Alloni-bianca-02.jpg", "A festal chasuble with a gold cross orphrey"),
    plate(
      "gallery-02.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6e/Casulla_%28siglo_XVII%29.jpg/1920px-Casulla_%28siglo_XVII%29.jpg", "A red Pentecost chasuble laid on the cutting table"),
    plate(
      "gallery-03.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Chasuble_LACMA_M.66.75.1.jpg", "A green Ordinary Time set, chasuble and stole"),
    plate(
      "gallery-04.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/131_Chasuble_Plouigneau.jpg", "A violet cope prepared for Advent"),
    plate(
      "gallery-05.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/A.E.Gross%C3%A9_rozenkazuifel.jpg", "A rose stole for Gaudete Sunday"),
    plate(
      "gallery-06.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/ed/02._Dorz%C3%A1ln%C3%AD_k%C5%99%C3%AD%C5%BE_kazule_z_B%C5%99evnova%2C_detail%2C_Um%C4%9Bleckopr%C5%AFmyslov%C3%A9_muzeum_v_Praze.jpg", "Gold thread on an embroidery frame"),
    plate(
      "gallery-07.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Altar_cloth_from_Spain%2C_17th_-_18th_century%2C_Honolulu_Museum_of_Art%2C_3736.jpg/1920px-Altar_cloth_from_Spain%2C_17th_-_18th_century%2C_Honolulu_Museum_of_Art%2C_3736.jpg", "A fair linen being hemmed"),
    plate(
      "gallery-08.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Anglican_priest_vested_in_an_alb%2C_cincture_and_purple_stole.jpg", "Choir robes waiting for a final press"),
    plate(
      "gallery-09.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/127_Museu_Episcopal_de_Vic%2C_frontal_de_l%27Epifania%2C_Sant_Joan_de_les_Abadesses%2C_detall.jpg/1920px-127_Museu_Episcopal_de_Vic%2C_frontal_de_l%27Epifania%2C_Sant_Joan_de_les_Abadesses%2C_detall.jpg", "A processional banner with a parish emblem"),
    plate(
      "gallery-10.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Casulla_de_vellut_de_seda%2C_museu_Hist%C3%B2ric_Municipal_de_Val%C3%A8ncia.JPG/1920px-Casulla_de_vellut_de_seda%2C_museu_Hist%C3%B2ric_Municipal_de_Val%C3%A8ncia.JPG", "Rolls of damask and galloon in the cloth store"),
    plate(
      "gallery-11.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/33/B%C3%ADl%C3%BD_pluvi%C3%A1l.jpg", "A humeral veil folded with its burse"),
    plate(
      "gallery-12.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Alb_MET_147483.jpg/1920px-Alb_MET_147483.jpg", "An alb and cincture ready for packing"),
  ],
  cta: {
    eyebrow: "Begin an order",
    title: "Request a custom quote",
    text: "Write with the season, the colour, and the church it is for. We will answer with a quotation that already includes the shipping.",
  },
} as const;

export function addressLines() {
  const { street, locality, region, postalCode, country } = site.contact;
  const regionLine = [region, postalCode].filter(Boolean).join(" ");
  return [street, locality, regionLine, country].filter(Boolean);
}

export function fullAddress() {
  return addressLines().join(", ");
}
