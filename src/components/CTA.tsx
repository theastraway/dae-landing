export function CTA() {
  return (
    <section id="cta" className="border-t border-card-border/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-card-border bg-card px-6 py-12 sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-glow blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-10 h-48 w-48 rounded-full opacity-40 blur-3xl"
            style={{ background: "color-mix(in oklab, var(--cyan) 25%, transparent)" }}
            aria-hidden
          />
          <div className="relative max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">Ready when you are</p>
            <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
              Infra first.{" "}
              <span className="italic text-accent">Agents second.</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
              Bring your agent. Land on MIND infrastructure—new tenant, multi-graph,
              personality included. Meet Digital Bae, the Director of Engineering that
              already knows how you like to work. If it works for me, it&apos;ll work for you.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.m-i-n-d.ai"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-on-accent transition hover:brightness-110"
              >
                Start with MIND
              </a>
              <a
                href="#what"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-card-border bg-background px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-foreground transition hover:border-accent/45"
              >
                See what Dae is
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
