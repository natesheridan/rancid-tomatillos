import React, { Component } from 'react';
import '../css/Main.css';
import MovieListContainer from './MovieListContainer';
import SingleMovieScreen from './SingleMovieScreen';
import {Route} from 'react-router-dom';
import api from '../api.js';
import lS from '../lS';


class Main extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      movies: [],
      isSearching: false,
      error: {},
    }
  }

  componentDidMount = () => {
    api.getAllMovies()
    .then(data =>{
      this.setState({ movies : data.movies });
      this.setState({ allMovies : data.movies });
    })
  }
  searchMovies = (str) => {
    let parsedMovies = this.state.allMovies.filter((m) => m.title.toLowerCase().includes(str.toLowerCase()));
    this.setState({movies:parsedMovies});
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
          <MovieListContainer searchMovies={this.searchMovies} movies={this.state.movies}/>
        }/>
        <Route
          exact path="/:id"      
          render={({match}) => {
            return <SingleMovieScreen movieID = {match.params.id}/>
          }}
        />
      </div>
    )
  }
}

export default Main;
