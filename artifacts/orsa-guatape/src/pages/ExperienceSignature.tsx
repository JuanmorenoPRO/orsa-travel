import { motion } from "framer-motion";
import { useState } from "react";
import { Crown, Sparkles, Clock, Users, Star, Shield, ChevronRight, Anchor, Music, Utensils, Heart } from "lucide-react";
import embalseImg from "@assets/experiencia_embalse_1775523360540.jpeg";
import ReservationForm from "@/components/ReservationForm";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" },
};

const pillars = [
  {
    icon: <Crown className="w-7 h-7" />,
    title: "Completamente tuya",
    description: "Cada detalle de la experiencia se diseña según tus preferencias, ritmo y forma de vivir.",
  },
  {
    icon: <Music className="w-7 h-7" />,
    title: "Música a tu gusto",
    description: "Sistema de sonido premium a bordo. Tu playlist, tu ambiente.",
  },
  {
    icon: <Utensils className="w-7 h-7" />,
    title: "Hospitalidad premium",
    description: "Cava con hielo, snacks gourmet, bebidas seleccionadas. Un servicio que anticipa lo que necesitas.",
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: "Momentos inolvidables",
    description: "Cumpleaños, aniversarios, propuestas, o simplemente porque mereces lo mejor.",
  },
];

const highlights = [
  { icon: <Clock className="w-5 h-5" />, text: "Duración flexible — tú decides" },
  { icon: <Users className="w-5 h-5" />, text: "Privado y exclusivo" },
  { icon: <Crown className="w-5 h-5" />, text: "100% personalizable" },
  { icon: <Anchor className="w-5 h-5" />, text: "Muelle privado ORSA" },
  { icon: <Star className="w-5 h-5" />, text: "Conexión con aliados exclusivos" },
  { icon: <Shield className="w-5 h-5" />, text: "Póliza de seguro incluida" },
];

const included = [
  "Diseño personalizado de la experiencia",
  "Itinerario creado a tu medida",
  "Música personalizada a bordo",
  "Hospitalidad gourmet incluida",
  "Decoración temática (aniversarios, etc.)",
  "Póliza de seguro por pasajero",
  "Acceso a deportes acuáticos (opcional)",
  "Conexión con restaurantes y hoteles aliados",
  "Fotografías profesionales del evento",
];

export default function ExperienceSignature() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-background text-foreground pt-20">
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[500px] overflow-hidden" data-testid="hero-signature">
        <img
          src={embalseImg}
          alt="ORSA Signature - Experiencia exclusiva"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="text-center"
          >
            <Crown className="w-12 h-12 text-primary mx-auto mb-6" />
            <p className="text-primary uppercase tracking-[0.6em] text-xs mb-4">Lo más exclusivo</p>
            <h1 className="font-serif text-6xl md:text-8xl font-light text-white leading-none">
              ORSA Signature
            </h1>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <p className="text-white/50 font-light text-lg italic">
            Una experiencia creada exclusivamente para ti
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-4" data-testid="section-intro">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-primary font-serif text-2xl italic mb-8">Imagina esto...</p>
            <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed mb-6">
              No hay un recorrido estándar. No hay un horario fijo. No hay nada genérico.
              Hay una experiencia pensada, diseñada y ejecutada para ti, con cada detalle 
              reflejando tu forma de disfrutar.
            </p>
            <p className="text-white/50 font-light italic">
              Esto es ORSA Signature. Donde el lujo se define por la atención a lo que solo tú necesitas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-16 px-4 bg-card/40 border-y border-white/5" data-testid="section-pillars">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="font-serif text-4xl text-white">Los cuatro pilares de tu experiencia</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="flex gap-5 p-7 border border-white/8 bg-background/40 hover:border-primary/30 transition-all duration-400"
              >
                <div className="text-primary shrink-0 mt-1">{p.icon}</div>
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
            <p className="text-primary uppercase tracking-[0.4em] text-xs mb-4">Momentos especiales</p>
            <h2 className="font-serif text-4xl text-white mb-6">¿Cuál es tu ocasión?</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Cumpleaños",
              "Aniversario",
              "Propuesta de matrimonio",
              "Luna de miel",
              "Despedida de soltero/a",
              "Team building empresarial",
              "Celebración privada",
              "Solo porque quieres lo mejor",
            ].map((occasion, i) => (
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
            <h2 className="font-serif text-4xl text-white">Lo que necesitas saber</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 border border-white/8 bg-background/40"
              >
                <span className="text-primary shrink-0">{h.icon}</span>
                <span className="text-white/70 text-sm font-light">{h.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="py-24 px-4" data-testid="section-included">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-4xl text-white mb-12 text-center">¿Qué incluye?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {included.map((item, i) => (
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
            <p className="text-primary font-serif text-2xl italic mb-6">
              ORSA Signature — diseñada solo para ti
            </p>
            <p className="text-white/60 font-light text-lg mb-4">
              Cuéntanos tu momento y diseñamos juntos la experiencia perfecta.
            </p>
            <p className="text-white/40 font-light italic mb-16">
              "Esto fue increíble... y apenas estoy empezando."
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-3 px-12 py-5 bg-primary text-background hover:bg-primary/90 transition-all duration-300 uppercase tracking-widest text-sm font-bold"
              data-testid="button-reserve-signature"
            >
              Diseñar mi experiencia
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {showForm && (
        <ReservationForm
          experience="ORSA Signature"
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}
