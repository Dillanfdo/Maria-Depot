import { GoldDivider } from "@/components/ui/GoldDivider";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      {eyebrow ? (
        <p
          className={cn(
            "font-display text-[0.72rem] tracking-[0.28em] uppercase",
            light ? "text-gold-light" : "text-gold-ink",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 font-display text-3xl leading-tight font-medium tracking-wide sm:text-4xl",
          light ? "text-ivory" : "text-burgundy",
        )}
      >
        {title}
      </h2>
      <GoldDivider className={cn("mt-5", align === "center" ? "" : "max-w-xs")} />
      {text ? (
        <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", light ? "text-ivory/80" : "text-stone")}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
