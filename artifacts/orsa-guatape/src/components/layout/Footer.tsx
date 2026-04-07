import React from 'react';
import { Link } from 'wouter';
import { Instagram, Facebook } from 'lucide-react';
import logoImg from '@assets/logo_1775523360540.jpeg';

export function Footer() {
  return (
    <footer className="bg-[#050D20] text-white/80 py-16 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 inline-flex">
              <img src={logoImg} alt="ORSA Guatapé" className="h-12 w-auto object-contain opacity-90" />
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold tracking-wider text-white leading-none">ORSA</span>
                <span className="text-xs tracking-[0.3em] text-primary uppercase leading-none mt-1">Guatapé</span>
              </div>
            </Link>
            <p className="text-sm font-light max-w-sm leading-relaxed text-white/70 mb-6">
              Experiencias náuticas exclusivas en el embalse de Guatapé. Disfruta tu vida en el agua con la máxima seguridad, exclusividad y servicio premium.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-white/10 rounded-full hover:border-primary hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 border border-white/10 rounded-full hover:border-primary hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl text-white mb-6 tracking-wide">Experiencias</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/experiencia/horizon" className="text-sm hover:text-primary transition-colors">ORSA Horizon</Link>
              </li>
              <li>
                <Link href="/experiencia/adrenaline" className="text-sm hover:text-primary transition-colors">ORSA Adrenaline</Link>
              </li>
              <li>
                <Link href="/experiencia/signature" className="text-sm hover:text-primary transition-colors">ORSA Signature</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl text-white mb-6 tracking-wide">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col">
                <span className="text-white/50 text-xs mb-1 uppercase tracking-wider">WhatsApp</span>
                <a href="https://wa.me/573003545745" className="hover:text-primary transition-colors font-medium text-white">(300) 354 5745</a>
              </li>
              <li className="flex flex-col">
                <span className="text-white/50 text-xs mb-1 uppercase tracking-wider">Ubicación</span>
                <span>Embalse de Guatapé,<br/>Antioquia, Colombia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-white/40">
          <p>© {new Date().getFullYear()} ORSA Guatapé. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}