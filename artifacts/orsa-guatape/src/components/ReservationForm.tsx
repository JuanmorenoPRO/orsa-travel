import { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Ingresa tu nombre"),
  phone: z.string().min(7, "Ingresa un teléfono válido"),
  people: z.string().min(1, "Cuántas personas?"),
  date: z.string().min(1, "Selecciona una fecha"),
  experience: z.string(),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

interface ReservationFormProps {
  experience: string;
  onClose: () => void;
}

export default function ReservationForm({ experience, onClose }: ReservationFormProps) {
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
    const notes = data.notes ? `\nNotas: ${data.notes}` : "";
    const msg = `Hola ORSA 👋\nQuiero vivir la experiencia ${data.experience}\nNombre: ${data.name}\nPersonas: ${data.people}\nFecha: ${data.date}${notes}\nQuiero más información 🙌`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/573003545745?text=${encoded}`, "_blank");
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
          <p className="text-primary text-xs uppercase tracking-[0.4em] mb-2">Reservar</p>
          <h2 className="font-serif text-3xl text-white">{experience}</h2>
          <div className="w-10 h-px bg-primary mt-4" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" data-testid="form-reservation">
          <div>
            <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">
              Nombre completo
            </label>
            <input
              {...register("name")}
              className="w-full bg-background border border-white/10 focus:border-primary text-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-white/20"
              placeholder="Tu nombre"
              data-testid="input-name"
            />
            {errors.name && (
              <p className="text-destructive text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">
              Teléfono / WhatsApp
            </label>
            <input
              {...register("phone")}
              className="w-full bg-background border border-white/10 focus:border-primary text-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-white/20"
              placeholder="+57 300 000 0000"
              data-testid="input-phone"
            />
            {errors.phone && (
              <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">
              Número de personas
            </label>
            <select
              {...register("people")}
              className="w-full bg-background border border-white/10 focus:border-primary text-white px-4 py-3 text-sm outline-none transition-colors"
              data-testid="select-people"
            >
              <option value="">Selecciona...</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "persona" : "personas"}
                </option>
              ))}
              <option value="9+">9 o más</option>
            </select>
            {errors.people && (
              <p className="text-destructive text-xs mt-1">{errors.people.message}</p>
            )}
          </div>

          <div>
            <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">
              Fecha deseada
            </label>
            <input
              {...register("date")}
              type="date"
              min={new Date().toISOString().split("T")[0]}
              className="w-full bg-background border border-white/10 focus:border-primary text-white px-4 py-3 text-sm outline-none transition-colors"
              data-testid="input-date"
            />
            {errors.date && (
              <p className="text-destructive text-xs mt-1">{errors.date.message}</p>
            )}
          </div>

          <div>
            <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">
              Experiencia
            </label>
            <input
              {...register("experience")}
              readOnly
              className="w-full bg-primary/10 border border-primary/20 text-primary/80 px-4 py-3 text-sm outline-none cursor-default"
              data-testid="input-experience"
            />
          </div>

          <div>
            <label className="text-white/50 text-xs uppercase tracking-wider block mb-2">
              Notas adicionales{" "}
              <span className="text-white/30 normal-case">(opcional)</span>
            </label>
            <textarea
              {...register("notes")}
              rows={3}
              className="w-full bg-background border border-white/10 focus:border-primary text-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-white/20 resize-none"
              placeholder="Cuéntanos algo especial sobre tu experiencia..."
              data-testid="textarea-notes"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-primary text-background font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-all duration-300 mt-2"
            data-testid="button-submit-reservation"
          >
            Enviar por WhatsApp
          </button>

          <p className="text-white/30 text-xs text-center font-light">
            Al continuar, serás redirigido a WhatsApp con tu información precargada.
          </p>
        </form>
      </motion.div>
    </div>
  );
}
