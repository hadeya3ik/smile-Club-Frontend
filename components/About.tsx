import React from 'react'
import ParallaxBg from './ParallaxBg'
function About() {
  return ( <main className='font-ppNeueMontreal'>
    <div className='md:p-12 sm:p-8 p-4 flex flex-col'>
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
        <ParallaxBg/>
    </div>
    </main>
  )
}

export default About