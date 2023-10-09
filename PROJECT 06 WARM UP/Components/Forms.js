import React from 'react'

const Forms = () => {
    const [formData,setFormData] =React.useState({
        firstName:"",
        lastName:"",
        email:"",
        comments:"",
        isFriendly: true,
        empolyment:"",
        favColor:""
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
      event.preventDefault()
      console.log(formData)
    }

  return (
    <div className='form-container'>
        <form className='form-inputs' onSubmit={handleSubmit}>
            <input className='input-data'
            type="text"
            placeholder='First Name'
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}/>

           <input className='input-data'
            type="text"
            placeholder='Last Name'
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}/>  

            <input className='input-data'
            type="email"
            placeholder='Email'
            onChange={handleChange}
            name="email"
            value={formData.email}/>  

            <textarea className='textarea-data'
            placeholder='Comments'
            onChange={handleChange}
            name="comments"
            value={formData.comments}/>  

              <div>
                <input className='friendly-checkbox'
                type="checkbox" 
                id="isFriendly" 
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
                 />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
             </div>
           
           <fieldset>
            <legend>Current empolyment status</legend>
            <input
            type="radio"
            id="unempolyed"
            name="empolyment"
            value="unempolyed"
            onChange={handleChange}
            checked={formData.empolyment==="unempolyed"}
            />
            <label htmlFor='unempolyed'>Unempolyed</label>
            <br />

            <input
            type="radio"
            id="part-time"
            name="empolyment"
            value="part-time"
            onChange={handleChange}
            checked={formData.empolyment==="part-time"}
            />
            <label htmlFor='part-time'>Part-time</label>
            <br />

            <input
            type="radio"
            id="full-time"
            name="empolyment"
            value="full-time"
            onChange={handleChange}
            checked={formData.empolyment==="full-time"}
            />
            <label htmlFor='full-time'>Full-time</label>
            <br />
           </fieldset>
           <br />

           <label htmlFor='favColor'>What is your favorite color?</label>
           <br />
           <select
           id="favColor"
           value={formData.favColor}
           onChange={handleChange}
           name="favColor" >
             <option value="">---Choose---</option>
            <option value="red">Red</option>
              <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                  <option value="green">Green</option>
                    <option value="blue">Blue</option>
                      <option value="indigo">Indigo</option>
                        <option value="violet">Violet</option>
           </select>
         <br />
         <br />
         <button className='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Forms