import React from 'react'

const State = () => {
    const [stateval,setstateval]= React.useState("true")
    function changeval(){
        setstateval(prevState=>!prevState)}
  return (
    <div className='state'>
        <h1 className='state-text'>Is state important to know?</h1>
        <button onClick={changeval} className='option-button'>{stateval? "Yes":"No"}</button>
    </div>
  )
}

export default State