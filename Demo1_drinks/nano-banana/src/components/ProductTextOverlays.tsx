"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { Product } from "@/data/products";

interface Props {
  product: Product;
}

interface SectionProps {
  title: string;
  subtitle: string;
  range: [number, number];
  progress: MotionValue<number>;
}

const TextSection: React.FC<SectionProps> = ({ title, subtitle, range, progress }) => {
  const opacity = useTransform(progress, [range[0], range[0] + 0.1, range[1] - 0.1, range[1]], [0, 1, 1, 0]);
  const y = useTransform(progress, [range[0], range[0] + 0.1, range[1] - 0.1, range[1]], [50, 0, 0, -50]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
    >
      <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4">
        {title}
      </h2>
      <p className="text-xl md:text-2xl text-white/80 font-medium max-w-2xl">
        {subtitle}
      </p>
    </motion.div>
  );
};

export const ProductTextOverlays: React.FC<Props> = ({ product }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="absolute inset-0 z-10 pointer-events-none">
      <div className="sticky top-0 h-screen w-full">
        <TextSection
          title={product.section1.title}
          subtitle={product.section1.subtitle}
          range={[0.15, 0.3]}
          progress={scrollYProgress}
        />
        <TextSection
          title={product.section2.title}
          subtitle={product.section2.subtitle}
          range={[0.4, 0.55]}
          progress={scrollYProgress}
        />
        <TextSection
          title={product.section3.title}
          subtitle={product.section3.subtitle}
          range={[0.65, 0.8]}
          progress={scrollYProgress}
        />
        <TextSection
          title={product.section4.title}
          subtitle={product.section4.subtitle}
          range={[0.88, 0.98]}
          progress={scrollYProgress}
        />
      </div>
    </div>
  );
};
