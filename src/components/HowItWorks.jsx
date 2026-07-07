import { motion } from "framer-motion";
import { howItWorks } from "../data/content";

/** Three-step onboarding flow with a connecting line/arrow visualization. */
export default function HowItWorks() {
  return (
    <section id="how" className="relative py-28 bg-creamdeep overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-semibold text-ink text-center mb-20 tracking-tight"
        >
          {howItWorks.heading}
        </motion.h2>

        <div className="relative grid md:grid-cols-3 gap-10">
          <div className="hidden md:block absolute top-8 left-[16.6%] right-[16.6%] h-[2px]">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              style={{ transformOrigin: "left" }}
              className="h-full bg-gradient-to-r from-mint via-violet to-coral"
            />
          </div>

          {howItWorks.steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative text-center"
            >
              <div className="relative z-10 w-16 h-16 mx-auto rounded-full glass shadow-card flex items-center justify-center font-display text-2xl font-semibold text-ink mb-6">
                {i + 1}
              </div>
              <h3 className="font-ui text-xl font-semibold text-ink mb-2">{step.title}</h3>
              <p className="text-inksoft text-sm font-body max-w-xs mx-auto">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
