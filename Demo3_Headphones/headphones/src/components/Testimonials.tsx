import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Marcus Chen",
    role: "Music Producer",
    quote: "I've mixed albums on studio monitors costing 10× more. The XM6 reproduces the same detail. For mobile work, nothing else comes close.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Sophia Reeves",
    role: "Long-haul Pilot",
    quote: "Fifteen-hour flights, engine noise, crying infants. With these on, I hear nothing. I literally won't board without them.",
    rating: 5,
    avatar: "SR",
  },
  {
    name: "Daniel Park",
    role: "Software Engineer",
    quote: "Open-plan office. I get into deep flow state in 30 seconds flat once these are on. My productivity doubled. I'm not joking.",
    rating: 5,
    avatar: "DP",
  },
  {
    name: "Amara Osei",
    role: "Audiophile & Reviewer",
    quote: "LDAC over a good DAP is genuinely indistinguishable from a wired connection to me. I tested this blind. Three times. Same result.",
    rating: 5,
    avatar: "AO",
  },
  {
    name: "James Wright",
    role: "Remote Worker",
    quote: "The 40 hours is real. I've done 3-day work trips without ever needing to charge. The quick-charge feature is just icing.",
    rating: 5,
    avatar: "JW",
  },
  {
    name: "Leila Nasseri",
    role: "Classical Violinist",
    quote: "The spatial staging on orchestral recordings is uncanny. I heard details in recordings I've performed in that I never noticed before.",
    rating: 5,
    avatar: "LN",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative z-20 bg-[#050505] py-32 md:py-48 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] bg-[radial-gradient(ellipse,rgba(0,80,255,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-[#00D6FF] mb-4">Verified Reviews</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white/90">Heard by the best.</h2>
          <div className="flex items-center justify-center gap-3 text-white/40">
            <span className="text-yellow-400 text-lg">★★★★★</span>
            <span className="text-sm">4.9 / 5 from 12,400+ reviews</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/[0.02] border border-white/8 rounded-3xl p-8 hover:border-white/15 hover:bg-white/[0.035] transition-all duration-500"
            >
              {/* Stars */}
              <div className="text-yellow-400 text-sm mb-5">{"★".repeat(t.rating)}</div>
              <p className="text-white/70 font-light leading-relaxed mb-8 text-base">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0050FF]/30 to-[#00D6FF]/30 flex items-center justify-center text-[#00D6FF] text-xs font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
