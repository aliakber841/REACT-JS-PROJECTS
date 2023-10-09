import React from 'react'

const Things = () => {

  const [thingsArray,setThingsArray] = React.useState(["Thing1","Thing2"])

  function addItem(){
    setThingsArray(prevThingsArray => {
     return [...prevThingsArray, `Thing ${prevThingsArray.length +1}`]
    })
  }
  const thingsElement = thingsArray.map(thing => <p className='thing-text' key={thing}>{thing}</p>)

  return (
   <div className='things'>
    <button onClick={addItem} className='click-button'>Add Item</button>
   {thingsElement}
   </div>
  )
}

export default Things