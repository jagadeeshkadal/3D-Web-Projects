import { motion, useScroll, useTransform } from 'framer-motion';

interface OverlayTextProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

export const OverlayText = ({ containerRef }: OverlayTextProps) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Phase 1: Hero text — visible early in scroll (0% - 15%)
  const hero1Opacity = useTransform(scrollYProgress, [0.0, 0.04, 0.12, 0.18], [0, 1, 1, 0]);
  const hero1Y = useTransform(scrollYProgress, [0.0, 0.04, 0.12, 0.18], [40, 0, 0, -40]);
  const hero1Scale = useTransform(scrollYProgress, [0.0, 0.04, 0.18], [0.95, 1, 1.05]);

  // Phase 2: Mid text — "You deserve it." (35% - 55%)
  const mid1Opacity = useTransform(scrollYProgress, [0.30, 0.35, 0.50, 0.55], [0, 1, 1, 0]);
  const mid1Y = useTransform(scrollYProgress, [0.30, 0.35, 0.50, 0.55], [60, 0, 0, -30]);

  // Phase 3: Final CTA — "Your journey begins here." (75% - 100%)
  const ctaOpacity = useTransform(scrollYProgress, [0.70, 0.78, 1], [0, 1, 1]);
  const ctaY = useTransform(scrollYProgress, [0.70, 0.78], [80, 0]);
  const ctaScale = useTransform(scrollYProgress, [0.70, 0.78], [0.9, 1]);

  // Gradient overlay that deepens at CTA phase
  const overlayOpacity = useTransform(scrollYProgress, [0.70, 0.85], [0.0, 0.5]);

  return (
    <>
      {/* Dark overlay for readability at end */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="fixed inset-0 bg-black pointer-events-none z-[5]"
      />

      <div className="fixed inset-0 pointer-events-none z-10">
        {/* Phase 1: Hero */}
        <motion.div
          style={{ opacity: hero1Opacity, y: hero1Y, scale: hero1Scale }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center px-6">
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/60 mb-6 font-sans">
              Unparalleled Escape
            </p>
            <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-serif uppercase tracking-tight text-white leading-[0.9] font-light">
              Explore<br />Paradise
            </h1>
            <p className="text-sm md:text-base text-white/50 mt-8 font-sans tracking-wide max-w-md mx-auto">
              Discover the world's most secluded villas
            </p>
          </div>
        </motion.div>

        {/* Phase 2: Mid section */}
        <motion.div
          style={{ opacity: mid1Opacity, y: mid1Y }}
          className="absolute inset-0 flex items-end pb-32 px-10 md:px-20"
        >
          <div className="max-w-lg">
            <h2 className="text-4xl md:text-6xl font-serif uppercase tracking-tight text-white leading-tight font-light mb-6">
              You<br />Deserve It.
            </h2>
            <p className="text-white/40 text-sm md:text-base font-sans leading-relaxed">
              Beyond the ordinary. We craft journeys for those who seek the exceptional.
            </p>
          </div>
        </motion.div>

        {/* Phase 3: CTA */}
        <motion.div
          style={{ opacity: ctaOpacity, y: ctaY, scale: ctaScale }}
          className="absolute inset-0 flex items-center justify-center pointer-events-auto"
        >
          <div className="text-center px-6">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif uppercase tracking-tight text-white leading-[0.9] font-light mb-10">
              Your Journey<br />Begins Here.
            </h2>
            <a
              href="#destinations"
              className="inline-block px-12 py-4 border border-white/30 text-xs uppercase tracking-[0.3em] text-white font-sans
                         hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm"
            >
              Begin The Voyage
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};
