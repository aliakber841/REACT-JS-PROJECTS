import React from 'react'
import { useAppContext } from './Navbar'

const UserContainer = () => {
 const {user,logout}=  useAppContext();
  return (
    <>
        <div className="context-end">
          {user?(<div className='user-login' >
            <p>Hello There,{user?.name?.toUpperCase} </p>
    <button className='logout' onClick={logout}>Logout</button> </div>)
    : (<p>Please Login</p>)}
   
   </div>
  
    </>
  )
}

export default UserContainer