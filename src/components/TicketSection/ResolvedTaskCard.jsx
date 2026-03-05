import React from 'react';

const ResolvedTaskCard = ({ task }) => {
    return (
        <div className="bg-[#E0E7FF] shadow-md rounded-lg p-4 border border-[#E0E7FF] w-full md:max-w-2xl h-full">
            <h1 className='text-[#001931] font-medium text-[18px]'>{task.title}</h1>
        </div>
    );
};

export default ResolvedTaskCard;