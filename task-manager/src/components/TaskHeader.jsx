import React from 'react'

const TaskHeader = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <h2 className='text-xl font-semibold'>All Tasks</h2>
            </div>
            <div>
                <button>Add Tasks</button>
            </div>
        </div>
    )
}

export default TaskHeader