import { useState, useEffect } from 'react';

export const useImagePreloader = (path: string, count: number) => {
  const [progress, setProgress] = useState(0);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= count; i++) {
      const img = new Image();
      // Padding the index for 0001.jpg format
      const paddedIndex = String(i).padStart(4, '0');
      img.src = `${path}/${paddedIndex}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        setProgress((loadedCount / count) * 100);
        if (loadedCount === count) {
          setIsLoaded(true);
        }
      };
      
      img.onerror = () => {
        console.error(`Failed to load image: ${img.src}`);
        loadedCount++; // Still count it to avoid hanging, though maybe not ideal
        setProgress((loadedCount / count) * 100);
        if (loadedCount === count) {
          setIsLoaded(true);
        }
      };

      loadedImages[i] = img;
    }
    
    setImages(loadedImages);
  }, [path, count]);

  return { progress, images, isLoaded };
};
