import React from 'react';
import '../css/SingleMovieScreen.css';

const SingleMovieScreen = (movie) => {
  console.log(movie)
  return(
    <article className="single-movie-view"
      style={{
        backgroundImage: `url(${movie.movie.backdrop_path})`,
        backgroundSize: "cover"
      }}>

      <article className="cover-poster">
        <img src={movie.movie.poster_path} alt={movie.movie.title} />
      </article>

      <article className="movie-details">
        <p>{movie.movie.title}</p>
        <p>{movie.movie.release_date}</p>
        <p>{movie.movie.average_rating}</p>
      </article>
    </article>
  )
}

export default SingleMovieScreen;
