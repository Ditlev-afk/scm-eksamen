"use client";

import { useState } from "react";
import { getReadingsForTheme, type Reading } from "@/data/study/readings";
import { MarkdownBody } from "@/components/exam/markdown-body";

/** Kinds that are actual course content — open by default. */
const CONTENT_KINDS = new Set([
  "teori",
  "noter",
  "bog",
  "kildeuddrag",
  "slides",
  "løsning",
  "4xExplanation",
  "4x-svar",
  "øvelse",
  "eksempel",
  "case-indhold",
]);

/** Meta/exam tips — demote and keep closed. */
const DEMOTE_KINDS = new Set(["guide", "regler", "case"]);

function isContentKind(kind: string) {
  return CONTENT_KINDS.has(kind);
}

function isDemotedKind(kind: string) {
  return DEMOTE_KINDS.has(kind);
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
          {open ? "Luk" : "Læs"}
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
  const items = getReadingsForTheme(themeId);
  if (!items.length) return null;

  const primary = items.filter((r) => !isDemotedKind(r.kind));
  const secondary = items.filter((r) => isDemotedKind(r.kind));

  // Prefer bog/noter/kildeuddrag first, then 4x, then rest
  const rank = (kind: string) => {
    const order = [
      "noter",
      "bog",
      "teori",
      "kildeuddrag",
      "slides",
      "4x-svar",
      "4xExplanation",
      "løsning",
      "øvelse",
      "eksempel",
      "case-indhold",
    ];
    const i = order.indexOf(kind);
    return i === -1 ? 50 : i;
  };
  primary.sort((a, b) => rank(a.kind) - rank(b.kind) || a.title.localeCompare(b.title));

  return (
    <section className="space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--coral))]">
          Pensumtekst
        </p>
        <h2 className="font-display mt-1 text-2xl text-[hsl(var(--ink))]">
          Læs teorien her
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {primary.length} tekster med kursusindhold — åbne som standard. Noter,
          boguddrag, slides, 4x-svar og kildeuddrag står direkte på siden.
        </p>
      </div>
      <div className="space-y-3">
        {primary.map((r) => (
          <ReadingCard
            key={r.id}
            reading={r}
            defaultOpen={isContentKind(r.kind) || !isDemotedKind(r.kind)}
          />
        ))}
      </div>
      {secondary.length ? (
        <details className="rounded-xl border border-dashed border-border bg-muted/30 p-4">
          <summary className="cursor-pointer text-sm font-medium text-muted-foreground">
            Eksamensregler / tips ({secondary.length}) — skjult som standard
          </summary>
          <div className="mt-3 space-y-3">
            {secondary.map((r) => (
              <ReadingCard key={r.id} reading={r} defaultOpen={false} />
            ))}
          </div>
        </details>
      ) : null}
    </section>
  );
}
