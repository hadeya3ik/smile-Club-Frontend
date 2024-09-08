import { Content } from 'next/font/google'
import React from 'react'
import Mission from '@/images/mission.svg'
import Story from '@/images/story.svg'
import Vision from '@/images/vision.svg'

function Cards() {
    return (
        <div className='relative pt-40 border'>
            <div className='h-screen w-full flex items-center justify-center sticky top-40' >
                <Mission className=""/>
            </div>
            <div className='h-screen w-full flex items-center justify-center sticky top-0' style={{top: `calc(-10% + ${1 * 230}px)`}}>
                <Story className=""/>
            </div>
            <div className='h-screen w-full flex items-center justify-center sticky top-0' style={{top: `calc(-10% + ${2 * 500}px)`}}>
                <Vision className=""/>
            </div>
        </div>
      )
    }

export default Cards