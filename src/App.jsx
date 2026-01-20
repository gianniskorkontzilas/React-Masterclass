import React, { useEffect, useState } from "react"
import './App.css'

function App() {


  const [value, setValue] = useState('')
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if(value.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }

  }, [value])

 return (
  <div className="container">
    <input value={value} onChange={(e) =>{
      setValue(e.target.value);
    }} type="text" />
    <button
    disabled={disabled}
    onClick={() => { 
      alert("The input value is: " + value)

    }}> 
      Show Value
    </button>

  </div>
 )
}

 export default App