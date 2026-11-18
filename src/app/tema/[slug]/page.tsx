import Link from "next/link";
import { notFound } from "next/navigation";
import { getTheme, themes } from "@/data/themes";
import { A4Sheet } from "@/components/exam/a4-sheet";
import { PracticeQuiz } from "@/components/exam/practice-quiz";
import { PresentationTimer } from "@/components/exam/presentation-timer";
import { ThemeQuiz } from "@/components/exam/theme-quiz";
import { ThemePrimer } from "@/components/exam/theme-primer";
import { ThemeMaterialsPanel } from "@/components/exam/theme-materials";
import { ThemeReadingsPanel } from "@/components/exam/theme-readings";
import { ThemeDiagramsPanel } from "@/components/exam/scm-diagrams";
import { FormulaStrip } from "@/components/exam/formula-strip";
import { Flashcards } from "@/components/exam/flashcards";
import { FourXPanel } from "@/components/exam/four-x-panel";
import { getSourcesForTheme } from "@/data/study/source-map";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return themes.map((t) => ({ slug: t.slug }));
}

export default async function ThemePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const theme = getTheme(slug);
  if (!theme) notFound();

  const prev = themes.find((t) => t.id === theme.id - 1);
  const next = themes.find((t) => t.id === theme.id + 1);
  const sources = getSourcesForTheme(theme.id);

  return (
    <div className="space-y-8">
      <div className="no-print flex flex-wrap items-center justify-between gap-3">
        <div>
          <Badge variant="secondary">Tema {theme.id} af 12</Badge>
          <h1 className="font-display mt-2 text-3xl text-[hsl(var(--ink))] sm:text-4xl">
            {theme.title}
          </h1>
          {sources.length ? (
            <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
              {sources.join(" · ")}
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-2">
          {prev ? (
            <Button asChild variant="outline" size="sm">
              <Link href={`/tema/${prev.slug}`}>← {prev.shortTitle}</Link>
            </Button>
          ) : null}
          {next ? (
            <Button asChild variant="outline" size="sm">
              <Link href={`/tema/${next.slug}`}>{next.shortTitle} →</Link>
            </Button>
          ) : null}
        </div>
      </div>

      {/* 1. Structure first: agenda cheat sheet */}
      <A4Sheet theme={theme} />

      {/* 2. Formulas visible — never buried in markdown dumps */}
      <div className="no-print">
        <FormulaStrip theme={theme} />
      </div>

      {/* 3. Visual models */}
      <div className="no-print">
        <ThemeDiagramsPanel themeId={theme.id} />
      </div>

      {/* 4. Short notes + pensumkort */}
      <div id="laesestof" className="no-print">
        <ThemeReadingsPanel themeId={theme.id} />
      </div>

      <div className="no-print">
        <FourXPanel themeId={theme.id} />
      </div>

      <div className="no-print">
        <Flashcards themeId={theme.id} />
      </div>

      <section className="no-print space-y-3">
        <h2 className="font-display text-2xl text-[hsl(var(--ink))]">
          Test dette tema
        </h2>
        <ThemeQuiz themeId={theme.id} themeTitle={theme.shortTitle} />
      </section>

      <section className="no-print space-y-3">
        <h2 className="font-display text-2xl text-[hsl(var(--ink))]">
          Dialogtræning
        </h2>
        <PracticeQuiz themeId={theme.id} />
      </section>

      <section className="no-print rounded-xl border border-border bg-card p-5">
        <h2 className="font-display text-xl text-[hsl(var(--ink))]">
          Modelbesvarelser
        </h2>
        <div className="mt-4 space-y-4">
          {theme.examAnswers.map((qa) => (
            <div key={qa.q}>
              <p className="text-sm font-semibold">{qa.q}</p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                {qa.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="no-print flex flex-wrap gap-2">
        <Button asChild variant="outline" size="sm">
          <Link href="/laes">Alle temaer</Link>
        </Button>
        <Button asChild variant="outline" size="sm">
          <Link href="/ordbog">Ordbog</Link>
        </Button>
        <Button asChild variant="outline" size="sm">
          <Link href={`/test/${theme.slug}`}>Fuld test</Link>
        </Button>
      </div>

      <details className="no-print rounded-xl border border-dashed border-border bg-muted/20 p-5">
        <summary className="cursor-pointer font-display text-xl text-[hsl(var(--ink))]">
          Eksamensværktøjer (timer, materialeguide)
        </summary>
        <div className="mt-5 space-y-6">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <PresentationTimer />
            <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--sea))]">
                Broer til andre temaer
              </p>
              <ul className="mt-3 space-y-2">
                {theme.crossLinks.map((c) => (
                  <li key={c} className="text-sm leading-snug text-foreground/85">
                    · {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ThemeMaterialsPanel themeId={theme.id} />
          <ThemePrimer themeId={theme.id} />
        </div>
      </details>
    </div>
  );
}
