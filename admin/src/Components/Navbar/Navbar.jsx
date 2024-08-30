import React from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.png'
import navProfile from '../../Assets/profile.png'

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