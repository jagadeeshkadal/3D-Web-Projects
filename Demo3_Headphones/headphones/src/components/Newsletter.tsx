import { motion } from "framer-motion";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="relative z-20 bg-[#050505] py-32 md:py-40 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-white/[0.04] absolute" />
        <div className="w-[900px] h-[900px] rounded-full border border-white/[0.02] absolute" />
        <div className="w-[1200px] h-[1200px] rounded-full border border-white/[0.01] absolute" />
        <div className="w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,80,255,0.06)_0%,transparent_70%)] absolute" />
      </div>

      <div className="max-w-3xl mx-auto relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-[#00D6FF] mb-6">Stay in the Loop</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white/90 mb-6">
            Be first to hear<br />what's next.
          </h2>
          <p className="text-white/50 font-light text-lg mb-12 max-w-md mx-auto">
            Early access to new launches, exclusive drops, and audio insights from our engineers.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6"
            >
              <p className="text-2xl font-bold text-[#00D6FF] mb-2">You're in. ✓</p>
              <p className="text-white/40 text-sm">Watch your inbox for what's coming.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 bg-white/[0.04] border border-white/10 rounded-full px-6 py-4 text-white placeholder-white/30 text-sm outline-none focus:border-[#00D6FF]/40 transition-colors"
              />
              <button
                type="submit"
                className="relative group px-8 py-4 rounded-full overflow-hidden bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-white/20 text-xs mt-5">No spam. Unsubscribe at any time.</p>
        </motion.div>
      </div>
    </section>
  );
}
