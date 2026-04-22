import { motion } from "framer-motion";

const techs = [
  {
    title: "Dual Noise Sensor Technology",
    desc: "Feed-forward and feed-back microphones work in tandem. One captures ambient noise before it reaches your ear; the other catches what slips through. Together they eliminate up to 98% of environmental noise.",
    stat: "98%",
    statLabel: "Noise Eliminated",
    icon: "◈",
  },
  {
    title: "LDAC Hi-Res Wireless Audio",
    desc: "Sony's proprietary LDAC codec transmits up to 3× the data of standard Bluetooth, streaming 24-bit Hi-Res audio wirelessly. Every cymbal shimmer, every bass note, exactly as the artist intended.",
    stat: "3×",
    statLabel: "More Data Than Bluetooth",
    icon: "◉",
  },
  {
    title: "360 Reality Audio",
    desc: "Object-based spatial audio maps individual sound sources—vocals, instruments, effects—to precise points in a sphere around your head. Close your eyes. You are inside the music.",
    stat: "360°",
    statLabel: "Immersive Soundstage",
    icon: "◎",
  },
  {
    title: "Adaptive Sound Control",
    desc: "AI analyses your current activity—walking, commuting, sitting, running—and automatically adjusts the balance between ANC and ambient sound. Zero manual intervention needed.",
    stat: "AI",
    statLabel: "Activity Detection",
    icon: "◇",
  },
];

export default function SoundTechnology() {
  return (
    <section id="technology" className="relative z-20 bg-[#050505] py-32 md:py-48 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-[#00D6FF] mb-4">The Science of Sound</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white/90 max-w-3xl">
            Engineering that rewrites what headphones can do.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 rounded-3xl overflow-hidden">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group bg-[#050505] p-10 md:p-14 hover:bg-white/[0.025] transition-colors duration-500"
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="text-3xl text-[#00D6FF]/50 group-hover:text-[#00D6FF] transition-colors duration-300">{tech.icon}</div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-[#00D6FF] tracking-tighter leading-none">{tech.stat}</div>
                  <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mt-1">{tech.statLabel}</div>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">{tech.title}</h3>
              <p className="text-white/50 font-light leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
