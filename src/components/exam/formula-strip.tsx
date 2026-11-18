import type { Theme } from "@/data/themes";

/** Prominent formula block — objects rendered as name + formula, never [object Object]. */
export function FormulaStrip({ theme }: { theme: Theme }) {
  if (!theme.formulas.length) return null;

  return (
    <section className="rounded-xl border border-[hsl(35_25%_78%)] bg-[hsl(42_28%_94%)] p-5 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[hsl(var(--coral))]">
        Formler til tavlen
      </p>
      <h2 className="font-display mt-1 text-2xl text-[hsl(var(--ink))]">
        Hvad du skal kunne skrive
      </h2>
      <ul className="mt-4 space-y-3">
        {theme.formulas.map((f) => (
          <li key={f.name} className="rounded-lg bg-white/80 px-4 py-3">
            <p className="text-sm font-semibold text-[hsl(var(--ink))]">{f.name}</p>
            <p className="mt-1 font-mono text-base font-medium tracking-tight text-[hsl(var(--sea))] sm:text-lg">
              {f.formula}
            </p>
            {f.note ? (
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {f.note}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
