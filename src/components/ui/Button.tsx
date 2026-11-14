import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  gold: "bg-gradient-to-b from-[#f3e4ad] via-gold-light to-gold text-charcoal shadow-soft hover:brightness-105",
  outline:
    "border border-gold-light/80 text-gold-light hover:bg-white/5",
  outlineDark: "border border-gold-dark/70 text-burgundy hover:bg-gold/10",
  ghost: "text-gold-light underline decoration-gold/50 underline-offset-4 hover:decoration-gold-light",
} as const;

type Variant = keyof typeof variants;

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-center font-display text-[0.72rem] tracking-[0.22em] uppercase transition duration-300 disabled:cursor-not-allowed disabled:opacity-60";

export function Button({
  href,
  variant = "gold",
  className,
  children,
  type = "button",
  disabled,
  onClick,
}: {
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}) {
  const classes = cn(base, variants[variant], className);
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
