import React from 'react'

const Messages = () => {
    const [messages,setMessages]= React.useState(["a","b"])
  return (
    <div className='messages-container'>
 {
    messages.length === 0 ?
    <h1 className='messages'>You're all caught up!</h1>:
    <h1 className='messages'>You have {messages.length} unread {messages.length>1?"messages":"message"}</h1>
 }
    </div>
  )
}

export default Messages