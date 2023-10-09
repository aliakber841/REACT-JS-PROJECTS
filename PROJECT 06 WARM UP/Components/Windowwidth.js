import React from 'react'


const Windowwidth = () => {
    const [width,setWidth]=React.useState(true)
    const [windowWidth,setWindowWidth]=React.useState(window.innerWidth)

    React.useEffect(()=>{
      function watchWidth(){
        setWindowWidth(window.innerWidth)
      }
     window.addEventListener("resize",watchWidth)
     return function(){
      window.removeEventListener("resize",watchWidth)
     }
    },[])


    function toggle(){
     setWidth(prevWidth=>!prevWidth)
    }
  return (
    <div className='window-container'>
   <button onClick={toggle} className='window-button'>Toggle WindowTracker</button>
  {width && <h2 className='window-text'>Window width:{window.innerWidth}</h2>}
    </div>
  )
}

export default Windowwidth