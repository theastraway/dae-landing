export function CTA() {
  return (
    <section id="cta" className="border-t border-card-border/70 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-card-border bg-card px-6 py-12 sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-glow blur-2xl"
            aria-hidden
          />
          <div className="relative max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Ready when you are</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              One conversation. A whole engineering floor.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              If you want Dae running your client leads and engineer terminals, start
              with an intro. Bring the priorities—Dae will bring the org.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:hello@astra.ai?subject=Intro%20to%20Dae"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#1a1410] transition hover:bg-accent-strong"
              >
                Request an intro
              </a>
              <a
                href="#what"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-card-border bg-background px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent/40"
              >
                Review capabilities
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
