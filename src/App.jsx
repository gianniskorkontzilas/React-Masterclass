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
 
  const list2 = list.filter(curr => curr.id !==3) 
  
  
  return(
    <div className="...">
    {
      list2.map(curr => {
        return(
          <p key={curr.id}>{curr.id}: {curr.name}</p>
        )
      })
    }
    </div>
  )
}

export default App
