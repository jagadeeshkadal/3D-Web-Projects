import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Star, ArrowRight } from 'lucide-react';

const destinations = [
  {
    name: "Maldives",
    subtitle: "Private Island Villa",
    price: "From $2,400/night",
    rating: "4.9",
    image: "/frames/ezgif-frame-130.jpg",
    description: "Overwater luxury with pristine coral reefs and endless horizons.",
  },
  {
    name: "Bali Highlands",
    subtitle: "Jungle Retreat",
    price: "From $1,800/night",
    rating: "4.8",
    image: "/frames/ezgif-frame-080.jpg",
    description: "Tropical serenity nestled among ancient rainforests and rice terraces.",
  },
  {
    name: "Santorini",
    subtitle: "Oceanfront Suite",
    price: "From $1,500/night",
    rating: "4.9",
    image: "/frames/ezgif-frame-253.jpg",
    description: "Crystal waters and sun-drenched infinity pools on a private island.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export const Destinations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="destinations" className="py-28 md:py-40 px-6 md:px-12 bg-black relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-4 font-sans">
            Curated Collection
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif uppercase tracking-tight text-white font-light mb-6">
            Exclusive Stays
          </h2>
          <p className="text-white/35 font-sans text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Handpicked sanctuaries where luxury meets nature. Each destination 
            offers an experience that transcends the ordinary.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {destinations.map((dest) => (
            <motion.div
              key={dest.name}
              variants={cardVariants}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Rating badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full">
                  <Star className="w-3 h-3 text-accent fill-accent" />
                  <span className="text-[11px] text-white font-sans">{dest.rating}</span>
                </div>

                {/* Bottom info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-3 h-3 text-accent" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-sans">{dest.subtitle}</span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
              </div>

              {/* Text below */}
              <h3 className="text-xl md:text-2xl font-serif uppercase tracking-wide text-white mb-2 group-hover:text-accent transition-colors duration-300">
                {dest.name}
              </h3>
              <p className="text-white/30 text-sm font-sans mb-4 leading-relaxed">
                {dest.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/40 font-sans tracking-wide">{dest.price}</span>
                <div className="flex items-center gap-2 text-accent text-xs font-sans uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
