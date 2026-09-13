import { MindLogo } from "./MindLogo";

export function Footer() {
  return (
    <footer className="border-t border-card-border/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <MindLogo height={22} />
          <div>
            <p className="font-display text-sm text-foreground">
              Dae · Director of Engineering
            </p>
            <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-muted">
              Digital Bae · by Astra AI · MIND
            </p>
          </div>
        </div>
        <p className="text-[11px] text-muted">
          © {new Date().getFullYear()} Astra AI. Built for operators who want one conversation, many engines.
        </p>
      </div>
    </footer>
  );
}
