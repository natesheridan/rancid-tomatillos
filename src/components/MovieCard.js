import React from 'react';
import '../css/MovieCard.css';

const MovieCard = ({ classes, id, poster, background, title, release, rating, setMovieDetails }) => {
  return (
    <article className={classes} id={id} onClick={ () => setMovieDetails(id) } >
      <img src={poster} alt={title}></img>
      <p>{title}</p>
    </article>
  )
}

export default MovieCard;
