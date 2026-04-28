import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573114493886?text=Hola%20ORSA%20👋%0AQuiero%20más%20información%20sobre%20sus%20experiencias%20🙌"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg shadow-black/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-medium group-hover:ml-2">
        Reserva tu experiencia
      </span>
    </a>
  );
}