import React, { useContext, useEffect } from 'react'
import Ct from './Ct';
import {useNavigate} from 'react-router-dom';

const Logout = () => {
  const obj=useContext(Ct)
  const navigate=useNavigate()

  useEffect(()=>{
    obj.setlogin({"token":"","name":"","_id":""})
    navigate("/login")
  },[navigate,obj])
  return (
    <div></div>
  )
}

export default Logout
