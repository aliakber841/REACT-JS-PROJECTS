"use client"
import React from 'react'
import Dice from '@/Components/Dice'
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

const page = () => {
  const [dice,setDice]=React.useState(allNewDice())
  const [tenzies,setTenzies]=React.useState("")

  React.useEffect(()=>{
  const allHeld= dice.every(die=>die.isHeld)
   const firstvalue=dice[0].value
   const allSameValue=dice.every(die=>die.value)
   if(allHeld && allSameValue){
    setTenzies(true)
   }
  },[dice])

  function generateNewDie(){
    return{
      value:Math.ceil(Math.random()*6),
      isHeld:false,
      id:nanoid()
    }
  }

  function allNewDice(){
    const newDice=[]
   for (let i=0;i<10;i++){
    newDice.push(
     generateNewDie()
      )
   }
   return newDice
  }

  

function rolldice(){
  if (!tenzies){
    setDice(oldDice=>oldDice.map(die=>{
      return die.isHeld? die: generateNewDie()
    }))
  } else{
    setTenzies(false)
    setDice(allNewDice)
  }
  
  
}

function holddice(id){
   setDice(oldDice=>oldDice.map(die=>{
    return die.id===id? {...die,   isHeld:!die.isHeld}: die
   }))
}

      const diceElements=dice.map(die=><Dice
         key={die.id} 
        value={die.value}
         isHeld={die.isHeld}
         onHold={()=>holddice(die.id)} />)
  
  
  return (
    <>
  
    <main>
      {tenzies && <Confetti />}
      <h1 className='title'>Tenzies</h1>
      <p className='instructions'>Roll until all dice are the same.Click each die to freeze it at its current value between rolls</p>
        <div className='dice-container'>
     {diceElements} 
        </div>
        <div>
          <button onClick={rolldice} className='roll-dice'>{tenzies?"New Game":"Roll"}</button>
        </div>
    </main>

    </>
  )
}

export default page