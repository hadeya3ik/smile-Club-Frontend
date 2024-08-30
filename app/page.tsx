'use client'

import { ReactLenis } from 'lenis/react';
import Zoom from "@/components/Zoom";
import ParallaxBg from "@/components/ParallaxBg";
export default function Home() {

  return (
    <ReactLenis root>
    <main className="">
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
