const layers = [
  {
    role: "Clients",
    title: "Outcomes, not ops noise",
    body: "Each engagement maps to a client context. Dae keeps the relationship coherent while work fans out underneath.",
  },
  {
    role: "Team leads",
    title: "Grok bots per client",
    body: "Dedicated team-lead bots own cadence, quality bar, and escalation—so every client feels staffed, not queued.",
  },
  {
    role: "Engineers",
    title: "Grok Code terminals",
    body: "One terminal per live project or ticket. Engineers execute; leads coordinate; Dae directs.",
  },
];

export function TeamModel() {
  return (
    <section id="team" className="border-t border-card-border/70 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Clients · leads · engineers</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            An org chart that actually scales
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Think boutique firm energy with machine leverage: clear roles, short feedback
            loops, and no mystery about who owns the next mile.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {layers.map((layer) => (
            <article
              key={layer.role}
              className="flex flex-col rounded-2xl border border-card-border bg-card p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{layer.role}</p>
              <h3 className="mt-3 text-xl font-medium text-foreground">{layer.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{layer.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
