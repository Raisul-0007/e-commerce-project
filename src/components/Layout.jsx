import React from 'react'
import Navber from './Navber'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <div className="sticky top-0 z-50 ">
      <Navber/>
      <Header/>
    </div>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout