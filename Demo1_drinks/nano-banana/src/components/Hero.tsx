"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Product } from "@/data/products";

interface Props {
  product: Product;
}

export const Hero: React.FC<Props> = ({ product }) => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className="h-screen absolute top-0 left-0 right-0 z-20 flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="text-center px-6">
        <h1 className="text-8xl md:text-[10rem] font-black text-white uppercase tracking-tighter leading-[0.85] mb-4">
          {product.name}
        </h1>
        <p className="text-2xl md:text-5xl font-medium text-white/90 tracking-tight mb-16">
          {product.section1.subtitle}
        </p>

        {/* Info Bar */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white/90">
          <div className="text-5xl font-black">{product.price}</div>
          <div className="hidden md:block w-px h-12 bg-white/30" />
          <ul className="flex flex-col items-start gap-1">
            {product.features.map((feature, idx) => (
              <li key={idx} className="text-[11px] font-bold uppercase tracking-widest leading-none">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
