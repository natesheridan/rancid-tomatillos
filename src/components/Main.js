import React, { Component } from 'react';
import '../css/Main.css';
import MovieListContainer from './MovieListContainer';
import SingleMovieScreen from './SingleMovieScreen';
import {Route} from 'react-router-dom';
import api from '../api.js';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: {},
      selectedMovie: {},
    }
  }

  componentDidMount = () => {
    api.getAllMovies()
    .then(data =>{
      this.setState({ movies : data.movies });
    })
  }

  MovieData() {
    api.getAllMovies()
    .then(data=>console.log(data))
    .then((movies) => {this.setState({movies})})
  }

  setMovieDetails = (id) => {
    const selectedMovie = this.state.movies.find(movie => movie.id === id);
    this.setState({ selectedMovie: selectedMovie });
  }

  goBack = () => {
    this.setState({ selectedMovie: {}})
    console.log(this.state.movies, "Movies after go back")
  }

  render() {
    return (
      <div className="row main">
        {this.state.error?.message && <h2>{this.state.error.message}</h2>}
        <Route exact path={['/', '/home']} render={ () =>
          <MovieListContainer movies={this.state.movies} setMovieDetails={this.setMovieDetails} />
        }/>
        <Route
          exact path="/movies/:id"
          render={({match}) => {
            return <SingleMovieScreen movieID = {match.params.id}/>
          }}
        />
      </div>
    )
  }
}

export default Main;
