import React, { useContext, useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Ct from './Ct'
import axios from 'axios';


const Add = () => {
  
  let [post,setPost]=useState({"title":"","body":"","cat":""})
  const navigate=useNavigate()
  const [msg,setMsg]=useState("")

  const obj=useContext(Ct);

  useEffect(()=>{
    if(obj.data.token ===""){
      navigate("/login")
    }
  },[navigate,obj.data.token])

  let fun=(e)=>{
    setPost({...post,[e.target.name]:e.target.value})
  }
  let add=()=>{
    axios.post("http://localhost:5000/addpost",{...post,"uid":obj.data._id,"name":obj.data.name,"date":new Date().toLocaleDateString()}).then((res)=>{
      setMsg(res.data.msg)
      setPost({"title":"","body":"","cat":""})
    })
  }
  return (<>
    <div className='formcon'>
      <div className='form'>
        <div className='msg'>{msg}</div>
        <input type='text' placeholder='enter title' name="title" onChange={fun} value={post.title}/>
        <textarea name="body" onChange={fun} value={post.body} className='txtarea'></textarea>
        <select name="cat" value={post.cat} onChange={fun}>
          <option value="" selected disabled>Select cat</option>
          <option value="edu">Education</option>
          <option value="ent">Movies</option>
          <option value="sports">Sports</option>
          <option value="news">News</option>
        </select>
        <button onClick={add}>Addpost</button>
      </div>
    </div>
    </>
  )
}

export default Add
