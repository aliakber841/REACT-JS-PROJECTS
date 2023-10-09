import React from 'react'
import Counterbutton from './Counterbutton'

const Counter = () => {
    const [count,setCount]=React.useState(0)
    function add(){
        setCount(prevCount=>prevCount+1)
    }
    function sub(){
        setCount(prevCount=>prevCount-1)
    }
  return (
    <div className='counter'>
        <button onClick={sub} className='sub-button' >-</button>
      <Counterbutton number={count} />
        <button onClick={add} className='add-button'>+</button>
    </div>
  )
}

export default Counter