import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Children from './Children'


function App() {

  const [variable, setVariable] = useState('my world')

  const anyFunction = ( ) => {
    return 'hello world 3'
  }

  return (
    <div>
      {variable}
      <Children data={variable} dataChangingFunction={setVariable} anotherFunction={anyFunction} />
      <br />
    </div>
  )
}



export default App
