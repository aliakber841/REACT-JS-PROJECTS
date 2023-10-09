import React from 'react'

const Counterbutton = (props) => {
  return (
    <div>
<button className='counter-button'>{props.number}</button>
    </div>
  )
}

export default Counterbutton