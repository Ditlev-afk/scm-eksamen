"use client";

import { useState } from "react";
import { getReadingsForTheme, type Reading } from "@/data/study/readings";

function ReadingCard({ reading }: { reading: Reading }) {
  const [open, setOpen] = useState(false);
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
          {open ? "Luk" : "Læs"}
        </span>
      </button>
      {open ? (
        <div className="border-t border-border px-4 py-4">
          <div className="prose-reading max-w-none whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">
            {reading.body}
          </div>
        </div>
      ) : null}
    </article>
  );
}

export function ThemeReadingsPanel({ themeId }: { themeId: number }) {
  const items = getReadingsForTheme(themeId);
  if (!items.length) return null;

  return (
    <section className="space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--coral))]">
          Læsestof fra dit kursusmateriale
        </p>
        <h2 className="font-display mt-1 text-2xl text-[hsl(var(--ink))]">
          {items.length} tekster til dette tema
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Åbn en tekst for at læse teorien, 4xExplanation, slides eller
          kildeuddrag. OCR-tekst fra scannede PDF’er kan have enkelte fejltegn.
        </p>
      </div>
      <div className="space-y-3">
        {items.map((r) => (
          <ReadingCard key={r.id} reading={r} />
        ))}
      </div>
    </section>
  );
}
