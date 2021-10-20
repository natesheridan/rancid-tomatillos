import React, { Component } from 'react';
import '../css/Main.css';

import { endpoints } from '../App';
import MovieListContainer from './MovieListContainer';
import SingleMovieScreen from './SingleMovieScreen';
import {Route} from 'react-router-dom';

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
    console.log(endpoints.movies)
    fetch(endpoints.movies)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.movies }))
      .catch(error => this.setState({ error }))
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
    let main;

    return (
      <div className="row main">
        {this.state.error?.message && <h2>{this.state.error.message}</h2>}
        <Route exact path="/" render={ () => 
          <MovieListContainer movies={this.state.movies} setMovieDetails={this.setMovieDetails}/>
        }/>
        <Route
          exact path="/:id"      
          render={({match}) => {
            const movieToRender = this.state.movies.find(movie => movie.id === parseInt(match.params.id));   
            return <SingleMovieScreen movie = {movieToRender}/>
          }}
        />
      </div>
    )
  }
}

export default Main;
