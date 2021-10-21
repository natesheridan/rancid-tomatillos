import React from 'react';
import '../css/MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ classes, id, poster, background, title, release, rating, setMovieDetails }) => {
  console.log('title:', title)
  return (
    <Link to={"/movie/"+ id}>
    <article className="movie-card" id={id}>
      <img src={poster} alt={title}></img>
      <p>{title}</p>
    </article>
    </Link>
  )
}

export default MovieCard;
