"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK =
  "https://wa.me/5522974013244?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20disponibilidade%20de%20produtos.";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[#fff] shadow-lg transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]">
      <MessageCircle className="h-7 w-7" />
      <span className="sr-only">Abrir conversa no WhatsApp</span>
    </a>
  );
}
