import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../../../store/useAuthStore'
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18next';
import { Button } from '@/components/ui/button';

export default function Navbar() {

  const Token = useAuthStore((state)=> state.token);
  const Logout = useAuthStore((state)=>state.logout);
  const navigate = useNavigate();
  const {t} = useTranslation();
  const changeLanguage =()=>{
    const newLng = i18n.language === "ar"?"en":"ar"
    i18n.changeLanguage(newLng);
  }

  const handlelogout =()=>{
    Logout(),
    navigate('/login')
  }
 
  return (
    <>

    <Button onClick={changeLanguage}>
     {i18n.language === "ar"?"EN":"AR"}
    </Button>
    <Link to='/'> {t('Home')}</Link>
   
    {Token?
    <>
    <Link to='/cart'> {t('Cart')}</Link>
    <Link to='/login' component="button" onClick={handlelogout}> {t('Logout')}</Link>
      </>
      :
      <>
      <Link to='/login'> {t('Login')}</Link>
     <Link to='/register'> {t('Register')}</Link>
     </>
  }
      
   
    </>
  )
}
