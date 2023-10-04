"use client"
import React from 'react'
import Bnb from '@/Components/Bnb'
import Card from '@/Components/Card'
import data from './data.js'

const page = () => {
 
  const cards = data.map(items => {
   return (
     <Card 
    key={items.id}
    {...items}
    /> 
    )
  })

  return (
   <div>
   <Bnb />
   <section className="cards-list">
   {cards}
   </section>
 
   </div>
  )
}

export default page