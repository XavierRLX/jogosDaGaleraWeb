export type Game = {
  slug: string;
  title: string;
  description: string;
  url: string;
  cover?: string;      
  tags?: string[];
  featured?: boolean;
};

export const games: Game[] = [
  {
    slug: "impostor-da-palavra",
    title: "Impostor da Palavra",
    description: "Descubra quem é o impostor pelas dicas do inimigo",
    url: "https://impostordapalavra.lovable.app",
    cover:"/covers/impostor_da_palavra.jpg",
    tags: ["party", "social", "mobile"],
    featured: true,
  },
  {
    slug: "Cidade Dorme",
    title: "Cidade Dorme",
    description: "Guia para mestre comandar a noite dos crimes!",
    url: "https://cidadedorme.lovable.app/",
    cover:"/covers/cidade_dorme.jpg",
    tags: ["party", "social", "mobile"],
    featured: true,
  },
   {
    slug: "Dica a Dica",
    title: "Dica a Dica",
    description: "Ajude o seu amigo a descobrir a palavra com dicas!",
    url: "https://dicaadica.lovable.app",
    cover:"/covers/Dica_a_Dica.jpg",
    tags: ["party", "social", "mobile"],
    featured: true,
  },
  {
    slug: "Quem sou eu ?!",
    title: "Quem sou eu ?!",
    description: "Descubra o que seus amigos escolheram para você!",
    url: "https://quemsoueuweb.lovable.app",
    cover:"/covers/quem_sou_eu.jpg",
    tags: ["party", "social", "mobile"],
    featured: false,
  },
  {
    slug: "Adedonha",
    title: "Adedonha",
    description: "Clássico jogo pra jogar com a família",
    url: "https://adedonhasempapel.lovable.app",
    cover:"/covers/adedonha_sem_papel.jpg",
    tags: ["party", "social", "mobile"],
    featured: false,
  },
  {
    slug: "Jogo da Velha",
    title: "Jogo da Velha",
    description: "Jogue esse grande jogo até 25x25 de tabuleiro.",
    url: "https://jogodavelhaweb.lovable.app/",
    cover:"/covers/jogo_da_velha_web.jpg",
    tags: ["party", "social", "mobile"],
    featured: false,
  },
{
    slug: "Ludo",
    title: "Ludo",
    description: "Consegue levar seus 4 peões até o final?",
    url: "https://ludoweb.lovable.app",
    cover:"/covers/ludo_web.jpg",
    tags: ["party", "social", "mobile"],
    featured: false,
  },
{
    slug: "Mimica",
    title: "Mimica",
    description: "Será que imitação é boa?",
    url: "https://mimicaweb.lovable.app",
    cover:"/covers/mimica_web.jpg",
    tags: ["party", "social", "mobile"],
    featured: false,
  },
];
