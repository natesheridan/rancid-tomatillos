import React, { Component } from 'react'
import './MovieListContainer.css';

class MovieListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {movies: this.props.movies}
  }

  returnCardElements() {
    let movieCardElementArr = this.state.movies.map((movie, i) => {
      let classes = `movie-card fade-in animation-duration:${i}00ms`;
      return (
        <article className={classes} id={movie.id} onClick={renderSinglePageView}>
          <img src={movie.poster_path}></img>
          <p>{movie.title}</p>
        </article>
      )
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
