import { motion } from "framer-motion";

const rows = [
  { feature: "Noise Cancellation", xm6: "✓ Industry-leading", xm5: "✓ Excellent", ch720n: "✓ Good" },
  { feature: "Battery Life", xm6: "40 hours", xm5: "30 hours", ch720n: "35 hours" },
  { feature: "Quick Charge (10 min)", xm6: "3 hours", xm5: "5 hours", ch720n: "1.5 hours" },
  { feature: "LDAC Hi-Res Audio", xm6: "✓", xm5: "✓", ch720n: "—" },
  { feature: "360 Reality Audio", xm6: "✓", xm5: "✓", ch720n: "—" },
  { feature: "Multipoint Connection", xm6: "✓ 2 devices", xm5: "✓ 2 devices", ch720n: "✓ 2 devices" },
  { feature: "Microphones", xm6: "8", xm5: "6", ch720n: "4" },
  { feature: "Foldable Design", xm6: "✓", xm5: "✓", xm6val: "✓", ch720n: "✓" },
  { feature: "Weight", xm6: "250g", xm5: "250g", ch720n: "192g" },
  { feature: "Colors Available", xm6: "4", xm5: "3", ch720n: "4" },
  { feature: "Price", xm6: "$399", xm5: "$279", ch720n: "$149" },
];

const colColors = ["#00D6FF", "#a78bfa", "#34d399"];

export default function CompareModels() {
  return (
    <section id="compare" className="relative z-20 bg-[#050505] py-32 md:py-48 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-[#00D6FF] mb-4">Side by Side</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white/90">Compare Models</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="overflow-x-auto rounded-3xl border border-white/8"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/8">
                <th className="text-left p-6 text-white/30 text-sm font-light uppercase tracking-widest w-1/3">Feature</th>
                {[
                  { name: "WH-1000XM6", color: colColors[0] },
                  { name: "WH-1000XM5", color: colColors[1] },
                  { name: "WH-CH720N", color: colColors[2] },
                ].map((col) => (
                  <th key={col.name} className="p-6 text-center" style={{ color: col.color }}>
                    <div className="text-sm font-bold tracking-tight">{col.name}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-white/5 hover:bg-white/[0.02] transition-colors ${i === rows.length - 1 ? "border-0" : ""}`}
                >
                  <td className="p-6 text-white/50 text-sm font-light">{row.feature}</td>
                  <td className="p-6 text-center text-sm text-white/80">{row.xm6}</td>
                  <td className="p-6 text-center text-sm text-white/80">{row.xm5}</td>
                  <td className="p-6 text-center text-sm text-white/80">{row.ch720n}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
