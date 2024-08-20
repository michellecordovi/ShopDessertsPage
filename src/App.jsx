import './App.css'
import {useState, useEffect} from 'react'
import data from '../data.json'
import DessertGrid from './components/DessertGrid'
import Cart from './components/Cart'

function App() {
  const [desserts] = useState(data)

  useEffect(() => {
    console.log(desserts)
  }, [desserts])

  return (
    <>
      <DessertGrid desserts={desserts}/>
      <Cart/>
    </>
  )
}

export default App
