import Link from "next/link";
import { addressLines, site } from "@/config/site";
import { Logo } from "@/components/ui/Logo";

function SocialIcon({ name }: { name: string }) {
  const common = { viewBox: "0 0 24 24", className: "h-4 w-4", "aria-hidden": true as const, fill: "currentColor" };
  if (name === "Facebook") {
    return (
      <svg {...common}>
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1Z" />
      </svg>
    );
  }
  if (name === "Instagram") {
    return (
      <svg {...common}>
        <path d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm8 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Zm-4 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2ZM17.2 6.8a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
      </svg>
    );
  }
  if (name === "YouTube") {
    return (
      <svg {...common}>
        <path d="M23 12.2s0-3.2-.4-4.6a3 3 0 0 0-2.1-2.1C18.9 5 12 5 12 5s-6.9 0-8.5.5a3 3 0 0 0-2.1 2.1C1 9 1 12.2 1 12.2s0 3.2.4 4.6a3 3 0 0 0 2.1 2.1C5.1 19.4 12 19.4 12 19.4s6.9 0 8.5-.5a3 3 0 0 0 2.1-2.1c.4-1.4.4-4.6.4-4.6ZM9.8 15.5v-6.6l6.2 3.3Z" />
      </svg>
    );
  }
  if (name === "LinkedIn") {
    return (
      <svg {...common}>
        <path d="M5 3a2 2 0 1 1-2 2 2 2 0 0 1 2-2ZM3 9h4v12H3Zm6 0h3.8v1.7h.1A4.2 4.2 0 0 1 17 8.8c4 0 4.7 2.6 4.7 6V21H18v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21H9Z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M20.5 3.5A11 11 0 0 0 2.1 16.7L1 23l6.5-1.1A11 11 0 0 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.9.6.6-3.8-.2-.3A9.1 9.1 0 1 1 12 20.5Zm5-6.8c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.8 11.8 0 0 0 4.5 4 15 15 0 0 0 1.5.6 3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-burgundy-deep text-ivory">
      <div className="bg-damask pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/75">{site.mission}</p>
        </div>
        <div>
          <h2 className="font-display text-xs tracking-[0.24em] text-gold-light uppercase">Visit</h2>
          <address className="mt-4 text-sm leading-relaxed text-ivory/80 not-italic">
            <a className="hover:text-gold-light" href={site.contact.mapsUrl} target="_blank" rel="noopener noreferrer">
              {addressLines().map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </a>
          </address>
          <p className="mt-4 text-sm text-ivory/70">{site.contact.hours}</p>
        </div>
        <div>
          <h2 className="font-display text-xs tracking-[0.24em] text-gold-light uppercase">Enquire</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="hover:text-gold-light" href={site.contact.phoneHref}>
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="hover:text-gold-light" href={site.contact.emailHref}>
                {site.contact.email}
              </a>
            </li>
            <li>
              <Link className="hover:text-gold-light" href="/contact">
                {site.ui.quoteCta}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-xs tracking-[0.24em] text-gold-light uppercase">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-gold-light" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="hover:text-gold-light" href="/privacy-policy">
                Privacy policy
              </Link>
            </li>
          </ul>
          <ul className="mt-5 flex gap-3">
            {site.socials.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="grid h-9 w-9 place-items-center border border-gold/40 text-gold-light hover:bg-white/5"
                >
                  <SocialIcon name={item.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative border-t border-gold/30">
        <p className="mx-auto max-w-7xl px-5 py-5 text-xs tracking-wide text-ivory/60 sm:px-8">
          © {site.copyrightYear} {site.name}. Church vestments from {site.contact.locality}.
        </p>
      </div>
    </footer>
  );
}
