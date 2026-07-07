import { useState } from "react";
import { motion } from "framer-motion";
import { MdCheckCircle } from "react-icons/md";
import { demoPage } from "../data/content";
import Magnetic from "../components/Magnetic";

export default function Demo() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", business: "", size: "Small" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-cream pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: value props */}
        <div>
          <p className="font-ui text-xs tracking-[0.2em] uppercase text-violetdeep mb-6">{demoPage.eyebrow}</p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl sm:text-5xl font-semibold text-ink tracking-tight leading-[1.05] mb-6"
          >
            {demoPage.heading}
          </motion.h1>
          <p className="text-lg text-inksoft font-body mb-10 max-w-md">{demoPage.subheading}</p>

          <ul className="space-y-4 mb-12">
            {demoPage.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-ink font-body">
                <MdCheckCircle className="text-mint mt-1 shrink-0" /> {b}
              </li>
            ))}
          </ul>

          <div className="glass rounded-3xl p-6 shadow-card max-w-md">
            <p className="text-ink/85 font-body text-sm leading-relaxed mb-4">"{demoPage.testimonial.quote}"</p>
            <p className="font-ui font-semibold text-ink text-sm">{demoPage.testimonial.name}</p>
            <p className="text-xs text-inksoft">{demoPage.testimonial.business}</p>
          </div>
        </div>

        {/* Right: form */}
        <div className="glass rounded-3xl p-8 md:p-10 shadow-card">
          {submitted ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
              <MdCheckCircle className="text-mint text-5xl mx-auto mb-4" />
              <h3 className="font-display text-2xl font-semibold text-ink mb-2">You're booked!</h3>
              <p className="text-inksoft font-body">We'll reach out within one business day to confirm your slot.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="font-ui text-lg font-semibold text-ink mb-2">Tell us about your business</h2>
              <div>
                <label className="text-xs font-ui text-inksoft mb-1 block">Full name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-ink/15 bg-white/60 px-4 py-3 font-body text-ink focus:outline-none focus:ring-2 focus:ring-violet/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-ui text-inksoft mb-1 block">Work email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-ink/15 bg-white/60 px-4 py-3 font-body text-ink focus:outline-none focus:ring-2 focus:ring-violet/40"
                  placeholder="you@business.com"
                />
              </div>
              <div>
                <label className="text-xs font-ui text-inksoft mb-1 block">Business name</label>
                <input
                  value={form.business}
                  onChange={(e) => setForm({ ...form, business: e.target.value })}
                  className="w-full rounded-xl border border-ink/15 bg-white/60 px-4 py-3 font-body text-ink focus:outline-none focus:ring-2 focus:ring-violet/40"
                  placeholder="Business name"
                />
              </div>
              <div>
                <label className="text-xs font-ui text-inksoft mb-1 block">Business size</label>
                <select
                  value={form.size}
                  onChange={(e) => setForm({ ...form, size: e.target.value })}
                  className="w-full rounded-xl border border-ink/15 bg-white/60 px-4 py-3 font-body text-ink focus:outline-none focus:ring-2 focus:ring-violet/40"
                >
                  <option>Small — single store</option>
                  <option>Medium — multiple branches</option>
                  <option>Large — enterprise / mall</option>
                </select>
              </div>
              <Magnetic strength={0.3} className="block w-full">
                <button
                  type="submit"
                  className="w-full btn-pill font-ui font-semibold px-8 py-4 bg-ink text-cream hover:-translate-y-0.5 transition-transform"
                >
                  Book My Demo
                </button>
              </Magnetic>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}