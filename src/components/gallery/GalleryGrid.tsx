"use client";

import { useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";
import { site } from "@/config/site";
import { SiteImage } from "@/components/ui/SiteImage";

export function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const images = site.gallery;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active === null) {
      if (dialog.open) dialog.close();
      return;
    }
    if (!dialog.open) dialog.showModal();
  }, [active]);

  const current = active === null ? null : images[active];

  return (
    <>
      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((image, index) => (
          <li key={image.file} className="mb-4 break-inside-avoid">
            <button
              type="button"
              className="group relative block w-full overflow-hidden border border-gold/30 text-left"
              onClick={() => setActive(index)}
            >
              <span className={`relative block w-full ${index % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/5]"}`}>
                <SiteImage image={image} sizes="(max-width: 640px) 100vw, 33vw" />
              </span>
              <span className="sr-only">Open image: {image.alt}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="w-[min(920px,calc(100%-2rem))] border border-gold/50 bg-burgundy p-4 text-ivory backdrop:bg-charcoal/70"
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setActive(null);
        }}
      >
        {current ? (
          <div>
            <div className="flex items-start justify-between gap-4">
              <h2 id={titleId} className="font-display text-xl">
                {current.alt}
              </h2>
              <button
                type="button"
                className="grid h-10 w-10 shrink-0 place-items-center border border-gold/40"
                onClick={() => setActive(null)}
              >
                <span className="sr-only">Close</span>
                <X aria-hidden="true" />
              </button>
            </div>
            <div className="relative mt-4 aspect-[4/5] bg-burgundy-deep sm:aspect-[5/4]">
              <SiteImage image={current} sizes="90vw" />
            </div>
            <div className="mt-4 flex justify-between gap-3">
              <button
                type="button"
                className="border border-gold/40 px-4 py-2 font-display text-xs tracking-[0.18em] uppercase"
                onClick={() => setActive((value) => (value === null ? 0 : (value - 1 + images.length) % images.length))}
              >
                Previous
              </button>
              <button
                type="button"
                className="border border-gold/40 px-4 py-2 font-display text-xs tracking-[0.18em] uppercase"
                onClick={() => setActive((value) => (value === null ? 0 : (value + 1) % images.length))}
              >
                Next
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
