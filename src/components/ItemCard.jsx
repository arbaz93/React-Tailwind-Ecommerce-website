import React from 'react'
import AddToCartButton from './AddToCartButton'

export default function ItemCard({ item }) {
  let price = item.price.split('.')

  function animateChangeOrigin(e) {
    let image = e;
    let x = image.nativeEvent.offsetX;
    let y = image.nativeEvent.offsetY;
    e.target.style.transformOrigin = `${x}px ${y}px`;
  }
  return (
    <div className='flex flex-col gap-2 text-center mb-4'>
      <div className='relative flex justify-center overflow-hidden'>
        <img onMouseMove={(e) => {animateChangeOrigin(e)}} onTouchMove={(e) => {animateChangeOrigin(e)}} className='hover:scale-150 duration-200' src={item.url} alt={item.title} />
        <p className='absolute top-0 right-0 text-xs py-1 px-2 bg-slate-950 text-white font-light'>{item.status}</p>
      </div>
      <div className='flex flex-col gap-1 items-center flex-1'>
        <h3 className='text-slate-900 font-semibold text-sm'>{item.title}</h3>
        <div className='h-1 w-5 rounded-sm bg-yellow-300'></div>
      </div>
      <p className='text-sm font-semibold '>$<span className='text-lg font-bold'>{price[0]}</span>.{price[1]}</p>
      <AddToCartButton />
    </div>
  )
}
