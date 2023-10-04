import React from 'react'

const Card = (props) => {
  let badgeText
    if(props.openSpots===0){
      badgeText="SOLD OUT"
    } else if(props.location==="Online"){
        badgeText="ONLINE"
    }
  return (
   
    <div className='card-container'>
 {badgeText && <div className='textlayout'>{badgeText}</div>}
  <img className='card1' src={`./images/${props.coverImg}`}/>
  <div className='card-stats'>
  <img className='redstar' src="./images/redstar.png"/>
  <span>{props.stats.rating}</span>
  <span>({props.stats.reviewCount}) •</span>
  <span>{props.location}</span>
  </div>
  <p className='person-about'>{props.title}</p>
  <p class="due-charges"><span>From ${props.price}</span>/person</p>
  
  
    </div>
    
  )
}

export default Card