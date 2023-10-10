"use client"
import React, { useState } from 'react'
import Header from '@/Components/Header'
import Main from '@/Components/Main'

const page = () => {
  const [darkMode, setDarkMode] = React.useState(true)
    
  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
  }
  return (
   <div className='container'>
   <Header
   darkMode={darkMode} 
   toggleDarkMode={toggleDarkMode} />
    <Main darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
   </div>
  )
}

export default page