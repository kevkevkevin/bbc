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

This project uses React and Next.js App Router conventions with Vinext, Vite, and a Cloudflare Workers production runtime. It is not configured for a standard Vercel Next.js deployment.

Scanner results and mood states are explicitly demo data. No live blockchain data provider, wallet connection, or trading functionality is connected. Demo scan history is saved in the visitor's browser.

Preview: https://bbc-companion.kevin675596.chatgpt.site
