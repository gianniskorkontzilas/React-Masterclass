import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThisComponent from './components/ThisComponent'

function App() {

  const logic = () => {
    console.log("This is App.jsx file")
  }



  return (
    <div>
      <ThisComponent name={"John Doe"} age={21} functionCall={logic} ></ThisComponent>
      

    </div>
  )
}



export default App
