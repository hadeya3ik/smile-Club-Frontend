'use client'
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import pink from '@/public/medias/pink.png'

export default function Mask() {
  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = 0.1;
  const targetMaskSize = 30;
  const easing = 0.85;
  let easedScrollProgress = 0;

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    stickyMask.current.style.webkitMaskSize =
      (initialMaskSize + maskSizeProgress) * 100 + '%';
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
      <div ref={container} className="relative h-[200vh] bg-white">
        <div
          ref={stickyMask}
          className="flex overflow-hidden sticky top-0 items-center justify-center"
          style={{
            WebkitMaskImage: "url('/medias/mask.svg')",
            WebkitMaskPosition: '52.35% center',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskSize: '10%',
          }}
        >
          <Image alt="" src={pink} className="h-full w-full object-cover" /> 
        </div>
      </div>
    </main>
  );
}
