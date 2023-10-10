import React from 'react'

const Footer = (props) => {
  return (
  <>
     <main className={props.darkMode ? "dark" : ""}>
      <div>
      <h1 className='react-title'>Fun facts about React</h1>
        <ul className='main-facts'>
            <li>Was first relased in 2013</li>
            <li>Was orignally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>is maintained by Facebook</li>
            <li>Powers thousand of enterprise apps,including mobile apps</li>
            </ul>
      </div>
        <div>
        <img className='main-img' src="./images/react-logo.png"/>
        </div>
        
        </main>
        </>
       
  )
}

export default Footer