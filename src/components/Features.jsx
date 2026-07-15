import { motion } from "framer-motion";
import {
  MdInventory2,
  MdPointOfSale,
  MdInsights,
  MdFavorite,
} from "react-icons/md";
import { features } from "../data/content";
import SpotlightCard from "./Spotlightcard";

const iconMap = {
  inventory: MdInventory2,
  billing: MdPointOfSale,
  analytics: MdInsights,
  engagement: MdFavorite,
};

const iconBg = ["from-violet to-skyblue", "from-coral to-violet", "from-mint to-skyblue", "from-violet to-coral"];

/** Bento-style grid of feature cards, light frosted cards on cream. */
export default function Features() {
  return (
    <section id="features" className="relative py-28 bg-sage">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-semibold text-ink text-center mb-16 tracking-tight"
        >
          {features.heading}
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.cards.map((card, i) => {
            const Icon = iconMap[card.icon];
            const spanClass = i === 0 ? "lg:col-span-2" : "";
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={spanClass}
              >
                <SpotlightCard className="glass rounded-3xl p-7 shadow-card h-full">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${iconBg[i]} flex items-center justify-center mb-5 text-white text-2xl`}>
                    <Icon />
                  </div>
                  <h3 className="font-ui text-lg font-semibold text-ink mb-2">{card.title}</h3>
                  <p className="text-sm text-inksoft font-body leading-relaxed">{card.description}</p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}