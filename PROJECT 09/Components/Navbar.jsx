import React, { useContext } from 'react'
import NavLinks from './NavLinks'

export const NavbarContext=React.createContext();
export const useAppContext=()=>React.useContext(NavbarContext)
const Navbar = () => {

  const [user,setUser]=React.useState({name:"Bob"});
  const logout=()=>{
    setUser(null);
  };
  return (
    <>
    <NavbarContext.Provider value={{user,logout}}>
    <div className='context-container'>
    <h2>CONTEXT API</h2>
    <NavLinks />
    </div>
    </NavbarContext.Provider>
    </>
  )
}

export default Navbar