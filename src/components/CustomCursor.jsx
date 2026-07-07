import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom cursor: a small dot that follows the mouse exactly, plus a
 * larger trailing ring with spring physics. Both morph in size/label
 * when hovering elements marked with data-cursor="text" attributes,
 * or grow on any link/button.
 */
export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [label, setLabel] = useState("");
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 30, stiffness: 250, mass: 0.5 });
  const ringY = useSpring(y, { damping: 30, stiffness: 250, mass: 0.5 });

  const raf = useRef(null);

  useEffect(() => {
    // Skip entirely on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (hidden) setHidden(false);

      if (raf.current) cancelAnimationFrame(raf.current);
      raf.current = requestAnimationFrame(() => {
        const el = document.elementFromPoint(e.clientX, e.clientY);
        const interactive = el?.closest(
          'a, button, [role="button"], input, textarea, [data-cursor]'
        );
        setIsPointer(!!interactive);
        setLabel(interactive?.getAttribute("data-cursor-text") || "");
      });
    };

    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [x, y, hidden]);

  return (
    <div className="hidden md:block" aria-hidden="true">
      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border border-ink/40 flex items-center justify-center mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isPointer ? 76 : 32,
          height: isPointer ? 76 : 32,
          opacity: hidden ? 0 : 1,
          backgroundColor: isPointer ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {label && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] font-ui font-medium text-ink uppercase tracking-wide text-center px-1"
          >
            {label}
          </motion.span>
        )}
      </motion.div>

      {/* Precise dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none w-1.5 h-1.5 rounded-full bg-ink"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          opacity: hidden || isPointer ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}