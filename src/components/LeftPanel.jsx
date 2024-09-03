import React from 'react'

export default function LeftPanel() {
    const sizes = ['XS', 'S','M', 'ML', 'L', 'XL', 'XXL'];
    return (
      <div className='leftPanel w-[18rem] items-content-center flex flex-col gap-6 px-6 py-8 md:px-8'>
        <h4 className="text-sm font-bold">Sizes:</h4>
  
        <div className="flex flex-wrap gap-2 justify-items-center mx-auto">
          {sizes.map((size,i) => {
            return (<button key={i} className='text-xs w-10 aspect-square font-light rounded-[50%] bg-slate-100 hover:bg-slate-200 duration-100'>
              {size}
            </button>)
          })}
        </div>
      </div>
    )
}
