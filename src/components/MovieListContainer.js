import React, { Component } from 'react'
import '../css/MovieListContainer.css';
import MovieCard from './MovieCard';

class MovieListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
      setMovieDetails: this.props.setMovieDetails
    }
  }

  returnCardElements() {
    let movieCardElementArr = this.state.movies.map((movie, i) => {
      let classes = `movie-card fade-in animation-duration:${i}00ms`;
      return <MovieCard
        key={movie.id}
        classes={classes}
        id={movie.id}
        poster={movie.poster_path}
        background={movie.backdrop_path}
        title={movie.title}
        release={movie.release_date}
        rating={movie.average_rating}
        setMovieDetails={this.state.setMovieDetails}
      />
    });
    return movieCardElementArr;
  }

  render() {
    return (
      <section className="movie-list-container">
        {this.returnCardElements()}
      </section>
    )
  }
}

export default MovieListContainer;
