import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Ct from './Ct';


const Nav = () => {
  const obj=useContext(Ct)
  return (
    <div className='nav'>
      {obj.data.token !=="" && <Link to="/">Home</Link>}
      {obj.data.token ==="" && <Link to="/login">Login</Link>}
      {obj.data.token ==="" && <Link to="/reg">Register</Link>}
      {obj.data.token !=="" && <Link to="/add">Addpost</Link>}
      {obj.data.token !=="" && <Link to="/logout">Logout</Link>}
      {obj.data.token !=="" && <div>{obj.data.name}</div>}
    </div>
  )
}

export default Nav;