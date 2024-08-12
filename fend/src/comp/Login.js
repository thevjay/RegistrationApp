import axios from 'axios'
import React, { useContext, useState } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [user,setUser]=useState({"_id":"","pwd":""})
  const [msg,setMsg]=useState("")
  const navigate=useNavigate()

  const fun=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const obj=useContext(Ct)
  const Login=()=>{
      axios.post("http://localhost:5000/login",user).then((res)=>{
        if(res.data.token !== undefined){
          obj.setlogin(res.data)
          navigate("/")
        }
        else{
          setMsg(res.data.msg)
        }
      })
      .catch((err)=>{
        console.error(err)
        setMsg("Error logging in. Please try again.")
      })
  }

  return (
    <div className='formcon'>
      <div className='form'>
        <div className='msg'>{msg}</div>
        <input 
          type='text' 
          placeholder='Enter Email' 
          name='_id' 
          value={user._id} 
          onChange={fun}
          />
        <input 
          type='password' 
          placeholder='Enter password' 
          name='pwd' 
          value={user.pwd} 
          onChange={fun}
          />
        <button onClick={Login}>Login</button>
      </div>
    </div>
  )
}

export default Login
