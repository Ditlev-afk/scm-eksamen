import Link from "next/link";
import { themes } from "@/data/themes";
import { getMcqsForTheme, getOpenForTheme } from "@/data/quizzes";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TestIndexPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl text-[hsl(var(--ink))] sm:text-4xl">
          Test dig selv
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Hvert tema har multiple choice (pensum-check) og åbne spørgsmål, hvor
          du skriver med egne ord og får en begrebsvurdering med det samme.
          Spørgsmålene er krydstjekket mod Chopra & Meindl (6. udg.), dine noter
          og lærerens Excel-vinkler.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {themes.map((theme) => {
          const mc = getMcqsForTheme(theme.id).length;
          const op = getOpenForTheme(theme.id).length;
          return (
            <Link key={theme.id} href={`/test/${theme.slug}`} className="group">
              <Card className="h-full transition group-hover:-translate-y-0.5 group-hover:border-[hsl(var(--sea))] group-hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">Tema {theme.id}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {mc} MC · {op} åbne
                    </span>
                  </div>
                  <CardTitle className="font-display text-lg">
                    {theme.shortTitle}
                  </CardTitle>
                  <CardDescription>
                    Start test → få score og feedback
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
