import { Check } from "lucide-react";

const differentials = [
  "Produção própria desde 2018",
  "Atendimento direto com o produtor",
  "Manejo responsável e cuidado com o bem-estar animal",
  "Foco em qualidade genética das aves",
  "Venda local no Rio de Janeiro e Sedex Aéreo para todo o Brasil",
];

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16">
          <div className="flex-1">
            <span className="text-sm font-medium uppercase tracking-widest text-primary">
              Nossos diferenciais
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Por que escolher o Criatório Nossa Senhora de Nazareth
            </h2>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Nossa dedicação vai além da produção. Cada ave é criada com
              atenção individualizada, garantindo saúde, qualidade genética e a
              satisfação e garantia de 50% de fertilidade na aquisição de nossos
              produtos.
            </p>
          </div>
          <div className="flex-1">
            <ul className="flex flex-col gap-4" role="list">
              {differentials.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-lg border border-border bg-background p-4">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check
                      className="h-4 w-4 text-primary-foreground"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-base leading-relaxed text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
