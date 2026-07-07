import { motion } from "framer-motion";
import { about } from "../data/content";

export default function About() {
  return (
    <div className="bg-cream pt-32">
      {/* Intro */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-ui text-xs tracking-[0.2em] uppercase text-violetdeep mb-6"
        >
          {about.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl font-semibold text-ink tracking-tight leading-[1.05] max-w-4xl"
        >
          {about.heading}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-lg text-inksoft font-body max-w-2xl leading-relaxed"
        >
          {about.intro}
        </motion.p>
        <p className="mt-8 font-ui text-xs tracking-widest text-inksoft/50">{about.location}</p>
      </section>

      {/* Philosophy */}
      <section className="bg-creamdeep py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-14">Our principles</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {about.philosophy.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-t border-ink/10 pt-6"
              >
                <span className="font-ui text-xs text-inksoft/40">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-xl font-semibold text-ink mt-2 mb-2">{p.title}</h3>
                <p className="text-inksoft font-body text-sm leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-14">How we got here</h2>
          <div className="space-y-0">
            {about.timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-8 py-6 border-b border-ink/8 items-baseline"
              >
                <span className="font-display text-lg font-semibold text-violetdeep w-16 shrink-0">{t.year}</span>
                <div>
                  <h3 className="font-ui font-semibold text-ink">{t.title}</h3>
                  <p className="text-sm text-inksoft font-body mt-1">{t.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-ink py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {about.stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl sm:text-4xl font-semibold text-gradient">{s.value}</p>
              <p className="text-xs sm:text-sm text-cream/70 font-body mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}