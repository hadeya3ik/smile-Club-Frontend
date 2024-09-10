'use client'
import {motion, useTime, useTransform} from 'framer-motion'
import { ReactLenis } from 'lenis/react';
import NavBar from '@/components/NavBar';
import Hero from '@/images/Hero.svg'
import Mask from '@/components/Mask';
import Clouds from '@/images/Clouds.svg'
import Sunset from '@/images/Sunset.svg'
import Clouds1 from '@/images/Clouds-1.svg'
import Clouds2 from '@/images/Clouds-2.svg'
import Faq from '@/components/Faq';
import InstagramCircle from '@/images/InstagramCircle.svg'
import DiscordCircle from '@/images/DiscordCircle.svg'
import About from '@/components/About';

function MovingIcon({ children } : { children: React.ReactNode }) {
  const time = useTime();
  const rotate = useTransform(time, [0, 8000], [0, 360], { clamp: false });

  return (
    <div className="">
      <motion.div 
        style={{ rotate }} 
        className="w-[100px] h-[100px]"  // Adjust the size here
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Home() {
  return ( 
  <ReactLenis root>
    <main className="bg-secondary">
      <NavBar/>
      <Hero className=''/>
      <div className="bg-primary h-screen -mt-4">
        <About></About>
      </div>
      <Clouds1 className="bg-primary text-tertiary"/>
      <div className="bg-tertiary">
        <Faq/>
      </div>
      <Sunset className="bg-tertiary -mt-1"/>
      <div className='-mt-8 py-4 w-full flex bg-secondary'>
        <a target="_blank" href="https://www.instagram.com/uwsmileclub/" className='cursor-pointer'>
        <MovingIcon>
          <InstagramCircle/>
        </MovingIcon>
        </a>
        <a target="_blank" href="https://discord.com/invite/QrHaD6FCjn" className='cursor-pointer'>
        <MovingIcon>
          <DiscordCircle/>
        </MovingIcon></a>
      </div>
    </main>
  </ReactLenis>
  );
}
