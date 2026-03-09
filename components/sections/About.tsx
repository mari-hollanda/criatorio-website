import { Leaf, Users, ShieldCheck, MapPin } from "lucide-react";

const highlights = [
  {
    icon: Leaf,
    title: "Produção desde 2018",
    text: "Mais de oito anos de experiência em criação avícola com foco em qualidade genética.",
  },
  {
    icon: MapPin,
    title: "Operação local",
    text: "Localizado em Saquarema – RJ, atendemos produtores e criadores do Brasil.",
  },
  {
    icon: ShieldCheck,
    title: "Manejo responsável",
    text: "Práticas de manejo que priorizam o bem-estar das aves e a sanidade do plantel.",
  },
  {
    icon: Users,
    title: "Contato direto",
    text: "Atendimento personalizado direto com o produtor, sem intermediários.",
  },
];

export function About() {
  return (
    <section id="sobre" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            Sobre nós
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Tradição e compromisso com a qualidade
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            O Criatório Nossa Senhora de Nazareth é uma propriedade familiar
            dedicada à produção avícola em Saquarema, Rio de Janeiro. Desde
            2018, trabalhamos com seriedade para oferecer aves e ovos férteis de
            excelente padrão genético aos criadores e produtores rurais.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="flex flex-col items-center gap-4 rounded-xl border border-border bg-background p-6 text-center transition-shadow hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <item.icon
                  className="h-6 w-6 text-primary"
                  aria-hidden="true"
                />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
