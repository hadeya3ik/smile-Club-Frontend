"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { title: "Product", href: "/" },
  { title: "About", href: "/about" },
  { title: "Company", href: "/company" },
  { title: "Contact", href: "/contact" },
];

const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

const opacity = {
  initial: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.35 } },
  closed: { opacity: 0, transition: { duration: 0.35 } },
};

const background = {
  initial: { height: 0 },
  open: { height: "100vh", transition },
  closed: { height: 0, transition },
};

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

  return (
    <div className=" md:p-12 sm:p-8 p-4 absolute top-0 right-0">
      <div className="flex ">
      <div
  onClick={() => setIsActive(!isActive)}
  className={`z-[100] flex items-center justify-center h-[35px] w-[35px] cursor-pointer rounded-full transition-colors ease-in-out ${
    isActive ? " duration-1000 bg-gray-200 " : "duration-[2000ms] bg-white"
  }`}
>

          {/* <div className="relative flex items-center">
            <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>Menu</motion.p>
            <motion.p className="absolute" variants={opacity} animate={isActive ? "open" : "closed"}>Close</motion.p>
          </div> */}
          <div
            className={`relative before:absolute w-[22.5px]  before:h-[1px] before:top-[-4px] after:h-[1px] after:top-[4px] before:w-full before:bg-black before:transition-all before:duration-[0.5s] before:cubic-bezier-[0.76,0,0.24,1] after:absolute after:w-full after:bg-black after:transition-all after:duration-[0.5s] after:cubic-bezier-[0.76,0,0.24,1] 
            ${isActive ? "before:rotate-[45deg] before:top-[4px] after:rotate-[-45deg] after:top-[4px]" : "" }`}
          ></div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            variants={background}
            initial="initial"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-gray-200 no-doc-scroll z-40"
          >
            <div className="flex flex-col items-center justify-center min-h-screen text-black">
              {links.map((link, index) => (
                <motion.div
                  key={index}
                  className="cursor-pointer p-2 text-xl"
                  onClick={() => setSelectedLink({ isActive: true, index })}
                  variants={opacity}
                  initial="initial"
                  animate={selectedLink.index === index ? "open" : "closed"}
                >
                  {link.title}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
