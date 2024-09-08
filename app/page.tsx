'use client'

import { ReactLenis } from 'lenis/react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Cards from '@/components/Cards';
export default function Home() {
  return ( <ReactLenis root>
    <main className="">
      {/* <NavBar/> */}
      <Cards/>
      <div className='h-screen'></div>
    </main>
    </ReactLenis>
  );
}
