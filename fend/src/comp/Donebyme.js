import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Donebyme = () => {

  const [posts,setPosts]=useState([])
  const obj=useContext(Ct)
  const navigate=useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:5000/getpost/uid/${obj.data._id}`)
    .then((res)=>{
      setPosts(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
    
  },[obj.data._id])

  const edit=(item)=>{
    obj.setlogin({"item":item})
    navigate("/edit")
  }

  const del=(id)=>{
    axios.delete(`http://localhost:5000/del/${id}`)
    .then((res)=>{
      setPosts(posts.filter((post)=>
      post._id !== id))
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className='newscon'>
        {
            posts.map((item)=>{
              return(
                <div className='postcon'>
                    <p>
                      <span className='hd'>{item.title}</span>
                      {item.body}
                    </p>
                    <h3>Posted By:{item.name}</h3>
                    <h3>{new Date(item.date).toLocaleDateString()}</h3>
                    <section>
                      <button onClick={()=>edit(item)}>Edit</button>
                      <button onClick={()=>del(item._id)}>Delete</button>
                    </section>
                </div>
              )
            })
        }
    </div>
  )
}

export default Donebyme
