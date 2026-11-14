"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    const closeButton = panel?.querySelector<HTMLElement>("button");
    closeButton?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const items = panel.querySelectorAll<HTMLElement>("a, button");
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-gold/40 bg-burgundy text-ivory">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {site.nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "font-display text-[0.68rem] tracking-[0.18em] uppercase transition hover:text-gold-light",
                  active ? "text-gold-light" : "text-ivory/85",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden bg-gradient-to-b from-[#f3e4ad] via-gold-light to-gold px-4 py-2.5 font-display text-[0.68rem] tracking-[0.18em] text-charcoal uppercase sm:inline-flex"
          >
            {site.ui.quoteCta}
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="grid h-11 w-11 place-items-center border border-gold/50 text-gold-light xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-navigation"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
            className="fixed inset-0 z-[60] h-[100dvh] w-screen bg-burgundy text-ivory xl:hidden"
            initial={reduce ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={reduce ? undefined : { x: "100%" }}
            transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex h-20 items-center justify-between px-5">
              <Logo />
              <button
                type="button"
                className="grid h-11 w-11 place-items-center border border-gold/50"
                onClick={() => {
                  setOpen(false);
                  toggleRef.current?.focus();
                }}
              >
                <span className="sr-only">Close menu</span>
                <X aria-hidden="true" />
              </button>
            </div>
            <nav className="flex flex-col px-6 pt-4" aria-label="Mobile">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-gold/25 py-4 font-display text-lg tracking-[0.14em] uppercase"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-8 bg-gradient-to-b from-[#f3e4ad] via-gold-light to-gold px-4 py-4 text-center font-display text-sm tracking-[0.2em] text-charcoal uppercase"
                onClick={() => setOpen(false)}
              >
                {site.ui.quoteCta}
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export function HeaderFallback() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 h-20 border-b border-gold/40 bg-burgundy/95" />
  );
}
