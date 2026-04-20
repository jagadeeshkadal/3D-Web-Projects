"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CanvasSequence from "@/components/CanvasSequence";

export default function Home() {
  const { scrollYProgress } = useScroll();

  // HERO / INTRO (0 - 15%)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  // ENGINEERING REVEAL (15% - 40%)
  const revealOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.4], [0, 1, 1, 0]);
  const revealX = useTransform(scrollYProgress, [0.15, 0.25], [-50, 0]);

  // NOISE CANCELLING (40% - 65%)
  const ancOpacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.65], [0, 1, 1, 0]);
  const ancX = useTransform(scrollYProgress, [0.4, 0.5], [50, 0]);

  // SOUND & UPSCALING (65% - 85%)
  const soundOpacity = useTransform(scrollYProgress, [0.65, 0.75, 0.8, 0.85], [0, 1, 1, 0]);
  const soundY = useTransform(scrollYProgress, [0.65, 0.75], [50, 0]);

  // REASSEMBLY & CTA (85% - 100%)
  const ctaOpacity = useTransform(scrollYProgress, [0.85, 0.95, 1], [0, 1, 1]);
  const ctaY = useTransform(scrollYProgress, [0.85, 0.95], [50, 0]);

  return (
    <main className="relative bg-[#050505] text-white">
      <Navbar />
      
      {/* Background Gradient matching the prompt */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center">
        <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[radial-gradient(circle,rgba(0,80,255,0.08)_0%,rgba(5,5,5,0)_70%)]" />
      </div>

      <CanvasSequence />

      {/* 
        Scrollable container to create scroll space.
        400vh gives us plenty of room to map scroll values.
      */}
      <div className="relative h-[400vh] w-full z-10 pointer-events-none">
        
        {/* HERO / INTRO */}
        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="fixed inset-0 flex flex-col items-center justify-end pb-[15vh] md:pb-[20vh] text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white/90">
            Sony WH-1000XM6
          </h1>
          <p className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-white/80 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            Silence, perfected.
          </p>
          <p className="text-sm md:text-base text-white/60 max-w-md mx-auto font-light">
            Flagship wireless noise cancelling, re‑engineered for a world that never stops.
          </p>
        </motion.div>

        {/* ENGINEERING REVEAL */}
        <motion.div 
          style={{ opacity: revealOpacity, x: revealX }}
          className="fixed inset-y-0 left-0 flex flex-col justify-center px-8 md:px-24 w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-white/90">
            Precision-engineered <br /> for silence.
          </h2>
          <div className="space-y-4 text-white/60 text-lg font-light max-w-sm">
            <p>
              Custom drivers, sealed acoustic chambers, and optimized airflow deliver studio-grade clarity.
            </p>
            <p>
              Every component is tuned for balance, power, and comfort—hour after hour.
            </p>
          </div>
        </motion.div>

        {/* NOISE CANCELLING */}
        <motion.div 
          style={{ opacity: ancOpacity, x: ancX }}
          className="fixed inset-y-0 right-0 flex flex-col justify-center items-end text-right px-8 md:px-24 w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-white/90">
            Adaptive noise <br /> cancelling, redefined.
          </h2>
          <div className="space-y-4 text-white/60 text-lg font-light max-w-sm">
            <p>
              Multi-microphone array listens in every direction.
            </p>
            <p>
              Real-time noise analysis adjusts to your environment.
            </p>
            <p>
              Your music stays pure—planes, trains, and crowds fade away.
            </p>
          </div>
        </motion.div>

        {/* SOUND & UPSCALING */}
        <motion.div 
          style={{ opacity: soundOpacity, y: soundY }}
          className="fixed inset-y-0 left-0 flex flex-col justify-center px-8 md:px-24 w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-[#00D6FF]/60">
            Immersive, <br /> lifelike sound.
          </h2>
          <div className="space-y-4 text-white/60 text-lg font-light max-w-sm">
            <p>
              High-performance drivers unlock detail, depth, and texture in every track.
            </p>
            <p>
              AI-enhanced upscaling restores clarity to compressed audio, so every note feels alive.
            </p>
          </div>
        </motion.div>

        {/* REASSEMBLY & CTA */}
        <motion.div 
          style={{ opacity: ctaOpacity, y: ctaY }}
          className="fixed inset-0 flex flex-col items-center justify-end pb-[15vh] md:pb-[20vh] text-center px-6 pointer-events-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-white/90">
            Hear everything.<br />Feel nothing else.
          </h2>
          <p className="text-lg md:text-xl font-medium tracking-tight mb-10 text-white/60">
            WH‑1000XM6. Designed for focus, crafted for comfort.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="relative group px-8 py-4 rounded-full overflow-hidden bg-black border border-white/10 hover:border-[#0050FF]/50 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0050FF] to-[#00D6FF] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <span className="relative z-10 text-white text-base font-semibold tracking-wide">
                Experience WH-1000XM6
              </span>
            </button>
            <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 text-sm font-medium underline underline-offset-4 decoration-white/20 hover:decoration-white/80">
              See full specs
            </a>
          </div>
          <p className="text-xs text-white/40 mt-6 font-light">
            Engineered for airports, offices, and everything in between.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
