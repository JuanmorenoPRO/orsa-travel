import { useRef, useEffect } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Shield, Star, Crown, Play, Quote, ArrowRight } from "lucide-react";
import heroVideo from "@assets/video1_1775523574157.mp4";
import embalseImg from "@assets/experiencia_embalse_1775523360540.jpeg";
import wakeboardImg from "@assets/experiecia_wakeboard_1775523360538.jpeg";
import donaImg from "@assets/experiencia_dona_1775523360540.jpeg";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" },
};

const stagger = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const experiences = [
  {
    id: "horizon",
    title: "ORSA Horizon",
    subtitle: "Travesía panorámica",
    description:
      "Deslízate sobre el agua mientras el embalse te revela sus secretos. Una guía de audio bilingüe te lleva por paisajes, historia y rincones que pocos conocen.",
    image: embalseImg,
    tag: "Recorrido Premium",
    tagColor: "from-blue-500/20 to-blue-600/20",
  },
  {
    id: "adrenaline",
    title: "ORSA Adrenaline",
    subtitle: "Deportes acuáticos",
    description:
      "Wakeboard, dona inflable y velocidad pura sobre el agua. Para quienes quieren gritar, reír y volver a pedirlo. Pura adrenalina en su máxima expresión.",
    image: wakeboardImg,
    tag: "Máxima Emoción",
    tagColor: "from-orange-500/20 to-red-500/20",
  },
  {
    id: "signature",
    title: "ORSA Signature",
    subtitle: "Experiencia a tu medida",
    description:
      "Una experiencia diseñada exclusivamente para ti. Cada detalle refleja tus gustos y tu forma de vivir. El lujo de decirle al mundo cómo quieres disfrutar.",
    image: embalseImg,
    tag: "Ultra Exclusivo",
    tagColor: "from-yellow-500/20 to-amber-500/20",
  },
];

const values = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Seguridad",
    description:
      "En ORSA la seguridad es nuestra prioridad. Cada recorrido se realiza bajo protocolos claros y con equipos adecuados, garantizando la protección y tranquilidad de nuestros clientes.",
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Experiencia",
    description:
      "Diseñamos cada recorrido para que nuestros clientes vivan experiencias únicas, memorables y llenas de emoción en el embalse de Guatapé.",
  },
  {
    icon: <Crown className="w-8 h-8" />,
    title: "Exclusividad",
    description:
      "Ofrecemos experiencias privadas y personalizadas, cuidando cada detalle para que nuestros clientes disfruten un servicio exclusivo y de alto nivel.",
  },
];

const testimonials = [
  {
    quote:
      "Fue el momento más especial de nuestro viaje a Colombia. El equipo de ORSA nos hizo sentir como en casa, pero con lujo absoluto sobre el agua.",
    author: "Sofía & Marco",
    role: "Pareja en luna de miel, Italia",
  },
  {
    quote:
      "Como tripulación de aerolínea tenemos muchas expectativas. ORSA superó todo. El recorrido Horizon con audio guiado fue increíble — historia y belleza en cada curva del embalse.",
    author: "Capitán Rodríguez",
    role: "Tripulación Copa Airlines",
  },
  {
    quote:
      "La dona inflable fue lo más divertido que hemos hecho en años. Nos fuimos diciendo: '¡otra vez, por favor!' Y volvimos al día siguiente.",
    author: "Equipo Bancolombia",
    role: "Integración empresarial, 14 personas",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
        data-testid="section-hero"
      >
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            data-testid="hero-video"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-primary uppercase text-sm tracking-[0.4em] mb-6 font-light"
          >
            Guatapé, Colombia
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl font-light text-white mb-6 leading-none"
          >
            Disfruta tu vida
            <br />
            <span className="italic text-gold-gradient">en el agua</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-white/70 text-lg md:text-xl font-light tracking-wide mb-10 max-w-2xl mx-auto"
          >
            Experiencias náuticas exclusivas en el embalse de Guatapé
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a
              href="#experiencias"
              className="inline-flex items-center gap-3 px-10 py-4 border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 uppercase tracking-widest text-sm font-semibold group"
              data-testid="button-explore-experiences"
            >
              Explorar experiencias
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-6 h-6 text-white/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="py-32 px-4" data-testid="section-about">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <p className="text-primary uppercase tracking-[0.4em] text-xs mb-6">
                Nuestra historia
              </p>
              <h2 className="font-serif text-5xl md:text-6xl font-light text-white mb-8 leading-tight">
                Nace en la familia.
                <br />
                <span className="italic text-white/60">Vive en el agua.</span>
              </h2>
              <div className="w-16 h-px bg-primary mb-8" />
              <p className="text-white/70 leading-relaxed mb-6 text-lg font-light">
                ORSA nace con el propósito de transformar el tradicional paseo
                en lancha en una experiencia náutica premium, privada y
                personalizada. Detrás de ORSA hay una historia que nace en la
                familia y su nombre honra a{" "}
                <span className="text-primary font-medium">
                  Óscar Ramírez Salas
                </span>
                , cuyo legado de vida inspira este proyecto.
              </p>
              <p className="text-white/60 leading-relaxed font-light">
                Queremos posicionarnos como la marca líder de experiencias
                exclusivas del embalse, enfocada en turistas nacionales e
                internacionales, tripulaciones de aerolíneas, parejas, grupos
                de amigos y celebraciones privadas que buscan vivir el destino
                de una forma diferente.
              </p>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={embalseImg}
                  alt="ORSA Guatapé en el embalse"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 glassmorphism p-6 max-w-xs">
                <p className="font-serif text-3xl text-primary font-light">
                  "Guatapé no solo se visita... se vive."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 px-4 bg-card/50 border-y border-white/5" data-testid="section-values">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.4em] text-xs mb-4">
              Lo que nos define
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-white">
              Nuestros valores
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                variants={stagger}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group p-10 border border-white/8 hover:border-primary/40 transition-all duration-500 bg-background/40 backdrop-blur-sm hover:bg-background/60"
                data-testid={`card-value-${value.title.toLowerCase()}`}
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <div className="w-8 h-px bg-primary mb-4" />
                <h3 className="font-serif text-2xl text-white mb-4 tracking-wide">
                  {value.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm font-light">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section
        id="experiencias"
        className="py-32 px-4"
        data-testid="section-experiences"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-20">
            <p className="text-primary uppercase tracking-[0.4em] text-xs mb-4">
              Elige tu aventura
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-white mb-4">
              Nuestras experiencias
            </h2>
            <p className="text-white/50 max-w-xl mx-auto font-light">
              Cada experiencia está diseñada para despertar algo en ti. Elige la
              tuya, o déjate sorprender por todas.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                variants={stagger}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group relative overflow-hidden border border-white/8 hover:border-primary/30 transition-all duration-500"
                data-testid={`card-experience-${exp.id}`}
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 text-xs uppercase tracking-wider font-medium bg-gradient-to-r ${exp.tagColor} border border-white/10 text-white backdrop-blur-sm`}
                  >
                    {exp.tag}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary/80 text-xs uppercase tracking-widest mb-2">
                    {exp.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl text-white mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed font-light">
                    {exp.description}
                  </p>
                  <Link
                    href={`/experiencia/${exp.id}`}
                    className="inline-flex items-center gap-2 text-primary text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300 font-medium"
                    data-testid={`button-experience-${exp.id}`}
                  >
                    Quiero vivir esta experiencia
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section
        className="relative py-0 overflow-hidden"
        data-testid="section-video"
      >
        <div className="relative h-[60vh] min-h-[400px]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
            <motion.div {...fadeUp} className="text-center max-w-2xl px-4">
              <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mx-auto mb-8 hover:bg-primary/20 transition-colors cursor-pointer">
                <Play className="w-6 h-6 text-primary ml-1" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-white font-light mb-4">
                Más que un paseo...
                <br />
                <span className="italic text-gold-gradient">
                  una experiencia ORSA
                </span>
              </h2>
              <p className="text-white/60 font-light">
                Cada momento sobre el agua está pensado para que te vayas con
                una sensación de paz, asombro y ganas de volver.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="py-32 px-4"
        data-testid="section-testimonials"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-20">
            <p className="text-primary uppercase tracking-[0.4em] text-xs mb-4">
              Lo dicen ellos
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-white">
              Experiencias reales
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={stagger}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="p-8 border border-white/8 bg-card/40 backdrop-blur-sm hover:border-primary/30 transition-all duration-500"
                data-testid={`card-testimonial-${i}`}
              >
                <Quote className="w-8 h-8 text-primary/40 mb-6" />
                <p className="text-white/80 leading-relaxed mb-8 font-light italic">
                  "{t.quote}"
                </p>
                <div className="border-t border-white/10 pt-6">
                  <p className="text-white font-medium text-sm">{t.author}</p>
                  <p className="text-primary/70 text-xs mt-1 uppercase tracking-wider">
                    {t.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ALLIES */}
      <section className="py-16 px-4 bg-card/30 border-y border-white/5" data-testid="section-allies">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/30 uppercase tracking-[0.4em] text-xs mb-8">
            Aliados estratégicos
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-white/40">
            {["MYLOS Hotel Boutique", "Gretel Chalets", "Peregrino Restobar", "Magmare", "Chiringuito Español"].map((ally) => (
              <span key={ally} className="text-sm uppercase tracking-wider hover:text-white/70 transition-colors cursor-default">
                {ally}
              </span>
            ))}
          </div>
          <p className="text-white/30 text-xs mt-6 font-light">
            Descuentos y beneficios exclusivos para clientes ORSA
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="relative py-40 px-4 overflow-hidden"
        data-testid="section-cta"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/60 to-background" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-primary uppercase tracking-[0.4em] text-xs mb-6">
              El momento es ahora
            </p>
            <h2 className="font-serif text-5xl md:text-7xl font-light text-white mb-8 leading-tight">
              ¿Listo para vivir
              <br />
              <span className="italic text-gold-gradient">tu experiencia?</span>
            </h2>
            <p className="text-white/60 mb-12 text-lg font-light max-w-xl mx-auto">
              Contáctanos por WhatsApp y diseñamos juntos el momento perfecto
              sobre el agua en Guatapé.
            </p>
            <a
              href="https://wa.me/573003545745?text=Hola%20ORSA%20👋%0AQuiero%20más%20información%20sobre%20sus%20experiencias%20🙌"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-5 bg-primary text-background hover:bg-primary/90 transition-all duration-300 uppercase tracking-widest text-sm font-bold"
              data-testid="button-final-cta"
            >
              Reservar mi experiencia
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
