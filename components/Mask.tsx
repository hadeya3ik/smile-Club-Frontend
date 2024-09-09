'use client'
import { useRef, useEffect } from 'react';
import Clouds from '@/images/Clouds.svg' 
export default function Mask() {
  const container = useRef<HTMLDivElement | null>(null);
  const stickyMask = useRef<HTMLDivElement | null>(null);

  const initialMaskSize = 0.1;
  const targetMaskSize = 1.1;
  const easing = 0.15;
  let easedScrollProgress = 0;
  
  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (stickyMask.current) {
      const maskSizeProgress = targetMaskSize * getScrollProgress();
      const scaleValue = initialMaskSize + maskSizeProgress;
      stickyMask.current.style.transform = `scale(${scaleValue})`;
    }
    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    if (stickyMask.current && container.current ) {
      const containerHeight = container.current.getBoundingClientRect().height;
      const stickyTop = stickyMask.current.getBoundingClientRect().top;
      const viewportMiddle = window.innerHeight / 2;
      const scrollProgress = (viewportMiddle - stickyTop) / (containerHeight - window.innerHeight);
      const delta = scrollProgress - easedScrollProgress;
      easedScrollProgress += delta * easing;
      return Math.max(0, Math.min(1, easedScrollProgress));
    }
    return 0;
  };
  

  return (
    <main className="bg-[#599CFF]">
      <div ref={container} className="overflow-hidden">
        <div
          ref={stickyMask}
          className=" rounded-full transition-transform duration-300"
          style={{
            width: '100vw',
            height: '100vw',
            backgroundColor: '#F4F2E3',
            overflow: 'hidden',
            transition: 'transform 0.3s ease-out',
          }}
        >
        </div>
        {/* <Clouds className="absolute top-[40%]"/> */}
      </div>
    </main>
  );
}
