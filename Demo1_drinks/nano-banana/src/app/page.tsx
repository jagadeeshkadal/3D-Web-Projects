"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle2, ShoppingCart, ArrowRight } from "lucide-react";
import { products, Product } from "@/data/products";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProductBottleScroll } from "@/components/ProductBottleScroll";
import { ProductTextOverlays } from "@/components/ProductTextOverlays";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProduct = products[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--bg-gradient', currentProduct.gradient);
  }, [currentProduct]);

  return (
    <main className="relative bg-transparent min-h-screen text-white">
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
           key={currentProduct.id}
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.8 }}
        >
          <section className="relative w-full">
            <Hero product={currentProduct} />
            <ProductBottleScroll product={currentProduct} />
            <ProductTextOverlays product={currentProduct} />
          </section>

          {/* Side Arrows */}
          <button 
            onClick={handlePrev}
            className="fixed left-8 top-1/2 -translate-y-1/2 z-40 p-5 bg-white/10 hover:bg-white text-white hover:text-black rounded-full border border-white/20 transition-all shadow-2xl backdrop-blur-md group"
          >
            <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={handleNext}
            className="fixed right-8 top-1/2 -translate-y-1/2 z-40 p-5 bg-white/10 hover:bg-white text-white hover:text-black rounded-full border border-white/20 transition-all shadow-2xl backdrop-blur-md group"
          >
            <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Bottom Pill Menu */}
          <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-40">
            <div className="bg-black/60 backdrop-blur-3xl border border-white/10 rounded-full p-1.5 flex gap-1 shadow-2xl">
              {products.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setCurrentIndex(idx);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${
                    currentIndex === idx 
                    ? "bg-white text-black shadow-xl" 
                    : "text-white/50 hover:text-white"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <section className="py-32 px-6 bg-transparent relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-col relative pt-12"
                >
                  <h3 className="absolute top-0 left-0 text-sm font-black uppercase tracking-[0.4em] text-white/80">Deep Dive</h3>
                  <h2 className="text-6xl md:text-7xl font-black uppercase tracking-wider mb-10 leading-tight">{currentProduct.detailsSection.title}</h2>
                  <p className="text-xl text-white/90 leading-relaxed mb-10 font-medium tracking-wide text-justify">{currentProduct.detailsSection.description}</p>
                  <div className="grid grid-cols-2 gap-8">
                    {currentProduct.stats.map((stat, idx) => (
                      <div key={idx} className="bg-white/5 rounded-3xl p-8 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5 transition-all duration-300">
                        <div className="text-4xl font-black mb-2 tracking-wider">{stat.val}</div>
                        <div className="text-xs uppercase tracking-[0.3em] font-bold text-white/80">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 rounded-[4rem] p-12 backdrop-blur-2xl border border-white/10 flex flex-col hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5 transition-all duration-500"
                >
                  <h3 className="text-5xl md:text-6xl font-black uppercase tracking-wider mb-8 leading-tight">{currentProduct.freshnessSection.title}</h3>
                  <p className="text-xl text-white/90 leading-relaxed font-medium tracking-wide text-justify">{currentProduct.freshnessSection.description}</p>
                  <ul className="mt-8 space-y-4">
                    {currentProduct.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest">
                        <CheckCircle2 className="w-5 h-5 text-orange-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Buy Section */}
          <section className="py-40 bg-white text-black rounded-[5rem] relative z-10">
            <div className="max-w-7xl mx-auto px-6">
              <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-1">
                  <div className="text-left mb-8">
                    <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-black/60 mb-2">Price</h4>
                    <div className="text-6xl md:text-8xl font-black tracking-wider">{currentProduct.buyNowSection.price}</div>
                    <div className="text-sm font-bold uppercase tracking-[0.3em] text-black/60 mt-2">{currentProduct.buyNowSection.unit}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentProduct.buyNowSection.processingParams.map((p, i) => (
                      <span key={i} className="px-4 py-2 bg-black/5 text-black text-xs font-bold rounded-full uppercase tracking-widest">{p}</span>
                    ))}
                  </div>
                </div>

                <div className="flex-1 w-full max-w-md">
                  <button className="group w-full py-8 bg-black text-white rounded-full font-black uppercase text-2xl tracking-normal flex items-center justify-center gap-4 hover:bg-orange-600 transition-all duration-500 relative overflow-hidden shadow-2xl">
                    <span className="relative z-10 italic">Add to Cart</span>
                    <ShoppingCart className="relative z-10 w-8 h-8 outline-none" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </main>
  );
}
