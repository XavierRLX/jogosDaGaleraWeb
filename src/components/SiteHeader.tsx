import Link from "next/link";

export function SiteHeader({ totalGames }: { totalGames: number }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
            🎮
          </span>

          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight text-white">
              JG Web
            </p>
            <p className="text-xs text-white/60">Portal de jogos</p>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            ✨ {totalGames} jogo{totalGames === 1 ? "" : "s"} disponív{totalGames === 1 ? "el" : "eis"}
          </span>
        </div>
      </div>
    </header>
  );
}
