import { motion } from 'framer-motion';

const galleryImages = [
  { src: "/frames/ezgif-frame-055.jpg", span: "md:col-span-2 md:row-span-2" },
  { src: "/frames/ezgif-frame-100.jpg", span: "" },
  { src: "/frames/ezgif-frame-156.jpg", span: "" },
  { src: "/frames/ezgif-frame-180.jpg", span: "" },
  { src: "/frames/ezgif-frame-220.jpg", span: "md:col-span-2" },
  { src: "/frames/ezgif-frame-253.jpg", span: "" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-28 md:py-40 px-6 md:px-12 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-accent mb-4 font-sans">
            Visual Journey
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif uppercase tracking-[0.15em] text-white font-light">
            Gallery
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${img.span}`}
            >
              <div className={`w-full ${img.span.includes('row-span-2') ? 'h-full min-h-[400px]' : 'aspect-[4/3]'} overflow-hidden`}>
                <img
                  src={img.src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
                  <span className="text-white text-xl">+</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
