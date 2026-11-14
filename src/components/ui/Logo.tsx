import Link from "next/link";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Link href="/" className="group flex min-w-0 items-center gap-3">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/80">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold-light" aria-hidden="true">
          <path d="M11 3h2v8h8v2h-8v8h-2v-8H3v-2h8V3z" fill="currentColor" />
        </svg>
      </span>
      <span className="min-w-0">
        <span
          className={cn(
            "block truncate font-display text-sm tracking-[0.16em] uppercase",
            tone === "light" ? "text-ivory" : "text-burgundy",
          )}
        >
          {site.shortName}
        </span>
        <span
          className={cn(
            "block text-[0.62rem] tracking-[0.28em] uppercase",
            tone === "light" ? "text-gold-light" : "text-gold-ink",
          )}
        >
          Tuticorin · Est. {site.foundedYear}
        </span>
      </span>
    </Link>
  );
}
