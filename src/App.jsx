import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  const [boolean, setBoolean] = useState(false)
  

  return (
    <div>

      {boolean && <p>True Condition</p>}
      {!boolean && <p>False condition</p>}
      <br/>

      <button onClick={() => {
        setBoolean(prev => !prev)

      }}>
        toggle
      </button>
    </div>
  )
}



export default App
