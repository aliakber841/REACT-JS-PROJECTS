import React from 'react'

const Layouts = () => {
  return (
    <div>
        <h1 className='font-bold m-5 ml-10' >Layouts</h1>
        <div className="container bg-orange-500 text-white p-4 ml-4 columns-3">
           <img className='w-64 ' src="https://images.unsplash.com/photo-1697665666330-7acf230fa830?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"/>
           <img className='w-64 ' src="https://images.unsplash.com/photo-1697665666330-7acf230fa830?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"/>
            <p className='bg-red-500 mb-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus blanditiis molestiae quis odit reprehenderit inventore esse. Laboriosam alias atque odio rerum blanditiis eaque quisquam repudiandae minus illum, dolorem magni magnam.</p>
     <p className='bg-green-500 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquid harum explicabo eos ducimus ullam iusto quas recusandae et ipsam? Vel, eum recusandae minus illum voluptatibus nemo itaque dolore dolorum?</p>
      <p className='bg-red-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam placeat autem neque nemo? Repellendus voluptas, harum consequuntur aperiam quam rerum, voluptatibus exercitationem eligendi ratione omnis nesciunt optio, accusamus perspiciatis aliquid?</p>
        </div>

        <div className="div relative bg-red-500 rounded-lg p-8 w-32 h-32 m-4">
        <div className="div bg-green-500 rounded-lg p-8 w-24 h-24 absolute inset-2 ">
             </div>
        </div>
       
        <div className="divide-y divide-red-500 pl-2">
       <div>01</div>
       <div className='border-dotted'>02</div>
       <div  className='border-dashed'>03</div>
       </div>

    </div>
  )
}

export default Layouts