export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 hero-glow" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-50" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-card-border bg-card/80 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            MIND infrastructure · tenants · multi-graph
          </p>

          <h1 className="font-display text-balance text-5xl font-medium tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Meet{" "}
            <span className="italic text-accent">Dae</span>
          </h1>
          <p className="font-display mt-4 text-balance text-2xl font-normal italic text-muted sm:text-3xl lg:text-[2.1rem]">
            Your Digital Bae
          </p>
          <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
            Director of Engineering{" "}
            <span className="text-accent">·</span> quietly
          </p>

          <div className="red-rule mx-auto mt-8 max-w-xs opacity-90" aria-hidden />

          <p className="mx-auto mt-7 max-w-2xl text-pretty text-sm leading-relaxed text-muted sm:text-base">
            Dae is the agent architecture on MIND infrastructure. Every bot gets its
            own tenant. Multi-graph keeps work, memory, and personality coherent across
            agents—so anything you plug in becomes highly effective. If it works for
            me, it&apos;ll work for you.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#cta"
              className="focus-ring inline-flex w-full items-center justify-center rounded-full bg-accent px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-on-accent transition hover:brightness-110 sm:w-auto"
            >
              Get Digital Bae
            </a>
            <a
              href="#stack"
              className="focus-ring inline-flex w-full items-center justify-center rounded-full border border-card-border bg-card/60 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-foreground transition hover:border-accent/50 sm:w-auto"
            >
              See the advantage
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-3 sm:grid-cols-3">
          {[
            { label: "Infrastructure", value: "MIND under every agent" },
            { label: "Tenants", value: "A new tenant for each bot" },
            { label: "Multi-graph", value: "Many graphs, one coherent mind" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-card-border bg-card/90 px-5 py-4 text-left backdrop-blur"
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted">{item.label}</p>
              <p className="font-display mt-2 text-lg text-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
