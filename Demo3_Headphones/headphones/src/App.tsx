import { useRef, useState } from "react";
import { useScroll, motion, AnimatePresence, useMotionValueEvent } from "framer-motion";
import Navbar from "./components/Navbar";
import CanvasSequence from "./components/CanvasSequence";
import ProductLineup from "./components/ProductLineup";
import SoundTechnology from "./components/SoundTechnology";
import Testimonials from "./components/Testimonials";
import CompareModels from "./components/CompareModels";
import AwardsPress from "./components/AwardsPress";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Track which phase is active — only ONE phase in DOM at a time
  const [phase, setPhase] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.13)       setPhase(0); // Hero intro
    else if (v < 0.19) setPhase(-1); // gap
    else if (v < 0.39) setPhase(1); // Engineering
    else if (v < 0.45) setPhase(-1); // gap
    else if (v < 0.63) setPhase(2); // ANC
    else if (v < 0.68) setPhase(-1); // gap
    else if (v < 0.84) setPhase(3); // Sound
    else if (v < 0.89) setPhase(-1); // gap
    else               setPhase(4); // CTA
  });

  // Still use transforms for the canvas animation
  const frameProgress = scrollYProgress;

  return (
    <main className="relative bg-[#050505] text-white">
      <Navbar />

      {/* Background Gradient */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center">
        <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle,rgba(0,80,255,0.08)_0%,rgba(5,5,5,0)_70%)]" />
      </div>

      {/* ── HERO SCROLL ANIMATION ── */}
      <div ref={containerRef} className="relative h-[800vh] w-full z-10">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <CanvasSequence scrollProgress={frameProgress} />

          <div className="absolute inset-0 pointer-events-none">
            <AnimatePresence mode="wait">

              {phase === 0 && (
                <motion.div
                  key="phase-hero"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 flex flex-col items-center justify-end pb-[15vh] md:pb-[20vh] text-center px-6"
                >
                  <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 text-white">
                    Sony WH-1000XM6
                  </h1>
                  <p className="text-xl md:text-2xl font-light tracking-wide mb-4 text-white/70">
                    Silence, perfected.
                  </p>
                  <p className="text-sm text-white/50 max-w-md mx-auto font-light tracking-wide">
                    Flagship wireless noise cancelling, re‑engineered for a world that never stops.
                  </p>
                </motion.div>
              )}

              {phase === 1 && (
                <motion.div
                  key="phase-engineering"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-y-0 left-0 flex flex-col justify-center px-8 md:px-24 w-full md:w-1/2"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-[#00D6FF] mb-4">Engineering</p>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-white">
                    Precision-engineered <br />for silence.
                  </h2>
                  <div className="space-y-4 text-white/50 text-base font-light max-w-sm leading-relaxed">
                    <p>Custom drivers, sealed acoustic chambers, and optimized airflow deliver studio-grade clarity.</p>
                    <p>Every component tuned for balance, power, and comfort—hour after hour.</p>
                  </div>
                </motion.div>
              )}

              {phase === 2 && (
                <motion.div
                  key="phase-anc"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-y-0 right-0 flex flex-col justify-center items-end text-right px-8 md:px-24 w-full md:w-1/2"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-[#00D6FF] mb-4">Noise Cancelling</p>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-white">
                    Adaptive noise<br />cancelling, redefined.
                  </h2>
                  <div className="space-y-3 text-white/50 text-base font-light max-w-sm leading-relaxed">
                    <p>Multi-microphone array listens in every direction.</p>
                    <p>Real-time noise analysis adjusts to your environment.</p>
                    <p>Planes, trains, crowds — gone.</p>
                  </div>
                </motion.div>
              )}

              {phase === 3 && (
                <motion.div
                  key="phase-sound"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-y-0 left-0 flex flex-col justify-center px-8 md:px-24 w-full md:w-1/2"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-[#00D6FF] mb-4">Audio Quality</p>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-[#00D6FF]/60">
                    Immersive,<br />lifelike sound.
                  </h2>
                  <div className="space-y-3 text-white/50 text-base font-light max-w-sm leading-relaxed">
                    <p>High-performance drivers unlock detail, depth, and texture in every track.</p>
                    <p>AI-enhanced upscaling restores clarity to compressed audio.</p>
                  </div>
                </motion.div>
              )}

              {phase === 4 && (
                <motion.div
                  key="phase-cta"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 flex flex-col items-center justify-end pb-[12vh] text-center px-6 pointer-events-auto"
                >
                  <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4 text-white">
                    Hear everything.<br />Feel nothing else.
                  </h2>
                  <p className="text-base font-light tracking-wide mb-10 text-white/50">
                    WH‑1000XM6 — Designed for focus, crafted for comfort.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <button className="px-10 py-4 rounded-full bg-gradient-to-r from-[#0050FF] to-[#00D6FF] text-white text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity">
                      Shop Now — $399
                    </button>
                    <a href="#" className="text-white/50 hover:text-white transition-colors duration-300 text-sm font-medium underline underline-offset-4 decoration-white/20">
                      See full specs
                    </a>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── ALL SECTIONS ── */}
      <ProductLineup />
      <SoundTechnology />

      {/* Battery & Connectivity */}
      <section className="relative z-20 bg-[#050505] py-32 md:py-48 px-6 md:px-12 border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2">
            <p className="text-sm uppercase tracking-[0.4em] text-[#00D6FF] mb-6">Power</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-10 text-white/90">
              Battery that outlasts<br />your journey.
            </h2>
            <div className="space-y-6">
              {[
                { num: "40", label: "Hours of playback with ANC on" },
                { num: "3", label: "Hours of play from a 3-minute charge" },
                { num: "2", label: "Devices connected simultaneously" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0050FF]/20 to-[#00D6FF]/20 border border-[#00D6FF]/20 flex items-center justify-center text-[#00D6FF] font-bold text-2xl group-hover:border-[#00D6FF]/50 transition-colors">
                    {stat.num}
                  </div>
                  <div className="text-white/60 font-light text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 relative w-full flex items-center justify-center" style={{ minHeight: 400 }}>
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-white/8 animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border border-white/5 animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,80,255,0.08)_0%,transparent_70%)]" />
            <img
              src="/frames/ezgif-frame-120.jpg"
              alt="Headphones"
              className="relative z-10 w-64 md:w-80 object-contain opacity-95 mix-blend-screen drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <Testimonials />
      <AwardsPress />
      <CompareModels />
      <Newsletter />
      <Footer />
    </main>
  );
}
