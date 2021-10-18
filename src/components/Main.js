import React from 'react';
import '../css/Main.css';

import { endpoints } from '../App';
import MovieListContainer from './MovieListContainer';
import SingleMovieScreen from './SingleMovieScreen';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      selectedMovie: ''
    }
  }

  componentDidMount = () => {
    fetch(endpoints.movies)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.movies }))
      .catch(error => this.setState({ error: error.message }))
    //this.setState({ movies: this.state.movies });
  }

  setMovieDetails = (id) => {
    const selectedMovie = this.state.movies.find(movie => movie.id === id);
    this.setState({ selectedMovie: selectedMovie });
  }

  render() {
    let main;
    console.log('this.state.movies', this.state.movies)
    //conditional rendering for whether or not there is a movie selected
    this.state.selectedMovie ?
    main = <SingleMovieScreen movie={this.state.selectedMovie} /> :
    main = <MovieListContainer movies={this.state.movies} setMovieDetails={this.setMovieDetails} />;

    return (
      <div className="row main">
        {main}
      </div>
    )
  }
}

export default Main;
