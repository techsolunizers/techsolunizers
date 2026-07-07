import { motion } from "framer-motion";
import { MdCheckCircle, MdCancel } from "react-icons/md";
import { solutionsPage } from "../data/content";
import Magnetic from "../components/Magnetic";
import { Link } from "react-router-dom";

export default function Solutions() {
  const { problem, solution, steps, sectors } = solutionsPage;

  return (
    <div className="bg-cream pt-32">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pb-20 text-center">
        <p className="font-ui text-xs tracking-[0.2em] uppercase text-violetdeep mb-6">{solutionsPage.eyebrow}</p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl sm:text-6xl font-semibold text-ink tracking-tight leading-[1.05]"
        >
          {solutionsPage.heading}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-6 text-lg text-inksoft font-body max-w-2xl mx-auto"
        >
          {solutionsPage.subheading}
        </motion.p>
      </section>

      {/* Problem */}
      <section className="bg-creamdeep py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-ui text-xs tracking-[0.2em] uppercase text-coral mb-4">{problem.eyebrow}</p>
          <h2 className="font-display text-2xl sm:text-4xl font-semibold text-ink mb-6 max-w-2xl">{problem.heading}</h2>
          <p className="text-inksoft font-body max-w-2xl mb-8">{problem.body}</p>
          <ul className="space-y-3">
            {problem.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-inksoft font-body">
                <MdCancel className="text-coral mt-1 shrink-0" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-ui text-xs tracking-[0.2em] uppercase text-mint mb-4">{solution.eyebrow}</p>
          <h2 className="font-display text-2xl sm:text-4xl font-semibold text-ink mb-6 max-w-2xl">{solution.heading}</h2>
          <p className="text-inksoft font-body max-w-2xl mb-8">{solution.body}</p>
          <ul className="space-y-3">
            {solution.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-inksoft font-body">
                <MdCheckCircle className="text-mint mt-1 shrink-0" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works — numbered steps */}
      <section className="bg-ink py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-cream mb-14">How it works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="font-display text-4xl font-semibold text-gradient">{s.n}</span>
                <h3 className="font-ui text-lg font-semibold text-cream mt-4 mb-2">{s.title}</h3>
                <p className="text-sm text-cream/70 font-body leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applicable sectors */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink mb-10">Built for these sectors</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {sectors.map((s) => (
              <div key={s} className="glass rounded-2xl px-6 py-4 font-ui text-ink shadow-card">
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-gradient-to-br from-violetdeep to-violet py-20 text-center text-white">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold mb-6">Ready to see it on your numbers?</h2>
        <Magnetic strength={0.35} className="inline-block">
          <Link to="/demo" className="inline-block btn-pill font-ui font-semibold px-8 py-4 bg-white text-violetdeep shadow-soft">
            Book a Demo
          </Link>
        </Magnetic>
      </section>
    </div>
  );
}