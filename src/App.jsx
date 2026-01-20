import React, { useReducer } from 'react'
import './App.css'



function App() {

  const initialState = {
    count: 0,
    text: '',

  }

  const reducerFunction = (state, action) => {
    if(action.type === 'increment') {
      return {
        ...state,
        count: state.count + 1,
      }
    }
    if(action.type === 'decrement') {
      return {
        ...state,
        count:state.count - 1,
      }
    }
    if(action.type === 'setText') {
      return {
        ...state,
        text: action.payload,
      }
    }

    return state;

  }

  const [state, dispatch] = useReducer(reducerFunction,initialState);

  return (
    <div className='...'>
      Count: {state.count}
      <br/>
      Text: {state.text}
      <br/>
      <button onClick={() => dispatch({type: 'increment'})}>Increase count</button>
      <br/>
      <button onClick={() => dispatch({type: 'decrement'})}>Decrease count</button>
      <br/>
      <button onClick={() => dispatch({type: 'setText', payload: 'New Text'})}>Change Text</button>
    </div>
  )
}



export default App
