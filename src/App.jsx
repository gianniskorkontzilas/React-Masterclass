import React, { useEffect, useRef, useState } from "react"
import './App.css'

function App() {

  const [currentValue, setCurrentValue] = useState('')

  useEffect(() => {
    console.log(currentValue)
  }, [currentValue])

  return (
    <div className="...">
      <div>{currentValue}</div>
      <input value={currentValue}
      onChange={(event) => {
        setCurrentValue(event.target.value)
      }}  
      type="text"></input>
    </div>


  )

}

 export default App