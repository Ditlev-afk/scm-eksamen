import { PracticeQuiz } from "@/components/exam/practice-quiz";
import { PresentationTimer } from "@/components/exam/presentation-timer";

export default function PracticePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl text-[hsl(var(--ink))] sm:text-4xl">
          Øv dig
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Blandede spørgsmål på tværs af alle temaer — spejler den sidste del af
          eksamen, hvor dialogen går uden for det trukne tema.
        </p>
      </div>
      <PresentationTimer />
      <PracticeQuiz />
    </div>
  );
}
