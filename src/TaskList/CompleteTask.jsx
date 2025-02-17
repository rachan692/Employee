import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full p-5 w-[300px] bg-purple-600 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>High</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>

      <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2 line-clamp-3'>
        {data.taskDescription}
      </p>

      {/* Buttons inside the card */}
      <div className="mt-2">
      <button className='w-full'>Completed</button>
      </div>
    </div>
  )
}

export default CompleteTask
