'use client';

import './header.css'
import { useState , useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from './nav';
import Link from 'next/link';



export default function Index() {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if (isActive) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isActive]);

    useEffect(() => {
        if (isActive) {
          document.body.classList.add('navActive');
        } else {
          document.body.classList.remove('navActive');
        }
      }, [isActive]);

    return (        <div className={`border flex flex-col header ${isActive ? 'headerActive' : ''}`}>
            <div className='flex'>
                <div onClick={() => setIsActive(!isActive)} className='p-4'>
                    <div className={`burger ${isActive ? 'burgerActive' : ''}`}></div>
                </div>
                <div className='flex-1 flex justify-center'>
                    <div className='LogoText logoContainer'>
                    <Link href='/' className={`hover-target`}>
                        <h1 className={`hoverTarget ${isActive ? 'navLogo' : ''}`}>Baking Horizon</h1>
                    </Link>
                    </div>
                </div>
            </div>
            <AnimatePresence mode="wait">
                {isActive && 
                <div onClick={() => setIsActive(!isActive)} className='navActive'>
                    <Nav />
                </div>
                }
            </AnimatePresence>
        </div>);
}