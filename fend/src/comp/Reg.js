import React, { useState } from 'react'
import axios from 'axios';

const Reg = () => {
  const [user,setUser]=useState({
    "_id":"",
    "name":"",
    "dob":"",
    "phno":"",
    "pwd":"",
    "gen":"",
    "state":""
  })
  const [msg,setMsg]=useState("")
  const fun=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  const add=()=>{
        axios.post("http://localhost:5000/reg",user)
        .then((res)=>{
          setMsg(res.data.msg)
          setUser({"_id":"","name":"","dob":"","phno":"","pwd":"","gen":"","state":""})
        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            setMsg(error.response.data.msg);
          } else if (error.request) {
            // The request was made but no response was received
            setMsg("No response from the server.");
          } else {
            // Something happened in setting up the request that triggered an Error
            setMsg("An error occurred. Please try again.");
          }
        });
  }

  return (
    <div className='formcon'>
      <div className='form'>

        <div className='msg'>{msg}</div>

        <input type='text' placeholder='Enter email' name='_id' value={user._id} onChange={fun}/>
        <input type='text' placeholder='Enter name' name='name' value={user.name} onChange={fun}/>
        <input type='text' placeholder='Enter phno' name='phno' value={user.phno} onChange={fun}/>
        <input type='password' placeholder='Enter password' name='pwd' value={user.pwd} onChange={fun}/>
        <input type='date' name='dob' value={user.dob} onChange={fun}/>
        
        <select name='state' onChange={fun} value={user.state}>
            <option selected disabled value="">Select any one state</option>
            <option value="ap">Andhra Pradesh</option>
            <option value="ts">Telangana</option>
            <option value="mh">Maharastra</option>
        </select>

        <div>
            Gender: <input type='radio'  name='gen' value="male" onChange={fun}/>Male
                    <input type='radio' name='gen' value="female" onChange={fun}/>Female        
        </div>
        <button onClick={add}>Register</button>
      </div>
    </div>
  )
}

export default Reg