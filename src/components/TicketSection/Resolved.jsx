import React from 'react';
import ResolvedTaskCard from './ResolvedTaskCard';

const Resolved = ({ resolvedTask }) => {
    return (
        <div>
            <h1 className='text-[#34485A] text-2xl font-semibold mb-4'>Resolved Task</h1>
            {
                resolvedTask.length === 0 ? <p className='text-[#627382]'><p className='text-[#627382]'>No resolved tasks yet.</p></p> :
                    <div className='flex flex-col gap-4'>
                        {
                            resolvedTask.map(task => <ResolvedTaskCard key={task.id} task={task}></ResolvedTaskCard>)
                        }
                    </div>
            }
        </div>
    );
};

export default Resolved;