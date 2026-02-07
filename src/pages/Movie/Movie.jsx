import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Movie.css";

const Movie = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const searchQuery = location.state?.searchQuery;

  useEffect(() => {
    async function fetchMovie() {
      try {
        const { data } = await axios.get(
          `https://www.omdbapi.com/?apikey=74a7591a&i=${imdbID}`
        );
        setMovie(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [imdbID]);

  if (loading) {
    return <h2 style={{ color: "#fff" }}>Loading movie...</h2>;
  }

  if (!movie) {
    return <h2 style={{ color: "#fff" }}>Movie not found</h2>;
  }

  return (
    <div className="movie__details">

       {/* BACK BUTTON */}
      <button
        onClick={() => {
          if (searchQuery) {
            navigate("/", { state: { searchQuery } }); 
          } else {
            navigate(-1); // go back to previous page
          }
        }}
        className="back__button"
      >
        ⬅ Back to search
      </button>
      <img src={movie.Poster} alt={movie.Title} />

      <div className="movie__details--info">
        <h1>{movie.Title}</h1>
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Runtime:</strong> {movie.Runtime}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>IMDB Rating:</strong> ⭐ {movie.imdbRating}</p>
      </div>
    </div>
  );
};

export default Movie;
