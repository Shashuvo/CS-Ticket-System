import React from 'react';

const StatusTaskCard = ({ statusTask, handleResolved }) => {
    return (
        <div className="bg-white shadow-md rounded-xl p-4 border border-gray-100 w-full md:max-w-2xl h-full space-y-4">
            <h1 className='text-[18px] text-[#001931] font-medium'>{statusTask.title}</h1>
            <button onClick={() => handleResolved(statusTask.id)} className='btn bg-[#02A53B] text-white w-full hover:bg-[#02A53B]/20 hover:text-[#02A53B]'>Complete</button>
        </div>
    );
};

export default StatusTaskCard;