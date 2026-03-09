"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { racas } from "@/lib/racas";

const categoryColors: Record<string, string> = {
  Poedeira: "bg-primary/15 text-primary",
  Corte: "bg-accent/15 text-accent",
  "Duplo propósito": "bg-secondary text-secondary-foreground",
};

export function BreedsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("article")?.offsetWidth ?? 320;
    const gap = 24;
    const distance = cardWidth + gap;
    el.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  };

  return (
    <section id="racas" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Nosso plantel
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Racas disponiveis em nosso criatório
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Trabalhamos com racas selecionadas pela qualidade genética,
            rusticidade e adaptacao ao clima de Saquarema.
          </p>
        </div>

        {/* Carousel controls */}
        <div className="mt-10 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Rolar para a esquerda"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Rolar para a direita"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable area */}
        <div
          ref={scrollRef}
          className="mt-4 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "var(--border) transparent",
          }}>
          {racas.map((raca) => (
            <article
              key={raca.slug}
              className="group flex w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg md:w-[340px]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={raca.imagem}
                  alt={`${raca.nome} - raça disponível no Criatório Nossa Senhora de Nazareth`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="340px"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-center gap-3">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {raca.nome}
                  </h3>
                  <span
                    className={`shrink-0 rounded-full px-3 py-0.5 text-xs font-medium ${categoryColors[raca.categoria] ?? "bg-secondary text-secondary-foreground"}`}>
                    {raca.categoria}
                  </span>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {raca.descricaoCurta}
                </p>
                <Link
                  href={`/racas/${raca.slug}`}
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80">
                  Ver detalhes
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* See all link */}
        <div className="mt-10 text-center">
          <Link
            href="/racas"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-secondary">
            Ver todas as racas
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
