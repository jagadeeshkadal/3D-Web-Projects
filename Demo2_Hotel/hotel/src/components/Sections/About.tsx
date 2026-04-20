import { motion } from 'framer-motion';
import { Sparkles, Shield, Globe } from 'lucide-react';

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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-4 font-sans">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif uppercase tracking-tight text-white font-light mb-8">
            Beyond The<br />Horizon
          </h2>
          <p className="text-white/35 font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Tailored itineraries for the modern explorer. We don't just find destinations; 
            we curate experiences that linger in the soul long after the journey ends.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
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

              <h3 className="text-lg uppercase tracking-[0.15em] font-serif text-white mb-4 
                             group-hover:text-accent transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm text-white/25 font-sans leading-relaxed group-hover:text-white/40 transition-colors duration-500">
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
            { value: "150+", label: "Destinations" },
            { value: "12K", label: "Happy Travelers" },
            { value: "98%", label: "Satisfaction" },
            { value: "24/7", label: "Concierge" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-serif text-white mb-2">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-sans">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
