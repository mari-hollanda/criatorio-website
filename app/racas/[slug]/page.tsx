import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  MessageCircle,
  Globe,
  Palette,
  Weight,
  Egg,
  Heart,
} from "lucide-react";
import { getRacaBySlug, getAllSlugs } from "@/lib/racas";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const raca = getRacaBySlug(slug);
  if (!raca) return {};

  return {
    title: `${raca.nome} em Saquarema – Criatório Nossa Senhora de Nazareth`,
    description: `${raca.nome}: características, origem, produção de ovos e peso médio. Raça disponível no Criatório Nossa Senhora de Nazareth em Saquarema RJ.`,
    openGraph: {
      title: `${raca.nome} em Saquarema – Criatório Nossa Senhora de Nazareth`,
      description: `${raca.nome}: características, produção de ovos e origem. Conheça essa raça disponível em nosso criatório em Saquarema RJ.`,
      locale: "pt_BR",
      type: "article",
      images: [{ url: raca.imagem }],
    },
  };
}

const categoryColors: Record<string, string> = {
  Poedeira: "bg-primary/15 text-primary",
  Corte: "bg-accent/15 text-accent",
  "Duplo propósito": "bg-secondary text-secondary-foreground",
};

const characteristics = [
  { key: "origem" as const, label: "Origem", icon: Globe },
  { key: "corOvos" as const, label: "Cor dos ovos", icon: Palette },
  { key: "pesoMedio" as const, label: "Peso médio", icon: Weight },
  { key: "producaoMedia" as const, label: "Produção média", icon: Egg },
];

export default async function RacaPage({ params }: PageProps) {
  const { slug } = await params;
  const raca = getRacaBySlug(slug);

  if (!raca) {
    notFound();
  }

  const whatsappMessage = encodeURIComponent(
    `Olá, gostaria de saber sobre a disponibilidade da raça ${raca.nome} no Criatório Nossa Senhora de Nazareth em Saquarema.`,
  );

  const whatsappLink = `https://wa.me/5522974013244?text=${whatsappMessage}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "AnimalBreed",
    name: raca.nome,
    description: raca.descricaoCurta,
    animal: "Chicken",
    origin: raca.origem,
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Produção de ovos",
        value: raca.producaoMedia,
      },
      {
        "@type": "PropertyValue",
        name: "Peso médio",
        value: raca.pesoMedio,
      },
      {
        "@type": "PropertyValue",
        name: "Cor dos ovos",
        value: raca.corOvos,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Quantos ovos a raça ${raca.nome} produz por ano?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `A raça ${raca.nome} produz em média ${raca.producaoMedia}.`,
        },
      },
      {
        "@type": "Question",
        name: `Qual o peso médio da raça ${raca.nome}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `O peso médio da raça ${raca.nome} é de ${raca.pesoMedio}.`,
        },
      },
      {
        "@type": "Question",
        name: `Qual a cor dos ovos da raça ${raca.nome}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `A raça ${raca.nome} produz ovos de cor ${raca.corOvos}.`,
        },
      },
      {
        "@type": "Question",
        name: `De onde é originária a raça ${raca.nome}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `A raça ${raca.nome} tem origem em ${raca.origem}.`,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main>
        {/* Breadcrumb */}
        <div className="bg-card border-b border-border">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <Link
              href="/racas"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              Voltar para todas as raças
            </Link>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-card py-12 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-col gap-8 md:flex-row md:gap-12 lg:gap-16">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:flex-1">
                <Image
                  src={raca.imagem}
                  alt={`${raca.nome} - raça disponível no Criatório Nossa Senhora de Nazareth em Saquarema`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="flex flex-col justify-center gap-5 md:flex-1">
                <span
                  className={`w-fit rounded-full px-4 py-1 text-sm font-medium ${
                    categoryColors[raca.categoria] ??
                    "bg-secondary text-secondary-foreground"
                  }`}>
                  {raca.categoria}
                </span>

                <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
                  {raca.nome}
                </h1>

                <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                  {raca.descricaoCurta}
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                  <MessageCircle className="h-5 w-5" />
                  Consultar disponibilidade
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* História */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-4">
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              História e características
            </span>

            <h2 className="mt-3 font-serif text-2xl font-bold text-foreground md:text-3xl text-balance">
              Conheça a raça {raca.nome}
            </h2>

            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              {raca.historia
                .split(". ")
                .reduce<string[][]>((acc, sentence, i) => {
                  const paragraphIndex = Math.floor(i / 3);
                  if (!acc[paragraphIndex]) acc[paragraphIndex] = [];
                  acc[paragraphIndex].push(sentence);
                  return acc;
                }, [])
                .map((sentences, i) => (
                  <p key={i}>{sentences.join(". ")}</p>
                ))}
            </div>
          </div>
        </section>

        {/* Características */}
        <section className="bg-card py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-sm font-medium uppercase tracking-widest text-primary">
                Ficha técnica
              </span>

              <h2 className="mt-3 font-serif text-2xl font-bold text-foreground md:text-3xl text-balance">
                Características da {raca.nome}
              </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {characteristics.map((char) => (
                <div
                  key={char.key}
                  className="flex items-start gap-4 rounded-xl border border-border bg-background p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <char.icon className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {char.label}
                    </p>
                    <p className="mt-1 text-base font-semibold text-foreground">
                      {raca[char.key]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Indicação */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-4">
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              Indicação de uso
            </span>

            <h2 className="mt-3 font-serif text-2xl font-bold text-foreground md:text-3xl text-balance">
              Para quem a {raca.nome} é indicada
            </h2>

            <ul className="mt-8 flex flex-col gap-4">
              {raca.indicacao.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-lg border border-border bg-card p-4">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-base leading-relaxed text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
              Consultar disponibilidade da raça {raca.nome}
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
              Entre em contato pelo WhatsApp para saber sobre disponibilidade de
              ovos férteis, pintinhos e aves adultas desta raça.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-primary-foreground px-8 py-4 text-lg font-semibold text-primary transition-opacity hover:opacity-90">
              <MessageCircle className="h-6 w-6" />
              Consultar disponibilidade da raça {raca.nome}
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
