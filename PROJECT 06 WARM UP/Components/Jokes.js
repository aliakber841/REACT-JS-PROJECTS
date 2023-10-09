import React from 'react'

const Jokes = (props) => {
    const [isShown,setIsShown]=React.useState(false)
    function show(){
        setIsShown(prevShow=>!prevShow)
    }
  return (
    <div>
    <div className='jokes-container'>
            {props.setup && <h3 className='setup'>{props.setup}</h3>}
            {isShown && <p className='punchline'>{props.punchline}</p>}
            <button className='jokes-button' onClick={show}><span>{isShown ? "Hide" : "Show"} Punchline</span></button>
          <hr />
       </div>
       </div>
  )
}

export default Jokes