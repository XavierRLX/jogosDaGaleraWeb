import type { Game } from "@/data/games";

function Cover({ title, cover }: { title: string; cover?: string }) {
  if (!cover) {
    return (
      <div className="relative h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/30 via-cyan-500/20 to-emerald-500/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.18),transparent_35%)]" />
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-sm font-semibold tracking-wide text-white/90">{title}</p>
          <p className="text-xs text-white/60">Sem capa (placeholder)</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={cover}
      alt={title}
      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]"
      loading="lazy"
    />
  );
}

export function GameCard({ game, onPlay }: { game: Game; onPlay: () => void }) {
  return (
    <button
      type="button"
      onClick={onPlay}
      className="group text-left"
      aria-label={`Abrir ${game.title}`}
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10">
        {/* Glow */}
        <div className="pointer-events-none absolute -inset-24 opacity-0 blur-3xl transition group-hover:opacity-100">
          <div className="h-40 w-40 rounded-full bg-fuchsia-500/30" />
          <div className="mt-10 h-40 w-40 rounded-full bg-cyan-500/20" />
        </div>

        <div className="aspect-[16/9] overflow-hidden rounded-xl bg-black/30">
          <Cover title={game.title} cover={game.cover} />
        </div>

        <div className="mt-3 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold tracking-tight">{game.title}</h3>
            <p className="mt-1 text-sm text-white/70">{game.description}</p>
          </div>

          {game.featured && (
            <span className="shrink-0 rounded-full border border-white/15 bg-white/10 px-2 py-1 text-[11px] text-white/80">
              Destaque
            </span>
          )}
        </div>

        {!!game.tags?.length && (
          <div className="mt-3 flex flex-wrap gap-2">
            {game.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-black/25 px-2 py-1 text-xs text-white/70"
              >
                #{t}
              </span>
            ))}
          </div>
        )}
      </div>
    </button>
  );
}
