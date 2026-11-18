import Link from "next/link";
import { getReadingsForTheme } from "@/data/study/readings";
import { themes } from "@/data/themes";
import { getSourcesForTheme } from "@/data/study/source-map";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/** Index only — full texts live on each theme page, not as a 50-text dump. */
export default function LaesPage() {
  return (
    <div className="space-y-8">
      <div>
        <Badge variant="secondary">Pensum-oversigt</Badge>
        <h1 className="font-display mt-2 text-3xl text-[hsl(var(--ink))] sm:text-4xl">
          Vælg et tema at læse
        </h1>
        <p className="mt-2 max-w-2xl text-base text-muted-foreground">
          Hvert tema har et kort eksamenskort, pensumkort, formler og modeller.
          Åbn temaet — ikke en lang bogdump her.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {themes.map((t) => {
          const items = getReadingsForTheme(t.id);
          const sources = getSourcesForTheme(t.id);
          const noter = items.find((r) => r.kind === "noter");
          const hasFormulas = t.formulas.length > 0;
          return (
            <Link
              key={t.id}
              href={`/tema/${t.slug}`}
              className="group rounded-xl border border-border bg-card p-5 shadow-sm transition hover:border-[hsl(var(--sea))]"
            >
              <div className="flex items-start justify-between gap-2">
                <Badge variant="secondary">Tema {t.id}</Badge>
                {hasFormulas ? (
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-[hsl(var(--coral))]">
                    {t.formulas.length} formel
                    {t.formulas.length > 1 ? "ler" : ""}
                  </span>
                ) : null}
              </div>
              <h2 className="font-display mt-2 text-xl text-[hsl(var(--ink))] group-hover:underline">
                {t.title}
              </h2>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {noter
                  ? noter.body
                      .replace(/^#.+$/m, "")
                      .replace(/[#*`]/g, "")
                      .trim()
                      .slice(0, 180) + "…"
                  : t.agenda[0]}
              </p>
              {sources.length ? (
                <p className="mt-3 text-xs text-muted-foreground">
                  {sources.slice(0, 3).join(" · ")}
                </p>
              ) : null}
              <p className="mt-3 text-sm font-medium text-[hsl(var(--sea))]">
                Åbn tema →
              </p>
            </Link>
          );
        })}
      </div>

      <div className="rounded-xl border border-dashed border-border p-5 text-sm text-muted-foreground">
        Tip: start på et tema → læs <strong>A4 + formler</strong> først, derefter
        eksamenskortet. Brug 4x og quiz nederst når du øver dialog.
        <div className="mt-3">
          <Button asChild variant="outline" size="sm">
            <Link href="/">Alle 12 temaer på forsiden</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
