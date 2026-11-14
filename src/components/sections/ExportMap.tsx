import { site } from "@/config/site";

export function ExportMap() {
  const pins = [
    { name: "Tuticorin", x: 68, y: 48 },
    { name: "Europe", x: 50, y: 32 },
    { name: "Africa", x: 52, y: 52 },
    { name: "Americas", x: 24, y: 42 },
    { name: "Oceania", x: 84, y: 62 },
  ];

  return (
    <figure className="border border-gold/40 bg-burgundy p-4 text-ivory sm:p-6">
      <svg viewBox="0 0 100 70" role="img" aria-labelledby="export-map-title export-map-desc" className="h-auto w-full">
        <title id="export-map-title">Routes from the Tuticorin workshop</title>
        <desc id="export-map-desc">
          A simplified chart marking Tuticorin and the regions the workshop ships to: the Americas, Europe, Africa, and Oceania.
        </desc>
        <rect width="100" height="70" fill="#2A0A3D" />
        <g fill="#E6CF8B" opacity="0.18">
          <ellipse cx="24" cy="38" rx="12" ry="16" />
          <ellipse cx="50" cy="34" rx="10" ry="8" />
          <ellipse cx="54" cy="50" rx="9" ry="12" />
          <ellipse cx="70" cy="40" rx="14" ry="10" />
          <ellipse cx="84" cy="58" rx="7" ry="5" />
        </g>
        {pins.map((pin) => (
          <g key={pin.name}>
            <line x1="68" y1="48" x2={pin.x} y2={pin.y} stroke="#C9A24B" strokeWidth="0.25" />
            <circle cx={pin.x} cy={pin.y} r="1.1" fill="#E6CF8B" />
          </g>
        ))}
      </svg>
      <figcaption className="mt-4 text-sm text-ivory/75">
        Made in {site.contact.locality}, and quoted with the passage included — to {site.trust[2].suffix ? `${site.trust[2].value}${site.trust[2].suffix}` : site.trust[2].value} countries and the regions listed beside this chart.
      </figcaption>
    </figure>
  );
}
