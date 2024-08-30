import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import navProfile from '../../assets/profile.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" className="nav-logo" />
        <p>Admin Panel</p>
        <img src={navProfile} alt="" className='nav-profile'/>
    </div>
  )
}

export default Navbar
