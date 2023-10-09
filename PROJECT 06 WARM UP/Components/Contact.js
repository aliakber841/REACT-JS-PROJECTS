import React from 'react'
import Star from './Star'
const Contact = () => {
    const [contact,setContact]=React.useState({
        firstName: "Ali",
        lastName: "Akber",
        phone:"+1 (719) 555-1212",
        email: "aliakber789@example.com",
        isFavorite:"true"
    })

    function changeStar(){
        setContact(prevContact=>{
            return  {...prevContact, isFavorite:!prevContact.isFavorite}
        })
    }
  return (
    <div className='main-contact'>
        <div className='contact-container'>
        <img className='profile-dp' src="./images/profile-dp.avif"/>
        <Star isFilled={contact.isFavorite} handleClick={changeStar}/>
        <h1 className='id'>{contact.firstName} {contact.lastName}</h1>
        <h5 className='phone'>{contact.phone}</h5>
        <h5 className='email'>{contact.email}</h5>
        </div>
   
    </div>
  )
}

export default Contact