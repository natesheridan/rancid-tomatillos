import React from 'react';
import '../css/MovieCard.css';

const MovieCard = ({ classes, id, poster, background, title, release, rating, setMovieDetails }) => {
  return (
    <article className="movie-card" id={id} onClick={ () => setMovieDetails(id) } >
      <img src={poster} alt={title}></img>
      <p>{title}</p>
    </article>
  )
}

export default MovieCard;
