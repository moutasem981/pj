import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../../../store/useAuthStore'

export default function Navbar() {
  const Token = useAuthStore((state)=> state.token);
  const Logout = useAuthStore((state)=>state.logout);
  const Navigate = useNavigate();
  
  const handleLogout = ()=> {
    Logout();
    Navigate('/login');
  }
  return (
    <>
    <Link to='/'> home</Link>
    {Token?
    <>
      <Link to='/cards'> cards</Link>
      <Link to='/login' component='button' onClick={handleLogout}> logout</Link>
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
