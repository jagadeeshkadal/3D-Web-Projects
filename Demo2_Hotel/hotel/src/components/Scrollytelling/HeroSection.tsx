import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState, useCallback } from 'react';

const START_FRAME = 55;
const END_FRAME = 253;
const TOTAL_FRAMES = END_FRAME - START_FRAME + 1;
const FRAME_PATH = '/frames/ezgif-frame-';

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const currentFrame = useRef(START_FRAME);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Reset scroll to top on mount to ensure animation starts from the beginning
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Extended scroll space to ensure the final 4k frames are held and seen
  const frameIndex = useTransform(scrollYProgress, [0, 0.95], [START_FRAME, END_FRAME]);

  // Ensure the first text is visible immediately on load (0 scroll = 1 opacity)
  const opacity1 = useTransform(scrollYProgress, [0.0, 0.15, 0.20], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0.0, 0.15, 0.20], [0, 0, -30]);

  const opacity2 = useTransform(scrollYProgress, [0.35, 0.40, 0.65, 0.70], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.40, 0.65, 0.70], [30, 0, 0, -30]);

  const opacity3 = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const scale3 = useTransform(scrollYProgress, [0.85, 0.95], [0.98, 1]);

  useEffect(() => {
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = new Array(END_FRAME + 1);

    const loadImages = () => {
      for (let i = START_FRAME; i <= END_FRAME; i++) {
        const img = new Image();
        const padded = String(i).padStart(3, '0');
        img.src = `${FRAME_PATH}${padded}.jpg`;

        img.onload = () => {
          loadedCount++;
          setLoadProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
          if (loadedCount === TOTAL_FRAMES) setIsLoaded(true);
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === TOTAL_FRAMES) setIsLoaded(true);
        };
        imgs[i] = img;
      }
      setImages(imgs);
    };

    loadImages();
  }, []);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    // Using Math.round to ensure the final frame (253) is hit and held
    const clamped = Math.min(Math.max(START_FRAME, Math.round(index)), END_FRAME);
    const img = images[clamped];

    if (img && img.complete) {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;

      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const imgW = img.naturalWidth || img.width;
      const imgH = img.naturalHeight || img.height;
      const imgRatio = imgW / imgH;
      const canvasRatio = canvas.width / canvas.height;

      let dW, dH, oX, oY;
      if (canvasRatio > imgRatio) {
        dW = canvas.width;
        dH = canvas.width / imgRatio;
        oX = 0;
        oY = (canvas.height - dH) / 2;
      } else {
        dH = canvas.height;
        dW = canvas.height * imgRatio;
        oX = (canvas.width - dW) / 2;
        oY = 0;
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, oX, oY, dW, dH);
      currentFrame.current = clamped;
    }
  }, [images]);

  useEffect(() => {
    const handleResize = () => drawFrame(currentFrame.current);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  useEffect(() => {
    if (isLoaded) drawFrame(START_FRAME);
  }, [isLoaded, drawFrame]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    requestAnimationFrame(() => drawFrame(latest));
  });

  if (!isLoaded) {
    return (
      <div className="h-screen w-full bg-black flex flex-col items-center justify-center gap-8">
        <h2 className="text-white/40 text-[10px] uppercase tracking-[0.5em] font-light">Loading Footage</h2>
        <div className="w-48 h-[1px] bg-white/10 relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-white transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            style={{ width: `${loadProgress}%` }}
          />
        </div>
        <span className="text-white/20 text-[9px] uppercase tracking-widest">{loadProgress}%</span>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="h-[800vh] relative bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full" />
        
        {/* Subtle top gradient for header visibility & general cinematic depth */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        
        <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Text Phase 1 */}
          <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-8xl md:text-[13rem] font-serif uppercase tracking-wider text-white leading-none">Arrival</h1>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.6em] text-white/80 mt-8">Your sanctuary awaits</p>
          </motion.div>

          {/* Text Phase 2 */}
          <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-9xl font-serif uppercase tracking-wider text-white mb-8">Architectural<br/>Harmony</h2>
              <p className="text-white/80 text-[10px] md:text-sm uppercase tracking-[0.4em]">Seclusion Redefined</p>
            </div>
          </motion.div>

          {/* Text Phase 3 */}
          <motion.div style={{ opacity: opacity3, scale: scale3 }} className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-6xl md:text-[11rem] font-serif uppercase tracking-wider text-white mb-14 drop-shadow-2xl">Infinity</h2>
            <button className="px-16 py-6 border border-white/10 text-white text-[10px] uppercase tracking-[0.6em] backdrop-blur-md hover:bg-white hover:text-black transition-all duration-700 pointer-events-auto">
              Secure Stay
            </button>
          </motion.div>
        </div>

        {/* Dynamic Detail */}
        <div className="absolute top-10 left-10 p-4 border-l border-white/10">
          <p className="text-[8px] uppercase tracking-[0.5em] text-white/60">Latitude 4.1755</p>
          <p className="text-[8px] uppercase tracking-[0.5em] text-white/60">Longitude 73.5023</p>
        </div>
      </div>
    </div>
  );
};



