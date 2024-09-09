'use client'
import { useRef, useEffect } from 'react';

export default function Mask() {
  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = 0.1; 
  const targetMaskSize = 2;   
  const easing = 0.15;
  let easedScrollProgress = 0;

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    const scaleValue = initialMaskSize + maskSizeProgress;
    stickyMask.current.style.transform = `scale(${scaleValue})`;
    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    const scrollProgress =
      stickyMask.current.offsetTop /
      (container.current.getBoundingClientRect().height - window.innerHeight);
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress;
  };

  return (
    <main className="mb-[100vh]">
      <div ref={container} className="relative h-[300vh] bg-white">
        <div
          ref={stickyMask}
          className="flex sticky top-0 items-center justify-center rounded-full transition-transform duration-300"
          style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: '#ff69b4', // Change this color to any color you want for the mask
            overflow: 'hidden',
            transition: 'transform 0.3s ease-out',
          }}
        >
          {/* No image, just a colored div */}
        </div>
      </div>
    </main>
  );
}
