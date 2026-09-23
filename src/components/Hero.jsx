import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const headline = "Rich & Aromatic, Every Single Time";

export default function Hero() {
  const words = headline.split(" ");

  return (
    <section
      id="top"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <img
        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80"
        alt="Warm cafe interior at MELT"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Deep chocolate brown overlay for warmth */}
      <div className="absolute inset-0 bg-[#3D1F14]/60" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.25em] font-medium mb-6"
          style={{ color: "#D4A574" }}
        >
          FRESH • FUN • MADE WITH LOVE
        </motion.p>

        <h1 className="text-5xl md:text-7xl text-[#F0E4D3] font-medium leading-[1.1] mb-6 flex flex-wrap justify-center gap-x-4">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="inline-block will-change-transform"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-sm md:text-base text-[#F0E4D3]/80 mb-10"
        >
          Coffee, ice cream, burgers — all in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#menu"
            className="bg-[#E07B39] text-white text-xs uppercase tracking-widest font-medium px-8 py-3.5 rounded-full hover:scale-105 transition-transform will-change-transform"
          >
            Explore Menu
          </a>
          <a
            href="#reserve"
            className="border border-[#F0E4D3] text-[#F0E4D3] text-xs uppercase tracking-widest font-medium px-8 py-3.5 rounded-full hover:bg-[#F0E4D3] hover:text-[#3D1F14] transition-colors"
          >
            Order Now
          </a>
        </motion.div>
      </div>

      <ChevronDown
        size={28}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#F0E4D3] animate-bounce-slow"
      />
    </section>
  );
}