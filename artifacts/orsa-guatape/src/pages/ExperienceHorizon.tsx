import { motion } from "framer-motion";
import { useState } from "react";
import { Headphones, Anchor, MapPin, Clock, Users, Star, Shield, ChevronRight } from "lucide-react";
import horizonImg from "@assets/horizon_1776437424436.jpeg";
import ReservationForm from "@/components/ReservationForm";
import { useT } from "@/i18n/useT";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" },
};

const highlightIcons = [
  <Clock className="w-5 h-5" />,
  <Users className="w-5 h-5" />,
  <Headphones className="w-5 h-5" />,
  <Anchor className="w-5 h-5" />,
  <MapPin className="w-5 h-5" />,
  <Shield className="w-5 h-5" />,
];

export default function ExperienceHorizon() {
  const [showForm, setShowForm] = useState(false);
  const t = useT();
  const h = t.horizon;

  return (
    <div className="bg-background text-foreground pt-20">
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[500px] overflow-hidden" data-testid="hero-horizon">
        <img src={horizonImg} alt="ORSA Horizon - Embalse de Guatapé" className="w-full h-full object-cover object-bottom" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="text-primary uppercase tracking-[0.4em] text-xs mb-4">{h.heroTag}</p>
            <h1 className="font-serif text-6xl md:text-8xl font-light text-white mb-4 leading-none">ORSA Horizon</h1>
            <p className="text-white/60 text-lg font-light max-w-xl">{h.heroSubtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* IMAGINE */}
      <section className="py-24 px-4" data-testid="section-imagine">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="text-center">
            <p className="text-primary text-2xl font-serif italic mb-8">{h.imagineTitle}</p>
            <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed mb-6">{h.imagineP1}</p>
            <p className="text-white/50 text-lg font-light italic">{h.imagineP2}</p>
          </motion.div>
          <motion.div {...fadeUp} className="mt-20">
            <div className="w-16 h-px bg-primary mx-auto mb-16" />
            <h2 className="font-serif text-4xl text-white text-center mb-6">{h.discoverTitle}</h2>
            <p className="text-white/60 text-center font-light text-lg max-w-2xl mx-auto">{h.discoverP}</p>
          </motion.div>
        </div>
      </section>

      {/* AUDIO GUIDE */}
      <section className="py-16 px-4 bg-card/40 border-y border-white/5" data-testid="section-audio">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="flex items-start gap-6">
            <div className="shrink-0 p-4 border border-primary/30 text-primary">
              <Headphones className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-3xl text-white mb-4">{h.audioTitle}</h3>
              <ul className="space-y-3 text-white/60 font-light">
                {h.audioItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <ChevronRight className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-24 px-4" data-testid="section-highlights">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-14 text-center">
            <h2 className="font-serif text-4xl text-white">{h.highlightsTitle}</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {h.highlights.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 border border-white/8 bg-card/30"
              >
                <span className="text-primary shrink-0">{highlightIcons[i]}</span>
                <span className="text-white/70 text-sm font-light">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="py-16 px-4 bg-card/30 border-y border-white/5" data-testid="section-tips">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <div className="flex items-center gap-3 mb-10">
              <Star className="w-5 h-5 text-primary" />
              <h2 className="font-serif text-3xl text-white">{h.tipsTitle}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {h.tips.map((tip, i) => (
                <div key={i} className="flex flex-col items-start gap-3 p-5 border border-white/5 bg-background/40">
                  <span className="font-serif text-4xl text-primary/30 font-light">{i + 1}</span>
                  <p className="text-white/60 text-sm font-light leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="py-24 px-4" data-testid="section-included">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-4xl text-white mb-12 text-center">{h.includedTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {h.included.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center gap-4 py-4 border-b border-white/5"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-white/70 font-light">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-24 px-4 bg-card/30 border-t border-white/5" data-testid="section-closing">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-primary font-serif text-2xl italic mb-6">{h.closingTag}</p>
            <p className="text-white/60 font-light text-lg mb-4">{h.closingP1}</p>
            <p className="text-white/40 font-light italic mb-16">{h.closingP2}</p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-3 px-12 py-5 bg-primary text-background hover:bg-primary/90 transition-all duration-300 uppercase tracking-widest text-sm font-bold"
              data-testid="button-reserve-horizon"
            >
              {h.reserveBtn}
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {showForm && (
        <ReservationForm experience="ORSA Horizon" onClose={() => setShowForm(false)} />
      )}
    </div>
  );
}
