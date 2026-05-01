import { cn } from "@/lib/utils";
import React from "react";

export function RainbowButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        // layout
        "relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl",
        "text-sm font-semibold text-white",
        // animated rainbow border via background-clip trick
        "bg-[length:200%] animate-rainbow",
        "[background-image:linear-gradient(#0f0f0f,#0f0f0f),linear-gradient(#0f0f0f_50%,rgba(15,15,15,0.5)_80%,transparent),linear-gradient(90deg,#818cf8,#a78bfa,#e879f9,#38bdf8,#818cf8)]",
        "[background-clip:padding-box,border-box,border-box]",
        "[background-origin:border-box]",
        "border border-transparent",
        // glow behind the button
        "before:absolute before:inset-0 before:-z-10 before:rounded-xl",
        "before:bg-[linear-gradient(90deg,#818cf8,#a78bfa,#e879f9,#38bdf8,#818cf8)]",
        "before:bg-[length:200%] before:animate-rainbow",
        "before:blur-[3px] before:opacity-80",
        // interactions
        "hover:before:opacity-100 transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
