import React from 'react';
import leftImage from "../../assets/vector1.png"
import rightImage from "../../assets/vector2.png"

const LeftBanner = ({ progressTask }) => {
    return (
        <div className='relative flex flex-col gap-4 bg-linear-to-r from-[#632EE3] to-[#9F62F2] items-center justify-center flex-1 py-16 rounded-lg'>
            <img src={leftImage} alt="" className='absolute top-0 left-0 h-full' />
            <img src={rightImage} alt="" className='absolute top-0 right-0 h-full' />
            <p className='text-white text-2xl'>In-Progress</p>
            <h1 className='text-white text-6xl font-bold'>{progressTask.length}</h1>
        </div>
    );
};

export default LeftBanner;