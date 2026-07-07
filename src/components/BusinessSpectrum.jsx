import { useState } from "react";
import { motion } from "framer-motion";
import { spectrum } from "../data/content";

/** Horizontal scale visualization: Small → Medium → Large, with hover reveal. */
export default function BusinessSpectrum() {
  const [active, setActive] = useState(null);

  return (
    <section id="spectrum" className="relative py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-semibold text-ink text-center tracking-tight"
        >
          {spectrum.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-inksoft max-w-2xl mx-auto mt-4 font-body"
        >
          {spectrum.description}
        </motion.p>

        <div className="mt-16 relative h-1.5 rounded-full bg-ink/5 hidden md:block">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-mint via-violet to-coral opacity-70" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {spectrum.segments.map((seg, i) => (
            <motion.div
              key={seg.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="glass rounded-3xl p-8 cursor-default relative overflow-hidden group shadow-card"
            >
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-25 blur-2xl transition-opacity group-hover:opacity-45"
                style={{ background: seg.color }}
              />
              <span
                className="inline-block text-xs font-ui font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-5"
                style={{ background: `${seg.color}1a`, color: seg.color }}
              >
                {seg.tier}
              </span>
              <h3 className="font-display text-2xl font-semibold text-ink mb-3">{seg.label}</h3>
              <ul className="text-inksoft text-sm space-y-1 mb-5 font-body">
                {seg.examples.map((ex) => (
                  <li key={ex}>• {ex}</li>
                ))}
              </ul>
              <motion.p
                initial={false}
                animate={{ opacity: active === i ? 1 : 0.65 }}
                className="text-sm font-body text-ink/80 border-t border-ink/8 pt-4"
              >
                {seg.solution}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
