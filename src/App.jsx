import React, { useState } from 'react'
import Home from './pages/Home/Home'
import Movie from './pages/Movie/Movie'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer/Footer'

const App = () => {

  return (
    <div className='app__wrapper'>
    <Navbar/>
          <div className="content">
        <Routes>
        <Route path ='/' element={<Home />}/>
        <Route path ='/movie/:imdbID' element={<Movie />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App

