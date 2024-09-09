'use client'
import { ReactLenis } from 'lenis/react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Cards from '@/components/Cards';
import Hero from '@/images/Hero.svg'
import Mask from '@/components/Mask';
import Clouds from '@/images/Clouds.svg'
export default function Home() {
  return ( 
  <ReactLenis root>
    <main className="bg-[#599CFF]">
      <NavBar/>
      <div className=''>
        <div className='absolute top-[30%]'>
          <Mask/>
        </div>
        <Hero className='relative z-10 top-0' />
      </div>
      
      
    </main>
  </ReactLenis>
  );
}
