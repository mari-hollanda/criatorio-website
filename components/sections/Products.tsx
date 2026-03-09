import Image from "next/image";
import { ArrowRight } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5522974013244?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20disponibilidade%20de%20produtos.";

const products = [
  {
    title: "Ovos Férteis",
    slug: "ovos%20f%C3%A9rteis",
    description:
      "Trabalhamos com seleção criteriosa para oferecer produtos de excelente padrão morfológico.",
    image: "/images/ovos.jpeg",
    alt: "Ovos férteis selecionados do Criatório Nossa Senhora de Nazareth",
  },
  {
    title: "Pintinhos",
    slug: "pintinhos",
    description:
      "Pintinhos saudáveis, vermifugados e vacinados, prontos para criação. Diversas raças disponíveis conforme a demanda.",
    image: "/images/pintinhos.jpeg",
    alt: "Pintinhos saudáveis criados no Criatório em Saquarema",
  },
  {
    title: "Matrizes",
    slug: "matrizes",
    description:
      "Matrizes de qualidade genética comprovada para quem deseja iniciar ou melhorar seu plantel de reprodução.",
    image: "/images/matrizes.jpeg",
    alt: "Matrizes de alta qualidade genética disponíveis em Saquarema",
  },
];

export function Products() {
  return (
    <section id="produtos" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Nossos produtos
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Aves e ovos com qualidade genética
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Trabalhamos com seleção criteriosa para oferecer produtos de
            excelente padrão morfológico.
          </p>
        </div>
        <div className="mt-16 mx-auto grid max-w-5xl gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
          {products.map((product) => (
            <article
              key={product.title}
              className="group flex w-full max-w-sm flex-col overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {product.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
                <a
                  href={`${WHATSAPP_LINK}${product.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  aria-label={`Consultar ${product.title} via WhatsApp`}>
                  Consultar via WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
