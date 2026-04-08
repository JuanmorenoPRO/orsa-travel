import { motion } from "framer-motion";
import { Shield, Star, Crown } from "lucide-react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import embalseImg from "@assets/experiencia_embalse_1775523360540.jpeg";
import { useT } from "@/i18n/useT";

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

const valueIcons = [
  <Shield className="w-8 h-8" />,
  <Star className="w-8 h-8" />,
  <Crown className="w-8 h-8" />,
];

export default function About() {
  const t = useT();
  const a = t.about;

  return (
    <div className="bg-background text-foreground pt-20">
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src={embalseImg}
          alt="ORSA Guatapé"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-primary uppercase tracking-[0.4em] text-xs mb-4">{a.heroTag}</p>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-white mb-3 leading-tight">
              {a.heroTitle1}
              <br />
              <span className="italic text-white/60">{a.heroTitle2}</span>
            </h1>
            <p className="text-white/50 text-lg font-light">{a.heroSubtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <p className="text-primary uppercase tracking-[0.4em] text-xs mb-6">{a.storyTag}</p>
              <h2 className="font-serif text-5xl md:text-6xl font-light text-white mb-8 leading-tight">
                {a.storyTitle1}
                <br />
                <span className="italic text-white/60">{a.storyTitle2}</span>
              </h2>
              <div className="w-16 h-px bg-primary mb-8" />
              <p className="text-white/70 leading-relaxed mb-6 text-lg font-light">
                {a.storyP1}{" "}
                <span className="text-primary font-medium">{a.storyName}</span>
                {a.storyP1end}
              </p>
              <p className="text-white/60 leading-relaxed font-light">{a.storyP2}</p>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={embalseImg}
                  alt="ORSA en el embalse"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 glassmorphism p-6 max-w-xs">
                <p className="font-serif text-3xl text-primary font-light">{a.storyQuote}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 px-4 bg-card/50 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.4em] text-xs mb-4">{a.valuesTag}</p>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-white">{a.valuesTitle}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {a.values.map((value, i) => (
              <motion.div
                key={i}
                variants={stagger}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group p-10 border border-white/8 hover:border-primary/40 transition-all duration-500 bg-background/40 backdrop-blur-sm hover:bg-background/60"
              >
                <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {valueIcons[i]}
                </div>
                <div className="w-8 h-px bg-primary mb-4" />
                <h3 className="font-serif text-2xl text-white mb-4 tracking-wide">{value.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm font-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
              {a.ctaTitle}
            </h2>
            <p className="text-white/60 mb-12 text-lg font-light">{a.ctaSubtitle}</p>
            <Link
              href="/#experiencias"
              className="inline-flex items-center gap-3 px-12 py-5 bg-primary text-background hover:bg-primary/90 transition-all duration-300 uppercase tracking-widest text-sm font-bold"
            >
              {a.ctaBtn}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
