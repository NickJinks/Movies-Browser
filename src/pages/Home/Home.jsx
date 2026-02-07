import React, { useState } from 'react'
import './Home.css'
import Movie_background from '../../assets/Movie_background.jpg'
import MovieCards from '../../components/MovieCards/MovieCards'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [query, setQuery] = useState("") 
  const [sortOrder, setSortOrder] = useState("newest")

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      setQuery(searchTerm)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className='home'>
      
      <div className="header">
        <img src={Movie_background} alt="" className='banner__img'/>

        <div className="header__title">
          <h1>Browse to find your Movie!</h1>
        </div>
        <div className="search__content--wrapper">
          <div className="input__wrapper">
            <div className="input__field">
              <input
                className='search'
                type="text"
                placeholder='Search by Title or Year Released'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <i
                className="fa-solid fa-magnifying-glass click"
                onClick={handleSearch}
              ></i>
               <select className='sort'
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}>
                  <option value="" defaultValue>Sort</option>
                  <option value="newest">New - Old</option>
                  <option value="oldest">Old - New</option>
                </select>
            </div>
          </div>
          <MovieCards searchQuery={query}
          sortOrder={sortOrder} />
        </div>
      </div>
    </div>
  )
}

export default Home