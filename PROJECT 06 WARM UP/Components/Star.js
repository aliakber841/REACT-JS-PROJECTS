import React from 'react'

const Star = (props) => {
    const starIcon=  props.isFilled ? "filled-star.png": "unfilled-star.png"
  return (
    <div>
        <img className='star-image' src={`./images/${starIcon}`} onClick={props.handleClick}/> 
    </div>
  )
}

export default Star