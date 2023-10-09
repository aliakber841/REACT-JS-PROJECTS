import React from 'react'

const Boxcolor = (props) => {
  
  const styles={
    backgroundColor: props.on ? "silver" : "gold"
    }


  return (  
  <div style={styles} className='boxes' onClick={()=>props.handleClick(props.id)}></div>
  )
}

export default Boxcolor