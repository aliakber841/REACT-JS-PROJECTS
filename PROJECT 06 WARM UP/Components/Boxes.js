import React from 'react'
import boxesData from '../app/boxesData'
import Boxcolor from './Boxcolor'
const Boxes = () => {
    const [squares,setSquares] = React.useState(boxesData)
   function toggle(id){
  setSquares(prevSquare =>{
    return prevSquare.map((square)=>{
      return square.id===id? {...square,on:!square.on}:square
    })
  })
   }
  

   const squareElements= squares.map(square=>(
    <Boxcolor key={square.id}
    id={square.id}
     on={square.on} 
     handleClick={toggle}/>
   ))

  

  return (
    <div className='box-container'>
  {squareElements}
    </div>
  )
}

export default Boxes