import { motion } from "framer-motion";

const awards = [
  { org: "What Hi-Fi?", award: "Product of the Year", year: "2024", stars: 5 },
  { org: "CNET", award: "Editors' Choice", year: "2024", stars: 5 },
  { org: "Rtings.com", award: "#1 Overall Headphones", year: "2024", stars: null },
  { org: "TechRadar", award: "5/5 — Highest Rated", year: "2024", stars: 5 },
  { org: "Sound & Vision", award: "Top Product Award", year: "2024", stars: null },
  { org: "AVForums", award: "Recommended Award", year: "2024", stars: 5 },
];

const pressQuotes = [
  {
    publication: "The Verge",
    quote: "The best noise-cancelling headphones you can buy, full stop.",
  },
  {
    publication: "WIRED",
    quote: "Sony has done the impossible — improved on the best.",
  },
  {
    publication: "Rolling Stone",
    quote: "For music lovers, this is the endgame.",
  },
];

export default function AwardsPress() {
  return (
    <section className="relative z-20 bg-[#030303] py-32 md:py-48 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-[#00D6FF] mb-4">Recognition</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white/90">Industry-Acclaimed.</h2>
        </motion.div>

        {/* Awards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-24">
          {awards.map((a, i) => (
            <motion.div
              key={a.org}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white/[0.025] border border-white/8 rounded-2xl p-6 text-center hover:border-white/15 transition-colors"
            >
              {a.stars && <div className="text-yellow-400 text-sm mb-3">{"★".repeat(a.stars)}</div>}
              <p className="text-white font-bold text-sm mb-1">{a.org}</p>
              <p className="text-white/50 text-xs font-light">{a.award}</p>
              <p className="text-white/25 text-xs mt-2">{a.year}</p>
            </motion.div>
          ))}
        </div>

        {/* Press quotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pressQuotes.map((q, i) => (
            <motion.div
              key={q.publication}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <p className="text-[#00D6FF] text-xs uppercase tracking-[0.3em] mb-3">{q.publication}</p>
              <p className="text-white/70 text-xl md:text-2xl font-light leading-snug italic">&ldquo;{q.quote}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
