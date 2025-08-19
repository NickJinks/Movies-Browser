import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import search_icon from '../../assets/search_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={youtube_icon} alt="" />
        <img src={search_icon} alt="" />
      </div>
      <ul>
        <li className='link footer__link--hover-effect footer__link--hover-effect--white'>Home</li>
        <li className='link footer__link--hover-effect footer__link--hover-effect--white'>Movies</li>
        <li className='link footer__link--hover-effect footer__link--hover-effect--white'>Terms of Use</li>
        <li className='link footer__link--hover-effect footer__link--hover-effect--white'>Contact Us</li>
      </ul>
      <p className='copyright-text'>© 2025 Movies-Browser Inc.</p>
    </div>
  )
}

export default Footer
