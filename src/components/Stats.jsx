import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { stats } from "../data/cafeData";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-[#2A1810] py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="will-change-transform"
          >
            <div
              className="text-4xl md:text-5xl font-medium mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: "#D4A574" }}
            >
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-white/70 text-xs uppercase tracking-widest">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
