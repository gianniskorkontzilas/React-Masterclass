import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

const [stringState, setStingState] = useState("hello")
const [count, setCount] = useState(1)

  return (
    <div>
      this is count: <b>{count}</b>
      <br/>
      <button onClick={() =>{
       setCount(previous => previous + 1)
      }}>change count</button>
      <br/>
      <br/>
      this is the text: <b>{stringState}</b>
      <br/>
      <button onClick={() =>{
        setStingState("world")
      }}>change string</button>
    
    </div>
  )
}



export default App
