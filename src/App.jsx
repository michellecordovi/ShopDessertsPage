import './App.css'
import {useState, useEffect} from 'react'
import data from '../data.json'
import DessertGrid from './components/DessertGrid'
import Cart from './components/Cart'

function App() {
  const [desserts] = useState(data)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    console.log(cartItems)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [desserts, cartItems])

  return (
    <>
      <DessertGrid desserts={desserts} cartItems={cartItems} setCartItems={setCartItems} />
      <Cart/>
    </>
  )
}

export default App
