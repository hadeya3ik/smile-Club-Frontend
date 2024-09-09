'use client'
import React, {useState, useEffect} from 'react'
import {motion, useMotionValueEvent, useScroll} from 'framer-motion'
import Link from 'next/link';

function NavBar() {
  const [hiddenNav, setHiddenNav] = useState(false);
  const [previousScrollYProgress, setPreviousScrollYProgress] = useState(0);
  const {scrollYProgress} = useScroll();

  useEffect(() => {

    scrollYProgress.on("change", e => console.log(e))},[]); 

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        const previous = previousScrollYProgress;
        if (latest > previous ) {
          setHiddenNav(true)
        } else {
            setHiddenNav(false)
        }
        setPreviousScrollYProgress(latest);
      });

  return (
    <motion.nav 
        className='sticky top-0 w-ful px-8 z-[1000]'
        variants={{
            visible: { y: 0},
            hidden: {y: "-100%"}
        }}
        animate={hiddenNav ? "hidden" : "visible"}
        transition={{duration:0.35, ease:"easeInOut"}}
        >
        <div className='pt-4 flex gap-4'>
          <div className='w-min px-4 pb-1 rounded-full border-2 border-black bg-[#EFFA78] text-4xl'>
            <Link href="/">
              smile
            </Link>
          </div>
          <div className='w-min px-4 pb-1 rounded-full border-2 border-black bg-[#D1B6F0] text-4xl'>
            <Link href="/resources">
              resources
            </Link>
          </div>
          <div className='w-min px-4 pb-1 rounded-full border-2 border-black bg-[#F09D7B] text-4xl'>
            <Link href="/about">
              about
            </Link>
          </div>
        </div>
        
    </motion.nav>
  )
}

export default NavBar