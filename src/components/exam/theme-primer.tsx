import { primers } from "@/data/study";

export function ThemePrimer({ themeId }: { themeId: number }) {
  const p = primers[themeId];
  if (!p) return null;

  return (
    <section className="space-y-4 rounded-xl border border-border bg-card p-5 shadow-sm">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--coral))]">
          Opfriskning · læs først
        </p>
        <h3 className="font-display mt-1 text-xl text-[hsl(var(--ink))]">
          Kontekst før du øver
        </h3>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg bg-[hsl(199_40%_94%)] p-4">
          <h4 className="text-xs font-bold uppercase tracking-wide text-[hsl(var(--sea))]">
            Hvorfor temaet betyder noget
          </h4>
          <p className="mt-2 text-sm leading-relaxed">{p.why}</p>
        </div>
        <div className="rounded-lg bg-[hsl(42_30%_94%)] p-4">
          <h4 className="text-xs font-bold uppercase tracking-wide text-[hsl(var(--coral))]">
            Big picture
          </h4>
          <p className="mt-2 text-sm leading-relaxed">{p.bigPicture}</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <h4 className="mb-2 text-xs font-bold uppercase tracking-wide text-[hsl(var(--ink))]">
            Skal kunne siges højt
          </h4>
          <ul className="space-y-2">
            {p.mustKnow.map((item) => (
              <li
                key={item}
                className="rounded-md border border-border/70 bg-background px-3 py-2 text-sm leading-snug"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-xs font-bold uppercase tracking-wide text-red-800">
            Typiske fejl
          </h4>
          <ul className="space-y-2">
            {p.commonMistakes.map((item) => (
              <li
                key={item}
                className="rounded-md border border-red-200 bg-red-50/70 px-3 py-2 text-sm leading-snug"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-md border border-dashed border-[hsl(var(--sea))] p-3">
            <h4 className="text-xs font-bold uppercase tracking-wide text-[hsl(var(--sea))]">
              5-min fortælling
            </h4>
            <p className="mt-2 text-sm leading-relaxed">{p.examStory}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
