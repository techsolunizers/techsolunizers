import { motion } from "framer-motion";
import { stats } from "../data/content";
import AnimatedCounter from "./AnimatedCounter";

/** Stat cards with numbers that count up when scrolled into view. */
export default function Stats() {
  return (
    <section className="relative py-24 bg-ink">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-semibold text-cream text-center mb-16 tracking-tight"
        >
          {stats.heading}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.items.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl p-6 text-center bg-white/5 border border-white/10"
            >
              <p className="font-display text-3xl sm:text-4xl font-semibold text-gradient">
                <AnimatedCounter value={s.value} suffix={s.suffix} decimals={s.value % 1 !== 0 ? 1 : 0} />
              </p>
              <p className="text-xs sm:text-sm text-cream/70 font-body mt-2">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
