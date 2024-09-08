import React from 'react';
import Mission from '@/images/mission.svg';
import Story from '@/images/story.svg';
import Vision from '@/images/vision.svg';

function Cards() {
    return (
        <div className='relative mt-40 border max-w-[80vw]'>
            <div className='sticky' style={{ top: '0px' }}>
                <Mission className="" />
            </div>
            <div className='sticky' style={{ top: '10vh' }}> 
                <Vision className="" />
            </div>
            <div className='sticky' style={{ top: '20vh' }}> 
                <Story className="" />
            </div>
            <div className='sticky' style={{ top: '30vh' }}>
                <div className='h-[30vh] w-[100px]'></div>
            </div>
        </div>
    );
}

export default Cards;
