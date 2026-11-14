"use client";

import { useState } from "react";
import Link from "next/link";
import type { CatalogueCategory } from "@/data/products";
import { SiteImage } from "@/components/ui/SiteImage";
import { site } from "@/config/site";

export function CollectionBrowser({ categories }: { categories: CatalogueCategory[] }) {
  const [active, setActive] = useState("all");
  const visible = active === "all" ? categories : categories.filter((category) => category.slug === active);

  return (
    <div>
      <div role="tablist" aria-label="Filter collections" className="flex gap-2 overflow-x-auto pb-2">
        <button
          type="button"
          role="tab"
          aria-selected={active === "all"}
          className={`shrink-0 border px-4 py-2 font-display text-[0.68rem] tracking-[0.16em] uppercase ${active === "all" ? "border-burgundy bg-burgundy text-ivory" : "border-gold/50 text-burgundy"}`}
          onClick={() => setActive("all")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.slug}
            type="button"
            role="tab"
            aria-selected={active === category.slug}
            className={`shrink-0 border px-4 py-2 font-display text-[0.68rem] tracking-[0.16em] uppercase ${active === category.slug ? "border-burgundy bg-burgundy text-ivory" : "border-gold/50 text-burgundy"}`}
            onClick={() => setActive(category.slug)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-14">
        {visible.map((category) => (
          <section key={category.slug} aria-labelledby={category.slug}>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 id={category.slug} className="font-display text-3xl text-burgundy">
                  {category.name}
                </h2>
                <p className="mt-2 max-w-2xl text-stone">{category.tagline}</p>
              </div>
              <Link
                href={`/collections/${category.slug}`}
                className="font-display text-xs tracking-[0.18em] text-burgundy uppercase underline decoration-gold underline-offset-8"
              >
                Category details
              </Link>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {category.items.map((item) => (
                <article key={item.slug} className="grid border border-gold/35 bg-white sm:grid-cols-[160px_1fr]">
                  <div className="relative min-h-40">
                    <SiteImage image={item.image} sizes="160px" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl text-burgundy">{item.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone">{item.summary}</p>
                    <Link
                      href={`/contact?category=${category.slug}&product=${encodeURIComponent(item.name)}`}
                      className="mt-4 inline-flex font-display text-[0.68rem] tracking-[0.18em] text-gold-ink uppercase"
                    >
                      {site.ui.enquire}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
