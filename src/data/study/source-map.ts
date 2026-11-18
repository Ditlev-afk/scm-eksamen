import sourceMap from "./source-map.json";

export function getSourcesForTheme(themeId: number): string[] {
  const map = sourceMap as Record<string, string[]>;
  return map[String(themeId)] ?? [];
}
