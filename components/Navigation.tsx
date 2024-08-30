import React from 'react'
import Link from 'next/link';

function Navigation() {
  return (
    <div className='hidden md:flex md:absolute md:p-12 sm:p-8 p-4 absolute top-0 w-[100%] justify-center text-nowrap font-ppNeueMontreal'>
        <ul className='flex gap-4 pt-2'>
            <Link href='/' className='cursor-pointer'>Product</Link>
            <Link href='/' className='cursor-pointer'>About</Link>
            <Link href='/' className='cursor-pointer'>Company</Link>
            <Link href='/' className='cursor-pointer'>Contact</Link>
        </ul>
    </div>
  )
}

export default Navigation