import React, { useEffect, useRef } from "react"
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Error404 from "./pages/Error404"

function App() {


  let element = useRef(null)


  useEffect (() => {

  }, [])


  return (
 
    <div className="container">
      <div onClick={() => {
        element.current.style.backgroundColor = 'yellow';
        element.current.style.color ='black';
      }} ref={element}>
        <p>The box</p>
      </div>

    </div>

  )

}

 export default App