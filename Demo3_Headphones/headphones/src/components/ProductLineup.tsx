import { motion } from "framer-motion";

const products = [
  {
    name: "WH-1000XM6",
    tag: "FLAGSHIP",
    price: "$399",
    color: "#00D6FF",
    desc: "The pinnacle of noise cancellation. Studio-grade audio in a featherlight build.",
    features: ["40hr Battery", "8 Microphones", "LDAC Hi-Res", "Multipoint Connect"],
    badge: "BEST SELLER",
  },
  {
    name: "WH-1000XM5",
    tag: "PRO",
    price: "$279",
    color: "#a78bfa",
    desc: "Professional-grade sound with legendary Sony noise isolation. The trusted workhorse.",
    features: ["30hr Battery", "6 Microphones", "360 Reality Audio", "Quick Charge"],
    badge: "MOST POPULAR",
  },
  {
    name: "WH-CH720N",
    tag: "ESSENTIAL",
    price: "$149",
    color: "#34d399",
    desc: "Incredible ANC at an entry price. Lightweight design for all-day listening.",
    features: ["35hr Battery", "Dual Noise Sensor", "Multipoint", "Fast Pair"],
    badge: null,
  },
];

export default function ProductLineup() {
  return (
    <section id="products" className="relative z-20 bg-[#050505] py-32 md:py-48 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-[#00D6FF] mb-4 font-sans">The Collection</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white/90">Find Your Sound</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-light">
            Three tiers of audio excellence. Each crafted for a different listener, all built on the same obsessive engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative bg-white/[0.02] border border-white/8 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top, ${product.color}10 0%, transparent 70%)` }}
              />

              {product.badge && (
                <div
                  className="inline-block text-[10px] uppercase tracking-[0.3em] px-3 py-1 rounded-full mb-6 font-medium"
                  style={{ background: `${product.color}20`, color: product.color, border: `1px solid ${product.color}40` }}
                >
                  {product.badge}
                </div>
              )}
              {!product.badge && <div className="mb-6 h-[26px]" />}

              <p className="text-xs uppercase tracking-[0.3em] mb-2 font-sans" style={{ color: product.color }}>{product.tag}</p>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">{product.name}</h3>
              <p className="text-4xl font-bold mb-6" style={{ color: product.color }}>{product.price}</p>
              <p className="text-white/50 font-light leading-relaxed mb-8">{product.desc}</p>

              <ul className="space-y-2 mb-10">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-white/60 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: product.color }} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 border group-hover:text-white"
                style={{
                  borderColor: `${product.color}40`,
                  color: product.color,
                  backgroundColor: `${product.color}10`,
                }}
              >
                Shop Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
