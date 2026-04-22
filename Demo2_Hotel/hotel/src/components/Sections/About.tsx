import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { Sparkles, Shield, Globe } from 'lucide-react';
import { useEffect, useRef } from 'react';

const StatCounter = ({ end, suffix, label }: { end: number, suffix: string, label: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, end, { duration: 2.5, ease: "easeOut" });
      return animation.stop;
    }
  }, [count, end, isInView]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl md:text-7xl font-serif text-white mb-4 flex justify-center tracking-normal">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </p>
      <p className="text-xs uppercase tracking-[0.4em] text-white/70 font-sans">{label}</p>
    </div>
  );
};

const features = [
  {
    icon: Sparkles,
    title: "Seclusion",
    desc: "Private islands and mountain retreats far from the crowds. Your sanctuary, exclusively yours.",
  },
  {
    icon: Shield,
    title: "Curation",
    desc: "Every detail meticulously planned — from michelin-starred dining to private helicopter transfers.",
  },
  {
    icon: Globe,
    title: "Access",
    desc: "Unlock doors that remain closed to others. Connections that transform travel into art.",
  },
];

export const About = () => {

  return (
    <section id="about" className="py-28 md:py-40 px-6 md:px-12 bg-black relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.4 }
            }
          }}
          className="text-center mb-24"
        >
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="text-sm uppercase tracking-[0.4em] text-accent mb-4 font-sans"
          >
            Why Choose Us
          </motion.p>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.9, y: 30 },
              visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif uppercase tracking-[0.15em] text-white font-light mb-8">
              Beyond The Horizon
            </h2>
            <p className="text-white/70 font-sans font-light text-lg md:text-xl max-w-4xl mx-auto leading-loose tracking-[0.1em] text-justify">
              Tailored itineraries for the modern explorer. We don't just find destinations; 
              we curate experiences that linger in the soul long after the journey ends.
            </p>
          </motion.div>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
              className="group text-center md:text-left"
            >
              {/* Top line */}
              <div className="h-[1px] w-full bg-white/5 group-hover:bg-accent/30 transition-colors duration-500 mb-8" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6
                              group-hover:border-accent/40 group-hover:bg-accent/5 transition-all duration-500
                              mx-auto md:mx-0">
                <feature.icon className="w-5 h-5 text-white/40 group-hover:text-accent transition-colors duration-500" />
              </div>

              <h3 className="text-xl uppercase tracking-[0.2em] font-serif text-white mb-5 
                             group-hover:text-accent transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-white/60 font-sans font-light leading-loose tracking-[0.1em] group-hover:text-white transition-colors duration-500 text-left">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 pt-16 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { end: 150, suffix: "+", label: "Destinations" },
            { end: 12, suffix: "K", label: "Happy Travelers" },
            { end: 98, suffix: "%", label: "Satisfaction" },
            { end: 24, suffix: "/7", label: "Concierge" },
          ].map((stat) => (
            <StatCounter key={stat.label} end={stat.end} suffix={stat.suffix} label={stat.label} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
