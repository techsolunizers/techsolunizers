import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { contactPage } from "../data/content";

export default function Contact() {
  return (
    <div className="min-h-screen bg-cream flex flex-col pt-32">
      <div className="flex-1 flex flex-col justify-center px-6">
        <div className="max-w-4xl mx-auto w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-[16vw] sm:text-[10vw] lg:text-8xl font-semibold text-ink tracking-tight leading-none"
          >
            {contactPage.heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-lg text-inksoft font-body max-w-xl"
          >
            {contactPage.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-col gap-4 font-ui text-ink"
          >
            <a href={`mailto:${contactPage.email}`} className="flex items-center gap-3 text-lg hover:text-violetdeep transition-colors w-fit">
              <MdEmail /> {contactPage.email}
            </a>
            <a href={`tel:${contactPage.phone}`} className="flex items-center gap-3 text-lg hover:text-violetdeep transition-colors w-fit">
              <MdPhone /> {contactPage.phone}
            </a>
            <p className="flex items-center gap-3 text-lg text-inksoft">
              <MdLocationOn /> {contactPage.address}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-ink/8 py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between gap-6 text-sm font-ui text-inksoft">
          <div>
            <p className="uppercase tracking-widest text-xs text-inksoft/50 mb-2">Find Us</p>
            <p>{contactPage.address}</p>
          </div>
          <div>
            <p className="uppercase tracking-widest text-xs text-inksoft/50 mb-2">Follow Us</p>
            <div className="flex gap-4">
              {contactPage.socials.map((s) => (
                <a key={s} href="#" className="hover:text-ink transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}