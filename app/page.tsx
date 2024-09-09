'use client'
import { ReactLenis } from 'lenis/react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Cards from '@/components/Cards';
import Hero from '@/images/Hero.svg'
import Mask from '@/components/Mask';
import Clouds from '@/images/Clouds.svg'
import Sunset from '@/images/Sunset.svg'
import Clouds1 from '@/images/Clouds-1.svg'
import Clouds2 from '@/images/Clouds-2.svg'
import CloudsA from '@/images/CLOUDA.svg'


export default function Home() {
  return ( 
  <ReactLenis root>
    <main className="bg-[#599CFF]">
      <NavBar/>
      <Hero className=''/>
      <Clouds2/>
      <div className="bg-[#F4F2E3] h-screen -mt-1">
      </div>
      <Clouds1 className="bg-[#F4F2E3]"/>
      <Sunset className="bg-[#FBD0F4] -mt-1"/>
    </main>
  </ReactLenis>
  );
}
