import { useRef, useEffect, useState, useCallback } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronDown, Play, Quote, ArrowRight, ChevronLeft, ChevronRight, Star,
  ShieldCheck, Headphones, Anchor, Lock, Handshake, Camera,
  Waves, Zap, Crown,
} from "lucide-react";
import heroVideo1 from "@assets/WhatsApp_Video_2026-04-16_at_23.44.23_1776433775028.mp4";
import heroVideo2 from "@assets/WhatsApp_Video_2026-04-16_at_23.45.23_1776433775028.mp4";
import midSectionVideo from "@assets/WhatsApp_Video_2026-04-17_at_15.13.50_1776456909834.mp4";
import horizonImg from "@assets/horizon_1776437424436.jpeg";
import adrenalineImg from "@assets/adrenaline_1776437387102.jpeg";
import signatureImg from "@assets/signature_1776437372219.jpeg";
import { useT } from "@/i18n/useT";
import { TestimonialsSection } from "@/components/TestimonialsSection";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

const stagger = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const heroVideos = [midSectionVideo, heroVideo2];

const featureIcons = [
  <ShieldCheck className="w-5 h-5" />,
  <Headphones className="w-5 h-5" />,
  <Anchor className="w-5 h-5" />,
  <Lock className="w-5 h-5" />,
  <Handshake className="w-5 h-5" />,
  <Camera className="w-5 h-5" />,
];

const expIcons = [
  <Waves className="w-5 h-5 text-primary" />,
  <Zap className="w-5 h-5 text-primary" />,
  <Crown className="w-5 h-5 text-primary" />,
];

const experienceIds = ["horizon", "adrenaline", "signature"];
const experienceImages = [horizonImg, adrenalineImg, signatureImg];
const tagColors = [
  "from-blue-500/20 to-blue-600/20",
  "from-orange-500/20 to-red-500/20",
  "from-yellow-500/20 to-amber-500/20",
];

export default function Home() {
  const t = useT();
  const heroRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [videoIdx, setVideoIdx] = useState(0);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const handleVideoEnd = useCallback(() => {
    setVideoIdx((i) => (i + 1) % heroVideos.length);
  }, []);

  useEffect(() => {
    [heroVideoRef].forEach((ref) => {
      const vid = ref.current;
      if (!vid) return;
      vid.load();
      vid.play().catch(() => {});
    });
  }, [videoIdx]);

  return (
    <div className="bg-background text-foreground">
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
        data-testid="section-hero"
      >
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <video
            ref={heroVideoRef}
            key={videoIdx}
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnd}
            className="w-full h-full object-cover"
            data-testid="hero-video"
          >
            <source src={heroVideos[videoIdx]} type="video/mp4" />
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
            {t.home.location}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl font-light text-white mb-6 leading-none"
          >
            {t.home.heroLine1}
            <br />
            <span className="italic text-gold-gradient">{t.home.heroLine2}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-white/70 text-lg md:text-xl font-light tracking-wide mb-10 max-w-2xl mx-auto"
          >
            {t.home.heroSubtitle}
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
              {t.home.exploreBtn}
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
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" as const }}
          >
            <ChevronDown className="w-6 h-6 text-white/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── WHY ORSA? ── */}
      <section className="py-32 px-4" data-testid="section-why">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div {...fadeUp} className="mb-20">
            <p className="text-primary uppercase tracking-[0.4em] text-xs mb-4">
              {t.home.whyTag}
            </p>
            <h2 className="font-serif text-6xl md:text-8xl font-light text-white leading-none">
              {t.home.whyTitle}
            </h2>
            <div className="w-20 h-px bg-primary mt-8" />
          </motion.div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* LEFT — feature timeline */}
            <motion.div {...fadeUp} className="space-y-0">
              {t.home.whyFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={stagger}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group flex gap-5 py-6 border-b border-white/6 hover:border-primary/20 transition-colors duration-300"
                >
                  {/* Timeline connector */}
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    <div className="w-10 h-10 border border-primary/30 group-hover:border-primary/60 flex items-center justify-center text-primary transition-colors duration-300">
                      {featureIcons[i]}
                    </div>
                    {i < t.home.whyFeatures.length - 1 && (
                      <div className="w-px flex-1 bg-white/5 group-hover:bg-primary/15 transition-colors min-h-[2rem]" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-4">
                    <h3 className="font-serif text-xl text-white mb-2 group-hover:text-primary/90 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/55 text-sm font-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* RIGHT — emotional value prop */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:sticky lg:top-28 space-y-8"
            >
              {/* Value proposition */}
              <div className="p-8 border border-white/8 bg-card/40 backdrop-blur-sm">
                <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed">
                  {t.home.whyValueProp}
                </p>
              </div>

              {/* Experience mini-list */}
              <div>
                <p className="text-primary/70 text-xs uppercase tracking-[0.4em] mb-5">
                  {t.home.whyExpLabel}
                </p>
                <div className="space-y-3">
                  {t.home.whyExps.map((exp, i) => (
                    <Link
                      key={i}
                      href={`/experiencia/${experienceIds[i]}`}
                      className="group flex items-center gap-4 p-4 border border-white/8 hover:border-primary/30 bg-background/30 hover:bg-primary/5 transition-all duration-300"
                    >
                      <div className="shrink-0">{expIcons[i]}</div>
                      <div>
                        <span className="font-serif text-white text-base group-hover:text-primary transition-colors">
                          ORSA {exp.name}
                        </span>
                        <p className="text-white/45 text-xs font-light mt-0.5">{exp.desc}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-primary ml-auto transition-all group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tagline */}
              <p className="font-serif text-xl text-primary/80 italic leading-relaxed">
                {t.home.whyTagline}
              </p>

              {/* CTA button */}
              <a
                href="#experiencias"
                className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-background hover:bg-primary/90 transition-all duration-300 uppercase tracking-widest text-sm font-bold group"
              >
                {t.home.whyCta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCES ── */}
      <section
        id="experiencias"
        className="py-32 px-4 bg-card/20 border-y border-white/5"
        data-testid="section-experiences"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-20">
            <p className="text-primary uppercase tracking-[0.4em] text-xs mb-4">{t.home.expTag}</p>
            <h2 className="font-serif text-5xl md:text-6xl font-light text-white mb-4">{t.home.expTitle}</h2>
            <p className="text-white/50 max-w-xl mx-auto font-light">{t.home.expSubtitle}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.home.experiences.map((exp, i) => (
              <motion.div
                key={experienceIds[i]}
                variants={stagger}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="group relative overflow-hidden border border-white/8 hover:border-primary/30 transition-all duration-500"
                data-testid={`card-experience-${experienceIds[i]}`}
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <img
                    src={experienceImages[i]}
                    alt={`ORSA ${experienceIds[i]}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className={`absolute top-4 left-4 px-3 py-1 text-xs uppercase tracking-wider font-medium bg-gradient-to-r ${tagColors[i]} border border-white/10 text-white backdrop-blur-sm`}>
                    {exp.tag}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary/80 text-xs uppercase tracking-widest mb-2">{exp.subtitle}</p>
                  <h3 className="font-serif text-2xl text-white mb-3">
                    ORSA {experienceIds[i].charAt(0).toUpperCase() + experienceIds[i].slice(1)}
                  </h3>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed font-light">{exp.description}</p>
                  <Link
                    href={`/experiencia/${experienceIds[i]}`}
                    className="inline-flex items-center gap-2 text-primary text-sm uppercase tracking-widest hover:gap-4 transition-all duration-300 font-medium"
                    data-testid={`button-experience-${experienceIds[i]}`}
                  >
                    {t.home.expCta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <section className="relative py-0 overflow-hidden" data-testid="section-video">
        <div className="relative h-[60vh] min-h-[400px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src={heroVideo1} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
            <motion.div {...fadeUp} className="text-center max-w-2xl px-4">
              <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mx-auto mb-8 hover:bg-primary/20 transition-colors cursor-pointer">
                <Play className="w-6 h-6 text-primary ml-1" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-white font-light mb-4">
                {t.home.videoTitle1}
                <br />
                <span className="italic text-gold-gradient">{t.home.videoTitle2}</span>
              </h2>
              <p className="text-white/60 font-light mb-10">{t.home.videoSubtitle}</p>
              <a
                href="https://wa.me/573114493886?text=Hola%20ORSA%20👋%0AQuiero%20más%20información%20sobre%20sus%20experiencias%20🙌"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-background hover:bg-primary/90 transition-all duration-300 uppercase tracking-widest text-sm font-bold group"
              >
                {t.home.ctaBtn}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <TestimonialsSection />

      {/* ── ALLIES ── */}
      <section className="py-16 px-4 bg-card/30 border-y border-white/5" data-testid="section-allies">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/30 uppercase tracking-[0.4em] text-xs mb-8">{t.home.alliesTag}</p>
          <div className="flex flex-wrap justify-center gap-8 text-white/40">
            {["MYLOS Hotel Boutique", "Gretel Chalets", "Peregrino Restobar", "Magmare", "Chiringuito Español", "Rodar Coffee"].map((ally) => (
              <span key={ally} className="text-sm uppercase tracking-wider hover:text-white/70 transition-colors cursor-default">
                {ally}
              </span>
            ))}
          </div>
          <p className="text-white/30 text-xs mt-6 font-light">{t.home.alliesDiscounts}</p>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-40 px-4 overflow-hidden" data-testid="section-cta">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/60 to-background" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-primary uppercase tracking-[0.4em] text-xs mb-6">{t.home.ctaTag}</p>
            <h2 className="font-serif text-5xl md:text-7xl font-light text-white mb-8 leading-tight">
              {t.home.ctaTitle1}
              <br />
              <span className="italic text-gold-gradient">{t.home.ctaTitle2}</span>
            </h2>
            <p className="text-white/60 mb-12 text-lg font-light max-w-xl mx-auto">{t.home.ctaSubtitle}</p>
            <a
              href="https://wa.me/573114493886?text=Hola%20ORSA%20👋%0AQuiero%20más%20información%20sobre%20sus%20experiencias%20🙌"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-12 py-5 bg-primary text-background hover:bg-primary/90 transition-all duration-300 uppercase tracking-widest text-sm font-bold"
              data-testid="button-final-cta"
            >
              {t.home.ctaBtn}
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
