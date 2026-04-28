import { motion } from "framer-motion";
import { Shield, Clock, Users, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { useT } from "@/i18n/useT";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

export default function Policies() {
  const t = useT();
  const p = t.policies;

  return (
    <div className="bg-background text-foreground pt-20 pb-32">

      {/* HERO BANNER */}
      <div
        className="relative py-24 px-6 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A1A3D 0%, #112650 60%, #1a2e5a 100%)" }}
      >
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-10 bg-primary/50" />
              <Shield className="w-5 h-5 text-primary" />
              <div className="h-px w-10 bg-primary/50" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-light text-white mb-4 leading-tight">
              {p.heroTitle}
              <br />
              <span className="italic text-white/60">{p.heroSub}</span>
            </h1>
            <p className="text-white/50 text-base font-light">{p.heroDesc}</p>
          </motion.div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 mt-16 space-y-12">

        {/* RESERVATIONS */}
        <motion.section {...fadeUp} className="border border-white/8 p-8 md:p-10 bg-card/30">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-serif text-2xl text-white font-light tracking-wide">{p.reservTitle}</h2>
          </div>
          <div className="w-10 h-px bg-primary/40 mb-6" />
          <ul className="space-y-4">
            {(p.reservItems as string[]).map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white/65 text-sm leading-relaxed font-light">
                <CheckCircle className="w-4 h-4 text-primary/60 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* CANCELLATIONS */}
        <motion.section {...fadeUp} className="border border-white/8 p-8 md:p-10 bg-card/30">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
              <XCircle className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-serif text-2xl text-white font-light tracking-wide">{p.cancelTitle}</h2>
          </div>
          <div className="w-10 h-px bg-primary/40 mb-6" />
          <ul className="space-y-4">
            {(p.cancelItems as string[]).map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white/65 text-sm leading-relaxed font-light">
                <CheckCircle className="w-4 h-4 text-primary/60 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* CONDUCT */}
        <motion.section {...fadeUp} className="border border-white/8 p-8 md:p-10 bg-card/30">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-serif text-2xl text-white font-light tracking-wide">{p.conductTitle}</h2>
          </div>
          <div className="w-10 h-px bg-primary/40 mb-6" />
          <ul className="space-y-4">
            {(p.conductItems as string[]).map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white/65 text-sm leading-relaxed font-light">
                <CheckCircle className="w-4 h-4 text-primary/60 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* SAFETY */}
        <motion.section {...fadeUp} className="border border-primary/20 p-8 md:p-10 bg-primary/5">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-serif text-2xl text-white font-light tracking-wide">{p.safetyTitle}</h2>
          </div>
          <div className="w-10 h-px bg-primary/40 mb-6" />
          <ul className="space-y-4">
            {(p.safetyItems as string[]).map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white/65 text-sm leading-relaxed font-light">
                <CheckCircle className="w-4 h-4 text-primary/80 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* FOOTER NOTE */}
        <motion.p {...fadeUp} className="text-white/30 text-xs text-center font-light leading-relaxed pt-4 border-t border-white/5">
          {p.footerNote}
        </motion.p>
      </div>
    </div>
  );
}
