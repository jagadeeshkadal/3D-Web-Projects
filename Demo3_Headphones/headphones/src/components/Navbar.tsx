"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollY.get() > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const unsubscribe = scrollY.on("change", handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-black/75 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center">
        <span className="text-white text-lg font-medium tracking-tight">
          Sony WH-1000XM6
        </span>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        {["Overview", "Technology", "Noise Cancelling", "Specs"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-white/60 hover:text-white text-sm transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-6">
        <a
          href="#"
          className="hidden md:block text-white/60 hover:text-white text-sm transition-colors duration-300"
        >
          Buy
        </a>
        <button className="relative group px-5 py-2 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0050FF] to-[#00D6FF] opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute inset-[1px] bg-black rounded-full transition-all duration-300 group-hover:bg-opacity-80"></div>
          <span className="relative z-10 text-white text-sm font-medium">
            Experience
          </span>
        </button>
      </div>
    </motion.nav>
  );
}
