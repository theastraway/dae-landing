import { MindLogo } from "./MindLogo";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#what", label: "What Dae is" },
  { href: "#stack", label: "Stack" },
  { href: "#team", label: "Team model" },
  { href: "#cta", label: "Get Dae" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-card-border/80 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="focus-ring group flex items-center gap-3 rounded-lg">
          <MindLogo height={26} priority />
          <span className="hidden h-6 w-px bg-card-border sm:block" aria-hidden />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-medium tracking-tight text-foreground">
              Dae <span className="text-muted">·</span>{" "}
              <span className="italic text-muted">Director of Engineering</span>
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-muted">
              Digital Bae <span className="text-accent">/</span> by Astra AI
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded-md px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-muted transition hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#cta"
            className="focus-ring hidden rounded-full bg-accent px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-on-accent transition hover:brightness-110 sm:inline-flex"
          >
            Request intro
          </a>
        </div>
      </div>
    </header>
  );
}
