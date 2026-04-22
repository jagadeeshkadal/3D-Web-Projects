"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Product } from "@/data/products";

interface Props {
  product: Product;
}

export const ProductBottleScroll: React.FC<Props> = ({ product }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameCount = 200;
  const startFrame = 1;
  const frameIndex = useTransform(scrollYProgress, [0, 1], [startFrame, frameCount]);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    const preloadImages = () => {
      for (let i = startFrame; i <= frameCount; i++) {
        const img = new Image();
        img.src = `${product.folderPath}/${i}.jpg`;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === (frameCount - startFrame + 1)) {
            setIsLoading(false);
          }
        };
        loadedImages[i] = img;
      }
      setImages(loadedImages);
    };

    preloadImages();
  }, [product]);

  // Draw to canvas
  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      if (!canvas || !context || images.length === 0) return;

      const index = Math.floor(frameIndex.get());
      const image = images[index] || images[startFrame];

      if (image && image.complete) {
        // Clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw image with "cover" logic
        const wrh = image.width / image.height;
        let newWidth = canvas.width;
        let newHeight = newWidth / wrh;
        
        if (newHeight < canvas.height) {
          newHeight = canvas.height;
          newWidth = newHeight * wrh;
        }
        
        const psw = (canvas.width - newWidth) / 2;
        const psh = (canvas.height - newHeight) / 2;
        
        context.drawImage(image, psw, psh, newWidth, newHeight);
      }
      
      requestAnimationFrame(render);
    };

    const animationFrame = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrame);
  }, [images, frameIndex]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-transparent z-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full"
            />
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="z-0 pointer-events-none drop-shadow-2xl"
          style={{ width: '100vw', height: '100vh' }}
        />

      </div>
    </div>
  );
};
