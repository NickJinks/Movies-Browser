import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import search_icon from '../../assets/search_icon.svg'
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate()
  const scrollToTop = ()=> {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }


  return (
    <div className='footer'>
        <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={youtube_icon} alt="" />
        <img src={search_icon} alt="Search" onClick={scrollToTop} className='footer__search--icon' />
      </div>
      <ul>
        <li className='link footer__link--hover-effect footer__link--hover-effect--white' onClick={()=> navigate('/')}>Home</li>
        <li className='link footer__link--hover-effect footer__link--hover-effect--white' onClick={()=> navigate('/about')}>About</li>
        <li className='link footer__link--hover-effect footer__link--hover-effect--white'>Terms of Use</li>
        <li className='link footer__link--hover-effect footer__link--hover-effect--white' onClick={()=> navigate('/contact')}>Contact</li>
      </ul>
      <p className='copyright-text'>© 2026 Movies-Browser Inc. Created by: Nicholas Jinks</p>
    </div>
  )
}

export default Footer
