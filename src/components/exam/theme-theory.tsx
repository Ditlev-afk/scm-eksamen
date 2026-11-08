import Link from "next/link";
import { getTheory, getConnectionsForTheme, getGlossaryForTheme } from "@/data/study";
import { themes } from "@/data/themes";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ThemeTheoryPanel({ themeId }: { themeId: number }) {
  const theory = getTheory(themeId);
  const links = getConnectionsForTheme(themeId);
  const terms = getGlossaryForTheme(themeId).slice(0, 10);

  if (!theory) return null;

  return (
    <section className="space-y-5 rounded-xl border border-border bg-card p-5 shadow-sm">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--sea))]">
          Teori · grundbog
        </p>
        <h3 className="font-display mt-1 text-xl text-[hsl(var(--ink))]">
          {theory.title}
        </h3>
      </div>

      <div className="space-y-4">
        {theory.sections.map((s) => (
          <div key={s.heading} className="border-b border-dashed border-border pb-4 last:border-0 last:pb-0">
            <h4 className="font-display text-base text-[hsl(var(--ink))]">
              {s.heading}
            </h4>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground/85">
              {s.body}
            </p>
          </div>
        ))}
      </div>

      <div>
        <h4 className="text-xs font-bold uppercase tracking-wide text-[hsl(var(--coral))]">
          Sådan hænger temaet sammen
        </h4>
        <ul className="mt-2 space-y-2">
          {links.map((c) => {
            const otherId = c.from === themeId ? c.to : c.from;
            const other = themes.find((t) => t.id === otherId);
            const direction = c.from === themeId ? "→" : "←";
            return (
              <li
                key={`${c.from}-${c.to}-${c.label}`}
                className="rounded-md bg-secondary/60 px-3 py-2 text-sm"
              >
                <span className="font-medium">
                  {direction} {other?.shortTitle}
                </span>
                <span className="text-muted-foreground"> — {c.label}</span>
              </li>
            );
          })}
        </ul>
        <Button asChild variant="outline" size="sm" className="mt-3">
          <Link href="/sammenhaeng">Se hele pensum-kortet</Link>
        </Button>
      </div>

      <div>
        <h4 className="text-xs font-bold uppercase tracking-wide text-[hsl(var(--ink))]">
          Nøglebegreber i dette tema
        </h4>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {terms.map((t) => (
            <Badge key={t.term} variant="outline">
              <Link href={`/ordbog#${t.term.toLowerCase().replace(/\s+/g, "-")}`}>
                {t.term}
              </Link>
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
