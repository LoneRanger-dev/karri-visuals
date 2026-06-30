"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import ClayButton from "@/components/ui/ClayButton";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route-level hash navigation
  function handleNavClick() {
    setMenuOpen(false);
  }

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-40
          transition-all duration-500
          ${scrolled
            ? "glass border-b border-white/10 py-3 shadow-glass"
            : "bg-gradient-to-b from-navy-deep/80 via-navy-deep/30 to-transparent py-5"
          }
        `}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center group"
            aria-label="Karri Visuals — home"
          >
            <Image
              src="/img/logo-full.png"
              alt="Karri Visuals — Creative Media & Film Production"
              width={192}
              height={128}
              priority
              className={`w-auto transition-all duration-500 ${scrolled ? "h-10" : "h-12"}`}
            />
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-10" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-cream font-medium text-[15px] tracking-[0.08em] hover:text-gold transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <ClayButton href="#contact" size="sm" variant="gold">
              Start Your Project
            </ClayButton>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-cream/70 hover:text-cream transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-30 pt-20 px-6 glass lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col gap-6 mt-8" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/80 hover:text-cream font-heading text-3xl font-semibold block transition-colors"
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <ClayButton href="#contact" size="lg" variant="gold" className="w-full justify-center">
                Start Your Project
              </ClayButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
