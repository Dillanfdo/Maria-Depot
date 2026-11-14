"use client";

import { useEffect } from "react";
import { site } from "@/config/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-ivory py-24">
      <div className="mx-auto max-w-xl px-5 text-center">
        <p className="font-display text-xs tracking-[0.24em] text-gold-ink uppercase">Something went astray</p>
        <h1 className="mt-3 font-display text-4xl text-burgundy">The page could not be opened.</h1>
        <p className="mt-4 text-stone">
          Please try again. If it continues, write to {site.contact.email} and we will answer from the workshop.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 bg-gradient-to-b from-[#f3e4ad] via-gold-light to-gold px-6 py-3 font-display text-xs tracking-[0.2em] text-charcoal uppercase"
        >
          Try again
        </button>
      </div>
    </section>
  );
}
