import { motion } from "framer-motion";
import { useState } from "react";
import { Crown, Sparkles, Clock, Users, Star, Shield, ChevronRight, Anchor, Music, Utensils, Heart } from "lucide-react";
import signatureImg from "@assets/signature_1776437372219.jpeg";
import ReservationForm from "@/components/ReservationForm";
import { useT } from "@/i18n/useT";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" },
};

const pillarIcons = [
  <Crown className="w-7 h-7" />,
  <Music className="w-7 h-7" />,
  <Utensils className="w-7 h-7" />,
  <Heart className="w-7 h-7" />,
];

const highlightIcons = [
  <Clock className="w-5 h-5" />,
  <Users className="w-5 h-5" />,
  <Crown className="w-5 h-5" />,
  <Anchor className="w-5 h-5" />,
  <Star className="w-5 h-5" />,
  <Shield className="w-5 h-5" />,
];

export default function ExperienceSignature() {
  const [showForm, setShowForm] = useState(false);
  const t = useT();
  const s = t.signature;

  return (
    <div className="bg-background text-foreground pt-20">
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[500px] overflow-hidden" data-testid="hero-signature">
        <img src={signatureImg} alt="ORSA Signature" className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="text-center"
          >
            <Crown className="w-12 h-12 text-primary mx-auto mb-6" />
            <p className="text-primary uppercase tracking-[0.6em] text-xs mb-4">{s.heroTag}</p>
            <h1 className="font-serif text-6xl md:text-8xl font-light text-white leading-none">ORSA Signature</h1>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-white/50 font-light text-lg italic">{s.heroSubtitle}</p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-4" data-testid="section-intro">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-primary font-serif text-2xl italic mb-8">{s.imagineTitle}</p>
            <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed mb-6">{s.introP1}</p>
            <p className="text-white/50 font-light italic">{s.introP2}</p>
          </motion.div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-16 px-4 bg-card/40 border-y border-white/5" data-testid="section-pillars">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="font-serif text-4xl text-white">{s.pillarsTitle}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {s.pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="flex gap-5 p-7 border border-white/8 bg-background/40 hover:border-primary/30 transition-all duration-400"
              >
                <div className="text-primary shrink-0 mt-1">{pillarIcons[i]}</div>
                <div>
                  <h3 className="font-serif text-xl text-white mb-3">{p.title}</h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OCCASIONS */}
      <section className="py-24 px-4" data-testid="section-occasions">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-primary uppercase tracking-[0.4em] text-xs mb-4">{s.occasionsTag}</p>
            <h2 className="font-serif text-4xl text-white mb-6">{s.occasionsTitle}</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {s.occasions.map((occasion, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-5 border border-white/8 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 text-center"
              >
                <Sparkles className="w-4 h-4 text-primary/60 mx-auto mb-3" />
                <p className="text-white/60 text-sm font-light leading-relaxed">{occasion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-16 px-4 bg-card/30 border-y border-white/5" data-testid="section-highlights">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <h2 className="font-serif text-4xl text-white">{s.highlightsTitle}</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {s.highlights.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 border border-white/8 bg-background/40"
              >
                <span className="text-primary shrink-0">{highlightIcons[i]}</span>
                <span className="text-white/70 text-sm font-light">{text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="py-24 px-4" data-testid="section-included">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-4xl text-white mb-12 text-center">{s.includedTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {s.included.map((item, i) => (
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

      {/* CLOSING CTA */}
      <section className="py-32 px-4 bg-gradient-to-b from-card/40 to-background border-t border-white/5" data-testid="section-cta">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <Crown className="w-10 h-10 text-primary mx-auto mb-8" />
            <p className="text-primary font-serif text-2xl italic mb-6">{s.closingTag}</p>
            <p className="text-white/60 font-light text-lg mb-4">{s.closingP1}</p>
            <p className="text-white/40 font-light italic mb-16">{s.closingP2}</p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-3 px-12 py-5 bg-primary text-background hover:bg-primary/90 transition-all duration-300 uppercase tracking-widest text-sm font-bold"
              data-testid="button-reserve-signature"
            >
              {s.reserveBtn}
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {showForm && (
        <ReservationForm experience="ORSA Signature" onClose={() => setShowForm(false)} />
      )}
    </div>
  );
}
