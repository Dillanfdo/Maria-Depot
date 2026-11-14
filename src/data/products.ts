import type { MediaAsset } from "@/config/site";

export type CatalogueItem = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  fabrics: string[];
  colours: string[];
  customisation: string[];
  image: MediaAsset;
};

export type CatalogueCategory = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: MediaAsset;
  items: CatalogueItem[];
};

function photo(file: string, remote: string, alt: string): MediaAsset {
  return { file, remote, alt };
}

export const categories: CatalogueCategory[] = [
  {
    slug: "chasubles",
    name: "Chasubles",
    tagline: "The principal vestment of the Eucharist, cut to the tradition you keep.",
    description:
      "Gothic or monastic, plain or heavily orphreyed. Each chasuble is lined for the climate it will be worn in, and finished so the shoulders sit quietly through a long liturgy.",
    image: photo(
      "chasubles.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1f/Alloni-bianca-02.jpg", "A gothic chasuble with a column orphrey"),
    items: [
      {
        slug: "gothic-chasuble",
        name: "Gothic Chasuble",
        summary: "A full, falling cut with a column or Y orphrey.",
        description:
          "The gothic chasuble is cut wide and rounded, so the cloth falls in a calm oval. We set a column orphrey or a Y-shaped orphrey in a contrasting silk, and line the body so it does not cling.",
        fabrics: ["Silk damask", "Brocade", "Tropical-weight blend"],
        colours: ["White", "Red", "Green", "Violet", "Rose", "Gold"],
        customisation: ["Column or Y orphrey", "Parish crest", "Plain cross", "Matching stole and burse"],
        image: photo(
      "gothic-chasuble.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Casulla_%28siglo_XVIII%29.jpg/1920px-Casulla_%28siglo_XVIII%29.jpg", "Gothic chasuble in festal cloth"),
      },
      {
        slug: "monastic-chasuble",
        name: "Monastic Chasuble",
        summary: "A quieter, narrower shape for daily and conventual use.",
        description:
          "Cut closer to the arm, with less cloth to manage at a busy altar. Often ordered in a sturdy damask with a simple cross or a narrow galloon edge.",
        fabrics: ["Wool-look damask", "Matte silk", "Linen blend"],
        colours: ["White", "Green", "Violet", "Red"],
        customisation: ["Plain or edged", "Embroidered cross", "Set of stoles"],
        image: photo(
      "monastic-chasuble.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Chasuble_LACMA_M.66.75.1.jpg", "Monastic chasuble with a simple cross"),
      },
    ],
  },
  {
    slug: "copes",
    name: "Copes",
    tagline: "Processional copes with a hood or shield that holds its shape.",
    description:
      "A cope has to move. We cut the half-circle generously, set a morse that fastens cleanly, and embroider the hood so it reads from the nave.",
    image: photo(
      "copes.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/33/B%C3%ADl%C3%BD_pluvi%C3%A1l.jpg", "A processional cope with an embroidered hood"),
    items: [
      {
        slug: "festal-cope",
        name: "Festal Cope",
        summary: "Cloth of substance, with an embroidered hood.",
        description:
          "For patronal feasts and processions. The orphrey follows the leading edge, and the hood carries the principal motif — a cross, a vine, or a symbol you send us.",
        fabrics: ["Silk damask", "Brocade"],
        colours: ["White", "Red", "Gold", "Green"],
        customisation: ["Hood motif", "Morse", "Matching chasuble"],
        image: photo(
      "festal-cope.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Capa_pluvial_en_el_Museo_Nacional_de_Pueblos_M%C3%A1gicos.jpg/1920px-Capa_pluvial_en_el_Museo_Nacional_de_Pueblos_M%C3%A1gicos.jpg", "Festal cope in cloth of gold tone"),
      },
      {
        slug: "processional-cope",
        name: "Processional Cope",
        summary: "A lighter cope for outdoor and long processions.",
        description:
          "The same dignity, in a cloth that does not exhaust the wearer. Lined so the colour outside is not dulled by what is underneath.",
        fabrics: ["Lightweight brocade", "Tropical silk blend"],
        colours: ["White", "Red", "Violet", "Green"],
        customisation: ["Shield or hood", "Parish monogram", "Clasp"],
        image: photo(
      "processional-cope.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Cappa_-_%E0%B4%95%E0%B4%BE%E0%B4%AA%E0%B5%8D%E0%B4%AA.JPG/1920px-Cappa_-_%E0%B4%95%E0%B4%BE%E0%B4%AA%E0%B5%8D%E0%B4%AA.JPG", "Lighter processional cope"),
      },
    ],
  },
  {
    slug: "stoles",
    name: "Stoles",
    tagline: "Priest’s and deacon’s stoles, from a quiet band to a festal band of embroidery.",
    description:
      "The stole is often the piece a church orders first. We make both the priest’s stole, worn crossed or hanging, and the deacon’s stole, worn over the shoulder.",
    image: photo(
      "stoles.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Anglican_priest_vested_in_an_alb%2C_cincture_and_purple_stole.jpg", "A pair of embroidered stoles"),
    items: [
      {
        slug: "priests-stole",
        name: "Priest’s Stole",
        summary: "Neck to knee, with crosses at the ends and the nape.",
        description:
          "Width, weight, and the placement of the crosses are set to your custom. Ends may be squared, spade-shaped, or fringed.",
        fabrics: ["Silk", "Damask", "Linen for penitential seasons"],
        colours: ["White", "Red", "Green", "Violet", "Rose", "Gold"],
        customisation: ["End shape", "Fringe", "Crest", "Matching chasuble"],
        image: photo(
      "priests-stole.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Anglican_priest_vested_in_an_alb%2C_cincture_and_purple_stole.jpg", "Priest’s stole with gold crosses"),
      },
      {
        slug: "deacons-stole",
        name: "Deacon’s Stole",
        summary: "Worn from the left shoulder, finished to the same cloth as the dalmatic.",
        description:
          "Ordered alone or with a dalmatic. We mark the shoulder seam so it stays where the tradition expects it.",
        fabrics: ["Silk", "Damask"],
        colours: ["White", "Red", "Green", "Violet", "Gold"],
        customisation: ["Matched to a dalmatic", "Fringe", "Emblem"],
        image: photo(
      "deacons-stole.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/880Manila_Cathedral_Intramuros_Manila_Landmarks_49.jpg/1920px-880Manila_Cathedral_Intramuros_Manila_Landmarks_49.jpg", "Deacon’s stole in matching silk"),
      },
    ],
  },
  {
    slug: "albs-cassocks",
    name: "Albs & Cassocks",
    tagline: "The foundation garments: linen albs and tailored cassocks.",
    description:
      "An alb that pulls, or a cassock that strains at the shoulder, distracts from everything worn over it. These are cut from measurements, not from a single standard size.",
    image: photo(
      "albs.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Alb_MET_147483.jpg/1920px-Alb_MET_147483.jpg", "A white linen alb on a stand"),
    items: [
      {
        slug: "linen-alb",
        name: "Linen Alb",
        summary: "A cool alb with a yoke or a plain gathered neck.",
        description:
          "Hemmed to the shoe, with sleeves that allow a chasuble to sit. We offer a zip or button front, and a cincture in the colour you prefer.",
        fabrics: ["Linen", "Linen-cotton", "Easy-care blend"],
        colours: ["White", "Ivory"],
        customisation: ["Height and sleeve length", "Lace at hem and cuff", "Cincture"],
        image: photo(
      "linen-alb.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Alb_MET_23.24_back_CP4.jpg/1920px-Alb_MET_23.24_back_CP4.jpg", "Linen alb with a narrow hem"),
      },
      {
        slug: "tailored-cassock",
        name: "Tailored Cassock",
        summary: "Single or double breasted, for clergy, choir, or servers.",
        description:
          "Cut with enough ease for this climate, and lined where the cloth needs it. Buttons, piping, and fascia are chosen with you.",
        fabrics: ["Wool blend", "Tropical suiting", "Cotton"],
        colours: ["Black", "White", "Red", "Violet"],
        customisation: ["Single or double breasted", "Piping", "Cincture", "Shoulder cape"],
        image: photo(
      "cassock.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Alb_-_%E0%B4%95%E0%B5%8A%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B5%80%E0%B4%A8.JPG/1920px-Alb_-_%E0%B4%95%E0%B5%8A%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B5%80%E0%B4%A8.JPG", "A tailored black cassock"),
      },
    ],
  },
  {
    slug: "dalmatics-tunicles",
    name: "Dalmatics & Tunicles",
    tagline: "Matched diaconal vestments with open sides and a clear orphrey.",
    description:
      "The dalmatic and tunicle are made as a conversation with the chasuble: same cloth, same orphrey width, a lighter construction so they can be worn through a long service.",
    image: photo(
      "dalmatic.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Anonymous_Dalmatic_of_Turkish_fabric.jpg/1920px-Anonymous_Dalmatic_of_Turkish_fabric.jpg", "A green dalmatic with gold orphreys"),
    items: [
      {
        slug: "deacons-dalmatic",
        name: "Deacon’s Dalmatic",
        summary: "Open at the sides, banded at the hem and cuffs.",
        description:
          "Clavi run from shoulder to hem. We can add a lining that shows only at the edge, in a colour that belongs to the set.",
        fabrics: ["Silk damask", "Brocade", "Lightweight blend"],
        colours: ["White", "Red", "Green", "Violet", "Gold"],
        customisation: ["Matched to a chasuble", "Tassels", "Cuff bands"],
        image: photo(
      "deacons-dalmatic.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Anonymous_Dalmatic_of_Turkish_fabric.jpg/1920px-Anonymous_Dalmatic_of_Turkish_fabric.jpg", "Deacon’s dalmatic in green damask"),
      },
      {
        slug: "tunicle",
        name: "Tunicle",
        summary: "The companion vestment, slightly simpler in its bands.",
        description:
          "Cut to sit with the dalmatic without copying every detail. Useful when a liturgy calls for both, or when a parish is completing an older set.",
        fabrics: ["Silk damask", "Brocade"],
        colours: ["White", "Red", "Green", "Violet", "Gold"],
        customisation: ["Pair with a dalmatic", "Simpler orphrey"],
        image: photo(
      "tunicle.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Apparel_From_A_Dalmatic_%28Spain%29%2C_16th_century_%28CH_18384617%29.jpg/1920px-Apparel_From_A_Dalmatic_%28Spain%29%2C_16th_century_%28CH_18384617%29.jpg", "Tunicle with narrow gold bands"),
      },
    ],
  },
  {
    slug: "altar-linens",
    name: "Altar Linens & Frontals",
    tagline: "Fair linens, corporals, and frontals that dress the altar with the season.",
    description:
      "The altar is clothed before anyone is. We hem fair linens by hand or with a fine machine stitch, and make frontals that hang true, with or without an embroidered centre.",
    image: photo(
      "altar-linens.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Altar_cloth_MET_201883.jpg/1920px-Altar_cloth_MET_201883.jpg", "A fair linen and frontal on an altar"),
    items: [
      {
        slug: "fair-linen",
        name: "Fair Linen",
        summary: "The top cloth, hemmed to the altar you measure.",
        description:
          "Send the length, width, and the drop you want at each end. We can add a narrow hemstitch or five small crosses.",
        fabrics: ["Linen", "Linen blend"],
        colours: ["White"],
        customisation: ["Five crosses", "Hemstitch", "Exact altar size"],
        image: photo(
      "fair-linen.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Altar_cloth_from_Spain%2C_17th_-_18th_century%2C_Honolulu_Museum_of_Art%2C_3736.jpg/1920px-Altar_cloth_from_Spain%2C_17th_-_18th_century%2C_Honolulu_Museum_of_Art%2C_3736.jpg", "White fair linen with hemstitch"),
      },
      {
        slug: "altar-frontal",
        name: "Altar Frontal",
        summary: "A seasonal cloth for the face of the altar.",
        description:
          "Hung from a rod or made with a top that covers the mensa. The centre motif can be a cross, a monogram, or a design you provide.",
        fabrics: ["Damask", "Brocade", "Velvet for penitential seasons"],
        colours: ["White", "Red", "Green", "Violet", "Rose", "Gold"],
        customisation: ["Superfrontal", "Orphrey", "Crest", "Laudian or Jacobean fall"],
        image: photo(
      "frontal.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/127_Museu_Episcopal_de_Vic%2C_frontal_de_l%27Epifania%2C_Sant_Joan_de_les_Abadesses%2C_detall.jpg/1920px-127_Museu_Episcopal_de_Vic%2C_frontal_de_l%27Epifania%2C_Sant_Joan_de_les_Abadesses%2C_detall.jpg", "Violet altar frontal with a gold cross"),
      },
    ],
  },
  {
    slug: "veils-burses",
    name: "Veils, Humeral Veils & Burses",
    tagline: "The smaller silks: chalice veils, burses, and the humeral veil.",
    description:
      "These pieces are seen at close range. We line them properly, stiffen a burse so it holds the corporal, and cut the humeral veil so it can be worn without slipping.",
    image: photo(
      "veils.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/A.E.Gross%C3%A9_rozenkazuifel.jpg", "A chalice veil and burse in rose"),
    items: [
      {
        slug: "humeral-veil",
        name: "Humeral Veil",
        summary: "Long enough to cover the hands, lined so the outer silk is protected.",
        description:
          "Often ordered with the cope’s cloth, or in white for the whole year. Ties or a simple clasp sit at the chest.",
        fabrics: ["Silk", "Lightweight brocade"],
        colours: ["White", "Gold", "Red", "the colour of the set"],
        customisation: ["Clasp", "Embroidered centre", "Matched set"],
        image: photo(
      "humeral-veil.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/33/B%C3%ADl%C3%BD_pluvi%C3%A1l.jpg", "Ivory humeral veil"),
      },
      {
        slug: "chalice-veil-burse",
        name: "Chalice Veil & Burse",
        summary: "A paired veil and burse in the colour of the day.",
        description:
          "The veil is lined and weighted just enough to fall cleanly. The burse opens flat and closes on the corporal without a struggle.",
        fabrics: ["Silk damask", "Brocade"],
        colours: ["White", "Red", "Green", "Violet", "Rose", "Gold"],
        customisation: ["Emblem", "Matched to a chasuble", "Set of all colours"],
        image: photo(
      "burse.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Casulla_de_vellut_de_seda%2C_museu_Hist%C3%B2ric_Municipal_de_Val%C3%A8ncia.JPG/1920px-Casulla_de_vellut_de_seda%2C_museu_Hist%C3%B2ric_Municipal_de_Val%C3%A8ncia.JPG", "Red chalice veil and burse"),
      },
    ],
  },
  {
    slug: "choir-robes",
    name: "Choir Robes & Altar Server Robes",
    tagline: "Cassocks, cottas, and server albs for the people who stand beside the liturgy.",
    description:
      "Choir and server clothes are ordered in numbers, and they have to survive weekly wear. We still finish each one, and we keep a note of your sizes for the next time a new singer arrives.",
    image: photo(
      "choir.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Barasoain_Church_Museum_Malolos_16.jpg/1920px-Barasoain_Church_Museum_Malolos_16.jpg", "Choir cassocks and white cottas"),
    items: [
      {
        slug: "choir-cassock-cotta",
        name: "Choir Cassock & Cotta",
        summary: "A durable cassock with a cotton cotta over it.",
        description:
          "The cotta can be plain or lightly trimmed with lace. We grade sizes for adults and young people when you send a list.",
        fabrics: ["Polyester-wool cassock cloth", "Cotton cotta"],
        colours: ["Black", "Red", "Violet", "White cotta"],
        customisation: ["Lace or plain cotta", "Size run", "School or parish piping"],
        image: photo(
      "cotta.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Anglican_priest_vested_in_an_alb%2C_cincture_and_purple_stole.jpg", "Cotta over a choir cassock"),
      },
      {
        slug: "server-alb",
        name: "Altar Server Alb",
        summary: "A simple alb that a young server can put on without help.",
        description:
          "Shoulders that fit, a hem that can be let down, and a cincture that stays tied. Made to be washed often.",
        fabrics: ["Easy-care blend", "Cotton"],
        colours: ["White"],
        customisation: ["Growing hems", "Coloured cinctures", "Parish badge"],
        image: photo(
      "server-alb.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Alb_-_%E0%B4%95%E0%B5%8A%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B5%80%E0%B4%A8.JPG/1920px-Alb_-_%E0%B4%95%E0%B5%8A%E0%B4%A4%E0%B5%8D%E0%B4%A4%E0%B5%80%E0%B4%A8.JPG", "White altar server alb"),
      },
    ],
  },
  {
    slug: "banners-furnishings",
    name: "Banners, Flags & Church Furnishings Textiles",
    tagline: "Processional banners, pulpit falls, and the textiles that furnish a church.",
    description:
      "Beyond what is worn: the cloths that mark a pulpit, a lectern, a statue, or the head of a procession. Send the pole size, or the width of the desk, and a drawing if you have one.",
    image: photo(
      "banner.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/128_Museu_Episcopal_de_Vic%2C_col%C2%B7lecci%C3%B3_de_teixit_i_indument%C3%A0ria%2C_amb_el_frontal_de_l%27Epifania.jpg/1920px-128_Museu_Episcopal_de_Vic%2C_col%C2%B7lecci%C3%B3_de_teixit_i_indument%C3%A0ria%2C_amb_el_frontal_de_l%27Epifania.jpg", "A processional banner with an embroidered emblem"),
    items: [
      {
        slug: "processional-banner",
        name: "Processional Banner",
        summary: "Painted or embroidered, hung from a cross-piece you can carry.",
        description:
          "We work from your parish symbol. The ground cloth is firm enough to hang straight, and the sleeve fits a standard banner pole unless you tell us otherwise.",
        fabrics: ["Banner cloth", "Silk for the emblem", "Felt for appliqué"],
        colours: ["White", "Red", "Green", "Violet", "Blue", "Gold"],
        customisation: ["Your emblem", "Fringe", "Pole sleeve size", "Text"],
        image: photo(
      "processional-banner.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/127_Museu_Episcopal_de_Vic%2C_frontal_de_l%27Epifania%2C_Sant_Joan_de_les_Abadesses%2C_detall.jpg/1920px-127_Museu_Episcopal_de_Vic%2C_frontal_de_l%27Epifania%2C_Sant_Joan_de_les_Abadesses%2C_detall.jpg", "Processional banner ready for a feast"),
      },
      {
        slug: "pulpit-fall",
        name: "Pulpit Fall & Lectern Cloth",
        summary: "A seasonal fall with a border that does not curl.",
        description:
          "Measured to the desk. The embroidery sits where the congregation can read it, and the lining keeps the edge true.",
        fabrics: ["Damask", "Brocade"],
        colours: ["White", "Red", "Green", "Violet", "Rose"],
        customisation: ["IHS or cross", "Fringe", "Exact width"],
        image: photo(
      "pulpit-fall.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/49/133_Chasuble_Ploudaniel.jpg", "Green pulpit fall with a gold border"),
      },
    ],
  },
  {
    slug: "fabrics-trims",
    name: "Fabrics, Laces, Trims & Embroidery Supplies",
    tagline: "Damask, galloon, lace, and thread for sacristies that sew as well as order.",
    description:
      "Some customers are vestment makers themselves, or a parish linen guild. We sell cloth by the metre and the trims we use in the workshop, with the same care we give a finished piece.",
    image: photo(
      "trims.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/ed/02._Dorz%C3%A1ln%C3%AD_k%C5%99%C3%AD%C5%BE_kazule_z_B%C5%99evnova%2C_detail%2C_Um%C4%9Bleckopr%C5%AFmyslov%C3%A9_muzeum_v_Praze.jpg", "Galloons, lace, and gold thread on a worktable"),
    items: [
      {
        slug: "liturgical-damask",
        name: "Liturgical Damask",
        summary: "Seasonal damask by the metre, in widths we will confirm.",
        description:
          "Tell us the metres, the season, and whether the cloth is for a vestment or a frontal. We will propose a weight. Shipping of the bolt is included in the quotation.",
        fabrics: ["Silk damask", "Polyester damask", "Brocade"],
        colours: ["White", "Red", "Green", "Violet", "Rose", "Gold"],
        customisation: ["Sample cutting before the bolt", "Matched orphrey cloth"],
        image: photo(
      "damask.jpg",
      "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Casulla_de_vellut_de_seda%2C_museu_Hist%C3%B2ric_Municipal_de_Val%C3%A8ncia.JPG/1920px-Casulla_de_vellut_de_seda%2C_museu_Hist%C3%B2ric_Municipal_de_Val%C3%A8ncia.JPG", "A bolt of violet liturgical damask"),
      },
      {
        slug: "galloons-lace",
        name: "Galloons, Lace & Thread",
        summary: "Gold and coloured galloon, cotton lace, and embroidery thread.",
        description:
          "Sold in lengths that make sense for a set, not in scraps. If you are repairing an old vestment, send a photograph of the existing trim and we will look for a near match.",
        fabrics: ["Metallic galloon", "Cotton lace", "Silk embroidery thread"],
        colours: ["Gold", "White", "Red", "Green", "Violet"],
        customisation: ["Matched to a photograph", "Lengths cut for a set"],
        image: photo(
      "galloon.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/ed/02._Dorz%C3%A1ln%C3%AD_k%C5%99%C3%AD%C5%BE_kazule_z_B%C5%99evnova%2C_detail%2C_Um%C4%9Bleckopr%C5%AFmyslov%C3%A9_muzeum_v_Praze.jpg", "Gold galloon and embroidery thread"),
      },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getCategorySlugs() {
  return categories.map((category) => category.slug);
}

export function getFeaturedCategories() {
  return categories.slice(0, 6);
}

export function getAllItems() {
  return categories.flatMap((category) =>
    category.items.map((item) => ({ ...item, category })),
  );
}
