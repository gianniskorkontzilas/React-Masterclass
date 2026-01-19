import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateLessComponent from './components/StateLessComponent'
import Stateful from './components/Stateful'

function App() {

const [count, setCount]  = useState(0)

  return (
    <div>
      <p>count number:  {count}</p>
      <button onClick={() => {
        setCount(prev => prev + 1)
      }}>Increas count</button>
    </div>
  )
}



export default App
