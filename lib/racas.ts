export interface Raca {
  nome: string;
  slug: string;
  categoria: "Poedeira" | "Corte" | "Duplo propósito" | "Ornamental";
  descricaoCurta: string;
  historia: string;
  origem: string;
  corOvos: string;
  pesoMedio: string;
  producaoMedia: string;
  indicacao: string[];
  imagem: string;
}

export const racas: Raca[] = [
  {
    nome: "Ameraucana Black",
    slug: "ameraucana-black",
    categoria: "Duplo propósito",
    descricaoCurta:
      "Variedade de Ameraucana com plumagem negra elegante e ovos azulados.",
    historia:
      "A Ameraucana Black é uma das variedades reconhecidas da raça Ameraucana. Sua plumagem completamente negra dá um visual marcante ao plantel, mantendo as características típicas da raça, como barba facial e produção de ovos azuis. Assim como outras Ameraucanas, é valorizada por criadores que buscam diversidade genética e estética no plantel.",
    origem: "Estados Unidos",
    corOvos: "Azul",
    pesoMedio: "2,5 a 3,0 kg",
    producaoMedia: "180 a 220 ovos/ano",
    indicacao: [
      "Produção de ovos azulados",
      "Plantéis ornamentais e produtivos",
      "Criação ao ar livre",
      "Diversificação genética do plantel",
    ],
    imagem: "/images/racas/ameraucana_black.jpeg",
  },
  {
    nome: "Ameraucana Splash",
    slug: "ameraucana-splash",
    categoria: "Duplo propósito",
    descricaoCurta:
      "Variedade de Ameraucana com plumagem clara salpicada e ovos azulados.",
    historia:
      "A Ameraucana Splash apresenta uma plumagem clara com manchas irregulares azuladas ou acinzentadas. Essa coloração resulta de combinações genéticas relacionadas à plumagem azul. Apesar do visual diferenciado, mantém todas as características produtivas da raça Ameraucana, incluindo a postura de ovos de casca azul.",
    origem: "Estados Unidos",
    corOvos: "Azul",
    pesoMedio: "2,5 a 3,0 kg",
    producaoMedia: "180 a 220 ovos/ano",
    indicacao: [
      "Produção de ovos coloridos",
      "Criação ornamental e produtiva",
      "Diversificação do plantel",
      "Sistemas de criação ao ar livre",
    ],
    imagem: "/images/racas/ameraucana_splash.jpeg",
  },
  {
    nome: "Gigante Negro de Jersey",
    slug: "gigante-negro-de-jersey",
    categoria: "Duplo propósito",
    descricaoCurta:
      "Uma das maiores raças de galinha do mundo, valorizada pela produção de carne.",
    historia:
      "O Gigante Negro de Jersey foi desenvolvido nos Estados Unidos no final do século XIX com o objetivo de criar uma ave de grande porte que pudesse substituir o peru na produção de carne. A variedade negra tornou-se a mais conhecida. Com crescimento robusto e corpo largo, essa raça é muito valorizada por criadores que buscam aves de grande tamanho e boa qualidade de carne.",
    origem: "Estados Unidos",
    corOvos: "Marrom",
    pesoMedio: "4,5 a 5,5 kg",
    producaoMedia: "150 a 180 ovos/ano",
    indicacao: [
      "Produção de carne em grande escala",
      "Plantéis de grande porte",
      "Criação em propriedades com espaço amplo",
      "Criadores que buscam aves gigantes",
    ],
    imagem: "/images/racas/gigante_negro_de_jersey.jpeg",
  },
  {
    nome: "Galinha Sertaneja Balão (GSB)",
    slug: "gsb",
    categoria: "Duplo propósito",
    descricaoCurta:
      "Uma raça de galinha caipira gigante 100% brasileira originária do Nordeste (com fortes raízes na Bahia). Ela se destaca pelo grande porte, rusticidade e alta valorização ornamental.",
    historia:
      "A linhagem GSB é utilizada em diversos sistemas de produção devido à sua rusticidade e adaptação a diferentes condições ambientais.  A raça apresenta boa conversão alimentar e postura consistente.",
    origem: "Nordeste Brasileiro",
    corOvos: "Marrom",
    pesoMedio: "5,0 a 7,0 kg",
    producaoMedia: "120 a 150 ovos/ano",
    indicacao: [
      "Para quem busca plumagens de cores variadas",
      "Para quem procura galinhas pesadas",
      "Galinhas dóceis",
      "Galinhas com excelente conversão alimentar",
    ],
    imagem: "/images/racas/gsb.jpeg",
  },
  {
    nome: "Rhode Island Red",
    slug: "rhode-island-red",
    categoria: "Duplo propósito",
    descricaoCurta:
      "Uma das raças mais populares do mundo, conhecida pela rusticidade, excelente produção de ovos marrons e boa adaptação a diferentes sistemas de criação.",
    historia:
      "A Rhode Island Red surgiu no final do século XIX no estado de Rhode Island, nos Estados Unidos. A raça foi desenvolvida a partir do cruzamento de aves asiáticas e europeias, com o objetivo de criar uma galinha rústica que fosse eficiente tanto na produção de ovos quanto de carne. Com o tempo, tornou-se uma das raças mais utilizadas na avicultura mundial, especialmente em sistemas de produção familiar e criação ao ar livre. Sua resistência, boa conversão alimentar e postura consistente fazem da Rhode Island Red uma escolha muito popular entre criadores.",
    origem: "Estados Unidos",
    corOvos: "Marrom",
    pesoMedio: "3,0 a 3,8 kg",
    producaoMedia: "250 a 300 ovos/ano",
    indicacao: [
      "Produção mista de ovos e carne",
      "Criadores iniciantes",
      "Agricultura familiar",
      "Sistemas de criação ao ar livre",
    ],
    imagem: "/images/racas/rhode_island_red.jpeg",
  },
  {
    nome: "Wyandotte",
    slug: "wyandotte",
    categoria: "Duplo propósito",
    descricaoCurta:
      "Raça americana elegante e resistente, conhecida pela plumagem ornamental e boa postura.",
    historia:
      "A Wyandotte foi desenvolvida nos Estados Unidos no século XIX e recebeu esse nome em homenagem a uma tribo indígena americana. É uma raça valorizada tanto pela beleza de sua plumagem quanto pela capacidade produtiva. Possui diversas variedades de cor e é popular entre criadores que desejam um plantel ornamental e produtivo.",
    origem: "Estados Unidos",
    corOvos: "Marrom claro",
    pesoMedio: "3,0 a 4,0 kg",
    producaoMedia: "200 a 240 ovos/ano",
    indicacao: [
      "Plantéis ornamentais e produtivos",
      "Produção de ovos e carne",
      "Criadores que valorizam diversidade genética",
      "Criação ao ar livre",
    ],
    imagem: "/images/racas/wyandotte.jpeg",
  },
];

export function getRacaBySlug(slug: string): Raca | undefined {
  return racas.find((r) => r.slug === slug);
}

export function getAllSlugs(): string[] {
  return racas.map((r) => r.slug);
}
