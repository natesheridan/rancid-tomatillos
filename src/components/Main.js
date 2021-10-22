import React, { Component } from 'react';
import '../css/Main.css';
import MovieListContainer from './MovieListContainer';
import SingleMovieScreen from './SingleMovieScreen';
import { Route } from 'react-router-dom';
import { getAllMovies, getSingleMovie, getMoviesVideos } from '../api.js';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: {},
      selectedMovie: {}
    }
  }

  componentDidMount = () => {
    
    getAllMovies()
      .then(data => {
        this.setState({ movies : data.movies });
      })
  }

/*
What is happening inside this movieData function?
How is it different from what is happening inside componentDidMount?
*/

  MovieData() {
    getAllMovies()
      .then(data => console.log(data))
      .then(( movies ) => { this.setState({ movies }) })
  }

  setMovieDetails = (id) => {
    const selectedMovie = this.state.movies.find(movie => movie.id === id);
    this.setState({ selectedMovie: selectedMovie });
  }

  goBack = () => {
    this.setState({ selectedMovie: {}})
    console.log(this.state.movies, "Movies after go back")
  }

  /*
    If the render method passes nothing into it's anonymous fn (like the first use below),
    then does it not require a return statement and {}?  The second render method below
    requires the destructuring of the params (probably not the right term) to have access
    to match, history, & location.  It does include a return and is wrapped in {}.
  */

  render() {
    return (
      <div className="row main">
        {this.state.error?.message && <h2>{this.state.error.message}</h2>}
        <Route
          exact path={['/', '/home']}
          render={ () =>
            <MovieListContainer movies={this.state.movies} setMovieDetails={this.setMovieDetails} />
        }/>
        <Route
          exact path="/:id"
          render={ ({ match }) => {
            return <SingleMovieScreen movieID={match.params.id} />
          }}
        />
      </div>
    )
  }
}
