import { Link } from 'wouter';
import { Instagram, MapPin, Phone, ArrowRight } from 'lucide-react';
import logoImg from '@assets/logo_1775523360540.jpeg';
import { useT } from '@/i18n/useT';
import pub1 from '@assets/pub1_1776451912635.png';
import pub2 from '@assets/pub2_1776451912635.png';
import pub3 from '@assets/pub3_1776451912636.png';
import pub4 from '@assets/pub4_1776451912637.png';
import pub5 from '@assets/pub5_1776451912637.png';
import pub6 from '@assets/pub6_1776451912637.png';

const igPosts = [
  { img: pub1, url: 'https://www.instagram.com/p/DXMbKTokiYW/' },
  { img: pub2, url: 'https://www.instagram.com/p/DXK6DT0Eb5i/' },
  { img: pub3, url: 'https://www.instagram.com/p/DXKbuH3mnKU/?img_index=1' },
  { img: pub4, url: 'https://www.instagram.com/p/DXFfm5qgTqh/?img_index=1' },
  { img: pub5, url: 'https://www.instagram.com/p/DW9znH5gTZU/' },
  { img: pub6, url: 'https://www.instagram.com/p/DW7PxxtARcj/?img_index=1' },
];

export function Footer() {
  const t = useT();
  const f = t.footer;

  return (
    <footer className="bg-[#050D20] text-white border-t border-white/5">

      {/* ── MAIN GRID ── */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          {/* COL 1 — Instagram */}
          <div>
            {/* Profile header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/40 shrink-0">
                <img src={logoImg} alt="ORSA" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm tracking-wide">{f.igHandle}</p>
                <p className="text-white/45 text-xs font-light mt-0.5 max-w-[180px] leading-snug">{f.igBio}</p>
              </div>
            </div>

            {/* 3×2 photo grid */}
            <div className="grid grid-cols-3 gap-1 mb-4">
              {igPosts.map((post, i) => (
                <a
                  key={i}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden"
                >
                  <img
                    src={post.img}
                    alt={`ORSA Guatapé publicación ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </a>
              ))}
            </div>

            {/* Follow button */}
            <a
              href="https://www.instagram.com/orsa_travel?igsh=NmVzMmNobnFvc21k"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-full justify-center py-2.5 border border-white/15 hover:border-primary/50 text-white/70 hover:text-white text-xs uppercase tracking-widest transition-all duration-300"
            >
              <Instagram className="w-3.5 h-3.5" />
              {f.igFollow}
            </a>
          </div>

          {/* COL 2 — Contact + Experiences */}
          <div className="space-y-10">
            <div>
              <h4 className="font-serif text-lg text-white mb-5 tracking-wide border-b border-white/8 pb-3">{f.contact}</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{f.whatsapp}</p>
                    <a
                      href="https://wa.me/573114493886"
                      className="text-white hover:text-primary transition-colors font-medium"
                    >
                      +57 311 449 3886
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{f.location}</p>
                    <span className="text-white/70 whitespace-pre-line leading-relaxed">{f.locationValue}</span>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg text-white mb-5 tracking-wide border-b border-white/8 pb-3">{f.experiences}</h4>
              <ul className="space-y-3">
                {[
                  { label: 'ORSA Horizon', path: '/experiencia/horizon' },
                  { label: 'ORSA Adrenaline', path: '/experiencia/adrenaline' },
                  { label: 'ORSA Signature', path: '/experiencia/signature' },
                ].map((exp) => (
                  <li key={exp.path}>
                    <Link
                      href={exp.path}
                      className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-primary transition-colors"
                    >
                      <span className="w-3 h-px bg-white/20 group-hover:bg-primary group-hover:w-5 transition-all duration-300" />
                      {exp.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* COL 3 — Reserve CTA */}
          <div className="flex flex-col">
            <div className="p-8 border border-white/8 bg-white/[0.02] flex-1 flex flex-col justify-between">
              <div>
                <div className="w-8 h-px bg-primary mb-6" />
                <h3 className="font-serif text-3xl text-white font-light leading-snug mb-4">
                  {f.ctaHeadline}
                </h3>
                <p className="text-white/55 text-sm font-light leading-relaxed mb-8">
                  {f.ctaSub}
                </p>
              </div>
              <a
                href="https://wa.me/573114493886?text=Hola%20ORSA%20👋%0AQuiero%20más%20información%20sobre%20sus%20experiencias%20🙌"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full py-4 bg-primary text-background hover:bg-primary/90 transition-all duration-300 uppercase tracking-widest text-sm font-bold group"
              >
                {f.ctaBtn}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Logo below CTA on desktop */}
            <Link href="/" className="inline-flex items-center gap-3 mt-8">
              <img src={logoImg} alt="ORSA Guatapé" className="h-10 w-auto object-contain opacity-80" />
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-white leading-none">ORSA</span>
                <span className="text-xs tracking-[0.3em] text-primary uppercase leading-none mt-1">Guatapé</span>
              </div>
            </Link>
            <p className="text-white/40 text-xs font-light mt-3 leading-relaxed max-w-xs">
              {f.description}
            </p>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">{f.rights}</p>
          <div className="flex items-center gap-5 text-xs text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">{f.privacy}</a>
            <span className="text-white/10">·</span>
            <a href="#" className="hover:text-white/60 transition-colors">{f.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
