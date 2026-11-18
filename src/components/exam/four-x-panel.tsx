"use client";

import { useState } from "react";
import { getFourXForTheme } from "@/data/study/four-x";

export function FourXPanel({ themeId }: { themeId: number }) {
  const blocks = getFourXForTheme(themeId);
  const [open, setOpen] = useState(true);
  if (!blocks.length) return null;

  return (
    <section className="rounded-xl border border-border bg-card p-5 shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between text-left"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--coral))]">
            4xExplanation
          </p>
          <h2 className="font-display mt-1 text-xl text-[hsl(var(--ink))]">
            Øv spørgsmålene højt
          </h2>
        </div>
        <span className="text-sm text-muted-foreground">{open ? "Skjul" : "Vis"}</span>
      </button>
      {open
        ? blocks.map((block) => (
            <div key={block.title} className="mt-4 space-y-4">
              <p className="text-sm text-muted-foreground">
                {block.title} · bogudgave {block.edition}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {block.questions.map((q) => (
                  <div
                    key={q.person}
                    className="rounded-lg border border-border/80 bg-[hsl(var(--sand))]/40 p-3"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--sea))]">
                      Person {q.person}
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {q.items.map((item) => (
                        <li key={item} className="text-sm leading-snug text-foreground/85">
                          · {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))
        : null}
    </section>
  );
}
