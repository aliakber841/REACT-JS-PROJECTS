import React from 'react'

const DesignSystems = () => {
  return (
    <div>
        <h1 className='text-black pl-12 mb-2 mt-2 font-bold'>DesignSystems</h1>

        <div className='p-3 pl-8'>
            <h1 className='text-3xl font-bold'>This is a title</h1>
            <h1 className='text-xl font-semibold'>This is a subtitle</h1>
            <h1 className='text-base'>This is a paragraph</h1>
            <h1>This is an anchor</h1>
            <h1>This is a button</h1>
        </div>

        <div>
            <input className='ml-8 mb-2 outline-none rounded-sm px-2' type="text" placeholder='Search'/>
        </div>

        <div>
            <input className='outline-none ml-8 mb-2' type="date"/>
        </div>

        <div>
            <input type="checkbox" id="checkbox" className='ml-8 mb-2 accent-purple-500'/>
            <label htmlFor="checkbox" className='ml-2'>Checkbox</label>
        </div>

        <div>
           <select className='ml-9 bt-4 mb-4'>
            <option>Option 1</option>
            <option>Option 2</option>
           </select>
        </div>

    </div>
  )
}

export default DesignSystems