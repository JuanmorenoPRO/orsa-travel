import { motion } from "framer-motion";
import { useState } from "react";
import { Zap, Shield, Users, Clock, MapPin, ChevronRight, Star } from "lucide-react";
import wakeboardImg from "@assets/experiecia_wakeboard_1775523360538.jpeg";
import donaImg from "@assets/experiencia_dona_1775523360540.jpeg";
import ReservationForm from "@/components/ReservationForm";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" },
};

const highlights = [
  { icon: <Clock className="w-5 h-5" />, text: "Duración: 1.5 a 2 horas" },
  { icon: <Users className="w-5 h-5" />, text: "Hasta 6 personas" },
  { icon: <Zap className="w-5 h-5" />, text: "Wakeboard + Dona inflable" },
  { icon: <Shield className="w-5 h-5" />, text: "Instructor certificado" },
  { icon: <MapPin className="w-5 h-5" />, text: "Embalse de Guatapé" },
  { icon: <Shield className="w-5 h-5" />, text: "Póliza de seguro incluida" },
];

const wakeboardTips = [
  { num: "1", text: "Confía en el proceso. Nuestro equipo te guiará en cada paso." },
  { num: "2", text: "La clave no es la fuerza. Relájate y deja que la lancha haga el trabajo." },
  { num: "3", text: "La salida perfecta. Rodillas flexionadas, no te pares de inmediato." },
  { num: "4", text: "Encuentra tu flow. Equilibrio, control y fluidez." },
];

const donaTips = [
  { num: "1", text: "Sujétate bien. Agarra firme las manijas de la dona." },
  { num: "2", text: "Posición correcta. Cuerpo centrado y pies hacia adelante." },
  { num: "3", text: "Prepárate para la acción. Mantente firme mientras la lancha acelera." },
  { num: "4", text: "Disfruta la aventura. Vive la adrenalina al máximo." },
];

const keyTips = [
  "Mantén ambas manos sujetas en todo momento",
  "Flexiona ligeramente el cuerpo para absorber el impacto",
  "No luches contra la lancha... fluye con ella",
  "Si caes al agua, quédate tranquilo — el equipo te recoge",
];

const included = [
  "Sesión de wakeboard con instructor",
  "Sesión de dona inflable",
  "Equipos certificados de seguridad",
  "Chaleco salvavidas y casco",
  "Póliza de seguro por pasajero",
  "Hidratación a bordo",
  "Fotografías del momento",
];

export default function ExperienceAdrenaline() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-background text-foreground pt-20">
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[500px] overflow-hidden" data-testid="hero-adrenaline">
        <img
          src={wakeboardImg}
          alt="ORSA Adrenaline - Wakeboard"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-primary uppercase tracking-[0.4em] text-xs mb-4">Deportes acuáticos</p>
            <h1 className="font-serif text-6xl md:text-8xl font-light text-white mb-4 leading-none">
              ORSA Adrenaline
            </h1>
            <p className="text-white/60 text-lg font-light max-w-xl">
              Tu guía rápida para vivirlo al máximo
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-4" data-testid="section-intro">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed mb-6">
              Estás a punto de vivir una de las experiencias más emocionantes y liberadoras sobre el agua.
              Esto no es solo un paseo... es una descarga de adrenalina, risas y pura diversión.
            </p>
            <p className="text-white/40 font-light italic">
              Aquí no vienes a "intentarlo"... vienes a vivirlo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WAKEBOARD SECTION */}
      <section className="py-16 px-4 bg-card/40 border-y border-white/5" data-testid="section-wakeboard">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-primary" />
                <h2 className="font-serif text-4xl text-white">Wakeboard Experience</h2>
              </div>
              <p className="text-primary font-serif text-xl italic mb-6">Imagina esto...</p>
              <p className="text-white/60 font-light leading-relaxed mb-8">
                El sol reflejándose en el agua, una lancha de alto nivel deslizándose con precisión, 
                el sonido del motor marcando el ritmo... y tú, elevándote sobre el agua con estilo.
              </p>
              <p className="text-white/40 italic font-light text-sm">
                Aquí no vienes a "intentar"... vienes a vivirlo.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/3] overflow-hidden"
            >
              <img
                src={wakeboardImg}
                alt="Wakeboard en Guatapé"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </div>

          <motion.div {...fadeUp} className="mt-16">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-5 h-5 text-primary" />
              <h3 className="font-serif text-2xl text-white">Tips para el wakeboard</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {wakeboardTips.map((tip) => (
                <div key={tip.num} className="flex flex-col gap-3 p-6 border border-white/5 bg-background/40">
                  <span className="font-serif text-4xl text-primary/30 font-light">{tip.num}</span>
                  <p className="text-white/60 text-sm font-light leading-relaxed">{tip.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* DONA SECTION */}
      <section className="py-16 px-4" data-testid="section-dona">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/3] overflow-hidden order-2 lg:order-1"
            >
              <img
                src={donaImg}
                alt="Dona inflable en Guatapé"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div {...fadeUp} className="order-1 lg:order-2">
              <h2 className="font-serif text-4xl text-white mb-6">Dona Inflable</h2>
              <p className="text-primary font-serif text-xl italic mb-6">Imagina esto...</p>
              <p className="text-white/60 font-light leading-relaxed mb-6">
                La lancha acelera, el agua salta a tu alrededor, las curvas te sacan carcajadas... 
                y tú sosteniéndote mientras la emoción sube al máximo.
              </p>
              <p className="text-white/40 italic font-light text-sm">
                Aquí no vienes a estar tranquilo... vienes a reír, gritar y disfrutar al máximo.
              </p>
            </motion.div>
          </div>

          <motion.div {...fadeUp} className="mt-16">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-5 h-5 text-primary" />
              <h3 className="font-serif text-2xl text-white">Tips para la dona</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {donaTips.map((tip) => (
                <div key={tip.num} className="flex flex-col gap-3 p-6 border border-white/5 bg-background/40">
                  <span className="font-serif text-4xl text-primary/30 font-light">{tip.num}</span>
                  <p className="text-white/60 text-sm font-light leading-relaxed">{tip.text}</p>
                </div>
              ))}
            </div>
            <div className="p-6 border border-primary/20 bg-primary/5">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm uppercase tracking-wider font-medium">Tips clave de seguridad</span>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {keyTips.map((tip, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/60 text-sm font-light">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-16 px-4 bg-card/30 border-y border-white/5" data-testid="section-highlights">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <h2 className="font-serif text-4xl text-white">Detalles de la experiencia</h2>
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
      <section className="py-24 px-4 bg-card/30 border-t border-white/5" data-testid="section-cta">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-primary font-serif text-2xl italic mb-6">
              Más que wakeboard y dona... una experiencia ORSA
            </p>
            <p className="text-white/60 font-light text-lg mb-4">
              Risas, adrenalina, agua y momentos que vas a querer repetir.
            </p>
            <p className="text-white/40 font-light italic mb-16">
              Prepárate... esto se va a poner bueno
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-3 px-12 py-5 bg-primary text-background hover:bg-primary/90 transition-all duration-300 uppercase tracking-widest text-sm font-bold"
              data-testid="button-reserve-adrenaline"
            >
              Reservar experiencia
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {showForm && (
        <ReservationForm
          experience="ORSA Adrenaline"
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}
