import React, { Component } from 'react';
import '../css/MovieListContainer.css';
import MovieCard from './MovieCard';

const MovieListContainer = ({ movies }) => {
  return (
    <section className="movie-list-container">
      {movies.movies?.map(movie => {
        return (
          <MovieCard
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            background={movie.backdrop_path}
            title={movie.title}
            release={movie.release_date}
            rating={movie.average_rating}
          />
        )
      })
    }
    </section>
  )
}

export default MovieListContainer;
