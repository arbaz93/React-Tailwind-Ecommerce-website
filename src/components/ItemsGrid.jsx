import React from 'react'
import ItemCard from './ItemCard'

export default function ItemsGrid({ items }) {

  return (
    <div className='flex flex-col w-full min-h-svh gap-6 px-6 py-8 md:px-8'>
      <h4 className='text-sm sm:text-base text-slate-900 '>16 Product(s) Found</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {items.map((item, index) => {
          return (<ItemCard key={index} item={item} />)
        })}
      </div>
    </div>
  )
}
