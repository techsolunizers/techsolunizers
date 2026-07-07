import { motion } from "framer-motion";
import { hero } from "../data/content";

const nodes = [
  { size: 14, top: "70%", left: "10%", delay: 0, color: "#3DD9B3" },
  { size: 20, top: "55%", left: "22%", delay: 0.4, color: "#5EA0F7" },
  { size: 30, top: "40%", left: "36%", delay: 0.8, color: "#7C6CF6" },
  { size: 42, top: "26%", left: "50%", delay: 1.2, color: "#7C6CF6" },
  { size: 58, top: "16%", left: "66%", delay: 1.6, color: "#FF7A59" },
  { size: 74, top: "8%", left: "84%", delay: 2, color: "#FF7A59" },
];

/**
 * Full-viewport hero on a cream background with soft pastel gradient
 * blobs — echoing Nuraform's light, airy "motif" decoration style.
 */
export default function Hero() {
  const scrollToWorks = (e) => {
    e.preventDefault();
    document.querySelector("#how")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* decorative pastel blobs */}
      <div className="blob w-[28rem] h-[28rem] -top-24 -left-24 bg-gradient-to-br from-violet/40 to-skyblue/30" />
      <div className="blob w-[24rem] h-[24rem] top-1/3 -right-32 bg-gradient-to-br from-coral/30 to-violet/20" />
      <div className="blob w-72 h-72 bottom-0 left-1/4 bg-gradient-to-br from-mint/30 to-skyblue/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 grid md:grid-cols-2 gap-12 items-center w-full">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block font-ui text-xs tracking-[0.15em] uppercase text-violetdeep bg-violet/10 px-4 py-1.5 rounded-full mb-5"
          >
            Unified Business Platform
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-ink tracking-tight"
          >
            {hero.headline.split(". ").map((chunk, i) => (
              <span key={i} className="block">
                {chunk}
                {i < hero.headline.split(". ").length - 1 ? "." : ""}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg text-inksoft max-w-lg font-body"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#cta"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-pill font-ui font-semibold px-8 py-4 bg-ink text-cream shadow-soft hover:-translate-y-0.5 transition-all"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#how"
              onClick={scrollToWorks}
              className="btn-pill font-ui font-semibold px-8 py-4 border border-ink/15 text-ink hover:bg-ink/5 transition-colors"
            >
              {hero.secondaryCta}
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-sm text-inksoft/70 font-body"
          >
            ✦ {hero.trust}
          </motion.p>
        </div>

        {/* Visual: connected businesses growing in scale */}
        <div className="relative h-72 md:h-[26rem] hidden sm:block" aria-hidden="true">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none">
            <motion.path
              d="M50 220 L100 190 L150 155 L210 120 L280 85 L340 45"
              stroke="url(#lineGrad)"
              strokeWidth="2"
              strokeDasharray="6 6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7C6CF6" />
                <stop offset="100%" stopColor="#FF7A59" />
              </linearGradient>
            </defs>
          </svg>
          {nodes.map((n, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: n.delay },
                scale: { duration: 0.5, delay: n.delay },
                y: { duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: n.delay },
              }}
              className="absolute rounded-full shadow-card flex items-center justify-center"
              style={{
                width: n.size,
                height: n.size,
                top: n.top,
                left: n.left,
                background: `radial-gradient(circle at 30% 30%, ${n.color}bb, ${n.color}33)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-inksoft/50 text-xs tracking-widest animate-bounce">
        SCROLL
      </div>
    </section>
  );
}
