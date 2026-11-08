"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { glossary, searchGlossary } from "@/data/study";
import { themes } from "@/data/themes";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function GlossaryBrowser({
  initialThemeId,
}: {
  initialThemeId?: number;
}) {
  const [query, setQuery] = useState("");
  const [themeFilter, setThemeFilter] = useState<number | "all">(
    initialThemeId ?? "all"
  );

  const terms = useMemo(() => {
    const base = searchGlossary(query);
    if (themeFilter === "all") return base;
    return base.filter((t) => t.themeIds.includes(themeFilter));
  }, [query, themeFilter]);

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Søg: EOQ, bullwhip, IDU, remanufacturing…"
          className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <select
          value={themeFilter === "all" ? "all" : String(themeFilter)}
          onChange={(e) =>
            setThemeFilter(
              e.target.value === "all" ? "all" : Number(e.target.value)
            )
          }
          className="h-11 rounded-md border border-input bg-background px-3 text-sm"
        >
          <option value="all">Alle temaer</option>
          {themes.map((t) => (
            <option key={t.id} value={t.id}>
              {t.id}. {t.shortTitle}
            </option>
          ))}
        </select>
      </div>

      <p className="text-sm text-muted-foreground">
        Viser {terms.length} af {glossary.length} begreber
      </p>

      <div className="space-y-3">
        {terms.map((t) => (
          <article
            key={t.term}
            id={t.term.toLowerCase().replace(/\s+/g, "-")}
            className="rounded-xl border border-border bg-card p-4 shadow-sm"
          >
            <div className="flex flex-wrap items-baseline gap-2">
              <h3 className="font-display text-xl text-[hsl(var(--ink))]">
                {t.term}
              </h3>
              {t.aka ? (
                <span className="text-sm text-muted-foreground">({t.aka})</span>
              ) : null}
            </div>
            <p className="mt-2 text-sm leading-relaxed">{t.definition}</p>
            <p className="mt-2 text-sm text-foreground/80">
              <span className="font-semibold">Hvorfor det betyder noget: </span>
              {t.whyItMatters}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {t.themeIds.map((id) => {
                const theme = themes.find((x) => x.id === id);
                if (!theme) return null;
                return (
                  <Button key={id} asChild size="sm" variant="outline">
                    <Link href={`/tema/${theme.slug}`}>{theme.shortTitle}</Link>
                  </Button>
                );
              })}
            </div>
            {t.related.length ? (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {t.related.map((r) => (
                  <Badge key={r} variant="secondary">
                    {r}
                  </Badge>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}
