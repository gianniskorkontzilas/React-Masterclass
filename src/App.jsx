import React, { useState } from "react"
import './App.css'

function App() {

 
  const [condition, setCondition] = useState(false)
  
  return(
    <div className="...">
    {
      condition?
      <p style={{color: 'green'}}>
        The condition is true
      </p>
      :
      <p style={{color: 'red'}}>
      The condition is false
    </p>
    }
    </div>
  )
}

export default App
