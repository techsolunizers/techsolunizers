import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { nav } from "../data/content";

/**
 * Sticky navigation header. Transparent at the top, gains a soft
 * frosted-glass card once the user scrolls, echoing pill-style SaaS navs.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <nav
        className={`max-w-6xl mx-auto flex items-center justify-between rounded-full px-6 transition-all duration-500 ${
          scrolled ? "glass shadow-card py-3" : "bg-transparent py-4"
        }`}
      >
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="font-display text-lg md:text-xl font-semibold tracking-tight text-ink"
        >
          Pra<span className="text-gradient">Tej</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm text-inksoft">
          {nav.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#cta"
          onClick={(e) => handleNavClick(e, "#cta")}
          className="hidden md:inline-block btn-pill font-ui text-sm font-medium px-5 py-2.5 bg-ink text-cream hover:bg-violetdeep hover:-translate-y-0.5 transition-all"
        >
          {nav.cta}
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-ink text-2xl"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <motion.ul
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass mt-3 mx-4 rounded-3xl overflow-hidden flex flex-col text-inksoft shadow-card"
        >
          {nav.links.map((l) => (
            <li key={l.href} className="border-b border-ink/5 last:border-none">
              <a href={l.href} onClick={(e) => handleNavClick(e, l.href)} className="block px-6 py-4">
                {l.label}
              </a>
            </li>
          ))}
          <li className="p-4">
            <a
              href="#cta"
              onClick={(e) => handleNavClick(e, "#cta")}
              className="block text-center btn-pill font-ui font-medium px-5 py-3 bg-ink text-cream"
            >
              {nav.cta}
            </a>
          </li>
        </motion.ul>
      )}
    </header>
  );
}
