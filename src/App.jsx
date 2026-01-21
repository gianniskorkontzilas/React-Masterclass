import React from "react"
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Error404 from "./pages/Error404"

function App() {




  return (
 
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<About />} path='/about'/>
        <Route element={<Error404 />} path='*'/>
      </Routes>
    </BrowserRouter>

  )

}

 export default App