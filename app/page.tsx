'use client'
import { ReactLenis } from 'lenis/react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Cards from '@/components/Cards';
import Hero from '@/images/Hero.svg'
import Mask from '@/components/Mask';

export default function Home() {
  return ( 
  <ReactLenis root>
    <main className="bg-[#599CFF] ">
      <NavBar/>
      <div className='border- border-red-500 sm:py-40 md:py-0 py-60'>
      <div className='z-0 absolute top-[50vh] left-[50vw] bg-red-500 h-[100px] w-[100px] rounded-full'></div>
        <Hero className='relative z-10' />
      </div>
      <Mask/>
    </main>
  </ReactLenis>
  );
}
