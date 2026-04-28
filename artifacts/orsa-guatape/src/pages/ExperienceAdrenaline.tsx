import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Zap, Shield, Users, Clock, MapPin, ChevronRight, Star, Volume2, VolumeX } from "lucide-react";
import { useMusic } from "@/contexts/MusicContext";
import wakeboardImg from "@assets/wakeboard_1776435753649.jpeg";
import donaImg from "@assets/dona_1776435744374.jpeg";
import ReservationForm from "@/components/ReservationForm";
import { useT } from "@/i18n/useT";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" as const },
};

const highlightIcons = [
  <Clock className="w-5 h-5" />,
  <Users className="w-5 h-5" />,
  <Zap className="w-5 h-5" />,
  <Shield className="w-5 h-5" />,
  <MapPin className="w-5 h-5" />,
  <Shield className="w-5 h-5" />,
];

export default function ExperienceAdrenaline() {
  const [showForm, setShowForm] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const t = useT();
  const a = t.adrenaline;
  const { pause, resume } = useMusic();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    pause();
    return () => {
      resume();
    };
  }, [pause, resume]);

  useEffect(() => {
    const unmute = () => {
      const video = videoRef.current;
      if (!video) return;
      video.muted = false;
      setVideoMuted(false);
    };
    const events = ['click', 'scroll', 'touchstart', 'keydown'] as const;
    events.forEach((e) => document.addEventListener(e, unmute, { once: true }));
    return () => {
      events.forEach((e) => document.removeEventListener(e, unmute));
    };
  }, []);

  function toggleVideoMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setVideoMuted(video.muted);
  }

  return (
    <div className="bg-background text-foreground pt-20">
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[500px] overflow-hidden" data-testid="hero-adrenaline">
        <video
          ref={videoRef}
          src="/adrenaline.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 60%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        <button
          onClick={toggleVideoMute}
          aria-label={videoMuted ? 'Activar audio del video' : 'Silenciar video'}
          className="absolute top-6 right-6 bg-background/60 hover:bg-background/80 border border-white/20 text-white/80 hover:text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200"
        >
          {videoMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="text-primary uppercase tracking-[0.4em] text-xs mb-4">{a.heroTag}</p>
            <h1 className="font-serif text-6xl md:text-8xl font-light text-white mb-4 leading-none">ORSA Adrenaline</h1>
            <p className="text-white/60 text-lg font-light max-w-xl">{a.heroSubtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-4" data-testid="section-intro">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed mb-6">{a.introP1}</p>
            <p className="text-white/40 font-light italic">{a.introP2}</p>
          </motion.div>
        </div>
      </section>

      {/* WAKEBOARD */}
      <section className="py-16 px-4 bg-card/40 border-y border-white/5" data-testid="section-wakeboard">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-primary" />
                <h2 className="font-serif text-4xl text-white">Wakeboard Experience</h2>
              </div>
              <p className="text-primary font-serif text-xl italic mb-6">{a.wakeboardImagine}</p>
              <p className="text-white/60 font-light leading-relaxed mb-8">{a.wakeboardP}</p>
              <p className="text-white/40 italic font-light text-sm">{a.wakeboardP2}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/3] overflow-hidden"
            >
              <img src={wakeboardImg} alt="Wakeboard en Guatapé" className="w-full h-full object-cover object-bottom" />
            </motion.div>
          </div>
          <motion.div {...fadeUp} className="mt-16">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-5 h-5 text-primary" />
              <h3 className="font-serif text-2xl text-white">{a.wakeboardTipsTitle}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {a.wakeboardTips.map((tip, i) => (
                <div key={i} className="flex flex-col gap-3 p-6 border border-white/5 bg-background/40">
                  <span className="font-serif text-4xl text-primary/30 font-light">{i + 1}</span>
                  <p className="text-white/60 text-sm font-light leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* DONA */}
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
              <img src={donaImg} alt="Dona inflable en Guatapé" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div {...fadeUp} className="order-1 lg:order-2">
              <h2 className="font-serif text-4xl text-white mb-6">{a.donaTitle}</h2>
              <p className="text-primary font-serif text-xl italic mb-6">{a.donaImagine}</p>
              <p className="text-white/60 font-light leading-relaxed mb-6">{a.donaP}</p>
              <p className="text-white/40 italic font-light text-sm">{a.donaP2}</p>
            </motion.div>
          </div>
          <motion.div {...fadeUp} className="mt-16">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-5 h-5 text-primary" />
              <h3 className="font-serif text-2xl text-white">{a.donaTipsTitle}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {a.donaTips.map((tip, i) => (
                <div key={i} className="flex flex-col gap-3 p-6 border border-white/5 bg-background/40">
                  <span className="font-serif text-4xl text-primary/30 font-light">{i + 1}</span>
                  <p className="text-white/60 text-sm font-light leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
            <div className="p-6 border border-primary/20 bg-primary/5">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm uppercase tracking-wider font-medium">{a.safetyLabel}</span>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {a.keyTips.map((tip, i) => (
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
            <h2 className="font-serif text-4xl text-white">{a.highlightsTitle}</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {a.highlights.map((text, i) => (
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
            <h2 className="font-serif text-4xl text-white mb-12 text-center">{a.includedTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {a.included.map((item, i) => (
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
            <p className="text-primary font-serif text-2xl italic mb-6">{a.closingTag}</p>
            <p className="text-white/60 font-light text-lg mb-4">{a.closingP1}</p>
            <p className="text-white/40 font-light italic mb-16">{a.closingP2}</p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-3 px-12 py-5 bg-primary text-background hover:bg-primary/90 transition-all duration-300 uppercase tracking-widest text-sm font-bold"
              data-testid="button-reserve-adrenaline"
            >
              {a.reserveBtn}
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {showForm && (
        <ReservationForm experience="ORSA Adrenaline" onClose={() => setShowForm(false)} />
      )}
    </div>
  );
}
