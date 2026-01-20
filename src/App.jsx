import React from "react"
import './App.css'

function App() {

  let array = ['Hello', 'I', 'am', 'a', 'React', 'Developer']
 
  return(
    <div className="...">
      {
        array.map((curr) => {
          if(curr === 'React') {
            return 'Awesome'
          }

          return (
            <p>{curr}</p>
          )
        } )
      }
    </div>
  )
}

export default App
