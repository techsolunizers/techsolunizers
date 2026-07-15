/**
 * Interactive scrolling text marquee with mouse speed-responsive
 * displacement map warp effect, mirroring the liquid WebGL style on noth.in
 *
 * Uses pure CSS @keyframes animation on the compositor thread instead of
 * framer-motion JS animation — this prevents frame drops when WebGL
 * (Threads.jsx) is also running on the main thread.
 */
export default function Marquee({ text, speed = 22, className = "" }) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`} aria-hidden="true">
      <div
        className="inline-flex marquee-scroll"
        style={{
          animationDuration: `${speed}s`,
          willChange: "transform",
        }}
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
      </div>
    </div>
  );
}