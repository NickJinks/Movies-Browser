import React, { useEffect, useState } from "react";
import "./MovieCards.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieCards = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=74a7591a&s=fast`
      );
      setMovies(data);
    }
    fetchMovies();
  }, []);

  return (
    <>
      <div className="movie__list">
        {movies.map((movie) => (
          <div className="movie">
            <div className="movie__title">{movie.title}</div>
            <p>{movie.poster}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieCards;
