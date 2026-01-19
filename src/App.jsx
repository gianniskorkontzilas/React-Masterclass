import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StateLessComponent from './components/StateLessComponent'

function App() {

  

  return (
    <div>
      <StateLessComponent text={"this is text "} >  </StateLessComponent>
      <StateLessComponent text={"this is not text "} >  </StateLessComponent>

    </div>
  )
}



export default App
