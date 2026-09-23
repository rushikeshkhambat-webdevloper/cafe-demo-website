import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 10:00 PM" },
  { day: "Saturday", time: "9:00 AM – 11:00 PM" },
  { day: "Sunday", time: "9:00 AM – 10:00 PM" },
];

export default function Location() {
  return (
    <section id="location" className="py-24 md:py-32 bg-[#F0E4D3]">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="will-change-transform"
        >
          <p className="text-xs uppercase tracking-widest font-medium mb-4" style={{ color: "#5C3620" }}>
            Find Us
          </p>
          <h2 className="text-4xl md:text-5xl font-medium mb-8">Visit Us Today</h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0" style={{ color: "#E07B39" }} />
              <p className="text-sm text-gray-600">
                24 Garden Lane, Civil Lines, Nagpur, Maharashtra 440001
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="shrink-0" style={{ color: "#E07B39" }} />
              <a href="tel:+919999999999" className="text-sm text-gray-600 hover:text-[#2A1810]">
                +91 99999 99999
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="shrink-0" style={{ color: "#E07B39" }} />
              <a href="mailto:hello@melt.cafe" className="text-sm text-gray-600 hover:text-[#2A1810]">
                hello@melt.cafe
              </a>
            </div>
          </div>

          <div className="mb-8">
            {hours.map((h) => (
              <div
                key={h.day}
                className="flex justify-between text-sm py-2.5 border-b border-[#D4C4B0]"
              >
                <span className="text-gray-600">{h.day}</span>
                <span className="font-medium">{h.time}</span>
              </div>
            ))}
          </div>

          <a
            href="https://maps.google.com/?q=Civil+Lines+Nagpur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E07B39] text-white text-xs uppercase tracking-widest font-medium px-8 py-3.5 rounded-full hover:scale-105 transition-transform will-change-transform"
          >
            Get Directions
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="will-change-transform"
        >
          <iframe
            title="MELT location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59762.98!2d79.0705!3d21.1466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA4JzQ3LjgiTiA3OcKwMDQnMTMuOCJF!5e0!3m2!1sen!2sin!4v1700000000000"
            className="w-full h-[420px] md:h-full min-h-[420px] rounded-2xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
