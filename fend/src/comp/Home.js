import React, { useContext, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Ct from './Ct';

const Home = () => {
  const obj=useContext(Ct)
  const navigate=useNavigate()

  useEffect(()=>{
    if(obj.data.token===""){
      navigate("/login")
    }
  },[navigate,obj])
  return (
    <div className='con'>
      <div className='sidmenu'>
        <Link to="/">All posts</Link>
        <Link to="/me">Add by me</Link>
        <Link to="/news">News</Link>
        <Link to="/edu">Education</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/star">Stared</Link>
        <Link to="/movies">Movies</Link>
      </div>

      <div className='maincont'>
          <Outlet/>
      </div>

      <div className='adv'>

      </div>

    </div>
  )
}

export default Home;
