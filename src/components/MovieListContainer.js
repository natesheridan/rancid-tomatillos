import React, { Component } from 'react'
import '../css/MovieListContainer.css';
import MovieCard from './MovieCard';

class MovieListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies
    }
  }

  returnCardElements() {
    let movieCardElementArr = this.state.movies.map((movie, i) => {
      let classes = `movie-card fade-in animation-duration:${i}00ms`;
      <MovieCard
        classes={classes}
        title={movie.title}
        id={movie.id}
        poster={movie.poster_path}
        background={movie.backdrop_path}
        title={movie.title}
        release={movie.release_date}
        rating={movie.average_rating}
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
