"use client"
import React from 'react'
import Contact from '@/Components/Contact.js'
import data from './data.js'

const page = () => {
    const contact= data.map(item=>{   
  return (
<Contact 
       key={item.id}
       {...item}
       />
  )
})
   return (
    <div className='contact-list'>
     {contact}
    </div>
   
   )
}

export default page