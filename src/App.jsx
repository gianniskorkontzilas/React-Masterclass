import React, { useEffect, useState } from "react"
import './App.css'

function App() {

  let jsxSlots = {
    slot1: 'slot1',
    slot2: 'slot2',
    slot3: 'slot3'
  }

  const [currentSlot, setCurrentSlot] = useState(jsxSlots.slot1)

  if(currentSlot === jsxSlots.slot1) {
    return (
      <div className='container'>
        <div>Slot 1</div>
        <button onClick={() => setCurrentSlot (jsxSlots.slot2)}>go to slot2</button>
      </div>
    )
  }

  if(currentSlot === jsxSlots.slot2) {
    return (
      <div className='container'>
        <div>Slot 2</div>
        <button onClick={() => setCurrentSlot (jsxSlots.slot3)}>go to slot 3</button>
      </div>
    )
  }

  if(currentSlot === jsxSlots.slot3) {
    return (
      <div className='container'>
        <div>Slot 3</div>
        <button onClick={() => setCurrentSlot ("doesnt exist")}> go to default slot</button>
      </div>
    )
  }



 return (
  <div className="container">
    hello
  </div>
 )
}

 export default App