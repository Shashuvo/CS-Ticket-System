import React from 'react';
import { HiOutlineCalendarDays } from 'react-icons/hi2';

const TicketCard = ({ ticket }) => {
    const { id, title, createdAt, customer, description, priority } = ticket
    const priorityColor = {
        High: "text-[#F83044]",
        Medium: "text-[#FEBB0C]",
        Low: "text-[#02A53B]",
    };
    return (
        <div className="bg-white shadow-md rounded-xl p-5 border border-gray-100 w-full md:max-w-2xl h-full">

            {/* Header */}
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-[#001931]">{title}</h2>

                {/* Status */}
                <div className="flex items-center gap-2 bg-green-100 text-[#0B5E06] px-3 py-1 rounded-full text-sm font-medium">
                    <span className="w-3 h-3 bg-[#02A53B] rounded-full"></span>
                    Open
                </div>
            </div>

            {/* Description */}
            <p className="text-[#627382] mb-4">{description}</p>

            {/* Footer */}
            <div className="flex justify-between items-center text-sm">

                <div className="flex gap-4 items-center">
                    <span className="text-[#627382] text-sm">#{id}</span>
                    <span className={`text-sm uppercase ${priorityColor[priority]}`}>{priority} Priority</span>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 text-[#627382] text-sm">
                    <span>{customer}</span>

                    <div className="flex items-center gap-1">
                        <HiOutlineCalendarDays className="text-sm" />
                        <span className='text-sm'>{createdAt}</span>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default TicketCard;