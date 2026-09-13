const capabilities = [
  {
    title: "MIND infrastructure",
    body: "Not a prompt wrapper—real infra. Isolation, memory, and routing live under every agent so effectiveness is structural, not hoped for.",
  },
  {
    title: "A new tenant for each bot",
    body: "Every bot gets its own tenant. Clean boundaries, clean context, no bleed between roles—mint another agent without collapsing the stack.",
  },
  {
    title: "Multi-graph ability",
    body: "Work graphs, memory graphs, personality graphs—running together. Multi-graph is how Dae stays coherent when you run more than one agent.",
  },
  {
    title: "Personality that travels",
    body: "Favorites, preferred behaviors, lessons, and memories ride with the tenant. Plug Claude, Cursor, or a custom agent in—and it shows up as you.",
  },
];

export function WhatDaeDoes() {
  return (
    <section id="what" className="border-t border-card-border/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">What Dae is</p>
          <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
            Digital Bae.{" "}
            <span className="italic text-accent">Director of Engineering.</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
            Fun branding up front. Engineering mastery underneath. The competitive
            edge is MIND infrastructure: tenant-per-bot isolation and multi-graph
            coherence—so any agent you connect becomes everything you need.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {capabilities.map((item, index) => (
            <li
              key={item.title}
              className="rounded-2xl border border-card-border bg-card p-6 transition hover:border-accent/40"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent-soft text-[11px] font-bold tracking-wider text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
