'use client'
import React, { useRef } from 'react';
import Picture7 from '@/images/pexels8.jpg';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import Navigation from './Navigation';

function Hero() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const width = useTransform(scrollYProgress, [0, 1], ['85%', '100%']);

    return ( <main>
            <Navigation/>
            <div ref={container} className="relative h-[300vh]">
                <div className="sticky top-0 h-screen overflow-hidden">
                    <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
                        <motion.div
                            style={{ width }}
                            className="relative h-[90vh] overflow-hidden"
                        >
                            <Image
                                src={Picture7}
                                fill
                                alt="image"
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Hero;
