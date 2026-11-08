import { GlossaryBrowser } from "@/components/exam/glossary-browser";

export default function GlossaryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl text-[hsl(var(--ink))] sm:text-4xl">
          Fagbegrebsordbog
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Definitioner fra Chopra & Meindl, dine noter og lærerens vinkler.
          Brug den når et begreb dukker op i et tema — eller som hurtig
          genopfriskning før dialog.
        </p>
      </div>
      <GlossaryBrowser />
    </div>
  );
}
