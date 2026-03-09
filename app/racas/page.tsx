import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { racas } from "@/lib/racas";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title:
    "Raças Disponíveis – Criatório Nossa Senhora de Nazareth em Saquarema RJ",
  description:
    "Conheça todas as raças de galinhas disponíveis no Criatório Nossa Senhora de Nazareth em Saquarema, Rio de Janeiro. Poedeiras, corte e duplo propósito com qualidade genética selecionada.",
  openGraph: {
    title:
      "Raças Disponíveis – Criatório Nossa Senhora de Nazareth em Saquarema RJ",
    description:
      "Conheça todas as raças de galinhas disponíveis no Criatório Nossa Senhora de Nazareth em Saquarema, Rio de Janeiro.",
    locale: "pt_BR",
    type: "website",
  },
};

const categoryColors: Record<string, string> = {
  Poedeira: "bg-primary/15 text-primary",
  Corte: "bg-accent/15 text-accent",
  "Duplo propósito": "bg-secondary text-secondary-foreground",
};

export default function RacasPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero intro */}
        <section className="bg-card py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
                {"Raças disponíveis no Criatório Nossa Senhora de Nazareth"}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {
                  "Nosso criatório em Saquarema, Rio de Janeiro, trabalha com raças criteriosamente selecionadas pela qualidade genética, rusticidade e adaptação ao clima da região litorânea fluminense. Cada raça presente em nosso plantel é escolhida para atender às necessidades de criadores e produtores rurais locais."
                }
              </p>
            </div>
          </div>
        </section>

        {/* Breeds grid */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {racas.map((raca) => (
                <Link
                  key={raca.slug}
                  href={`/racas/${raca.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={raca.imagem}
                      alt={`${raca.nome} - raça disponível no Criatório Nossa Senhora de Nazareth`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <div className="flex items-center gap-3">
                      <h2 className="font-serif text-xl font-semibold text-foreground">
                        {raca.nome}
                      </h2>
                      <span
                        className={`shrink-0 rounded-full px-3 py-0.5 text-xs font-medium ${categoryColors[raca.categoria] ?? "bg-secondary text-secondary-foreground"}`}>
                        {raca.categoria}
                      </span>
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                      {raca.descricaoCurta}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-primary/80">
                      Ver detalhes
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
