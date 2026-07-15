import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import usePageTransition from "../hook/usePageTransition";

/**
 * Sharebien-style dual-curtain page transition.
 *
 * Two dark panels (top + bottom) close from the edges to the center,
 * the route content swaps behind them, then the panels open to reveal
 * the new page.
 *
 *   <PageTransition locationKey={location.pathname}>
 *     <Routes location={location}>...</Routes>
 *     <Footer />
 *   </PageTransition>
 */
export default function PageTransition({ children, locationKey }) {
  const curtainTopRef = useRef(null);
  const curtainBottomRef = useRef(null);
  const contentRef = useRef(null);
  const timelineRef = useRef(null);
  const prevKeyRef = useRef(locationKey);
  const isFirstRender = useRef(true);

  // ── Synchronous ref to block the children-sync effect ──
  // React state updates are async, so a `useState` flag can't prevent
  // the sync effect from firing in the SAME render cycle.  A ref can.
  const transitionActiveRef = useRef(false);

  // Always keep a ref to the latest children so the GSAP timeline
  // callback grabs the freshest version (avoids stale-closure issues).
  const pendingChildrenRef = useRef(children);
  pendingChildrenRef.current = children;

  const { lockScroll, unlockScroll, scrollToTop } = usePageTransition();

  // What's actually rendered — only updated at safe moments.
  const [renderedChildren, setRenderedChildren] = useState(children);

  // ── Effect 1: Transition timeline ──
  // MUST be declared BEFORE the sync effect so it runs first in the
  // same render cycle, setting transitionActiveRef before the sync
  // effect checks it.
  useEffect(() => {
    // Skip the initial mount — no transition needed
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevKeyRef.current = locationKey;
      return;
    }

    // Only transition when the locationKey actually changes
    if (locationKey === prevKeyRef.current) return;
    prevKeyRef.current = locationKey;

    // Kill any in-progress timeline
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // ★ Block the sync effect synchronously
    transitionActiveRef.current = true;

    const content = contentRef.current;
    const curtainTop = curtainTopRef.current;
    const curtainBottom = curtainBottomRef.current;

    const tl = gsap.timeline({
      onComplete: () => {
        transitionActiveRef.current = false;
        unlockScroll();
      },
    });
    timelineRef.current = tl;

    // Phase 1 — Lock scroll & fade out current content to FULLY invisible
    tl.call(() => lockScroll())
      .to(content, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      })

      // Phase 2 — Curtain close: panels sweep in from edges to center
      .to(
        curtainTop,
        { scaleY: 1, duration: 0.5, ease: "power4.inOut" },
        "-=0.05"
      )
      .to(
        curtainBottom,
        { scaleY: 1, duration: 0.5, ease: "power4.inOut" },
        "<"
      )

      // Phase 3 — Swap content behind the closed curtain
      .call(() => {
        scrollToTop();
        setRenderedChildren(pendingChildrenRef.current);
      })
      // Pause to let React render the new children
      .to({}, { duration: 0.25 })

      // Phase 4 — Curtain open: panels retract back to edges
      .to(curtainTop, {
        scaleY: 0,
        duration: 0.5,
        ease: "power4.inOut",
      })
      .to(
        curtainBottom,
        { scaleY: 0, duration: 0.5, ease: "power4.inOut" },
        "<"
      )

      // Phase 5 — Fade in new content ONLY after curtain starts opening
      .to(
        content,
        { opacity: 1, duration: 0.45, ease: "power2.out" },
        "-=0.3"
      );

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [locationKey, lockScroll, unlockScroll, scrollToTop]);

  // ── Effect 2: Keep children in sync when NOT transitioning ──
  // This handles edge cases like hot-reload or prop changes that aren't
  // route transitions.  The ref check prevents it from firing during
  // the same render cycle as the transition effect.
  useEffect(() => {
    if (!transitionActiveRef.current) {
      setRenderedChildren(children);
    }
  }, [children]);

  return (
    <>
      {/* Page content */}
      <div ref={contentRef} className="page-transition-content">
        {renderedChildren}
      </div>

      {/* Curtain overlay — two half-panels */}
      <div
        ref={curtainTopRef}
        className="curtain-panel curtain-top"
        aria-hidden="true"
      />
      <div
        ref={curtainBottomRef}
        className="curtain-panel curtain-bottom"
        aria-hidden="true"
      />
    </>
  );
}