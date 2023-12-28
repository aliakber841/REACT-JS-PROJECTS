import React from 'react'

const Grid = () => {
  return (
    <div>
        <h1 className='text-black pl-12 mb-2 mt-2 font-bold'>Grid</h1>

        <div className='h-screen Parent bg-slate-900'>
            <div className='container mx-auto'>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 p-2">
                    <div className='bg-sky-500 p-6 rounded-lg'>First element</div>
                    <div className='bg-sky-500 p-6 rounded-lg'>Second element</div>
                    <div className='bg-sky-500 p-6 rounded-lg'>Third element</div>
                    <div className='bg-sky-500 p-6 rounded-lg col-span-2'>Fourth element</div>
                    <div className='bg-sky-500 p-6 rounded-lg'>Fifth element</div>
                    <div className='bg-sky-500 p-6 rounded-lg'>Sixth element</div>


                    <div class="grid grid-cols-6 gap-4 text-white ">
                    <div class=" bg-red-600 col-start-2 col-span-4 p-6 rounded-lg ">01</div>
                    <div class=" bg-red-600 col-start-1 col-end-3 p-6 rounded-lg">02</div>
                    <div class=" bg-red-600 col-end-7 col-span-2 p-6 rounded-lg">03</div>
                    <div class=" bg-red-600 col-start-1 col-end-7 p-6 rounded-lg ">04</div>
                    </div>
                
                    <div class="grid grid-flow-col auto-cols-max ">
                    <div className='bg-green-500 p-6 rounded-lg mr-2'>01</div>
                    <div className='bg-green-500 p-6 rounded-lg mr-2'>02</div>
                    <div className='bg-green-500 p-6 rounded-lg mr-2'>03</div>
                  </div>

                  <div class="grid grid-rows-4 grid-flow-col gap-4">
                  <div className='bg-green-500 p-6 rounded-lg mr-2 row-span-4'>01</div>
                  <div className='bg-green-500 p-6 rounded-lg mr-2'>02</div>
                  <div className='bg-green-500 p-6 rounded-lg mr-2'>03</div>
                  <div className='bg-green-500 p-6 rounded-lg mr-2 row-span-2'>04</div>
                  <div className='bg-green-500 p-6 rounded-lg mr-2'>05</div>
                  <div className='bg-green-500 p-6 rounded-lg mr-2'>06</div>
                  
                </div>


                <div class="grid grid-flow-row-dense grid-cols-2 grid-rows-2 gap-4 text-white">
                  <div className='bg-red-500 p-6 rounded-lg mr-2 col-span-1'>01</div>
                  <div className='bg-red-500 p-6 rounded-lg mr-2 col-span-2'>02</div>
                  <div className='bg-red-500 p-6 rounded-lg mr-2 '>03</div>
                  </div>
              
                </div>
            </div>
        </div>
    </div>
  )
}

export default Grid