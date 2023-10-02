"use client"
import React from 'react'
import Contact from '@/Components/Contact'


const page = () => {
 
  return (
    <>
    <div className='ist-div'>
    <Contact 
    img="./images/cat1.avif" 
    name="Mr. Whiskerson"
    phone="(212) 555-1234"
    email="mr.whiskaz@catnap.meow"
    />
  <Contact
   img="./images/cat2.avif" 
   name="Fluffykins"
   phone="(212) 555-1234"
   email="fluff@me.com"
    />
    </div>
   
 <div className='sec-div'>
 <Contact
 img="./images/cat3.avif" 
 name="Felix"
 phone="(212) 555-1234"
 email="thecat@hotmail.com"
  />
  <Contact 
  img="./images/cat4.avif" 
  name="Pumpkin"
  phone="(212) 555-1234"
  email="pumpkin@scrimba.com"
  />
 </div>
 
 </>
  )
}

export default page