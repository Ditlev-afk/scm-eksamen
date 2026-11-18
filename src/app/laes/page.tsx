import Link from "next/link";
import { readings } from "@/data/study/readings";
import { themes } from "@/data/themes";
import { getSourcesForTheme } from "@/data/study/source-map";
import { Badge } from "@/components/ui/badge";
import { MarkdownBody } from "@/components/exam/markdown-body";

const SHOW = new Set([
  "noter",
  "bog",
  "kildeuddrag",
  "slides",
  "4x-svar",
  "løsning",
  "øvelse",
  "eksempel",
  "case-indhold",
  "4xExplanation",
]);

export default function LaesPage() {
  const content = readings.filter((r) => SHOW.has(r.kind));

  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary">Pensumbibliotek</Badge>
        <h1 className="font-display mt-2 text-3xl text-[hsl(var(--ink))] sm:text-4xl">
          Noter, bog og kildetekster
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          {content.length} tekster. Hvert tema starter med dine noter, derefter
          Chopra/pensum og de tilknyttede slides/øvelser.
        </p>
      </div>

      {themes.map((t) => {
        const items = content.filter((r) => r.themeId === t.id);
        if (!items.length) return null;
        const sources = getSourcesForTheme(t.id);
        return (
          <section key={t.id} className="space-y-4">
            <div className="border-b border-border pb-2">
              <Badge variant="secondary">Tema {t.id}</Badge>
              <h2 className="font-display mt-2 text-2xl text-[hsl(var(--ink))]">
                <Link href={`/tema/${t.slug}`} className="hover:underline">
                  {t.title}
                </Link>
              </h2>
              {sources.length ? (
                <p className="mt-1 text-xs text-muted-foreground">
                  {sources.join(" · ")}
                </p>
              ) : null}
            </div>
            {items.map((r) => (
              <article
                key={r.id}
                className="rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--sea))]">
                  {r.kind}
                </p>
                <h3 className="font-display mt-1 text-xl text-[hsl(var(--ink))]">
                  {r.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">{r.source}</p>
                <div className="mt-4">
                  <MarkdownBody>{r.body}</MarkdownBody>
                </div>
              </article>
            ))}
          </section>
        );
      })}
    </div>
  );
}
