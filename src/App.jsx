import React, { useEffect, useState } from "react"
import './App.css'

function App() {

  const [array, setArray] = useState([
    {key: 1},
    {key: undefined},
    {key: 3}
  ])

  return (
    <div>
      {
        array?.map((curr, index) => {
          return (<p key={index}>{curr?.key}</p>)
        })
      }
    </div>


  )

}

 export default App