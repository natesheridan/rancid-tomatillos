import React, { Component } from 'react';
import '../css/MovieCard.css';

const MovieCard = ({ classes, id, poster, background, title, release, rating }) => {
  return (
    <article className={classes} id={id} onClick={ () => SingleMovieScreen(movie) }>
      <img src={poster}></img>
      <p>{title}</p>
    </article>
  )
}

export default MovieCard;
