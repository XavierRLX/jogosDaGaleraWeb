import "./globals.css";
import type { Metadata } from "next";
import { games } from "@/data/games";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "JG Web",
  description: "Sua coleção de jogos web para jogar com amigos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-dvh bg-zinc-950 text-white antialiased">
        {/* Background “gamer” global */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(217,70,239,.18),transparent_35%),radial-gradient(circle_at_70%_20%,rgba(34,211,238,.14),transparent_35%),radial-gradient(circle_at_60%_90%,rgba(16,185,129,.10),transparent_40%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,.2),rgba(0,0,0,.9))]" />
        </div>

        <SiteHeader totalGames={games.length} />

        {children}

        <SiteFooter />
      </body>
    </html>
  );
}
