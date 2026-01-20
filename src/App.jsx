import React, { useState } from "react"
import './App.css'

function App() {

 
  const [condition, setCondition] = useState(false)
  const [condition2, setCondition2] = useState(false)

  
  return(
    <div className="...">
    {
      condition?
      <p style={{color: 'green'}}>
        The condition is true
      </p>
      :
      condition2 ?
      <p style={{color: 'green'}}>
      The condition one is false and condition2 is true
    </p> :
     <p style={{color: 'red'}}>
     The condition one is false and condition2 is also false
   </p>
    }
    </div>
  )
}

export default App
