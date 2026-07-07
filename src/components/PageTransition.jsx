import { motion, AnimatePresence } from "framer-motion";

/**
 * Full-screen wipe transition for use between routes (if/when you add
 * react-router) or between major view states. Wrap your routed content:
 *
 *   <PageTransition locationKey={location.pathname}>
 *     <Routes location={location}>...</Routes>
 *   </PageTransition>
 *
 * Each time `locationKey` changes, the wipe plays: incoming content
 * fades/slides in while a dark panel sweeps across and off.
 */
export default function PageTransition({ children, locationKey }) {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={locationKey}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Sweep panel — plays on every key change alongside the content transition */}
      <AnimatePresence>
        <motion.div
          key={`sweep-${locationKey}`}
          className="fixed inset-0 z-[9998] bg-ink pointer-events-none"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          style={{ transformOrigin: "bottom" }}
        />
      </AnimatePresence>
    </>
  );
}