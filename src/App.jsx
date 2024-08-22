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
  const [total, setTotal] = useState(0)

  useEffect(() => {
    ///calculates the total value for your order based on cartItems array
    function calculateTotal(){
      const priceArray = cartItems.map(index => {
          return desserts[index].price;
      })

      const totalPrice = priceArray.reduce((acc, val) => acc + val);

      function convertToUsd(num){
        const options = { style: 'currency', currency: 'USD' };
        const numberFormat = new Intl.NumberFormat('en-US', options)
        return numberFormat.format(num)
      }

      setTotal(convertToUsd(totalPrice))
    }

    if(cartItems.length > 0 ){
      calculateTotal()
    }

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
      <Cart desserts={desserts} cartItems={cartItems} setCartItems={setCartItems} uniqueItems = {uniqueItems} setModalIsVisible={setModalIsVisible} total={total} />
      <OrderConfirmedModal desserts={desserts} uniqueItems={uniqueItems} modalIsVisible={modalIsVisible} setModalIsVisible={setModalIsVisible} setCartItems={setCartItems} total={total} />
    </>
  )
}

export default App
