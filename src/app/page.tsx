import Link from "next/link";
import { themes, examFlow, faulkswagonCase } from "@/data/themes";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-2xl border border-border bg-[hsl(var(--ink))] px-6 py-10 text-[hsl(var(--paper))] sm:px-10 sm:py-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, hsl(199 70% 45% / 0.55), transparent 45%), radial-gradient(circle at 90% 10%, hsl(16 75% 50% / 0.35), transparent 35%), linear-gradient(135deg, transparent 40%, hsl(199 50% 20% / 0.5))",
          }}
        />
        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[hsl(16_80%_72%)]">
            Mundtlig reeksamen · Supply Chain Management
          </p>
          <h1 className="font-display mt-3 text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            12 temaer. Ét A4-ark. Fem minutter ved tavlen.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Træn agenda, talk-track og dialogspørgsmål bygget direkte på dine noter,
            lærerens print og de anbefalede 5-minutters vinkler.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-[hsl(var(--coral))] hover:bg-[hsl(16_72%_42%)]">
              <Link href="/test">Test dig selv</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/traek">Simulér træk</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/print">Print alle A4</Link>
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl text-[hsl(var(--ink))]">
              Eksamensflow
            </h2>
            <p className="text-sm text-muted-foreground">
              20 minutter i alt — brug tiden præcist.
            </p>
          </div>
        </div>
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {examFlow.map((item, i) => (
            <li
              key={item.step}
              className="rounded-xl border border-border bg-card/80 p-4 shadow-sm"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[hsl(var(--sea))]">
                {item.step}
              </p>
              <p className="mt-2 text-sm leading-snug text-foreground/85">
                {item.detail}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <div className="mb-4">
          <h2 className="font-display text-2xl text-[hsl(var(--ink))]">
            De 12 temaer
          </h2>
          <p className="text-sm text-muted-foreground">
            Åbn et tema for A4-ark, formler og øvespørgsmål.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme) => (
            <Link key={theme.id} href={`/tema/${theme.slug}`} className="group">
              <Card className="h-full transition duration-200 group-hover:-translate-y-0.5 group-hover:border-[hsl(var(--sea))] group-hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">Tema {theme.id}</Badge>
                    <span className="text-xs text-muted-foreground opacity-0 transition group-hover:opacity-100">
                      Åbn →
                    </span>
                  </div>
                  <CardTitle className="font-display text-lg leading-snug">
                    {theme.shortTitle}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {theme.agenda[0].replace(/^\d+\.\s*/, "")} ·{" "}
                    {theme.agenda[1].replace(/^\d+\.\s*/, "")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    {theme.teacherAngles.length} lærer-vinkler ·{" "}
                    {theme.examAnswers.length} dialogspørgsmål
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-dashed border-[hsl(var(--coral))]/50 bg-[hsl(16_60%_96%)] p-6 sm:p-8">
        <Badge className="bg-[hsl(var(--coral))]">Tværgående case</Badge>
        <h2 className="font-display mt-3 text-2xl text-[hsl(var(--ink))]">
          {faulkswagonCase.title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-foreground/80">
          Lærerens Excel behandler Faulkswagon som eget tema/case. Brug den under
          transport, location og network — og som forsikring hvis dialogen går
          derhen.
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {faulkswagonCase.agenda.map((a) => (
            <li
              key={a}
              className="rounded-md bg-white/70 px-3 py-2 text-sm font-medium"
            >
              {a}
            </li>
          ))}
        </ul>
        <Button asChild className="mt-5" variant="outline">
          <Link href="/tema/faulkswagon">Åbn Faulkswagon-ark</Link>
        </Button>
      </section>
    </div>
  );
}
