import React from 'react';
import '../css/MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({id, poster, title, release, rating, setMovieDetails }) => {
  return (
    <Link to={"/movies/"+ id}>
    <article className="movie-card" id={id}>
      <img src={poster} alt={title}></img>
      <p>{title}</p>
    </article>
    </Link>
  )
}

export default MovieCard;
