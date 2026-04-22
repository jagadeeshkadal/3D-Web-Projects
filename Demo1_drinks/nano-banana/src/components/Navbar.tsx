"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, Menu, ShoppingBag, User } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-3 bg-white/10 backdrop-blur-xl border-b border-white/20" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="w-full px-8 md:px-16 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 bg-orange-500 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-orange-500/30">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col -gap-1">
            <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest leading-none">The Future</span>
            <span className="text-2xl font-black text-white tracking-normal uppercase leading-none">
              Nano<span className="text-orange-400">Banana.</span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <div className="hidden lg:flex items-center gap-8">
            {["Juices", "Our Story", "Health Benefits", "Shop"].map((item) => (
              <a key={item} href="#" className="text-[11px] font-black text-white/70 hover:text-white transition-colors uppercase tracking-[0.3em]">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="relative group px-8 py-3 bg-white text-black font-black uppercase text-[11px] tracking-widest rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all">
              Order Now
            </button>
            <button className="p-3 bg-white/10 hover:bg-white hover:text-black text-white rounded-full border border-white/20 transition-all">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
