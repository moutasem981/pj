import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../../../store/useAuthStore'

export default function Navbar() {

  const Token = useAuthStore((state)=> state.token);
  const Logout = useAuthStore((state)=>state.logout);
  const navigate = useNavigate();

  const handlelogout =()=>{
    Logout(),
    navigate('/login')
  }
 
  return (
    <>
    <Link to='/'> home</Link>
   
    {Token?
    <>
    <Link to='/cart'> cart</Link>
    <Link to='/login' component="button" onClick={handlelogout}> logout</Link>
      </>
      :
      <>
      <Link to='/login'> login</Link>
     <Link to='/register'> register</Link>
     </>
  }
      
   
    </>
  )
}
