import Link from "next/link";
import { games } from "@/data/games";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export default function GamePage({ params }: Props) {
  const game = games.find((g) => g.slug === params.slug);
  if (!game) return notFound();

  return (
    <main className="min-h-dvh bg-gradient-to-b from-black to-zinc-950 text-white">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <Link href="/" className="text-sm text-white/70 hover:text-white">
          ← Voltar
        </Link>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
          <h1 className="text-2xl font-bold">{game.title}</h1>
          <p className="mt-2 text-white/70">{game.description}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {/* Link externo: aqui PODE ser <a> */}
            <a
              href={game.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
            >
              Jogar em nova aba
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
