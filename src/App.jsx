import React from "react"
import './App.css'

function App() {

  let list = [
    {
      id:1,
      name: 'John Doe',
    },
    {
      id:2,
      name: 'Jane Doe',
    },
    {
      id:3,
      name: 'John Smith',
    },
    {
      id:4,
      name: 'Jane Smith',
    },
  ]
 
  return(
    <div className="...">
    {
      list.map(curr => {
        return(
          <p key={curr.id}>{curr.id}: {curr.name}</p>
        )
      })
    }
    </div>
  )
}

export default App
