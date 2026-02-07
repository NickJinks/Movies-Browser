// import React, { useEffect, useState } from "react";
// import "./MovieCards.css";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const MovieCards = () => {
//   const { imdbID } = useParams();
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     async function fetchMovies() {
//       const { data } = await axios.get(
//         `https://www.omdbapi.com/?apikey=74a7591a&s=fast`
//       );
//       setMovies(data.Search);
//       console.log(data)
//     }
//     fetchMovies();
//   }, []);

//   return (
//     <>
//       <div className="movie__list">
//         {movies.map((movie) => (
//           <div key={movie.imdbID} className="movie">
//             <figure className="movie__img--wrapper">
//            <img src={movie.Poster} alt="" className="movie__img"/>
//             </figure>
//             <div className="movie__description">
//               <div className="movie__description--title">
//                <a href="#"><i className="fa-solid fa-film"></i></a>
//                 <h2 className="movie__title">{movie.Title}</h2>
//               </div>
//               <div className="movie__release--date">
//                  <a href="#"><i className="fa-solid fa-calendar-days"></i></a>
//                 <h2 className="release__date">
//                    {movie.Year}
//                 </h2>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default MovieCards;

import React, { useEffect, useState } from "react";
import "./MovieCards.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MovieCards = ({ searchQuery, filterTerm = "", sortOrder }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  
  const processedMovies = movies
    .filter(movie =>
      movie.Title.toLowerCase().includes(filterTerm.toLowerCase())
    )
    .sort((a, b) => {
      const yearA = Number(a.Year);
      const yearB = Number(b.Year);

      return sortOrder === "newest"
        ? yearB - yearA   
        : yearA - yearB;  
    });

  useEffect(() => {
   setLoading(true);

  const delay = setTimeout(async () => {
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=74a7591a&s=${searchQuery}`
      );

      setMovies(data.Search || []);
    } catch (error) {
      console.error(error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }, 600);

  // Cleanup if searchQuery changes quickly
  return () => clearTimeout(delay);

}, [searchQuery]);

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading Movies...</h2>
      </div>
    );
  }

  return (
    <div className="movie__list">
      {processedMovies.map((movie) => (
        <div
          key={movie.imdbID}
          className="movie"
          onClick={() => navigate(`/movie/${movie.imdbID}`)}
        >
          <figure className="movie__img--wrapper">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="movie__img"
            />
          </figure>

          <div className="movie__description">
            <div className="movie__description--title">
              <i className="fa-solid fa-film"></i>
              <h2 className="movie__title">{movie.Title}</h2>
            </div>

            <div className="movie__release--date">
              <i className="fa-solid fa-calendar-days"></i>
              <h2 className="release__date">{movie.Year}</h2>
            </div>
          </div>
        </div>
      ))}
      </div>
  );
};

export default MovieCards;
