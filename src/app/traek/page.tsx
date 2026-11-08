import { DrawTheme } from "@/components/exam/draw-theme";

export default function DrawPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl text-[hsl(var(--ink))] sm:text-4xl">
          Træk tema
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Træn hele rytmen: træk → 60 sek agenda → 5 min tale. Papiret er No-Go
          efter minutetten.
        </p>
      </div>
      <DrawTheme />
    </div>
  );
}
