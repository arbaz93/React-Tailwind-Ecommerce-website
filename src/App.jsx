import { useState } from 'react'
import LeftPanel from './components/LeftPanel'
import ItemsGrid from './components/ItemsGrid'
import { items } from './utils/itemsData'
function App() {
  return (
    <main className='min-h-full flex flex-col sm:flex-row '>
      <LeftPanel />
      <ItemsGrid items={items}/>
    </main>
  )
}

export default App
