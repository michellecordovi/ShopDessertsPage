import './App.css'
import {useState, useEffect} from 'react'
import data from '../data.json'

function App() {
  const [desserts] = useState(data)

  useEffect(() => {
    console.log(desserts)
  }, [desserts])

  return <p>HELLO</p>
}

export default App
