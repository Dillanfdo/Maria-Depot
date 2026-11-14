import Link from "next/link";
import { site } from "@/config/site";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-burgundy text-ivory">
      <div className="bg-damask pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center">
        <p className="font-display text-sm tracking-[0.28em] text-gold-light uppercase">404</p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl">This page is not in the sacristy.</h1>
        <p className="mt-5 max-w-md text-ivory/80">
          The address may have changed. Return home, or write to {site.name} and we will help you find the vestment you came for.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="bg-gradient-to-b from-[#f3e4ad] via-gold-light to-gold px-6 py-3 font-display text-xs tracking-[0.2em] text-charcoal uppercase">
            Back to home
          </Link>
          <Link href="/contact" className="border border-gold-light/80 px-6 py-3 font-display text-xs tracking-[0.2em] text-gold-light uppercase">
            {site.ui.quoteCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
