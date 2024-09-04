import React from 'react'
import ItemCard from './ItemCard'

export default function ItemsGrid({ items, addItemToCart, setShowCart }) {

  return (
    <div onClick={() => {setShowCart(false)}} className='flex flex-col w-full min-h-svh gap-6 px-6 py-8 md:px-8'>
      <h4 className='text-sm sm:text-base text-slate-900 '>{items.length} Product(s) Found</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {items.map((item) => {
          return (<ItemCard key={item.id} item={item} addItemToCart={addItemToCart}/>)
        })}
      </div>
    </div>
  )
}
