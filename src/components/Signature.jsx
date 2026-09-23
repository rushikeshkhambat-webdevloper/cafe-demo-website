import { motion } from "framer-motion";
import { signatureDishes } from "../data/cafeData";

export default function Signature() {
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
          <h2 className="text-4xl md:text-5xl font-medium mb-4">Chef's Signature</h2>
          <p className="text-sm text-gray-600">Dishes we're known for</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {signatureDishes.map((dish, i) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="will-change-transform"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5]">
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 will-change-transform"
                />
                <span
                  className="absolute top-4 left-4 text-[10px] uppercase tracking-widest font-semibold px-3 py-1.5 rounded-full text-[#2A1810]"
                  style={{ backgroundColor: "#D4A574" }}
                >
                  Chef's Special
                </span>
              </div>
              <h3 className="text-2xl font-medium mb-1">{dish.name}</h3>
              <p className="text-xs text-gray-500 mb-2">{dish.description}</p>
              <span className="text-lg font-medium" style={{ color: "#E07B39" }}>
                ₹{dish.price}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
