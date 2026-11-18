"use client";

import { useState } from "react";
import { getFourXForTheme } from "@/data/study/four-x";
import { getFourXAnswersForTheme } from "@/data/study/four-x-answers";

export function FourXPanel({ themeId }: { themeId: number }) {
  const blocks = getFourXForTheme(themeId);
  const answerBlocks = getFourXAnswersForTheme(themeId);
  const [open, setOpen] = useState(true);
  const [showAnswers, setShowAnswers] = useState(true);
  if (!blocks.length && !answerBlocks.length) return null;

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
            Spørgsmål og modelbesvarelser
          </h2>
        </div>
        <span className="text-sm text-muted-foreground">{open ? "Skjul" : "Vis"}</span>
      </button>
      {open ? (
        <div className="mt-4 space-y-6">
          {blocks.map((block) => (
            <div key={block.title} className="space-y-4">
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
          ))}

          {answerBlocks.length ? (
            <div className="space-y-4 border-t border-border pt-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--sea))]">
                    Modelbesvarelser (dansk)
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Udarbejdede svar — selve fagindholdet til hvert 4x-spørgsmål.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAnswers((v) => !v)}
                  className="text-sm text-muted-foreground underline-offset-2 hover:underline"
                >
                  {showAnswers ? "Skjul svar" : "Vis svar"}
                </button>
              </div>
              {showAnswers
                ? answerBlocks.map((block) => (
                    <div key={block.title} className="space-y-4">
                      <h3 className="font-display text-lg text-[hsl(var(--ink))]">
                        {block.title}
                      </h3>
                      {block.answers.map((person) => (
                        <div
                          key={person.person}
                          className="rounded-lg border border-[hsl(var(--sea)/0.25)] bg-[hsl(199_40%_97%)] p-4"
                        >
                          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--sea))]">
                            Person {person.person}
                          </p>
                          <div className="mt-3 space-y-3">
                            {person.items.map((item) => (
                              <div key={item.q}>
                                <p className="text-sm font-medium text-foreground/90">
                                  {item.q}
                                </p>
                                <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                                  {item.a}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))
                : null}
            </div>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}
