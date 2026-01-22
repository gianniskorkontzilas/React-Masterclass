import React, { useEffect, useState } from "react"
import './App.css'


function App() {

const [data, setData] = useState(null);

const fetchData = async() => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await response.json()
    setData(data)
    console.log(data)
  } catch(e) {
    console.log(e)
  }
}

  useEffect(() =>  {
    fetchData()
  }, [])

  return (
    <div className="container">
      {
      data ? (
        <div>
          <h1>title: {data.title}</h1>
          <p>userId: {data.userId}</p>

        </div>
      ) :
      <div>No data is available</div>
   }
    </div>
  )
}

 export default App