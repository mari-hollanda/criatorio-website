import { MapPin, Phone, Facebook, Instagram } from "lucide-react";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <p className="font-serif text-xl font-bold text-foreground">
              Criatório Nossa Senhora de Nazareth
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              Saquarema – RJ
            </div>
          </div>

          <nav aria-label="Links do rodapé" className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navegação
            </p>

            <a
              href="/#sobre"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Sobre
            </a>

            <a
              href="/#produtos"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Produtos
            </a>

            <a
              href="/#diferenciais"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Diferenciais
            </a>

            <a
              href="/racas"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Raças
            </a>
          </nav>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contato
            </p>

            <a
              href="https://wa.me/5522974013244?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20disponibilidade%20de%20produtos."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
              WhatsApp
            </a>

            <a
              href="https://www.facebook.com/SaquaremaNazareth"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Facebook do Criatório Nossa Senhora de Nazareth">
              <Facebook className="h-4 w-4 text-primary" aria-hidden="true" />
              Facebook
            </a>

            <a
              href="https://www.instagram.com/criatoriosaquarema/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Instagram do Criatório Nossa Senhora de Nazareth">
              <Instagram className="h-4 w-4 text-primary" aria-hidden="true" />
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            {`© ${currentYear} Criatório Nossa Senhora de Nazareth. Todos os direitos reservados.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
