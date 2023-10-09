import React from 'react'


const Meme = () => {
const [meme, setMeme] = React.useState({
  topText: "",
  bottomText: "",
  randomImage: "http://i.imgflip.com/1bij.jpg" 
})
const [allMemes, setAllMemes] = React.useState([])

React.useEffect(() => {
  async function getMemes(){
   const res= await fetch("https://api.imgflip.com/get_memes")
   const data= await res.json()
     setAllMemes(data.data.memes)
  }
 getMemes()
}, [])

function getMemeImage() {
  const randomNumber = Math.floor(Math.random() * allMemes.length)
  const url = allMemes[randomNumber].url
  setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
  }))
  
}

function handleChange(event) {
  const {name, value} = event.target
  setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
  }))
}
  
  return (
    <div className='meme-container'>
        <div className='input-container'>
        <input className='input1' 
        type='text' 
        placeholder='Shut up'
        name="topText"
        onChange={handleChange}
       value={meme.topText}
        />
        <input className='input2'
         type='text'
          placeholder='and take my money'
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          />
        </div> 
        <button onClick={getMemeImage} className='get-meme-button'>Get a new meme image 🖼</button>
        <div className='meme'>
        <img className='meme-image' src={meme.randomImage}/>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
       
    </div>
  )
}

export default Meme