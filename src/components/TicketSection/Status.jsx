import React from 'react';
import StatusTaskCard from './StatusTaskCard';

const Status = ({ progressTask, handleResolved }) => {
    return (
        <div className='h-fit'>
            <h1 className='text-[#34485A] text-2xl font-semibold mb-4'>Task Status</h1>
            {
                progressTask.length === 0 ? <p className='text-[#627382]'>Select a ticket to add to Task Status.</p> :
                    <div className='flex flex-col gap-4'>
                        {
                            progressTask.map(statusTask => <StatusTaskCard key={statusTask.id} statusTask={statusTask} handleResolved={handleResolved}></StatusTaskCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default Status;