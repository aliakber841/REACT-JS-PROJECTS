import React from 'react'

const Header = (props) => {
  return (
   <>
   <nav className={props.darkMode ? "dark" : ""}>
    <div className='nav-left'>
<img src="./images/react-logo.png"/>
 <h1>ReactFacts</h1>
    </div>
    <div className='nav-right'>
     <p className='toggler-light'>Light</p>
     <div  onClick={props.toggleDarkMode} className='toggler'>
        <div className='toggler-circle'></div>
     </div>
     <p className='toggler-light'>Dark</p>
    </div>
   </nav>
   </>
  )
}

export default Header