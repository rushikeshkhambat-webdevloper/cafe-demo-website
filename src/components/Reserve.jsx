import { useState } from "react";
import { motion } from "framer-motion";

export default function Reserve() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("2");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi! I'd like to reserve a table.\nName: ${name}\nDate: ${date}\nTime: ${time}\nPeople: ${people}\nOccasion: ${occasion || "—"}`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="reserve" className="relative py-24 md:py-32 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1600&q=80"
        alt="Warm restaurant table setting"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-lg mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="bg-[#F0E4D3] rounded-2xl p-8 will-change-transform"
        >
          <h2 className="text-3xl font-medium mb-6 text-center">Reserve a Table</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1.5">
                Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-[#D4C4B0] rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-[#E07B39]"
                placeholder="Your name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1.5">
                  Date
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border border-[#D4C4B0] rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-[#E07B39]"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1.5">
                  Time
                </label>
                <input
                  type="time"
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full border border-[#D4C4B0] rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-[#E07B39]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1.5">
                People
              </label>
              <select
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                className="w-full border border-[#D4C4B0] rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-[#E07B39]"
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Person" : "People"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1.5">
                Occasion (optional)
              </label>
              <input
                type="text"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="w-full border border-[#D4C4B0] rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:border-[#E07B39]"
                placeholder="Birthday, anniversary..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#E07B39] text-white text-xs uppercase tracking-widest font-medium py-3.5 rounded-full hover:scale-[1.02] transition-transform will-change-transform"
            >
              Reserve on WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
