import React from 'react'
import './Navbar.css'
import logo from '../../assets/main_logo.png'
import caret_icon from "../../assets/caret_icon.svg";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate()
  return (
    <div className='navbar'>
     <div className="navbar-left">
      <img className='nav-logo' src={logo} alt="" />
        <ul>
        <li className='link link__hover-effect link__hover-effect--white'>Home</li>
        <li className='link link__hover-effect link__hover-effect--white'>Movies</li>
        <li className='link link__hover-effect link__hover-effect--white'>Contact</li>
      </ul>
     </div>
     <div className="navbar-right">
      <div className="navbar-profile">
        <li><i className="fa-solid fa-user"></i></li>
      <img src={caret_icon} alt="" className='icons' />
      <div className="dropdown">
        <p onClick={()=> navigate('/login')}>Sign in to save favorites</p>
      </div>
      </div>
     </div>
    </div>
  )
}

export default Navbar
