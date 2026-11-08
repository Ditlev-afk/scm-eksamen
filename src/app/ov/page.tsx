import Link from "next/link";
import { PracticeQuiz } from "@/components/exam/practice-quiz";
import { PresentationTimer } from "@/components/exam/presentation-timer";
import { Button } from "@/components/ui/button";

export default function PracticePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl text-[hsl(var(--ink))] sm:text-4xl">
          Øv dig
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Blandede dialogspørgsmål på tværs af alle temaer — spejler den sidste
          del af eksamen. Vil du have scorede MC + egne-ords-svar pr. tema, gå
          til Test.
        </p>
        <Button asChild className="mt-4" variant="outline">
          <Link href="/test">Åbn tema-tests</Link>
        </Button>
      </div>
      <PresentationTimer />
      <PracticeQuiz />
    </div>
  );
}
