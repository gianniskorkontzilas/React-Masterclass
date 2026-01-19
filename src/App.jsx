import { useEffect, useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Children from './Children'


function App() {

const ExpensiveCalculation = useMemo((x) => {
  let compurtedValue = 2 + x
  return compurtedValue
}, [value])
  

  return (
    <div>
       <children/>
    </div>
  )
}



export default App
