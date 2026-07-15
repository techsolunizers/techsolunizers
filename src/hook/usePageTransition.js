import { useState, useCallback, useRef } from "react";

/**
 * Manages page transition state & Lenis scroll lock.
 * The transition timeline calls lock → ... → unlock around the curtain animation.
 */
export default function usePageTransition() {
  const [phase, setPhase] = useState("idle"); // idle | exit | curtain-close | swap | curtain-open | enter
  const lenisRef = useRef(null);

  const lockScroll = useCallback(() => {
    document.documentElement.classList.add("lenis-stopped");
    window.lenis?.stop();
  }, []);

  const unlockScroll = useCallback(() => {
    document.documentElement.classList.remove("lenis-stopped");
    window.lenis?.start();
  }, []);

  const scrollToTop = useCallback(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  return {
    phase,
    setPhase,
    lockScroll,
    unlockScroll,
    scrollToTop,
    isTransitioning: phase !== "idle",
  };
}
