import readingsData from "./readings-data.json";

export type Reading = {
  id: string;
  themeId: number;
  title: string;
  source: string;
  kind: string;
  body: string;
};

export const readings = readingsData as Reading[];

export function getReadingsForTheme(themeId: number) {
  return readings.filter((r) => r.themeId === themeId);
}

export function getGeneralReadings() {
  return readings.filter((r) => r.themeId === 0);
}

export function getReading(id: string) {
  return readings.find((r) => r.id === id);
}

export function readingStats() {
  return {
    count: readings.length,
    chars: readings.reduce((n, r) => n + r.body.length, 0),
    byTheme: Array.from({ length: 13 }, (_, i) => ({
      themeId: i,
      count: readings.filter((r) => r.themeId === i).length,
    })),
  };
}
