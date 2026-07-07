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
    <footer className="bg-cream border-t border-ink/8 py-14">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        <div>
          <p className="font-display text-xl font-semibold text-ink">{footer.name}</p>
          <p className="text-sm text-inksoft mt-1 font-body">{footer.tagline}</p>
        </div>

        <ul className="flex flex-wrap gap-6 text-sm text-inksoft font-body">
          {footer.links.map((l) => (
            <li key={l.label}>
              <Link to={l.href} className="hover:text-ink transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-4 text-inksoft text-xl">
          {footer.socials.map((s) => {
            const Icon = socialIcons[s];
            return (
              <a key={s} href="#" aria-label={s} className="hover:text-violetdeep transition-colors">
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
      <p className="text-center text-xs text-inksoft/60 mt-10 font-body">{footer.copyright}</p>
    </footer>
  );
}