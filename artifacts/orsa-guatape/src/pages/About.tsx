import { motion } from "framer-motion";
import { Shield, Star, Crown } from "lucide-react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import embalseImg from "@assets/experiencia_embalse_1775523360540.jpeg";
import boatDockImg from "@assets/WhatsApp_Image_2026-04-17_at_10.26.59_1776441761484.jpeg";
import boatActionImg from "@assets/WhatsApp_Image_2026-04-17_at_08.10.43_1776441770135.jpeg";
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
      <section className="relative h-[65vh] min-h-[460px] overflow-hidden">
        <img
          src={boatActionImg}
          alt="ORSA Guatapé"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 65%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white text-center leading-tight px-4"
          >
            {a.heroHeading}{" "}
            <span className="italic text-white/60">{a.heroHeadingItalic}</span>
          </motion.h1>
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
              <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
                <img
                  src={boatDockImg}
                  alt="Lancha ORSA en el muelle"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 40%" }}
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

      {/* PHOTO GALLERY */}
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-sm group"
            style={{ height: 520 }}
          >
            <img
              src={boatDockImg}
              alt="Lancha ORSA en el muelle de Guatapé"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: "center center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Nuestra flota</p>
              <p className="font-serif text-white text-2xl font-light">ORSA en el muelle</p>
            </div>
          </motion.div>
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
