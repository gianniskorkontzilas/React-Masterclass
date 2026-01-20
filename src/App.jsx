import React from "react"
import './App.css'

function App() {

  let array = ['Hello', 'I', 'am', 'a', 'React', 'Developer']
 

  return(
    <div className="container">
      {
        array.map((curr) => {

          if(curr === 'React') {
            return (
              <p style={{color: 'blue'}}>{curr}</p>
            )
          }

          if(curr.length <= 3) {
            return (
              <p style={{
                color: 'red', 
              }}>{curr}</p>
            )
          }

          return (
            <p>{curr}</p>
          )
        }
      )
      }
    </div>
  )
}


export default App
