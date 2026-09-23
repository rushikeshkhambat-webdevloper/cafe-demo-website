import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          scrolled
            ? "bg-[#F0E4D3] border-b border-[#D4C4B0]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 h-20">
          <a
            href="#top"
            className={`font-semibold text-2xl tracking-widest transition-colors ${
              scrolled ? "text-[#2A1810]" : "text-white"
            }`}
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            MELT
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-xs uppercase tracking-widest font-medium transition-colors hover:opacity-70 ${
                  scrolled ? "text-[#2A1810]" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919999999999"
              className={`transition-colors ${scrolled ? "text-[#2A1810]" : "text-white"}`}
              aria-label="Call us"
            >
              <Phone size={18} />
            </a>
            <a
              href="#reserve"
              className="bg-[#E07B39] text-white text-xs uppercase tracking-widest font-medium px-6 py-2.5 rounded-full hover:scale-105 transition-transform will-change-transform"
            >
              Reserve
            </a>
          </div>

          <button
            onClick={() => setDrawerOpen(true)}
            className={`md:hidden ${scrolled ? "text-[#2A1810]" : "text-white"}`}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#F0E4D3] flex flex-col"
          >
            <div className="flex items-center justify-between px-5 h-20">
              <span
                className="font-semibold text-2xl tracking-widest text-[#2A1810]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                MELT
              </span>
              <button onClick={() => setDrawerOpen(false)} aria-label="Close menu">
                <X size={28} className="text-[#2A1810]" />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="text-4xl text-[#2A1810]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#reserve"
                onClick={() => setDrawerOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: navLinks.length * 0.06 }}
                className="mt-4 bg-[#E07B39] text-white text-xs uppercase tracking-widest font-medium px-8 py-3 rounded-full"
              >
                Reserve
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
