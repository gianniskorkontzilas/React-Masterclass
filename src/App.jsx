import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThisComponent from './components/ThisComponent'

function App() {

  useEffect(  () => {
    console.log('This component is mounted')

  }, [])

  return (
    <div>
      hello react
    </div>
  )
}



export default App
