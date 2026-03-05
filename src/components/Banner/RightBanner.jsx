import React from 'react';
import leftImage from "../../assets/vector1.png"
import rightImage from "../../assets/vector2.png"

const RightBanner = () => {
    return (
        <div className='relative flex flex-col gap-4 bg-linear-to-r from-[#54CF68] to-[#00827A] items-center justify-center flex-1 py-16 rounded-lg'>
            <img src={leftImage} alt="" className='absolute top-0 left-0 h-full' />
            <img src={rightImage} alt="" className='absolute top-0 right-0 h-full' />
            <p className='text-white text-2xl'>Resolved</p>
            <h1 className='text-white text-6xl font-bold'>0</h1>
        </div>
    );
};

export default RightBanner;