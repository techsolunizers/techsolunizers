import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { hero } from "../data/content";
import Magnetic from "./Magnetic";
import Marquee from "./Marquee.jsx";

/**
 * Oversized, editorial-style hero inspired by noth.in's layout language:
 * huge stacked type, a small running index/counter, a thin manifesto
 * line, and a marquee strip beneath. Uses PraTej's real copy — this is
 * a structural homage, not a copy of noth.in's content.
 */
export default function NothHero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const rise = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen bg-cream overflow-hidden flex flex-col">
      <motion.div style={{ opacity: fade, y: rise }} className="flex-1 flex flex-col justify-center px-6 pt-28">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-between font-ui text-xs tracking-[0.2em] uppercase text-inksoft/60 mb-8">
            <span>( Unified Business Platform )</span>
            <span>Pune, India</span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-semibold text-ink tracking-tight leading-[0.92] text-[13vw] sm:text-[9vw] lg:text-[7vw]"
          >
            {hero.headline.split(". ").map((chunk, i, arr) => (
              <span key={i} className="block">
                {chunk}
                {i < arr.length - 1 ? "." : ""}
              </span>
            ))}
          </motion.h1>

          <div className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-md text-inksoft font-body text-lg"
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Magnetic strength={0.4}>
                <a
                  href="#cta"
                  data-cursor-text="Go"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#cta")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-pill font-ui font-semibold px-8 py-4 bg-ink text-cream shadow-soft inline-block hover:-translate-y-0.5 transition-transform"
                >
                  {hero.primaryCta}
                </a>
              </Magnetic>
              <Magnetic strength={0.4}>
                <a
                  href="#how"
                  data-cursor-text="See"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#how")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="btn-pill font-ui font-semibold px-8 py-4 border border-ink/15 text-ink hover:bg-ink/5 transition-colors inline-block"
                >
                  {hero.secondaryCta}
                </a>
              </Magnetic>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 text-sm text-inksoft/60 font-body"
          >
            ✦ {hero.trust}
          </motion.p>
        </div>
      </motion.div>

      <div className="border-t border-ink/8 py-6">
        <Marquee text="PraTej Solutions — " speed={26} />
      </div>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-inksoft/50 text-xs tracking-widest animate-bounce">
        SCROLL
      </div>
    </section>
  );
}