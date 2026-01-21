import React from "react"
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"

function App() {




  return (
 
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<About />} path='/about'/>
      </Routes>
    </BrowserRouter>

  )

}

 export default App