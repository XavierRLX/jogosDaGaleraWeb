import { games } from "@/data/games";
import { GamesPanel } from "@/components/GamesPanel";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-white bg-clip-text text-transparent">
            Jogos da Galera
          </span>{" "}
          Web
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-white/60">
          Sua coleção de jogos web para jogar com amigos. Escolha um jogo e comece a diversão!
        </p>
      </section>

      <GamesPanel games={games} />
    </main>
  );
}
