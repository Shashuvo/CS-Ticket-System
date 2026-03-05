import React, { use } from 'react';
import TicketCard from './TicketCard';

const Tickets = ({ ticketsPromise }) => {
    const ticketsData = use(ticketsPromise);
    console.log(ticketsData);
    return (
        <div>
            <h1 className='text-[#34485A] text-2xl font-semibold mb-4'>Customer Tickets</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch'>
                {
                    ticketsData.map(ticket => <TicketCard key={ticket.id} ticket={ticket}></TicketCard>)
                }
            </div>
        </div>
    );
};

export default Tickets;