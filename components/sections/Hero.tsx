import Image from "next/image";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5522974013244?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20disponibilidade%20de%20produtos.";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-20 md:flex-row md:gap-12 md:py-28 lg:py-32">
        <div className="flex flex-1 flex-col gap-6 text-center md:text-left">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Desde 2018 em Saquarema - RJ
          </span>
          <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Ovos Férteis e Galinhas Poedeiras em Saquarema – RJ
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
            Produção própria com qualidade genética e manejo responsável.
            Atendimento direto com o produtor para criadores e pequenos
            produtores rurais da região.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              Consultar disponibilidade
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-secondary">
              <MessageCircle className="h-5 w-5 text-primary" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
        <div className="relative flex-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/hero.jpeg"
              alt="Galinhas criadas ao ar livre no Criatório Nossa Senhora de Nazareth em Saquarema"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-3 -left-3 hidden rounded-xl bg-card px-5 py-3 shadow-lg md:block">
            <p className="font-serif text-2xl font-bold text-primary">
              +7 anos
            </p>
            <p className="text-sm text-muted-foreground">de produção local</p>
          </div>
        </div>
      </div>
    </section>
  );
}
