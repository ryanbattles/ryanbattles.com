"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ShimmerImage({ className, onLoad, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span className="relative inline-block w-full h-full">
      {!loaded && (
        <span
          aria-hidden="true"
          className="absolute inset-0 block rounded-[inherit] bg-muted animate-pulse"
        />
      )}
      <Image
        {...props}
        className={cn(
          "transition-opacity duration-500",
          loaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
      />
    </span>
  );
}
