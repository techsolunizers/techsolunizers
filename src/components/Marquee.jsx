import { motion } from "framer-motion";


/**
 * Interactive scrolling text marquee with mouse speed-responsive
 * displacement map warp effect, mirroring the liquid WebGL style on noth.in
 */
export default function Marquee({ text, speed = 22, className = "" }) {


  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`} aria-hidden="true">

      <motion.div
        className="inline-flex"
        // style={{ filter: `url(#${filterId})` }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1].map((copy) => (
          <span key={copy} className="flex items-center shrink-0">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="font-display text-[10vw] leading-none font-semibold text-ink/90 px-8 shrink-0"
              >
                {text}
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
}