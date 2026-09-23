import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const msg = "Hi! I want to know more about MELT.";
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="fixed bottom-6 right-6 z-50 will-change-transform"
        >
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: "#25D366" }}
            animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />
          <button
            onClick={handleClick}
            aria-label="Chat with us on WhatsApp"
            className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform will-change-transform"
            style={{ backgroundColor: "#25D366" }}
          >
            <MessageCircle size={26} className="text-white" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
