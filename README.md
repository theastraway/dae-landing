# Dae Landing

Polished marketing site for **Dae** — Director of Engineering for Astra AI (tagline: *Digital Bae*).

Dae manages per-client Grok team-lead bots. Those leads run Grok Code engineer terminals (one per live project/ticket). The CEO talks only to Dae.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS v4
- Dark theme by default, optional light toggle

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm install
npm run build
npm start
```

## Deploy notes

- Any Node host that supports Next.js works (Vercel, Railway, Fly, Docker, etc.).
- Build command: `npm run build`
- Start command: `npm start`
- No environment variables required for the static marketing page.
- Prefer deploying from `main` after merging `feat/dae-landing`.

## Site sections

1. **Hero** — brand intro + Digital Bae tagline  
2. **What Dae does** — director capabilities  
3. **How the stack works** — Astra portal → n8n → client Grok bots → Grok Code terminals  
4. **Clients / team leads / engineers** — org framing  
5. **CTA** — request intro  

## License

Private — Astra AI.
