import { motion } from "framer-motion";
import { MdEmail, MdPhone } from "react-icons/md";
import { finalCta } from "../data/content";
import Magnetic from "./Magnetic";

/** Final call-to-action / contact section — contrasting violet gradient band. */
export default function CTA() {
  return (
    <section id="cta" className="relative py-28 bg-gradient-to-br from-violetdeep to-violet text-white overflow-hidden">
      <div className="blob w-96 h-96 -top-20 -right-20 bg-white/10" />
      <div className="blob w-72 h-72 -bottom-16 -left-16 bg-white/10" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-5xl font-semibold tracking-tight"
        >
          {finalCta.heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-white/80 font-body text-lg"
        >
          {finalCta.subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-block mt-10"
        >
          <Magnetic strength={0.35}>
            <a
              href="#"
              data-cursor-text="Start"
              className="inline-block btn-pill font-ui font-semibold text-lg px-10 py-5 bg-white text-violetdeep shadow-soft hover:-translate-y-0.5 transition-transform"
            >
              {finalCta.cta}
            </a>
          </Magnetic>
        </motion.div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm font-body text-white/85">
          <a href={`mailto:${finalCta.contact.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <MdEmail /> {finalCta.contact.email}
          </a>
          <a href={`tel:${finalCta.contact.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
            <MdPhone /> {finalCta.contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}