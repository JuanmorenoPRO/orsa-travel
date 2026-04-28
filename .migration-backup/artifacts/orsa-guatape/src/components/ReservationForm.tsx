import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useT } from "@/i18n/useT";

const EXPERIENCES = [
  "ORSA Horizon",
  "ORSA Adrenaline",
  "ORSA Signature",
];

interface ReservationFormProps {
  experience?: string;
  selectExperience?: boolean;
  onClose: () => void;
}

export default function ReservationForm({ experience = "", selectExperience = false, onClose }: ReservationFormProps) {
  const t = useT();

  const schema = z.object({
    name: z.string().min(2, t.form.errors.name),
    phone: z.string().min(7, t.form.errors.phone),
    people: z.string().min(1, t.form.errors.people),
    date: z.string().min(1, t.form.errors.date),
    experience: z.string().min(1, t.form.errors.experience),
    notes: z.string().optional(),
  });

  type FormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { experience },
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const onSubmit = (data: FormValues) => {
    const notes = data.notes ? `\n${t.form.notes}: ${data.notes}` : "";
    const msg = `Hola ORSA 👋\nQuiero vivir la experiencia ${data.experience}\n${t.form.name}: ${data.name}\n${t.form.people}: ${data.people}\n${t.form.date}: ${data.date}${notes}\nQuiero más información 🙌`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/573114493886?text=${encoded}`, "_blank");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      data-testid="modal-reservation"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-card border border-white/10 p-8 w-full max-w-lg relative max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
          data-testid="button-close-form"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-8">
          <p className="text-primary text-xs uppercase tracking-[0.4em] mb-2">{t.form.reserveLabel}</p>
          <h2 className="font-serif text-3xl text-white">{experience || t.form.experiencePlaceholder}</h2>
          <div className="w-10 h-px bg-primary mt-4" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" data-testid="form-reservation">
          <div>
            <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">{t.form.name}</label>
            <input
              {...register("name")}
              className="w-full bg-background border border-white/10 focus:border-primary text-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-white/20"
              placeholder={t.form.namePlaceholder}
              data-testid="input-name"
            />
            {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">{t.form.phone}</label>
            <input
              {...register("phone")}
              className="w-full bg-background border border-white/10 focus:border-primary text-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-white/20"
              placeholder={t.form.phonePlaceholder}
              data-testid="input-phone"
            />
            {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">{t.form.people}</label>
            <select
              {...register("people")}
              className="w-full bg-background border border-white/10 focus:border-primary text-white px-4 py-3 text-sm outline-none transition-colors"
              data-testid="select-people"
            >
              <option value="">{t.form.peoplePlaceholder}</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? t.form.person : t.form.persons}
                </option>
              ))}
              <option value="9+">9+</option>
            </select>
            {errors.people && <p className="text-destructive text-xs mt-1">{errors.people.message}</p>}
          </div>

          <div>
            <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">{t.form.date}</label>
            <input
              {...register("date")}
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className="w-full bg-background border border-white/10 focus:border-primary text-white px-4 py-3 text-sm outline-none transition-colors"
              data-testid="input-date"
            />
            {errors.date && <p className="text-destructive text-xs mt-1">{errors.date.message}</p>}
          </div>

          <div>
            <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">{t.form.experience}</label>
            {selectExperience ? (
              <>
                <select
                  {...register("experience")}
                  className="w-full bg-background border border-white/10 focus:border-primary text-white px-4 py-3 text-sm outline-none transition-colors"
                  data-testid="select-experience"
                >
                  <option value="">{t.form.experiencePlaceholder}</option>
                  {EXPERIENCES.map((exp) => (
                    <option key={exp} value={exp}>{exp}</option>
                  ))}
                </select>
                {errors.experience && <p className="text-destructive text-xs mt-1">{errors.experience.message}</p>}
              </>
            ) : (
              <input
                {...register("experience")}
                readOnly
                className="w-full bg-primary/10 border border-primary/20 text-primary/80 px-4 py-3 text-sm outline-none cursor-default"
                data-testid="input-experience"
              />
            )}
          </div>

          <div>
            <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">
              {t.form.notes}{" "}
              <span className="text-white/30 normal-case">{t.form.notesOptional}</span>
            </label>
            <textarea
              {...register("notes")}
              rows={3}
              className="w-full bg-background border border-white/10 focus:border-primary text-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-white/20 resize-none"
              placeholder={t.form.notesPlaceholder}
              data-testid="textarea-notes"
            />
          </div>

          <div className="flex items-start gap-3 px-4 py-4 rounded-sm border border-primary/30 bg-primary/5">
            <div className="mt-0.5 shrink-0 w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-primary" />
            </div>
            <p className="text-white/75 text-sm font-light leading-relaxed">
              {t.form.trustMsg} <span className="text-primary font-medium">{t.form.trustBrand}</span> {t.form.trustMid}{" "}
              <span className="text-white/90">{t.form.trustEnd}</span>
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-primary text-background font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all duration-300"
            data-testid="button-submit-reservation"
          >
            {t.form.submit}
          </button>

          <p className="text-white/30 text-xs text-center font-light">{t.form.redirect}</p>
        </form>
      </motion.div>
    </div>
  );
}
