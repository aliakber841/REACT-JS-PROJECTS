import React from 'react'
import Toggle from './Components/Toggle'
import FetchData from './Components/FetchData'
import Navbar from './Components/Navbar'
import UseReducer from './Components/UseReducer'
import ReactTostify from './Components/ReactTostify'
const App = () => {
  return (
    <>   
   <div className='container1'>
   <Toggle />
   <FetchData />
    </div>

    <div className='container2'>
    <Navbar />
    </div>

    <div className='container3'>
    <UseReducer />
    <ReactTostify />
    </div>

    

    </>
  )
}

export default App