import React from 'react'
import CartItem from './CartItem'

export default function CartBox({ cartItems, removeItemFromCart }) {
  return (
    <div className='absolute top-[120%] max-w-[20rem] max-h-[30rem] overflow-auto right-0 flex flex-col gap-4 shadow-md bg-white px-4 py-8 z-10'>
        {cartItems.length === 0 ? <p>No Item In Cart</p> : cartItems.map((cartItem, i) => {
            return (
                <CartItem cartItem={cartItem} key={i} removeItemFromCart={removeItemFromCart}/>
            )   
        })}
    </div>
  )
}
