import React from 'react'
import Resources from '@/components/Resources'
import NavBar from '@/components/NavBar'

function page() {
  return (
    <main className='px-20'>
        <NavBar/>
        <div className=''>Resources</div>
        <p className=' text-base sm:text-2xl'>Whether youre seeking light-hearted engagement through simple, enjoyable activities or require more serious clinical assistance, a vast array of resources are gathered here to support you throughout your mental health journey.</p>
        <Resources/>
    </main>
  )
}

export default page