import React from 'react';
import '../css/SingleMovieScreen.css';

const SingleMovieScreen = (movie) => {
  console.log(movie)
  return(
    <article className="single-movie-view"
      style={{
        backgroundImage: `url(${movie.movie.backdrop_path})`
      }}>


      <div className="cover-poster">
        <img src={movie.movie.poster_path} alt={movie.movie.title} />
      </div>

      <div className="movie-details">
        <section className="md-item">
          <p className="md-title">{movie.movie.title}</p>
        </section>
        <section className="md-item">
          <p className="md-release-date">{movie.movie.release_date}</p>
        </section>  
        <section className="md-item">
          <p className="md-average-rating">{movie.movie.average_rating}</p>
        </section>
        <section className="md-item">
          <p className="md-overview">{movie.movie.overview}</p>
        </section>
      </div>
    </article>
  )
}

export default SingleMovieScreen;
