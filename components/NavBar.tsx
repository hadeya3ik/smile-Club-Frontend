'use client'
import React, {useState, useEffect} from 'react'
import {motion, useMotionValueEvent, useScroll} from 'framer-motion'

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
        className='sticky top-0 w-ful px-8'
        variants={{
            visible: { y: 0},
            hidden: {y: "-100%"}
        }}
        animate={hiddenNav ? "hidden" : "visible"}
        transition={{duration:0.35, ease:"easeInOut"}}
        >
        <div className='pt-4 flex gap-4'>
          <div className='w-min px-4 rounded-full border-4 border-black bg-orange-50 text-3xl font-medium'>
            smile
          </div>
          <div className='w-min px-4 rounded-full border-4 border-black bg-orange-50 text-3xl font-medium'>
            resources
          </div>
          <div className='w-min px-4 rounded-full border-4 border-black bg-orange-50 text-3xl font-medium'>
            about
          </div>
        </div>
        
    </motion.nav>
  )
}

export default NavBar