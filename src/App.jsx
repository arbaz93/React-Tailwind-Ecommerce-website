import { useEffect, useState } from 'react'
import LeftPanel from './components/LeftPanel'
import ItemsGrid from './components/ItemsGrid'
import { itemsData } from './utils/itemsData'
import Navigation from './components/Navigation'
function App() {
  const [cartItems, setCartItems] = useState(localStorage.getItem('CART_ITEMS') ? JSON.parse(localStorage.getItem('CART_ITEMS')) : []);
  const [showCart, setShowCart] = useState(false)
  const [items, setItems] = useState(itemsData)

  useEffect(() => {
    // const localItems = localStorage.getItem('CART_ITEMS');
      if (cartItems != []) {
        localStorage.setItem('CART_ITEMS', JSON.stringify(cartItems))
      }
  }, [cartItems])
 
  function addItemToCart(id) {
    const newItem = items.filter(item => item.id == id);
    setCartItems([...cartItems, ...newItem]);
  }
  function removeItemFromCart(id) {
    let removed = false;
    const newCart = cartItems.filter(cartItem => {
      if (removed) {
        return true;
      }
      if (cartItem.id == id) {
        removed = true;
        return false
      }
      return true;
    });
    setCartItems(newCart)
  }
  return (
    <>
      <div id='top'></div>
      <Navigation cartItems={cartItems} showCart={showCart} setShowCart={setShowCart} removeItemFromCart={removeItemFromCart}/>
      <main className='min-h-full flex flex-col sm:flex-row '>
        <LeftPanel setShowCart={setShowCart} itemsData={itemsData} setItems={setItems}/>
        <ItemsGrid setShowCart={setShowCart} items={items} addItemToCart={addItemToCart} />
        <a href='#top' className='fixed flex justify-center items-center bottom-4 right-2 w-6 h-6 text-base bg-white text-black border-black border-solid border rounded-[50%] aspect-square'><i className="fa-solid fa-caret-up"></i></a>
      </main>
    </>
  )
}

export default App
