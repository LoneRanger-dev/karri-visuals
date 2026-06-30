import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/ui/SocialIcons";
import LightSweep from "@/components/three/LightSweep";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { href: "https://facebook.com/karrivisuals", label: "Facebook", Icon: FacebookIcon },
  { href: "https://www.instagram.com/karribalaji2", label: "Instagram", Icon: InstagramIcon },
  { href: "https://youtube.com/@karrivisuals", label: "YouTube", Icon: YoutubeIcon },
];

export default function Footer() {
  return (
    <footer
      className="bg-navy-deep border-t border-white/5"
      role="contentinfo"
      aria-label="Site footer"
    >
      <LightSweep className="w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/img/logo-full.png"
                alt="Karri Visuals — Creative Media & Film Production"
                width={240}
                height={160}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-cream/50 text-sm leading-relaxed">
              We don&apos;t just make videos. We tell stories that move, inspire, and endure.
            </p>
            <div className="flex gap-4 mt-6">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Karri Visuals on ${label}`}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-cream/60 hover:text-gold hover:border-gold/40 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h3 className="text-cream font-semibold mb-5 text-sm uppercase tracking-widest">
              Navigation
            </h3>
            <ul className="space-y-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/50 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic">
            <h3 className="text-cream font-semibold mb-5 text-sm uppercase tracking-widest">
              Contact
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3 text-cream/50 text-sm">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span>
                  Flat No 302, Virat Niwas, Road No 5i,<br />
                  Panchavati Colony, Manikonda,<br />
                  Hyderabad – 500089
                </span>
              </div>
              <div className="flex gap-3 text-cream/50 text-sm items-center">
                <Phone size={16} className="text-gold shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+914035814983" className="block hover:text-gold transition-colors">
                    40 3581 4983
                  </a>
                  <a href="tel:+919849814249" className="block hover:text-gold transition-colors">
                    9849814249
                  </a>
                </div>
              </div>
            </div>
          </address>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs">
            © {new Date().getFullYear()} Karri Visuals. All rights reserved.
          </p>
          <p className="text-cream/30 text-xs">
            Creative Media & Film Production · Hyderabad, India
          </p>
        </div>
      </div>
    </footer>
  );
}
