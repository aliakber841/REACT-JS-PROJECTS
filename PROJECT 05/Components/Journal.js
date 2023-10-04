import React from 'react'

const Journal = (props) => {
  return (
    <div className='journal-container'>

<div className='img-container'>
<img src={`./images/${props.img}`}/>
</div>

<div className='text-container'>
<div className='location'>
<img src={`./images/${props.location}`}/>
<h5>{props.country}</h5>
<a href={props.map}>{props.google}</a>
</div>
<h1 className='mountain-name'>{props.title}</h1>
<div className='date-container'>
<h4 className='travel-date'>{props.start} <span>{props.space}</span> {props.end} </h4>
</div>
<div className='description'>
<h3 className='description-text'>{props.description}</h3>
</div>
</div>
    
    </div>
  )
}

export default Journal