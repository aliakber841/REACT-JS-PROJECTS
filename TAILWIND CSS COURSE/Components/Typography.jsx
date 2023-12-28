import React from 'react'

const Typography = () => {
  return (
    <div>
        <h1 className='mt-3 ml-12 text-black font-bold'>Typography</h1>
        <div className='ml-10 mt-5 text-red-600 '>
        <h1 className=' text-3xl italic underline decoration-dotted'>Title 1</h1>
        <h2 className=' mb-1 text-2xl underline hover:underline-offset-4 decoration-green-700 decoration-double decoration-5'>Title 2</h2>
        <h3 className='text-xl line-through '>Title 3</h3>
        <p className='text-base overline'>A regular paragraph</p>
        <p className='text-sm capitalize'>A description paragraph</p>
        <p className='note text-xs underline decoration-wavy whitespace-nowrap break-words'>A little note</p>
        <p className='truncate mt-2 '>This is a long sentence with a lot of words to explain that truncate will truncate my sentence</p>
        </div>
    </div>
  )
}

export default Typography