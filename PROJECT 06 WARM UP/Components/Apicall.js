import React from 'react'

const Apicall = () => {
    const [starsWarsData,setStarWarsData]=React.useState({})
    const [count,setCount]=React.useState(0)

    React.useEffect(function(){
       
        fetch(`https://swapi.dev/api/people/${count}`)
        .then(res=>res.json())
        .then(data=>setStarWarsData(data))
    },[count])
  return (
    <div className='apicall-container'>
        <h2 className='count-text'>The count is {count}</h2>
        <button className='counter2' onClick={()=>setCount(prevCount=>prevCount+1)}>Get Next Character</button>
        <pre>{JSON.stringify(starsWarsData, null, 2)}</pre>
    </div>
  )
}

export default Apicall