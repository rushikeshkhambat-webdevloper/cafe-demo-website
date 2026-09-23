import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F0E4D3]">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="will-change-transform"
        >
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=80"
            alt="Interior of MELT cafe"
            loading="lazy"
            className="rounded-2xl w-full h-[420px] md:h-[520px] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="will-change-transform"
        >
          <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: "#5C3620" }}>
            Our Story
          </p>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 leading-tight">
            Crafted with Passion, Served with Care
          </h2>
          <p className="text-sm leading-relaxed text-gray-600 mb-4">
            MELT began as a single espresso machine and a shared belief that good
            food brings people together. Every plate that leaves our kitchen is made
            from ingredients sourced within a day's drive, prepared the way we'd
            want to eat it ourselves.
          </p>
          <p className="text-sm leading-relaxed text-gray-600 mb-6">
            What started as a neighbourhood coffee counter has grown into a full
            table — but the spirit hasn't changed. We still roast in small batches,
            bake every morning, and greet regulars by name.
          </p>
          <p className="italic text-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            — Chef Aryan
          </p>
        </motion.div>
      </div>
    </section>
  );
}
