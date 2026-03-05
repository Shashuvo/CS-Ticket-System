import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto mb-10 md:mb-15 flex flex-col md:flex-row gap-6'>
            <LeftBanner></LeftBanner>
            <RightBanner></RightBanner>
        </div>
    );
};

export default Banner;