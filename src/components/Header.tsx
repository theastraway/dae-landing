import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#what", label: "What Dae does" },
  { href: "#stack", label: "Stack" },
  { href: "#team", label: "Team model" },
  { href: "#cta", label: "Talk to Dae" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-card-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="focus-ring group flex items-center gap-2.5 rounded-lg">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-sm font-semibold tracking-tight text-accent-strong">
            D
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-tight text-foreground">Dae</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted">Digital Bae</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded-lg px-3 py-2 text-sm text-muted transition hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#cta"
            className="focus-ring hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-[#1a1410] transition hover:bg-accent-strong sm:inline-flex"
          >
            Request intro
          </a>
        </div>
      </div>
    </header>
  );
}
