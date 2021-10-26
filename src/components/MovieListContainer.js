import React, { Component, useEffect } from 'react';
import '../css/MovieListContainer.css';
import MovieCard from './MovieCard';
import SearchField from './SearchField';


const MovieListContainer = ( { movies } ) => {

  
  const [renderedMovies, setRenderedMovies] = React.useState(movies)
  let filteredMovies = [];

 
  const handleChange = (event) => {
    searchMovies(event.target.value)
    setRenderedMovies(filteredMovies)
}
  
  const searchMovies = (str) => {
    filteredMovies = movies.movies?.filter(movie => movie.title.toLowerCase().includes(str.toLowerCase()))
  }
  
  return (
    <>
      <SearchField searchMovies = {searchMovies} handleChange={handleChange}/>
      <section className="movie-list-container">
        {renderedMovies.movies?.map(movie => {
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
    </>
  )
}

export default MovieListContainer;
