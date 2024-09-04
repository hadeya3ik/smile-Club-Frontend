'use client'
import React from 'react'
import Picture1 from '@/images/pexels1.jpg';
import Picture2 from '@/images/pexels2.jpg';
import Picture3 from '@/images/pexels3.jpg';
import Picture4 from '@/images/pexels4.jpg'
import Picture5 from '@/images/pexels5.jpg'
import Picture6 from '@/images/pexels6.jpg'
import Picture7 from '@/images/pexels7.jpg'
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Zoom() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        { src: Picture1, scale: scale4 },
        { src: Picture2, scale: scale5 },
        { src: Picture3, scale: scale6 },
        { src: Picture4, scale: scale5 },
        { src: Picture5, scale: scale6 },
        { src: Picture6, scale: scale8 },
        { src: Picture7, scale: scale9 }
    ];

    return (
        <div ref={container} className="relative h-[300vh]">
            <div className="sticky top-0 h-screen overflow-hidden">
                {pictures.map(({ src, scale }, index) => (
                    <motion.div
                        key={index}
                        style={{ scale }}
                        className="absolute top-0 left-0 flex items-center justify-center w-full h-full"
                    >
                        <div className={`relative ${imagePositionClasses(index)} `}>
                            <Image
                                src={src}
                                layout="fill"
                                alt="image"
                                placeholder="blur"
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

function imagePositionClasses(index : number) {
    switch (index) {
        case 1:
            return 'w-[35vw] h-[30vh] top-[-30vh] left-[5vw]';
        case 2:
            return 'w-[20vw] h-[45vh] top-[-10vh] left-[-25vw]';
        case 3:
            return 'w-[25vw] h-[25vh] left-[27.5vw]';
        case 4:
            return 'w-[20vw] h-[25vh] top-[27.5vh] left-[5vw]';
        case 5:
            return 'w-[30vw] h-[25vh] top-[27.5vh] left-[-22.5vw]';
        case 6:
            return 'w-[15vw] h-[15vh] top-[22.5vh] left-[25vw]';
        default:
            return 'w-[25vw] h-[25vh]';
    }
}
