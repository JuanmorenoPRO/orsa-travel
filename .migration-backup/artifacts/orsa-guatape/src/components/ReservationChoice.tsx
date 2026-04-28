import { motion } from "framer-motion";
import { X, ClipboardList, MessageCircle } from "lucide-react";
import { useT } from "@/i18n/useT";

interface ReservationChoiceProps {
  experience?: string;
  onClose: () => void;
  onSelectForm: () => void;
}

export default function ReservationChoice({ experience, onClose, onSelectForm }: ReservationChoiceProps) {
  const t = useT();

  const handleWhatsApp = () => {
    const msg = t.form.waMessage(experience || "una experiencia ORSA");
    window.open(`https://wa.me/573114493886?text=${encodeURIComponent(msg)}`, "_blank");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" as const }}
        className="bg-card border border-white/10 p-8 w-full max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-8">
          <p className="text-primary text-xs uppercase tracking-[0.4em] mb-2">{t.form.reserveLabel}</p>
          <h2 className="font-serif text-2xl text-white leading-snug whitespace-pre-line">
            {t.form.howToContinue}
          </h2>
          <div className="w-10 h-px bg-primary mt-4" />
        </div>

        <div className="flex flex-col gap-4">
          {/* Option 1 — Form */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={onSelectForm}
            className="group w-full text-left flex items-start gap-4 p-5 border border-white/10 hover:border-white/25 bg-white/3 hover:bg-white/5 transition-all duration-200"
          >
            <div className="shrink-0 w-10 h-10 border border-white/15 flex items-center justify-center group-hover:border-white/30 transition-colors">
              <ClipboardList className="w-5 h-5 text-white/60 group-hover:text-white/80 transition-colors" />
            </div>
            <div>
              <p className="text-white font-medium text-sm tracking-wide mb-1">{t.form.preReserve}</p>
              <p className="text-white/45 text-xs font-light leading-relaxed">{t.form.preReserveDesc}</p>
              <span className="inline-block mt-3 text-white/50 text-xs uppercase tracking-widest group-hover:text-white/70 transition-colors">
                {t.form.fillForm}
              </span>
            </div>
          </motion.button>

          {/* Option 2 — WhatsApp (highlighted) */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={handleWhatsApp}
            className="group w-full text-left flex items-start gap-4 p-5 border border-primary/40 hover:border-primary/70 bg-primary/8 hover:bg-primary/12 transition-all duration-200 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <div className="shrink-0 w-10 h-10 border border-primary/30 flex items-center justify-center group-hover:border-primary/60 transition-colors">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-white font-medium text-sm tracking-wide">{t.form.talkAdvisor}</p>
                <span className="text-[10px] uppercase tracking-widest text-primary/80 border border-primary/30 px-1.5 py-0.5 leading-none">
                  {t.form.fast}
                </span>
              </div>
              <p className="text-white/50 text-xs font-light leading-relaxed">{t.form.talkAdvisorDesc}</p>
              <span className="inline-block mt-3 text-primary/70 text-xs uppercase tracking-widest group-hover:text-primary transition-colors">
                {t.form.goWhatsApp}
              </span>
            </div>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
