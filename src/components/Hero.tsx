export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-glow" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-card-border bg-card/70 px-3 py-1 text-xs font-medium text-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden />
            Astra AI · Director of Engineering
          </p>

          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Meet <span className="text-accent-strong">Dae</span>
            <span className="mt-2 block text-2xl font-normal text-muted sm:text-3xl lg:text-4xl">
              Your Digital Bae for engineering ops
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            Dae manages per-client Grok team-lead bots. They run Grok Code engineer
            terminals—one per live project or ticket—so the CEO talks to one sharp
            operator, not a swarm of tabs.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#cta"
              className="focus-ring inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#1a1410] transition hover:bg-accent-strong sm:w-auto"
            >
              Talk to Dae
            </a>
            <a
              href="#stack"
              className="focus-ring inline-flex w-full items-center justify-center rounded-full border border-card-border bg-card px-6 py-3 text-sm font-medium text-foreground transition hover:border-accent/40 sm:w-auto"
            >
              See how the stack works
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-3 sm:grid-cols-3">
          {[
            { label: "Single interface", value: "CEO → Dae only" },
            { label: "Per-client leads", value: "Grok team bots" },
            { label: "Live execution", value: "1 terminal / ticket" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-card-border bg-card/80 px-5 py-4 text-left shadow-[0_0_0_1px_transparent] backdrop-blur"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-muted">{item.label}</p>
              <p className="mt-2 text-sm font-medium text-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
