export function Footer() {
  return (
    <footer className="border-t border-card-border/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-medium text-foreground">Dae · Astra AI</p>
          <p className="mt-1 text-sm text-muted">Director of Engineering. Digital Bae.</p>
        </div>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Astra AI. Built for operators who want one conversation, many engines.
        </p>
      </div>
    </footer>
  );
}
