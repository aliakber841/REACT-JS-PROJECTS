import React from 'react'
import CanvasBuilder from './components/CanvasBuilder.jsx';
import './style.css'
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <>
    <Navbar />
    <CanvasBuilder />
    </>
  )
}

export default App