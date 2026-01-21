import React, { useEffect, useRef, useState } from "react"
import './App.css'

function App() {

  const ref = useRef()

  return (
    <div className="...">
      <div>hello</div>
      <input ref={ref} type ="text" />
      <button onClick={() => 
        console.log(ref.current.value)
      }>console value</button>
    </div>


  )

}

 export default App