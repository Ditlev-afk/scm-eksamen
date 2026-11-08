"use client";

import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <Button
      size="lg"
      className="bg-[hsl(var(--sea))] hover:bg-[hsl(199_78%_22%)]"
      onClick={() => window.print()}
    >
      <Printer className="h-4 w-4" />
      Print alle ark
    </Button>
  );
}
