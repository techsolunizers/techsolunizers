import { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

/**
 * Wraps a card and adds a soft radial highlight that follows the
 * cursor position within the card's bounds — a subtle "premium" touch
 * seen on many awwwards-style sites.
 */
export default function SpotlightCard({ children, className = "", ...props }) {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`radial-gradient(220px circle at ${mouseX}px ${mouseY}px, rgba(124,108,246,0.12), transparent 70%)`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ background }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}