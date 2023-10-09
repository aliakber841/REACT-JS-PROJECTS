import React from 'react'

const Newsletter = () => {
    const [formData,setFormData]=React.useState({
          email:"",
          password:"",
          confirmPassword:"",
          toJoin: true
    })
 
      function handleClick(event){
        const {name,type,value,checked}= event.target
        setFormData(prevData=>{
            return {...prevData, 
            [name]:type==="checkbox" ? checked: value}
        })
      }

      function handleSubmit(event){
        event.preventDefault()
        if(formData.password===formData.confirmPassword){
         console.log("Successfully Signed Up")
        } else{
          console.log("Password do not match")
          return
        }
        if(formData.toJoin){
          console.log("Thanks for signing up for our newsletter")
        }
      }
  return (
    
    <div className='newsletter-container '>
        <form onSubmit={handleSubmit}>
        <input className='text-input email-text'
        type="text"
        placeholder='Email'
        name="email"
        value={formData.email}
        onChange={handleClick}
        />

        <input className='text-input'
        type="text"
        placeholder='Password'
        name="password"
        value={formData.password}
        onChange={handleClick}
        />

        <input className='text-input'
        type="text"
        placeholder='Confirm Password'
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleClick}
        />

        <div>
        <input className='checkbox-input'
        id="checkLetter"
        type="checkbox"
        name="toJoin"
        checked={formData.toJoin}
        onChange={handleClick}
        />
       <label className="news-label" htmlFor='checkLetter'>I want to join the newsletter</label>
        </div>
    
     <button className='signup-button'>Sign Up</button>
     </form>
    </div>
  
  )
}

export default Newsletter