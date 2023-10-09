"use client"
import React from 'react'
import Things from '@/Components/Things'
import State from '@/Components/State'
import Counter from '@/Components/Counter'
import Contact from '@/Components/Contact'
import Boxes from '@/Components/Boxes'
import Jokes from '@/Components/Jokes'
import jokesData from './jokesData'
import Messages from '@/Components/Messages'
import Forms from '@/Components/Forms'
import Newsletter from '@/Components/Newsletter'
import Apicall from '@/Components/Apicall'
import Windowwidth from '@/Components/Windowwidth'

const page = () => {
  
  const jokeElements = jokesData.map(joke => {
    return (
        <Jokes 
            key={joke.id}
            setup={joke.setup} 
            punchline={joke.punchline} 
        />
    )
})

  return (
    <>
  <div className='container'>
  <Things />
  <State />
  <Counter />
    </div>

    <div className='container2'>
   <Contact />
   <Boxes />
    </div>

    <div className='container3'>
      {jokeElements} 
      </div>

      <div className='container4'>
     <Messages />
     <Forms />
      </div>

      <div className='container5'>
     <Newsletter />
      </div>

      <div className='container6'>
     <Apicall />
     <Windowwidth />
      </div>

    </>
  )
}

export default page