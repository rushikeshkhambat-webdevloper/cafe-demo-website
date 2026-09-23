import { motion } from "framer-motion";
import { galleryImages } from "../data/cafeData";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#F0E4D3]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 will-change-transform"
        >
          <h2 className="text-4xl md:text-5xl font-medium">A Glimpse Inside</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className="overflow-hidden rounded-xl aspect-square will-change-transform"
            >
              <img
                src={src}
                alt={`MELT gallery image ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 will-change-transform"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
