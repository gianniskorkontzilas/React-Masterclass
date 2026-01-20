import React, { useEffect, useState } from "react"
import './App.css'

function App() {

  let jsxSlots = {
    slot1: 'slot1',
    slot2: 'slot2',
    slot3: 'slot3'
  }

  const [currentSlot, setCurrentSlot] = useState(jsxSlots.slot4)

  if(currentSlot === jsxSlots.slot1) {
    return (
      <div className='container'>
        <div>Slot 1</div>
      </div>
    )
  }

  if(currentSlot === jsxSlots.slot2) {
    return (
      <div className='container'>
        <div>Slot 2</div>
      </div>
    )
  }

  if(currentSlot === jsxSlots.slot3) {
    return (
      <div className='container'>
        <div>Slot 3</div>
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