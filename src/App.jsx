import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThisComponent from './components/ThisComponent'

function App() {



  return (
    <div>
      <ThisComponent name={"John Doe"} age={21}></ThisComponent>
      <ThisComponent name={"Joan Doe"} age={23}></ThisComponent>
      <ThisComponent name={"Mike da"} age={31}></ThisComponent>

    </div>
  )
}



export default App
