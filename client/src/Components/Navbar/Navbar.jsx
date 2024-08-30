import React, { useContext, useRef } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'


const Navbar = () => {
    const {totalCartItems} = useContext(ShopContext)
    const menuRef = useRef();
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <Link to="/"><img src={logo} alt="Logo" /></Link>
            <p>Simple Goods</p>
        </div>
        <ul ref={menuRef} className="nav-menu">
            <li><Link style={{textDecoration: 'none'}} to='/fashion'>Fashion</Link></li>
            <li><Link style={{textDecoration: 'none'}} to='/electronics'>Electronics</Link></li>
            <li><Link style={{textDecoration: 'none'}} to='/sports'>Sports</Link></li>
            <li><Link style={{textDecoration: 'none'}} to='/accessories'>Accessories</Link></li>
        </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')?<button onClick={() =>{
                localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>:
                <Link to='/auth'><button>Login</button></Link>}
            
            <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
            <div className="item-count">
                {totalCartItems()}
            </div>
        </div>
    </div>
  )
}

export default Navbar