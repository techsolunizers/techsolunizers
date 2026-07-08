import { useState } from "react";
import { motion } from "framer-motion";
import { servicesPage } from "../data/content";
import SpotlightCard from "../components/Spotlightcard";

const segColor = { Small: "#3DD9B3", Medium: "#7C6CF6", Large: "#FF7A59" };

export default function Services() {
  const [filter, setFilter] = useState("All");
  const items =
    filter === "All" ? servicesPage.items : servicesPage.items.filter((it) => it.tags.includes(filter));

  return (
    <div className="bg-cream pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-ui text-xs tracking-[0.2em] uppercase text-violetdeep mb-6">{servicesPage.eyebrow}</p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl sm:text-6xl font-semibold text-ink tracking-tight leading-[1.05] max-w-3xl mb-12"
        >
          {servicesPage.heading}
        </motion.h1>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-14">
          {servicesPage.filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-ui text-sm px-5 py-2.5 rounded-full border transition-colors ${
                filter === f
                  ? "bg-ink text-cream border-ink"
                  : "border-ink/15 text-inksoft hover:bg-ink/5"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <SpotlightCard className="glass rounded-3xl p-8 shadow-card h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-ui font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: `${segColor[it.segment]}1a`, color: segColor[it.segment] }}
                  >
                    {it.segment}
                  </span>
                  <span className="text-xs font-ui text-inksoft/50">{it.name}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-ink mb-2">{it.title}</h3>
                <p className="text-sm text-inksoft font-body leading-relaxed flex-1">{it.body}</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {it.tags.map((t) => (
                    <span key={t} className="text-xs font-ui text-inksoft bg-ink/5 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}