import React from 'react'

const SpacesAndSizes = () => {
  return (
    <div>
        <h1 className='font-bold m-5 ml-10'>SpacesAndSizes</h1>
        <p className='py-3 pl-10 bg-lime-400 p-2'>HOW TO USE PADDING IN TAILWIND CSS</p>
        <p className='py-3 mt-2 bg-lime-400 pl-10'>HOW TO USE MARGIN IN TAILWIND CSS</p>
        <div className='flex w-full space-x-4 mt-4'>
        <div className='w-2/5 h-16 bg-red-700  p-5 text-white '>Sidebar</div>
        <div className='w-3/5 h-16 bg-green-700  p-5 text-white'>Main Content</div>
        </div>
       
    </div>
  )
}

export default SpacesAndSizes