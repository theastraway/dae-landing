const capabilities = [
  {
    title: "Owns the engineering conversation",
    body: "Priorities, blockers, and shipping decisions land with Dae—not scattered across chat threads and dashboards.",
  },
  {
    title: "Spins up client team leads",
    body: "Each client gets a dedicated Grok team-lead bot that knows their context, cadence, and constraints.",
  },
  {
    title: "Routes work to engineer terminals",
    body: "Live projects and tickets get a Grok Code terminal—focused execution without context bleed.",
  },
  {
    title: "Keeps the CEO in the loop",
    body: "Status rolls up cleanly. One relationship. Clear ownership. No micromanaging the machine room.",
  },
];

export function WhatDaeDoes() {
  return (
    <section id="what" className="border-t border-card-border/70 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">What Dae does</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Director energy. Warm delivery. Zero fluff.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Dae is Astra&apos;s Director of Engineering—sharp enough to run the floor,
            warm enough that you actually want to talk to them. The subtle tagline
            sticks for a reason: Digital Bae.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {capabilities.map((item, index) => (
            <li
              key={item.title}
              className="rounded-2xl border border-card-border bg-card p-6 transition hover:border-accent/35"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent-strong">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
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
