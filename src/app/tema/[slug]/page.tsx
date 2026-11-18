import Link from "next/link";
import { notFound } from "next/navigation";
import { getTheme, themes } from "@/data/themes";
import { A4Sheet } from "@/components/exam/a4-sheet";
import { PracticeQuiz } from "@/components/exam/practice-quiz";
import { ThemeQuiz } from "@/components/exam/theme-quiz";
import { ThemeReadingsPanel } from "@/components/exam/theme-readings";
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
              Kilder til temaet: {sources.join(" · ")}
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

      <div id="laesestof" className="no-print">
        <ThemeReadingsPanel themeId={theme.id} />
      </div>

      <div className="no-print">
        <FourXPanel themeId={theme.id} />
      </div>

      <div className="no-print">
        <Flashcards themeId={theme.id} />
      </div>

      <A4Sheet theme={theme} />

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
          <Link href="/laes">Alle tekster</Link>
        </Button>
        <Button asChild variant="outline" size="sm">
          <Link href="/ordbog">Ordbog</Link>
        </Button>
        <Button asChild variant="outline" size="sm">
          <Link href={`/test/${theme.slug}`}>Fuld test</Link>
        </Button>
      </div>
    </div>
  );
}
