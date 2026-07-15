import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { nav } from "../data/content";
import Magnetic from "./Magnetic";
import GooeyNav from "./GooeyNav";

import logoImg from "../assets/logo.png";

/**
 * Numbered nav bar inspired by mauriciojuba.com — a slim top bar with
 * "0X/LABEL" links, a live clock readout, and a full-screen dark menu
 * overlay for mobile / expanded state.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(d.toLocaleTimeString("en-IN", { hour12: false }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav
          className={`flex items-center justify-between px-6 md:px-10 transition-all duration-500 ${
            scrolled ? "glass shadow-card py-3" : "bg-transparent py-5"
          }`}
        >
          <Link to="/" className="flex items-center gap-2 font-display text-lg md:text-xl font-semibold tracking-tight text-ink">
            <img src={logoImg} alt="TechSolunizers Logo" className="w-8 h-8 md:w-9 md:h-9 object-contain" />
            <span>Tech<span className="text-gradient">Solunizers</span></span>
          </Link>

          <div
            className="hidden md:flex items-center rounded-full px-1 py-0.5 font-ui text-xs tracking-wide overflow-hidden"
            style={{
              background: '#1B1B18',
              '--color-1': '#7C6CF6',
              '--color-2': '#3DD9B3',
              '--color-3': '#5EA0F7',
              '--color-4': '#FF7A59',
            }}
          >
            <GooeyNav
              items={nav.links.map((l) => ({
                label: l.label.toUpperCase(),
                href: l.href,
                onClick: () => navigate(l.href),
              }))}
              initialActiveIndex={Math.max(0, nav.links.findIndex((l) => l.href === location.pathname))}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            />
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Magnetic strength={0.3}>
              <Link
                to="/login"
                className="btn-pill font-ui text-sm font-medium px-5 py-2.5 border border-ink/20 text-ink hover:bg-ink/5 transition-all inline-block"
              >
                Login
              </Link>
            </Magnetic>
            <Magnetic strength={0.3}>
              <Link
                to={nav.ctaHref}
                className="btn-pill font-ui text-sm font-medium px-5 py-2.5 bg-ink text-cream hover:bg-violetdeep hover:-translate-y-0.5 transition-all inline-block"
              >
                {nav.cta}
              </Link>
            </Magnetic>
          </div>

           
          <button
            aria-label="Toggle menu"
            className="md:hidden text-ink text-2xl z-[60]"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "✕" : "MENU"}
          </button>
        </nav>
      </header>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-50 bg-ink flex flex-col justify-center px-8 md:hidden"
          >
            <ul className="space-y-6">
              {nav.links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                >
                  <Link
                    to={l.href}
                    className="font-display text-4xl font-semibold text-cream flex items-baseline gap-3"
                  >
                    <span className="text-sm text-cream/40 font-ui">{l.n}</span>
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-10 flex gap-4">
              <Link
                to="/login"
                className="inline-block btn-pill font-ui font-semibold px-6 py-4 border border-cream/30 text-cream"
              >
                Login
              </Link>
              <Link
                to={nav.ctaHref}
                className="inline-block btn-pill font-ui font-semibold px-8 py-4 bg-cream text-ink"
              >
                {nav.cta}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}