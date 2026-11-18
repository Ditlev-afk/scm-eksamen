"use client";

import { useState } from "react";
import { getReadingsForTheme, type Reading } from "@/data/study/readings";

const PRIMARY_KINDS = new Set([
  "noter",
  "bog",
  "teori",
  "kildeuddrag",
  "slides",
  "løsning",
  "øvelse",
  "4xExplanation",
  "4x-svar",
  "eksempel",
  "case-indhold",
]);

const ORDER = [
  "noter",
  "bog",
  "kildeuddrag",
  "slides",
  "4x-svar",
  "4xExplanation",
  "øvelse",
  "løsning",
  "eksempel",
  "case-indhold",
  "teori",
];

function sortReadings(items: Reading[]) {
  return [...items].sort((a, b) => {
    const ai = ORDER.indexOf(a.kind);
    const bi = ORDER.indexOf(b.kind);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });
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
        <div className="border-t border-border px-4 py-5 sm:px-6">
          <div className="max-w-none whitespace-pre-wrap text-[15px] leading-7 text-foreground/90">
            {reading.body}
          </div>
        </div>
      ) : null}
    </article>
  );
}

export function ThemeReadingsPanel({ themeId }: { themeId: number }) {
  const items = sortReadings(
    getReadingsForTheme(themeId).filter((r) => PRIMARY_KINDS.has(r.kind))
  );
  if (!items.length) return null;

  return (
    <section className="space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--coral))]">
          Pensum på siden
        </p>
        <h2 className="font-display mt-1 text-2xl text-[hsl(var(--ink))]">
          Noter, bog og kildetekster
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Først dine noter, derefter Chopra/pensum, derefter slides, 4x-svar og
          kildeuddrag. Teksterne er åbne — scroll og læs.
        </p>
      </div>
      <div className="space-y-3">
        {items.map((r, i) => (
          <ReadingCard key={r.id} reading={r} defaultOpen={i < 4} />
        ))}
      </div>
    </section>
  );
}
