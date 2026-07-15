import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { footer } from "../data/content";

const socialIcons = {
  LinkedIn: FaLinkedin,
  Twitter: FaTwitter,
  YouTube: FaYoutube,
  Instagram: FaInstagram,
};

/** Site footer with quick links and social icons. */
export default function Footer() {
  return (
    <footer className="bg-sagedeep border-t border-white/10 py-14">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        <div>
          <p className="font-display text-xl font-semibold text-white">{footer.name}</p>
          <p className="text-sm text-white/70 mt-1 font-body">{footer.tagline}</p>
        </div>

        <ul className="flex flex-wrap gap-6 text-sm text-white/70 font-body">
          {footer.links.map((l) => (
            <li key={l.label}>
              <Link to={l.href} className="hover:text-white transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 text-white/70 text-xl">
          {footer.socials.map((s) => {
            const Icon = socialIcons[s];
            return (
              <a key={s} href="#" aria-label={s} className="hover:text-white transition-colors">
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
      <p className="text-center text-xs text-white/50 mt-10 font-body">{footer.copyright}</p>
    </footer>
  );
}