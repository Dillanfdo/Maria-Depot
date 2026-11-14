"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const items = site.testimonials;
  const current = items[index];

  useEffect(() => {
    if (paused || reduce) return;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % items.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [items.length, paused, reduce]);

  const go = (direction: number) => {
    setIndex((value) => (value + direction + items.length) % items.length);
  };

  return (
    <section className="relative overflow-hidden bg-burgundy-deep py-20 text-ivory sm:py-28" aria-roledescription="carousel" aria-label="Notes from parishes">
      <div className="bg-damask pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
      <Container className="relative">
        <p className="text-center font-display text-[0.72rem] tracking-[0.28em] text-gold-light uppercase">
          From the churches we serve
        </p>
        <div
          className="mx-auto mt-8 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.figure
              key={current.place}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.45 }}
            >
              <blockquote className="text-center font-body text-xl leading-relaxed text-ivory sm:text-2xl">
                <p>“{current.quote}”</p>
              </blockquote>
              <figcaption className="mt-6 text-center">
                <p className="font-display tracking-wide text-gold-light">{current.name}</p>
                <p className="mt-1 text-sm text-ivory/70">{current.place}</p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              className="grid h-11 w-11 place-items-center border border-gold/50 text-gold-light"
              aria-label="Previous note"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Choose a note">
              {items.map((item, itemIndex) => (
                <button
                  key={item.place}
                  type="button"
                  role="tab"
                  aria-selected={itemIndex === index}
                  aria-label={`Show note from ${item.place}`}
                  className={`h-2.5 w-2.5 ${itemIndex === index ? "bg-gold-light" : "bg-gold/40"}`}
                  onClick={() => setIndex(itemIndex)}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              className="grid h-11 w-11 place-items-center border border-gold/50 text-gold-light"
              aria-label="Next note"
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
