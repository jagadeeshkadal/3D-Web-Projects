import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useEffect, useState, useCallback } from 'react';

interface ScrollVideoProps {
  src: string;
}

export const ScrollVideo = ({ src }: ScrollVideoProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const rafId = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const videoTime = useTransform(scrollYProgress, [0, 1], [0, duration]);

  const seekVideo = useCallback((time: number) => {
    const video = videoRef.current;
    if (!video || !isReady || !duration) return;
    const clampedTime = Math.max(0, Math.min(time, duration));
    if (Math.abs(video.currentTime - clampedTime) > 0.01) {
      video.currentTime = clampedTime;
    }
  }, [isReady, duration]);

  useMotionValueEvent(videoTime, "change", (latest) => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => seekVideo(latest));
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoaded = () => {
      setDuration(video.duration);
      setIsReady(true);
      video.currentTime = 0;
    };

    video.preload = 'auto';
    video.addEventListener('loadedmetadata', handleLoaded);
    if (video.readyState >= 1) handleLoaded();

    return () => {
      video.removeEventListener('loadedmetadata', handleLoaded);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="h-[500vh] relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
