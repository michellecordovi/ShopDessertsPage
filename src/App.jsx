import './App.css'
import {useState, useEffect} from 'react'
import data from '../data.json'
import DessertGrid from './components/DessertGrid'

function App() {
  const [desserts] = useState(data)

  useEffect(() => {
    console.log(desserts)
  }, [desserts])

  return (
    <>
      <DessertGrid desserts={desserts}/>
    </>
  )
}

export default App
