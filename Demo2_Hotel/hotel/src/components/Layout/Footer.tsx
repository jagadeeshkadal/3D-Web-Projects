import { motion } from 'framer-motion';
import { Compass, Instagram, Twitter, Mail, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-neutral-950 border-t border-white/5">
      {/* Back to top */}
      <div className="flex justify-center -mt-6">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors group"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Compass className="w-6 h-6 text-accent" />
              <span className="text-sm uppercase tracking-[0.25em] font-sans font-medium">The Travel Co.</span>
            </div>
            <p className="text-white/30 text-sm font-sans leading-relaxed max-w-sm mb-8">
              Crafting extraordinary journeys for those who seek the exceptional. 
              Every destination is a masterpiece waiting to be experienced.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center
                             hover:border-accent hover:text-accent transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6 font-sans">Explore</h4>
            <ul className="space-y-3">
              {['Destinations', 'Experiences', 'Private Villas', 'Journal'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/30 hover:text-white transition-colors font-sans">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-6 font-sans">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/30 hover:text-white transition-colors font-sans">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/15 font-sans">
            © {new Date().getFullYear()} The Travel Company. All rights reserved.
          </p>
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/15 font-sans">
            Unparalleled Escape
          </p>
        </div>
      </div>
    </footer>
  );
};
