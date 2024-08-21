import './App.css'
import {useState, useEffect} from 'react'
import data from '../data.json'
import DessertGrid from './components/DessertGrid'
import Cart from './components/Cart'

function App() {
  const [desserts] = useState(data)
  const [cartItems, setCartItems] = useState([])
  const [uniqueItems, setUniqueItems] = useState([])

  

  useEffect(() => {
    //creates array of unique cart items
    const uniqueItemsMap = cartItems.reduce((acc, item) => {
        const itemName = desserts[item].name;
        if (!acc[itemName]) {
            acc[itemName] = { index: item, count: 0 };
        }
        acc[itemName].count++;
        return acc;
    }, {});

    setUniqueItems(uniqueItemsMap)

    console.log(cartItems)
  }, [desserts, cartItems])

  return (
    <>
      <DessertGrid desserts={desserts} cartItems={cartItems} setCartItems={setCartItems} />
      <Cart desserts={desserts} cartItems={cartItems} setCartItems={setCartItems} uniqueItems = {uniqueItems} setUniqueItems={setUniqueItems} />
    </>
  )
}

export default App
