import { Dock, DockIcon } from "@/components/magicui/dock";
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

export default function Navbar({ mobile = false }: { mobile?: boolean }) {
  const socialItems = [
    DATA.contact.social.email,
    DATA.contact.social.LinkedIn,
    DATA.contact.social.Instagram,
  ].filter((social) => social.navbar);

  if (mobile) {
    return (
      <Dock
        className="z-50 pointer-events-auto relative h-auto p-1.5 w-fit mx-auto flex gap-1.5 border-0 bg-transparent shadow-none"
        size={32}
        iconSize={16}
        magnification={40}
      >
        {DATA.navbar.map((item) => {
          const isExternal = item.href.startsWith("http");
          const DockButton = (
            <DockIcon className="rounded-lg cursor-pointer size-8 bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted border border-border transition-colors">
              <item.icon className="size-full" />
            </DockIcon>
          );
          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                {isExternal ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
                    {DockButton}
                  </a>
                ) : (
                  <Link href={item.href} aria-label={item.label}>
                    {DockButton}
                  </Link>
                )}
              </TooltipTrigger>
              <TooltipContent
                side="top"
                sideOffset={8}
                className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
              >
                <p>{item.label}</p>
                <TooltipArrow className="fill-primary" />
              </TooltipContent>
            </Tooltip>
          );
        })}
        {socialItems
          .map((social) => {
            const isExternal = social.url.startsWith("http");
            const IconComponent = social.icon;
            const DockButton = (
              <DockIcon className="rounded-lg cursor-pointer size-8 bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted border border-border transition-colors">
                <IconComponent className="size-full" />
              </DockIcon>
            );
            return (
              <Tooltip key={`social-${social.name}`}>
                <TooltipTrigger asChild>
                  {isExternal ? (
                    <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                      {DockButton}
                    </a>
                  ) : (
                    <Link href={social.url} aria-label={social.name}>
                      {DockButton}
                    </Link>
                  )}
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                >
                  <p>{social.name}</p>
                  <TooltipArrow className="fill-primary" />
                </TooltipContent>
              </Tooltip>
            );
          })}
        <Separator
          orientation="vertical"
          className="h-5 m-auto w-px bg-border"
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon className="rounded-lg cursor-pointer size-8 bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted border border-border transition-colors">
              <ModeToggle className="size-full cursor-pointer" />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            <p><ModeToggleTooltipLabel /></p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </Dock>
    );
  }

  return (
    <>
      {/* Desktop fixed nav */}
      <div className="pointer-events-none hidden sm:fixed sm:inset-x-0 sm:bottom-4 sm:z-30">
        <Dock className="z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex gap-2 border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5">
        {DATA.navbar.map((item) => {
          const isExternal = item.href.startsWith("http");
          const DockButton = (
            <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
              <item.icon className="size-full rounded-sm overflow-hidden object-contain" />
            </DockIcon>
          );
          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                {isExternal ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {DockButton}
                  </a>
                ) : (
                  <Link href={item.href}>
                    {DockButton}
                  </Link>
                )}
              </TooltipTrigger>
              <TooltipContent
                side="top"
                sideOffset={8}
                className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
              >
                <p>{item.label}</p>
                <TooltipArrow className="fill-primary" />
              </TooltipContent>
            </Tooltip>
          );
        })}
        {socialItems
          .map((social, index) => {
            const isExternal = social.url.startsWith("http");
            const IconComponent = social.icon;
            const DockButton = (
              <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
                <IconComponent className="size-full rounded-sm overflow-hidden object-contain" />
              </DockIcon>
            );
            return (
              <Tooltip key={`social-${social.name}-${index}`}>
                <TooltipTrigger asChild>
                  {isExternal ? (
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      {DockButton}
                    </a>
                  ) : (
                    <Link href={social.url}>
                      {DockButton}
                    </Link>
                  )}
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                >
                  <p>{social.name}</p>
                  <TooltipArrow className="fill-primary" />
                </TooltipContent>
              </Tooltip>
            );
          })}
        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon className="rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors">
              <ModeToggle className="size-full cursor-pointer" />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            <p><ModeToggleTooltipLabel /></p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </Dock>
      </div>
    </>
  );
}
