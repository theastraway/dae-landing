const steps = [
  {
    title: "Astra portal",
    body: "Intents, clients, and priorities enter through the Astra portal—the front door for human direction.",
  },
  {
    title: "n8n orchestrator",
    body: "Workflows fan out reliably: who needs a lead, which ticket is live, what should ship next.",
  },
  {
    title: "Client Grok bots",
    body: "Per-client team-lead bots hold context, coach execution, and report upward to Dae.",
  },
  {
    title: "Grok Code terminals",
    body: "One engineer terminal per live project or ticket. Focused builds. Clean handoffs.",
  },
];

export function Stack() {
  return (
    <section id="stack" className="border-t border-card-border/70 bg-card/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">How the stack works</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Portal → orchestration → leads → terminals
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            A light stack story with a hard rule: the CEO talks only to Dae. Everything
            else is Dae&apos;s org chart.
          </p>
        </div>

        <ol className="mt-12 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="relative rounded-2xl border border-card-border bg-background p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Step {index + 1}
                </span>
                {index < steps.length - 1 && (
                  <span className="hidden text-accent lg:inline" aria-hidden>
                    →
                  </span>
                )}
              </div>
              <h3 className="text-lg font-medium text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 rounded-2xl border border-dashed border-accent/35 bg-accent-soft px-5 py-4 text-sm text-accent-strong">
          <strong className="font-semibold">Operating rule:</strong> humans above the
          line speak to Dae. Dae speaks to the fleet.
        </div>
      </div>
    </section>
  );
}
