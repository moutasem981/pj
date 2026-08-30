import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/footer/Footer'

export default function Mainlayout() {

   const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }, [pathname])

  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    
    </>
  )
}
