import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * PageReveal — wraps a page's content and animates children on mount.
 *
 * Every direct child with `data-reveal` (or all children if none have it)
 * fades up in a staggered sequence, mimicking Sharebien's sequential entry.
 *
 * Usage:
 *   <PageReveal>
 *     <section data-reveal>...</section>
 *     <section data-reveal>...</section>
 *   </PageReveal>
 */
export default function PageReveal({ children, delay = 0.1 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Grab elements tagged with data-reveal, or fall back to direct children
    let targets = el.querySelectorAll("[data-reveal]");
    if (!targets.length) {
      targets = el.children;
    }

    // Animate headings with text-shuffle class letter-by-letter
    const shuffleEls = el.querySelectorAll("[data-text-shuffle]");
    shuffleEls.forEach((heading) => {
      const text = heading.textContent;
      heading.innerHTML = "";
      heading.setAttribute("aria-label", text);

      [...text].forEach((char, i) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.display = "inline-block";
        span.style.opacity = "0";
        span.style.transform = "translateY(20px)";
        heading.appendChild(span);

        gsap.to(span, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          delay: delay + 0.35 + i * 0.025,
          ease: "power3.out",
        });
      });
    });

    // Staggered fade-up for sections
    gsap.fromTo(
      targets,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        delay,
        ease: "power3.out",
      }
    );
  }, [delay]);

  return (
    <div ref={containerRef} className="page-reveal-wrapper">
      {children}
    </div>
  );
}
