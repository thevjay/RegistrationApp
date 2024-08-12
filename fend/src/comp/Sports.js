import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Sports = () => {
  let [posts,setPosts]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:5000/getpost/cat/sports").then((res)=>{
      setPosts(res.data)
    })

  },[])

return (
  <div className='newscon'>
  {
    posts.map((item)=>{
      return(<div className='postcon'>
        <p>
          <span className='hd'>{item.title}</span>
          {item.body}
        </p>
        <h3>Posted By:{item.name}</h3>
        <h3>{new Date(item.date).toLocaleDateString()}</h3>
        </div>)
    })
  }

  </div>
)
}


export default Sports