"use client";

import { ModeToggle, ModeToggleTooltipLabel } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import Link from "next/link";
import type { ComponentType, HTMLAttributes } from "react";

type FooterLink = {
  label: string;
  href: string;
  icon: ComponentType<HTMLAttributes<SVGElement>>;
};

const FOOTER_LINKS: FooterLink[] = [
  {
    label: DATA.navbar[0].label,
    href: DATA.navbar[0].href,
    icon: DATA.navbar[0].icon,
  },
  {
    label: DATA.contact.social.email.name,
    href: DATA.contact.social.email.url,
    icon: DATA.contact.social.email.icon,
  },
  {
    label: DATA.contact.social.LinkedIn.name,
    href: DATA.contact.social.LinkedIn.url,
    icon: DATA.contact.social.LinkedIn.icon,
  },
  {
    label: DATA.contact.social.Instagram.name,
    href: DATA.contact.social.Instagram.url,
    icon: DATA.contact.social.Instagram.icon,
  },
];

const iconButtonClass =
  "inline-flex size-10 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

const tooltipClass =
  "rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]";

function FooterTooltip({
  children,
  label,
}: {
  children: React.ReactNode;
  label: React.ReactNode;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side="top" sideOffset={8} className={tooltipClass}>
        <p>{label}</p>
        <TooltipArrow className="fill-primary" />
      </TooltipContent>
    </Tooltip>
  );
}

export default function FooterLinks() {
  return (
    <nav
      aria-label="Footer links"
      className="mx-auto flex w-fit items-center justify-center gap-2 rounded-2xl p-1.5"
    >
      {FOOTER_LINKS.map((item) => {
        const Icon = item.icon;
        const isExternal = item.href.startsWith("http");
        const content = (
          <>
            <Icon className="size-5" aria-hidden="true" />
            <span className="sr-only">{item.label}</span>
          </>
        );

        return (
          <FooterTooltip key={item.label} label={item.label}>
            {isExternal ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className={iconButtonClass}
              >
                {content}
              </a>
            ) : (
              <Link href={item.href} aria-label={item.label} className={iconButtonClass}>
                {content}
              </Link>
            )}
          </FooterTooltip>
        );
      })}
      <Separator orientation="vertical" className="mx-1 h-7 w-px bg-border" />
      <FooterTooltip label={<ModeToggleTooltipLabel />}>
        <ModeToggle
          className={iconButtonClass}
          iconClassName="size-5"
        />
      </FooterTooltip>
    </nav>
  );
}
