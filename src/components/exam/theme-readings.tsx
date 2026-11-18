"use client";

import { useState } from "react";
import { getReadingsForTheme, type Reading } from "@/data/study/readings";
import { MarkdownBody } from "@/components/exam/markdown-body";

/** Open by default — the exam study path. */
const OPEN_KINDS = new Set(["noter", "bog"]);

/** Everything else stays collapsed until needed. */
function rank(kind: string) {
  const order = [
    "noter",
    "bog",
    "4x-svar",
    "4xExplanation",
    "løsning",
    "øvelse",
    "eksempel",
    "case-indhold",
    "kildeuddrag",
    "slides",
    "teori",
  ];
  const i = order.indexOf(kind);
  return i === -1 ? 50 : i;
}

function ReadingCard({
  reading,
  defaultOpen,
}: {
  reading: Reading;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <article className="rounded-xl border border-border bg-card shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-3 p-4 text-left"
      >
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--sea))]">
            {reading.kind}
          </p>
          <h3 className="font-display mt-1 text-lg text-[hsl(var(--ink))]">
            {reading.title}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">{reading.source}</p>
        </div>
        <span className="shrink-0 text-sm text-muted-foreground">
          {open ? "Luk" : "Åbn"}
        </span>
      </button>
      {open ? (
        <div className="border-t border-border px-4 py-5 sm:px-5">
          <MarkdownBody>{reading.body}</MarkdownBody>
        </div>
      ) : null}
    </article>
  );
}

export function ThemeReadingsPanel({ themeId }: { themeId: number }) {
  const items = [...getReadingsForTheme(themeId)].sort(
    (a, b) => rank(a.kind) - rank(b.kind) || a.title.localeCompare(b.title)
  );
  if (!items.length) return null;

  const core = items.filter((r) => OPEN_KINDS.has(r.kind));
  const extra = items.filter((r) => !OPEN_KINDS.has(r.kind));

  return (
    <section className="space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--coral))]">
          Læsestof
        </p>
        <h2 className="font-display mt-1 text-2xl text-[hsl(var(--ink))]">
          Eksamenskort + pensumkort
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          To korte tekster åbne: dine noter i eksamensstruktur, derefter
          pensumkortet. Øvelser, 4x og kildeuddrag ligger lukket under.
        </p>
      </div>
      <div className="space-y-3">
        {core.map((r) => (
          <ReadingCard key={r.id} reading={r} defaultOpen />
        ))}
      </div>
      {extra.length ? (
        <details className="rounded-xl border border-dashed border-border bg-muted/25 p-4">
          <summary className="cursor-pointer text-sm font-medium text-foreground/80">
            Mere materiale ({extra.length}) — 4x, øvelser, kildeuddrag
          </summary>
          <div className="mt-3 space-y-3">
            {extra.map((r) => (
              <ReadingCard key={r.id} reading={r} defaultOpen={false} />
            ))}
          </div>
        </details>
      ) : null}
    </section>
  );
}
