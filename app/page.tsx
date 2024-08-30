'use client'

import { ReactLenis } from 'lenis/react';
import Zoom from "@/components/Zoom";
import ParallaxBg from "@/components/ParallaxBg";
import Hero from '@/components/Hero';

export default function Home() {

  return ( <ReactLenis root>
    <main className="">
      <Hero/>
      <Zoom/>
      <div className="h-screen">
        lol
      </div>
      <ParallaxBg/>
      <div className="h-screen">
        lol
      </div>
    </main>
    </ReactLenis>
  );
}
