import React from 'react'
import CartItems from "./CartItems"
import { connect } from 'react-redux'
import { CLEAR_CART, GET_TOTALS } from './Actions';

const CartContainer = ({cart=[],total,dispatch}) => {
  React.useEffect(()=>{
    dispatch({type:GET_TOTALS})
  })
  if(cart.length===0){
    return (
      <section className='cart'>
        <header>
          <h2>Your Bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
      <section className='cart'>
        <header>
          <h2>Your Bag</h2>
        </header>
        <article>
          {cart.map(item=>{
            return <CartItems key={item.id} {...item} />
          })}
        </article>
       
          <footer>
            <hr />
      <div className='cart-total'>
            <h4>Total <span>${total}</span></h4>
          </div>
          <button onClick={()=>{dispatch({type:CLEAR_CART})}} className='btn clear-btn'>Clear Cart</button>
          </footer>
      </section>
   
  )
}
function mapStateToProps(store){
  const {cart,total}=store;
 return {cart,total}
}

export default connect(mapStateToProps)(CartContainer)