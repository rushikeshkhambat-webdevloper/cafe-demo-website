import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { menuCategories, menuItems } from "../data/cafeData";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0]);

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  const handleWhatsAppOrder = (name) => {
    const msg = `Hi! I'd like to order: ${name}`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="menu" className="py-24 md:py-32 bg-[#F0E4D3]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 will-change-transform"
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-4">Our Menu</h2>
          <p className="text-sm text-gray-600 max-w-md mx-auto">
            A small, thoughtful selection — made fresh every day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-14 will-change-transform"
        >
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-colors ${
                activeCategory === category
                  ? "bg-[#E07B39] text-white"
                  : "border border-[#D4C4B0] text-[#2A1810] hover:border-[#E07B39]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
          >
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start justify-between gap-4 will-change-transform"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="text-lg font-semibold whitespace-nowrap">{item.name}</h3>
                    <span className="flex-1 border-b border-dotted border-[#E07B39]/40 translate-y-[-4px]" />
                    <span
                      className="text-lg font-medium whitespace-nowrap"
                      style={{ color: "#E07B39" }}
                    >
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">{item.description}</p>
                </div>
                <button
                  onClick={() => handleWhatsAppOrder(item.name)}
                  className="shrink-0 mt-1 w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform will-change-transform"
                  aria-label={`Order ${item.name} on WhatsApp`}
                >
                  <MessageCircle size={16} className="text-white" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
