'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Body from './Body';
import Link from 'next/link'

function Footer() {
    return (
      <div className='navFooter flex justify-between items-center p-4'>
          <ul>
                <motion.li 
                    custom={[0.3, 0]} variants={translate} initial="initial" animate="enter" exit="exit">
                    <p className="FooterText hoverTarget">© 2023 BAKING HORIZON</p>
                </motion.li>
            </ul>
          <div className='flex hoverTarget gap-3'>
            <ul>
                <motion.li 
                    custom={[0.3, 0]} variants={translate} initial="initial" animate="enter" exit="exit">
                    <a href="https://www.instagram.com/bakinghorizon/?hl=en" target="_blank" rel="noopener noreferrer">
                      
                    </a>
                </motion.li>
            </ul>
            <ul>
                <motion.li  
                    custom={[0.3, 0]} variants={translate} initial="initial" animate="enter" exit="exit">
                    <a className="" href="https://www.facebook.com/bakinghorizon/" target="_blank" rel="noopener noreferrer">
                      
                    </a>
                </motion.li>
            </ul>
          </div>
          <ul>
                <motion.li 
                    custom={[0.3, 0]} variants={translate} initial="initial" animate="enter" exit="exit">
                    <Link href='/terms-and-conditions' className=''>
                      <p className="hoverTarget FooterText">TERMS AND CONDITIONS</p>
                    </Link>
                </motion.li>
            </ul>
        </div>
    )
}

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Gallery",
    href: "/Gallery",
  },
  {
    title: "Menu",
    href: "/Menu",
  },
  {
    title: "Contact",
    href: "/Contact",
  },]


export default function Index() {
  const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

  return (
      <motion.div variants={height} initial="initial" animate="enter" exit="exit" className="nav">
          <div className="wrapper flex flex-col h-screen justify-between">
              <div className="container self-center justify-self-center flex-1 flex flex-col">
                  <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />    
              </div>
              <Footer />
          </div>
      </motion.div>
  );
}

const transition = {duration: 1, ease: [0.76, 0, 0.24, 1]}

export const opacity = {
    initial: {
        opacity: 0
    },
    open: {
        opacity: 1,
        transition: {duration: 0.35}
    },
    closed: {
        opacity: 0,
        transition: {duration: 0.35}
    }
}

export const height = {
  initial: {
    height: 0
  },
  enter: {
    height: "auto",
    transition
  },
  exit: {
    height: 0,
    transition
  }
}

export const background = {
    initial: {
        height: 0
    },
    open: {
        height: "100vh",
        transition
    },
    closed: {
        height: 0,
        transition
    }
}

export const blur = {
    initial: {
        filter: "blur(0px)",
        opacity: 1
    },
    open: {
        filter: "blur(4px)",
        opacity: 0.6,
        transition: {duration: 0.3}
    },
    closed: {
        filter: "blur(0px)",
        opacity: 1,
        transition: {duration: 0.3}

    }
}

export const translate = {
    initial: {
        y: "100%",
        opacity: 0
    },
    enter: (i) => ({
        y: 0,
        opacity: 1,
        transition: {duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0]}
    }),
    exit: (i) => ({
        y: "100%",
        opacity: 0,
        transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1]}
    })
}