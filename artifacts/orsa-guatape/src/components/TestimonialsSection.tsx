import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, Anchor, ArrowRight } from "lucide-react";
import embalseImg from "@assets/experiencia_embalse_1775523360540.jpeg";
import wakeboardImg from "@assets/experiecia_wakeboard_1775523360538.jpeg";
import clientPhoto1 from "@assets/WhatsApp_Image_2026-04-17_at_10.26.58_1776440436601.jpeg";
import clientPhoto2 from "@assets/WhatsApp_Image_2026-04-17_at_10.37.09_(1)_1776440449441.jpeg";
import clientPhoto3 from "@assets/WhatsApp_Image_2026-04-17_at_10.37.09_1776440459402.jpeg";
import { useT } from "@/i18n/useT";

const bgImages = [embalseImg, wakeboardImg, embalseImg];

const photoStrip = [clientPhoto1, clientPhoto2, clientPhoto3, clientPhoto1, clientPhoto2, clientPhoto3];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

export function TestimonialsSection() {
  const t = useT();
  const testimonials = t.home.testimonials as Array<{
    quote: string; detail: string; author: string;
    role: string; context: string; initials: string;
  }>;
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const go = useCallback((next: number) => {
    setFading(true);
    setTimeout(() => {
      setActive((next + testimonials.length) % testimonials.length);
      setFading(false);
    }, 280);
  }, [testimonials.length]);

  useEffect(() => {
    const id = setInterval(() => go(active + 1), 7000);
    return () => clearInterval(id);
  }, [active, go]);

  const current = testimonials[active];

  return (
    <section data-testid="section-testimonials" className="overflow-hidden">
      {/* ── BANNER STRIP ── */}
      <div className="relative w-full py-14 px-6 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A1A3D 0%, #112650 40%, #7B5C12 100%)" }}
      >
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
        />
        <motion.div {...fadeUp} className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4 text-amber-400/60">
            <div className="h-px w-10 bg-amber-400/40" />
            <Anchor className="w-4 h-4" />
            <div className="h-px w-10 bg-amber-400/40" />
          </div>
          <h2 className="font-serif text-2xl md:text-4xl font-light text-white leading-snug mb-4">
            <span className="italic">"{t.home.testimBanner}"</span>
          </h2>
          <p className="text-white/55 text-sm md:text-base font-light tracking-wide">
            {t.home.testimBannerSub}
          </p>
        </motion.div>
      </div>

      {/* ── SECTION TITLE ── */}
      <motion.div {...fadeUp} className="py-16 px-6 text-center bg-background">
        <p className="text-primary/70 uppercase tracking-[0.45em] text-xs mb-4">{t.home.testimTag}</p>
        <h2 className="font-serif text-4xl md:text-6xl font-light text-white uppercase tracking-wide">
          {t.home.testimSectionTitle}
        </h2>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div className="h-px w-16 bg-white/10" />
          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          <div className="h-px w-16 bg-white/10" />
        </div>
      </motion.div>

      {/* ── ROLLING PHOTO STRIP ── */}
      <div className="relative bg-background pb-10 overflow-hidden">
        <div
          className="flex gap-3"
          style={{
            width: "max-content",
            animation: "orsa-scroll 22s linear infinite",
          }}
        >
          {photoStrip.map((src, i) => (
            <div
              key={i}
              className="relative shrink-0 w-52 h-72 md:w-64 md:h-80 overflow-hidden rounded-lg"
            >
              <img
                src={src}
                alt={`Experiencia ORSA ${(i % 3) + 1}`}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          ))}
        </div>
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
      </div>

      {/* ── MAIN TESTIMONIAL BLOCK ── */}
      <div className="relative min-h-[620px] md:min-h-[680px] flex flex-col md:flex-row items-stretch overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgImages[active]}
            alt="ORSA experience"
            className="w-full h-full object-cover transition-all duration-1000"
            style={{ opacity: fading ? 0 : 1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />
        </div>

        {/* LEFT — CTA overlay (desktop only) */}
        <div className="hidden md:flex flex-1 min-w-0 z-10 items-end p-12 lg:p-16 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xs"
          >
            <div className="w-10 h-px bg-primary mb-5" />
            <p className="font-serif text-3xl text-white font-light leading-snug mb-6">
              {t.home.ctaTitle1}
              <br />
              <span className="italic text-primary">{t.home.ctaTitle2}</span>
            </p>
            <a
              href="https://wa.me/573114493886?text=Hola%20ORSA%20👋%0AQuiero%20más%20información%20sobre%20sus%20experiencias%20🙌"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-background hover:bg-primary/90 transition-all duration-300 uppercase tracking-widest text-xs font-bold group"
            >
              {t.home.ctaBtn}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT — glassmorphism card */}
        <div className="relative z-10 flex items-center justify-center md:justify-end w-full md:w-[52%] lg:w-[46%] p-6 md:p-12 lg:p-16">
          <div
            className="w-full max-w-lg rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
            style={{
              background: "rgba(8, 18, 50, 0.78)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
            }}
          >
            <div className="p-8 md:p-10">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <div
                className="transition-all duration-300"
                style={{ opacity: fading ? 0 : 1, transform: fading ? "translateY(8px)" : "translateY(0)" }}
              >
                <p className="font-serif text-xl md:text-2xl text-white font-light leading-relaxed mb-5 italic">
                  "{current.quote}"
                </p>
                <p className="text-white/60 text-sm font-light leading-relaxed mb-8">
                  {current.detail}
                </p>
                <div className="w-12 h-px bg-primary/40 mb-6" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <span className="font-serif text-sm text-primary font-medium">{current.initials}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{current.author}</p>
                    <p className="text-primary/80 text-xs mt-0.5">{current.role}</p>
                    <p className="text-white/35 text-xs mt-0.5 font-light">{current.context}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-8 md:px-10 py-5 border-t border-white/8 flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => go(i)}
                    className={`transition-all duration-300 rounded-full ${
                      i === active
                        ? "w-6 h-2 bg-primary"
                        : "w-2 h-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Testimonio ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => go(active - 1)}
                  className="w-10 h-10 rounded-full border border-white/15 hover:border-primary/50 flex items-center justify-center text-white/50 hover:text-primary transition-all duration-200"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => go(active + 1)}
                  className="w-10 h-10 rounded-full border border-white/15 hover:border-primary/50 flex items-center justify-center text-white/50 hover:text-primary transition-all duration-200"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
