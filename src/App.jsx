import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Children from './Children'


function App() {

  const [variable, setVariable] = useState('my world')

  return (
    <div>
       {variable}
       <Children data ={variable}/>
       <br/>
       <button onClick = {( ) => {
         setVariable('something else')
       }}>
        change
       </button>
    </div>
  )
}



export default App
