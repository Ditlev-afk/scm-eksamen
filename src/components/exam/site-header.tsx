import Link from "next/link";
import { BookOpen, Printer, Timer, Shuffle, ListChecks } from "lucide-react";

const links = [
  { href: "/", label: "Oversigt", icon: BookOpen },
  { href: "/test", label: "Test", icon: ListChecks },
  { href: "/ov", label: "Øv dig", icon: Timer },
  { href: "/traek", label: "Træk tema", icon: Shuffle },
  { href: "/print", label: "Print A4", icon: Printer },
];

export function SiteHeader() {
  return (
    <header className="no-print sticky top-0 z-40 border-b border-border/70 bg-[hsl(var(--sand)/0.85)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-display text-xl tracking-tight text-[hsl(var(--ink))] sm:text-2xl">
            SCM Eksamen
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground sm:inline">
            Reeksamen · 12 temaer
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm font-medium text-[hsl(var(--ink))]/80 transition hover:bg-secondary hover:text-[hsl(var(--ink))]"
            >
              <Icon className="h-3.5 w-3.5 opacity-70" />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
