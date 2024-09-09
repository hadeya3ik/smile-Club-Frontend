import React from 'react';
import Mission from '@/images/mission.svg';
import Story from '@/images/story.svg';
import Vision from '@/images/vision.svg';
import About from '@/images/about.svg'

function Cards() {
    return (
        <div className='pt-20 relative md:px-16 lg:px-60 px-4 flex flex-col gap-[100vh]'>
            <div className='sticky' style={{ top: `calc(-5% + ${1 * 7}vh + 10vh)` }}>
                <About className="" />
            </div>
            <div className='sticky' style={{ top: `calc(-5% + ${1.5 * 7}vh + 10vh)` }}>
                <Mission className="" />
            </div>
            <div className='sticky' style={{ top: `calc(-5% + ${2 * 7}vh + 10vh)` }}> 
                <Vision className="" />
            </div>
            <div className='sticky' style={{ top: `calc(-5% + ${2.5 * 7}vh + 10vh)` }}> 
                <Story className="" />
            </div>
                <div className='h-[10vh]'>
            </div>
        </div>
    );
}

// function Cards() {
//     return (
//         <div className='relative top-80 border-8 sm:px-20 md:px-40 px-4 flex flex-col gap-[100vh]'>
//             <div className='sticky' style={{ top: `calc(-5% + ${5 * 7}vh)` }}>
//                 <About className="" />
//             </div>
//             <div className='sticky' style={{ top: `calc(-5% + ${5.5 * 7}vh)` }}>
//                 <Mission className="" />
//             </div>
//             <div className='sticky' style={{ top: `calc(-5% + ${6. * 7}vh)` }}> 
//                 <Vision className="" />
//             </div>
//             <div className='sticky' style={{ top: `calc(-5% + ${6.5 * 7}vh)` }}> 
//                 <Story className="" />
//             </div>
//         </div>
//     );
// }


export default Cards;
