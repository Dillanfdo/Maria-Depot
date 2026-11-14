"use client";

import { useEffect, useId, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { site } from "@/config/site";

function useCount(end: number, start: boolean) {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start || reduce) return;
    let frame = 0;
    const duration = end > 1000 ? 900 : 1200;
    const began = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - began) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, reduce, start]);

  if (reduce) return end;
  return start ? value : 0;
}

function Stat({
  value,
  suffix,
  display,
  label,
  start,
}: {
  value: number | null;
  suffix: string;
  display?: string;
  label: string;
  start: boolean;
}) {
  const counted = useCount(value ?? 0, start && value !== null);
  return (
    <div className="px-4 py-8 text-center">
      <p className="font-display text-3xl tracking-wide text-burgundy sm:text-4xl">
        {value === null ? display : `${counted.toLocaleString("en-IN")}${suffix}`}
      </p>
      <p className="mt-2 text-sm tracking-wide text-stone">{label}</p>
    </div>
  );
}

export function TrustStrip() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const label = useId();

  return (
    <section ref={ref} aria-labelledby={label} className="border-y border-gold/40 bg-ivory">
      <h2 id={label} className="sr-only">
        Workshop facts
      </h2>
      <div className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-gold/30">
        {site.trust.map((stat) => (
          <Stat
            key={stat.label}
            value={stat.value}
            suffix={"suffix" in stat ? stat.suffix : ""}
            display={"display" in stat ? stat.display : undefined}
            label={stat.label}
            start={inView}
          />
        ))}
      </div>
    </section>
  );
}
