import { useRef, useEffect, useState } from "react";
import { useTransform, MotionValue } from "framer-motion";

const FRAME_COUNT = 240;

// Utility to generate frame paths
const currentFrame = (index: number) =>
  `/frames/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

export default function CanvasSequence({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Map scroll progress to frame index
  // The first frame is 1, the last is FRAME_COUNT
  const frameIndex = useTransform(scrollProgress, [0, 1], [1, FRAME_COUNT]);

  useEffect(() => {
    // Preload images
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          // Initial draw
          renderFrame(1);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const renderFrame = (index: number) => {
    if (!canvasRef.current || images.length < FRAME_COUNT) return;
    
    // Safety check for index bounds
    const safeIndex = Math.max(0, Math.min(index - 1, FRAME_COUNT - 1));
    const img = images[safeIndex];

    if (!img) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw image maintaining aspect ratio and covering the canvas if needed,
    // but the instruction says: "centered and scaled to fit while preserving aspect ratio"
    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);
    
    const imgRatio = img.width / img.height;
    const canvasRatio = width / height;
    
    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawHeight = height;
      drawWidth = img.width * (height / img.height);
      offsetX = (width - drawWidth) / 2;
      offsetY = 0;
    } else {
      drawWidth = width;
      drawHeight = img.height * (width / img.width);
      offsetX = 0;
      offsetY = (height - drawHeight) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      renderFrame(Math.floor(latest));
    });

    return () => unsubscribe();
  }, [frameIndex, images]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        renderFrame(Math.floor(frameIndex.get()));
      }
    };
    
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial set
    
    return () => window.removeEventListener("resize", handleResize);
  }, [frameIndex, images]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
