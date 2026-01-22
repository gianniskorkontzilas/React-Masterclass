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

const postData = async() => {
  try{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
      title: 'hello',
      body: 'world',
      userId: 1000
     })
    })
    let result = await response.json()
    console.log("Data posted successfully", result)
    alert('Data posted successfully')
  } catch(e) {
    console.log(e)
  }
}

const deletePost = async () => {
  try {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/1',{
      method: 'DELETE'
    })
    console.log("Data deleted successfully", res)
    alert('Data deleted successfully');
  } catch (e) {
    console.log
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
   <button onClick={postData}>
    Post random data
   </button>
   <button onClick={deletePost}>
    Delete data
   </button>
    </div>
  )
}

 export default App