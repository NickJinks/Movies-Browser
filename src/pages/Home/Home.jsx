import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Movie_background from '../../assets/Movie_background.jpg'
import Footer from '../../components/Footer/Footer'
import MovieCards from '../../components/MovieCards/MovieCards'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="header">
        <img src={Movie_background} alt="" className='banner-img'/>
        <div className="header-title">
          <h1>
            Browse to find your Movie!
          </h1>
          </div>
          <div className="search__content--wrapper">
            <div className="input__wrapper">
              <div className="input__field">
              <input className='search' type="text" placeholder='Search by Title or Year Released' />
               <a href="#">
                  <i className="fa-solid fa-magnifying-glass click"></i>
                </a>
              </div>
              </div>
              </div>
              <MovieCards />
            </div>
            <Footer/>
          </div>
        
  )
}

export default Home
