"use client"
import React from 'react'
import Navbar from '@/Components/Navbar'
import Journal from '@/Components/Journal'
import data from './data.js'
const page = () => {

  const journal= data.map(item=>{
    return(
      <Journal
      key={item.id}
      {...item}
      />
    )
  })

  return (
    <div>
    <Navbar />
    <section className='travel-list'>
    {journal}
    </section>
    
    </div>
  )
}

export default page