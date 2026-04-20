import { useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface CanvasStageProps {
  totalFrames: number;
  images: HTMLImageElement[];
}

export const CanvasStage = ({ totalFrames, images }: CanvasStageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth the scroll input for that "heavy" luxury feel
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 25 });
  const frameIndex = useTransform(smoothProgress, [0, 1], [1, totalFrames]);

  const drawImage = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[index]) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const img = images[index];
    
    // Clear and draw
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // Cover logic
    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;
    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      drawHeight = canvas.height;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      // Initial draw
      drawImage(Math.round(frameIndex.get()));
    };

    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize();

    return () => window.removeEventListener('resize', updateCanvasSize);
  }, [images]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    drawImage(Math.round(latest));
  });

  return (
    <div ref={containerRef} className="h-[800vh] relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full object-cover"
          style={{ width: '100vw', height: '100vh' }}
        />
      </div>
    </div>
  );
};
