"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import * as React from "react";

type ModeToggleProps = {
  className?: string;
  iconClassName?: string;
};

export const ModeToggle = React.forwardRef<HTMLButtonElement, ModeToggleProps>(
  ({ className, iconClassName }, ref) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const label = isDark ? "Hit the Lights" : "Party Mode";

  return (
    <Button
      ref={ref}
      type="button"
      variant="link"
      size="icon"
      aria-label={label}
      title={label}
      className={cn(className)}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <SunIcon className={cn("h-full w-full", iconClassName)} />
      ) : (
        <MoonIcon className={cn("h-full w-full", iconClassName)} />
      )}
    </Button>
  );
  }
);
ModeToggle.displayName = "ModeToggle";

export function ModeToggleTooltipLabel() {
  const { theme } = useTheme();

  return theme === "dark" ? "Hit the Lights" : "Party Mode";
}
