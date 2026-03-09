import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5522974013244?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20disponibilidade%20de%20produtos.";

export function CTA() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl text-balance">
          Consulte disponibilidade e valores
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
          Entre em contato diretamente pelo WhatsApp. Respondemos rapidamente e
          tiramos todas as suas dúvidas sobre nossos produtos.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-3 rounded-xl bg-primary-foreground px-8 py-4 text-lg font-semibold text-primary transition-opacity hover:opacity-90">
          <MessageCircle className="h-6 w-6" aria-hidden="true" />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
