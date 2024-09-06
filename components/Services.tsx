'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import pic1 from '@/images/pexels1.jpg';
import pic2 from '@/images/pexels2.jpg';
import pic3 from '@/images/pexels3.jpg';
import pic4 from '@/images/pexels6.jpg';

interface Project {
  title: string;
  src: string;
  color: string;
}

const projects: Project[] = [
  {
    title: 'C2 Montreal',
    src: pic1,
    color: '#000000',
  },
  {
    title: 'Office Studio',
    src: pic2,
    color: '#8C8C8C',
  },
  {
    title: 'Locomotive',
    src: pic3,
    color: '#EFE8D3',
  },
  {
    title: 'Silencio',
    src: pic4,
    color: '#706D63',
  },
];

interface ModalProps {
  active: boolean;
  index: number;
}

export default function Services() {
  const [modal, setModal] = useState<ModalProps>({ active: false, index: 0 });

  return (
    <main className="flex h-screen items-center justify-center font-ppNeueMontreal">
      <div className="flex flex-col items-center justify-center w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full flex justify-between items-center p-12 border-t cursor-pointer transition-all hover:opacity-50"
            onMouseEnter={() => setModal({ active: true, index })}
            onMouseLeave={() => setModal({ active: false, index })}
          >
            <h2 className="text-5xl transition-transform hover:-translate-x-2">
              {project.title}
            </h2>
          </div>
        ))}
      </div>

      <motion.div
        initial={{  x: '-50%', y: '-50%' }}
        className="h-[600px] w-[600px] overflow-hidden  flex items-center justify-center pointer-events-none"
      >
        <div
          style={{ top: modal.index * -100 + '%' }}
          className="absolute transition-[top] duration-500 h-full w-full"
        >
          {projects.map((project, index) => (
            <div
              key={`modal_${index}`}
              className="h-full w-full flex items-center justify-center"
            >
              <Image
                src={project.src}
                height={600}
                alt={`${project.title} Image`}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
