import React from 'react'
import Home from './pages/Home/Home'
import Movie from './pages/Movie/Movie'
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom'

const App = () => {
  return (
    <div>
     
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/movie' element={<Movie/>} />
      </Routes>
      


    </div>
  )
}

export default App

