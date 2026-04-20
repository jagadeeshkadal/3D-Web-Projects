import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, Compass } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);

  const headerBg = useTransform(
    scrollY,
    [0, 150],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.6)"]
  );

  const headerBlur = useTransform(
    scrollY,
    [0, 150],
    ["blur(0px)", "blur(16px)"]
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 150],
    [0, 0.1]
  );

  const navItems = ['Home', 'About', 'Destinations', 'Gallery', 'Contact'];

  return (
    <>
      <motion.header
        style={{
          backgroundColor: headerBg,
          backdropFilter: headerBlur,
          WebkitBackdropFilter: headerBlur,
        }}
        className="fixed top-0 left-0 right-0 z-[100] h-20 px-6 md:px-12 flex items-center justify-between"
      >
        {/* Border line */}
        <motion.div
          style={{ opacity: borderOpacity }}
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-white"
        />

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 cursor-pointer group z-10">
          <Compass className="w-7 h-7 text-accent group-hover:rotate-90 transition-transform duration-700" />
          <span className="text-sm uppercase tracking-[0.25em] font-sans font-medium text-white">
            The Travel Co.
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[11px] uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-300 font-sans relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-400 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-6 z-10">
          <a
            href="#booking"
            className="hidden md:inline-block px-7 py-2.5 border border-white/25 text-[10px] uppercase tracking-[0.25em] text-white font-sans
                       hover:bg-white hover:text-black transition-all duration-400"
          >
            Reserve
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="text-3xl font-serif uppercase tracking-[0.15em] text-white hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href="#booking"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.08, duration: 0.4 }}
              className="mt-4 px-10 py-3 border border-accent text-accent text-xs uppercase tracking-[0.3em] font-sans
                         hover:bg-accent hover:text-white transition-all duration-400"
              onClick={() => setIsOpen(false)}
            >
              Reserve Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
