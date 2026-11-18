import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

type MarkdownBodyProps = {
  children: string;
  className?: string;
};

/**
 * Renders study notes / boguddrag as real markdown with readable typography.
 * Replaces whitespace-pre-wrap raw "##" dumps.
 */
export function MarkdownBody({ children, className }: MarkdownBodyProps) {
  return (
    <div className={cn("prose-reading", className)}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}
