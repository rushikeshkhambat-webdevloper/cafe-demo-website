import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "../data/cafeData";

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#F0E4D3]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 will-change-transform"
        >
          <h2 className="text-4xl md:text-5xl font-medium">What Our Guests Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-white/60 border border-[#D4C4B0] rounded-2xl p-8 will-change-transform"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={16} fill="#D4A574" stroke="#D4A574" />
                ))}
              </div>
              <p
                className="italic text-lg leading-relaxed mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "{t.quote}"
              </p>
              <p className="text-xs font-medium">{t.name}</p>
              <p className="text-xs text-gray-500">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
