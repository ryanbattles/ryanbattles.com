"use client";

import { useRef, useState } from "react";
import Markdown from "react-markdown";
import { ChevronDown } from "lucide-react";

export default function AboutSection({ content }: { content: string }) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col gap-y-3">
      <div
        className="relative overflow-hidden transition-[max-height] duration-500 ease-in-out"
        style={{
          maxHeight: expanded
            ? (contentRef.current?.scrollHeight ?? 9999)
            : 300,
        }}
      >
        <div
          ref={contentRef}
          className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert [&_strong]:font-semibold [&_strong]:text-foreground [&_strong]:font-[inherit]"
        >
          <Markdown>{content}</Markdown>
        </div>

        {/* Fade overlay — only visible when collapsed */}
        <div
          className={`absolute inset-x-0 bottom-0 h-24 pointer-events-none bg-gradient-to-t from-background to-transparent transition-opacity duration-500 ${expanded ? "opacity-0" : "opacity-100"}`}
        />
      </div>

      {!expanded && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="self-start flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
        >
          <span>Read more</span>
          <ChevronDown
            className="size-4 transition-transform duration-300 group-hover:text-foreground"
          />
        </button>
      )}
    </div>
  );
}
