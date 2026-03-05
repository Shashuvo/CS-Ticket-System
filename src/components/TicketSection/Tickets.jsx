import TicketCard from './TicketCard';

const Tickets = ({ tickets, handleProgress, progressTask }) => {
    return (
        <div>
            <h1 className='text-[#34485A] text-2xl font-semibold mb-4'>Customer Tickets</h1>
            {
                tickets.length === 0 ? <p className='text-[#627382]'>No tickets left to resolve.</p> :
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch'>
                        {
                            tickets.map(ticket => <TicketCard key={ticket.id} ticket={ticket} handleProgress={handleProgress} progressTask={progressTask}></TicketCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default Tickets;