import React, { Component } from 'react'
import '../css/MovieListContainer.css';
import MovieCard from './MovieCard';
import SearchField from './SearchField';


class MovieListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
      isSearching: false,
    }
  }


  cardElements = () => {
    return this.props.movies.map((movie, i) => {
      return (
        <MovieCard
        key={movie.id}
        id={movie.id}
        poster={movie.poster_path}
        background={movie.backdrop_path}
        title={movie.title}
        release={movie.release_date}
        rating={movie.average_rating}
        setMovieDetails={this.state.setMovieDetails}
        />
      )
    })
  }

  render() {

    return (
      <section className="movie-list-container">
        <SearchField searchMovies = {this.props.searchMovies}/>
        {this.cardElements()}
      </section>
    )
  }
}

export default MovieListContainer;
