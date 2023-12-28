import React from 'react'

const Flex = () => {
  return (
    <div>
        <h1 className='text-black pl-12 mb-2 mt-2 font-bold'>Flex</h1>


        <div className='parent'>
            <div className='bg-blue-300 p-3 pl-20'>Header</div>
            <div className="flex h-28 flex-col md:flex-row ">
            <div className='bg-purple-300 basis-1/5'>  Sidebar </div>
            <div className='bg-yellow-300 basis-4/5'> MainContent</div>
            </div>
        </div>
       
    </div>
  )
}

export default Flex