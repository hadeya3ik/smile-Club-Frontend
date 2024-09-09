'use client'
import { ReactLenis } from 'lenis/react';
import NavBar from '@/components/NavBar';
import Cards from '@/components/Cards';

export default function Home() {
  return ( 
    <ReactLenis root>
        <main className="">
        <NavBar/>
      <div className='pt-36'>
      <Cards />
    </div>
    </main>
    </ReactLenis>
  );
}
