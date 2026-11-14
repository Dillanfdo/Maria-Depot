import { cn } from "@/lib/utils";

export function GoldDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-4", className)} aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold" />
      <span className="h-1.5 w-1.5 rotate-45 border border-gold bg-gold/20" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold" />
    </div>
  );
}
