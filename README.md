# BBC — Behavioral Blockchain Companion

Responsive black/purple launch experience with the BBC character, interactive scanner demo, intelligence modules, mood preview, and animated launch terminal.

## Development

Requires Node.js 22.13+ and pnpm.

```sh
pnpm install
pnpm dev
```

## Production

```sh
pnpm build
pnpm start
```

The default scripts run native Next.js. The native production build was verified successfully. Vercel configuration is provided in vercel.json: import kevkevkevin/bbc with the repository root as the project root and Next.js as the framework. No environment variables are required for the current demo.

The original Vinext/Vite Cloudflare tooling remains available through dev:sites and build:sites for the separate Sites preview.

Scanner results and mood states are explicitly demo data. No live blockchain data provider, wallet connection, or trading functionality is connected. Demo scan history is saved in the visitor's browser.

Existing preview: https://bbc-companion.kevin675596.chatgpt.site
