import { Theme } from "@/data/themes";
import { Badge } from "@/components/ui/badge";

export function A4Sheet({
  theme,
  compact = false,
}: {
  theme: Theme;
  compact?: boolean;
}) {
  return (
    <article
      className={`a4-sheet relative overflow-hidden rounded-lg border border-[hsl(35_25%_78%)] ${
        compact ? "p-5" : "p-6 sm:p-8"
      }`}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-[hsl(var(--sea))]" />
      <header className="mb-4 flex flex-wrap items-start justify-between gap-3 border-b border-dashed border-[hsl(35_25%_78%)] pb-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--coral))]">
            Tema {theme.id} · A4 til tavlen
          </p>
          <h2 className="font-display mt-1 text-2xl leading-tight text-[hsl(var(--ink))] sm:text-[1.7rem]">
            {theme.title}
          </h2>
        </div>
        <Badge variant="outline" className="border-[hsl(var(--sea))] text-[hsl(var(--sea))]">
          5 min + dialog
        </Badge>
      </header>

      <section className="mb-5">
        <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[hsl(var(--sea))]">
          Agenda (skriv på tavlen i de 60 sek.)
        </h3>
        <ol className="space-y-1 rounded-md bg-[hsl(199_40%_94%)] p-3 font-medium text-[hsl(var(--ink))]">
          {theme.agenda.map((line) => (
            <li key={line} className="text-sm leading-snug">
              {line}
            </li>
          ))}
        </ol>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        {theme.talkTrack.map((block) => (
          <section key={block.heading}>
            <h4 className="mb-1.5 font-display text-base text-[hsl(var(--ink))]">
              {block.heading}
            </h4>
            <ul className="space-y-1 text-[13px] leading-snug text-foreground/85">
              {block.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[hsl(var(--coral))]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {theme.formulas.length > 0 && (
        <section className="mt-5 rounded-md border border-[hsl(35_25%_78%)] bg-[hsl(42_30%_94%)] p-3">
          <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[hsl(var(--coral))]">
            Formler / nøgletal
          </h3>
          <ul className="space-y-1.5">
            {theme.formulas.map((f) => (
              <li key={f.name} className="text-sm">
                <span className="font-semibold">{f.name}: </span>
                <code className="rounded bg-white/70 px-1.5 py-0.5 text-[12px]">
                  {f.formula}
                </code>
                {f.note ? (
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    {f.note}
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-5 border-t border-dashed border-[hsl(35_25%_78%)] pt-3">
        <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
          Lærerens mulige vinkler
        </h3>
        <ul className="grid gap-1 sm:grid-cols-2">
          {theme.teacherAngles.map((a) => (
            <li
              key={a}
              className="rounded bg-secondary/60 px-2 py-1 text-[12px] leading-snug text-foreground/80"
            >
              {a}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
