const steps = [
  {
    title: "MIND infrastructure",
    body: "The substrate: tenants, graphs, memory, and routing—built so agents stay sharp without sharing a messy single context.",
  },
  {
    title: "Tenant per bot",
    body: "Spin up a bot, get a fresh tenant. Isolation by default. Scale the roster without leaking one role into another.",
  },
  {
    title: "Multi-graph",
    body: "Personality, lessons, work, and memory as coordinated graphs—so Dae can reason across agents without losing the thread.",
  },
  {
    title: "Any agent plugs in",
    body: "Claude, Cursor, custom agents—connect to the same MIND infra and inherit tenant + graphs. Effectiveness from message one.",
  },
];

export function Stack() {
  return (
    <section id="stack" className="border-t border-card-border/80 bg-card/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">The advantage</p>
          <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
            Infra → tenants →{" "}
            <span className="italic text-accent">multi-graph</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
            Personality alone is table stakes. The edge is MIND infrastructure: a new
            tenant for each bot, and multi-graph ability so your fleet stays coherent.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="relative rounded-2xl border border-card-border bg-background p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                  Step {String(index + 1).padStart(2, "0")}
                </span>
                {index < steps.length - 1 && (
                  <span className="hidden text-accent lg:inline" aria-hidden>
                    →
                  </span>
                )}
              </div>
              <h3 className="font-display text-lg font-medium text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 rounded-2xl border border-accent/35 bg-accent-soft px-5 py-4 text-sm text-foreground">
          <span className="font-bold text-accent">The bet:</span>{" "}
          if it works for me, it&apos;ll work for them.
        </div>
      </div>
    </section>
  );
}
