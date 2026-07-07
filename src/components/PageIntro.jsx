import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Full-screen curtain that wipes away on initial load, revealing the
 * page beneath. Runs once per session (skips on subsequent mounts
 * within the same tab via sessionStorage).
 */
export default function PageIntro() {
  const [show, setShow] = useState(() => {
    try {
      return !sessionStorage.getItem("pratej_intro_seen");
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!show) return;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
      try {
        sessionStorage.setItem("pratej_intro_seen", "1");
      } catch {
        /* ignore */
      }
    }, 1400);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-ink flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-2xl sm:text-3xl font-semibold text-cream tracking-tight"
          >
            Pra<span className="text-gradient">Tej</span> Solutions
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}