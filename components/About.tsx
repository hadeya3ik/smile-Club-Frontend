import React from 'react'
import ParallaxBg from './ParallaxBg'
function About() {
  return ( <main className='font-ppNeueMontreal'>
    <div className='md:p-24 sm:p-16 p-8 flex flex-col'>
        <h1 className='md:text-5xl sm:text-4xl text-3xl'>
            About Us 
        </h1>
        <div className='flex pt-4'>
            <p className='max-w-lg'>
                Modern Walls is an interior design studio specializing in renovations, dedicated to transforming spaces. Our expertise lies in creating modern, stylish interiors that seamlessly blend innovation with timeless design elements, ensuring every work reflects our commitment to craftsmanship.
            </p>
            <p className='max-w-sm'>
                We focus on designing spaces that meet the needs of the people who use them.
            </p>
        </div>
    </div>
    <ParallaxBg/>
    </main>
  )
}

export default About