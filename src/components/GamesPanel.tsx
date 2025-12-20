"use client";

import { useMemo, useState } from "react";
import type { Game } from "@/data/games";
import { GameCard } from "@/components/GameCard";

export function GamesPanel({ games }: { games: Game[] }) {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string>("all");

  const tags = useMemo(() => {
    const set = new Set<string>();
    for (const g of games) g.tags?.forEach((t) => set.add(t));
    return ["all", ...Array.from(set).sort()];
  }, [games]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return games.filter((g) => {
      const matchesQuery =
        !query ||
        g.title.toLowerCase().includes(query) ||
        g.description.toLowerCase().includes(query) ||
        (g.tags ?? []).some((t) => t.toLowerCase().includes(query));

      const matchesTag = tag === "all" || (g.tags ?? []).includes(tag);
      return matchesQuery && matchesTag;
    });
  }, [games, q, tag]);

  return (
    <div className="mt-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-md">
          <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
            🔎
          </div>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar jogo por nome, descrição ou tag..."
            className="w-full rounded-2xl border border-white/10 bg-white/5 py-3 pl-10 pr-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/25"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((t) => {
            const active = t === tag;
            return (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={[
                  "rounded-full px-3 py-2 text-xs transition",
                  active
                    ? "border border-white/20 bg-white/15 text-white"
                    : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10",
                ].join(" ")}
              >
                {t === "all" ? "Todas" : `#${t}`}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-4 text-sm text-white/60">
        Mostrando <span className="text-white/90">{filtered.length}</span> de{" "}
        <span className="text-white/90">{games.length}</span>
      </div>

      <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((g) => (
          <GameCard key={g.slug} game={g} onPlay={() => window.open(g.url, "_blank", "noreferrer")} />
        ))}
      </section>
    </div>
  );
}
