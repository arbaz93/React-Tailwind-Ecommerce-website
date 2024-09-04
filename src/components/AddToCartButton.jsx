import React from 'react'

export default function AddToCartButton({ id, addItemToCart }) {
  return (
    <button onClick={() => {addItemToCart(id)}} className='w-full py-2 bg-slate-950 text-white hover:bg-slate-800 duration-100'>
      Add to cart
    </button>
  )
}
