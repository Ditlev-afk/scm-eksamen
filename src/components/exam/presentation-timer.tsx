"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Mode = "idle" | "orient" | "present" | "done";

const ORIENT = 60;
const PRESENT = 5 * 60;

function format(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function PresentationTimer() {
  const [mode, setMode] = useState<Mode>("idle");
  const [left, setLeft] = useState(ORIENT);

  useEffect(() => {
    if (mode !== "orient" && mode !== "present") return;
    if (left <= 0) {
      if (mode === "orient") {
        setMode("present");
        setLeft(PRESENT);
      } else {
        setMode("done");
      }
      return;
    }
    const id = window.setTimeout(() => setLeft((v) => v - 1), 1000);
    return () => window.clearTimeout(id);
  }, [mode, left]);

  const label =
    mode === "idle"
      ? "Klar til at øve?"
      : mode === "orient"
        ? "60 sek — skriv agenda på tavlen"
        : mode === "present"
          ? "5 min præsentation"
          : "Stop — sæt dig til dialog";

  const progress =
    mode === "orient"
      ? ((ORIENT - left) / ORIENT) * 100
      : mode === "present"
        ? ((PRESENT - left) / PRESENT) * 100
        : mode === "done"
          ? 100
          : 0;

  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--coral))]">
            Præsentationstimer
          </p>
          <h3 className="font-display mt-1 text-xl text-[hsl(var(--ink))]">
            {label}
          </h3>
        </div>
        <p
          className={`font-display text-4xl tabular-nums ${
            mode === "present" && left < 60
              ? "text-[hsl(var(--coral))]"
              : "text-[hsl(var(--sea))]"
          }`}
        >
          {mode === "idle" ? "0:00" : mode === "done" ? "0:00" : format(left)}
        </p>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-[hsl(var(--sea))] transition-all duration-1000 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button
          onClick={() => {
            setMode("orient");
            setLeft(ORIENT);
          }}
        >
          Start (60 sek → 5 min)
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setMode("idle");
            setLeft(ORIENT);
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
