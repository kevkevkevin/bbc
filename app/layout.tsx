import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BBC — Behavioral Blockchain Companion",
  description: "The waifu who watches the chain so you don’t have to. Explore BBC’s on-chain intelligence, token scanner, and behavioral companion.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
