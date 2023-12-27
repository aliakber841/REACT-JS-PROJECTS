import React from 'react'
import Navbar from './Components/Navbar'
import CartContainer from './Components/CartContainer'
import { createStore } from "redux";
import cartItem from './cart-item'
import Reducer from './Components/Reducer'
import { Provider } from 'react-redux'




const store=createStore(Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const App = () => {
  return (
    <Provider store={store}>   

   <Navbar />
   <CartContainer />

    </ Provider>
  )
}


export default App