const layers = [
  {
    role: "You",
    title: "One Digital Bae",
    body: "Talk to Dae—not a pile of disconnected agents. Fun on the surface. Engineering mastery underneath.",
  },
  {
    role: "MIND infra",
    title: "Tenants + multi-graph",
    body: "Each bot gets a new tenant. Multi-graph keeps personality, lessons, and work aligned across the fleet—without context bleed.",
  },
  {
    role: "Your agents",
    title: "Instantly effective",
    body: "Whatever you connect inherits that tenant and those graphs—so it shows up ready, isolated, and coherent.",
  },
];

export function TeamModel() {
  return (
    <section id="team" className="border-t border-card-border/80 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
            You · MIND infra · agents
          </p>
          <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
            Isolated tenants.{" "}
            <span className="italic text-accent">Shared coherence.</span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
            Digital Bae isn&apos;t another chatbot. It&apos;s the Director of Engineering
            layer on MIND infrastructure—tenant-per-bot and multi-graph so a growing
            agent team stays sharp instead of chaotic.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {layers.map((layer) => (
            <article
              key={layer.role}
              className="flex flex-col rounded-2xl border border-card-border bg-card p-6 transition hover:border-accent/35"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent">{layer.role}</p>
              <h3 className="font-display mt-3 text-2xl font-medium text-foreground">{layer.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{layer.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
