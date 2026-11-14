import { site } from "@/config/site";

export function FaqList() {
  return (
    <div className="border-y border-gold/40">
      {site.faqs.map((item) => (
        <details key={item.question} className="group border-b border-gold/30 py-5 last:border-b-0">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-burgundy">
            {item.question}
            <span className="text-2xl leading-none text-gold-ink transition group-open:rotate-45" aria-hidden="true">
              +
            </span>
          </summary>
          <p className="mt-3 max-w-3xl leading-relaxed text-stone">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
