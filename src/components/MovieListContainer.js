import React, { Component } from 'react'
import '../css/MovieListContainer.css';
import MovieCard from './MovieCard';

class MovieListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // movies: this.props.movies,
      setMovieDetails: this.props.setMovieDetails
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
        {this.cardElements()}
      </section>
    )
  }
}

export default MovieListContainer;
