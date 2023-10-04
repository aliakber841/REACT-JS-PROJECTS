import React from 'react'

const Contact = (props) => {
  return (
    <div className='contacts'>

    <div className='contact-container'>

    <div className='card-contact'>
    <img src= {props.img}/>
    <h3 className='person-name'>{props.name}</h3>
    <div className='contact-info'>
    <img src="./images/call.png"/>
   <p className='person-phone'>{props.phone}</p>
    </div>
   
    <div className='contact-info2'>
    <img src="./images/email.png"/>
    <h3 className='person-email'>{props.email}</h3>
    </div>
    </div>

    </div>
    </div>
  )
}

export default Contact