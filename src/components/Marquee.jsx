const items = [
  "Freshly Roasted Daily",
  "Farm to Table",
  "Handcrafted Desserts",
  "Warm Hospitality",
  "Open Every Day",
];

export default function Marquee() {
  const track = [...items, ...items];

  return (
    <div className="bg-[#E07B39] overflow-hidden py-3">
      <div className="flex whitespace-nowrap animate-marquee">
        {track.map((item, i) => (
          <span
            key={i}
            className="text-white text-xs md:text-sm uppercase tracking-widest font-medium mx-6 flex items-center gap-6"
          >
            {item}
            <span className="text-white/50">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
