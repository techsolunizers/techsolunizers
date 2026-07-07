import { motion } from "framer-motion";
import { FaStar, FaRegStar } from "react-icons/fa";
import { testimonials } from "../data/content";

const avatarBg = ["from-mint to-skyblue", "from-violet to-skyblue", "from-coral to-violet"];

/**
 * Chat-bubble style testimonial cards — rounded speech-bubble shape
 * with a little "tail", echoing Nuraform's conversational UI motifs.
 */
export default function Testimonials() {
  return (
    <section className="relative py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-semibold text-ink text-center mb-16 tracking-tight"
        >
          {testimonials.heading}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="relative glass rounded-[28px] rounded-bl-md p-7 flex flex-col shadow-card"
            >
              <p className="text-sm text-ink/85 font-body leading-relaxed flex-1">
                "{t.quote}"
              </p>
              <div className="flex gap-1 mt-5 text-coral">
                {Array.from({ length: 5 }).map((_, idx) =>
                  idx < t.rating ? <FaStar key={idx} size={13} /> : <FaRegStar key={idx} size={13} />
                )}
              </div>
              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-ink/8">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarBg[i]} flex items-center justify-center font-ui font-semibold text-white text-sm`}>
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-ui font-semibold text-ink text-sm">{t.name}</p>
                  <p className="text-xs text-inksoft">{t.business}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
