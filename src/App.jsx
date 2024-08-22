import './App.css'
import {useState, useEffect} from 'react'
import data from '../data.json'
import DessertGrid from './components/DessertGrid'
import Cart from './components/Cart'
import OrderConfirmedModal from './components/OrderConfirmedModal'

function App() {
  const [desserts] = useState(data)
  const [cartItems, setCartItems] = useState([])
  const [uniqueItems, setUniqueItems] = useState([])
  const [modalIsVisible, setModalIsVisible]= useState(false)

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
      <Cart desserts={desserts} cartItems={cartItems} setCartItems={setCartItems} uniqueItems = {uniqueItems} setModalIsVisible={setModalIsVisible} />
      <OrderConfirmedModal desserts={desserts} modalIsVisible={modalIsVisible} setModalIsVisible={setModalIsVisible} />
    </>
  )
}

export default App
