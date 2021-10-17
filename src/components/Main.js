import React from 'react';
import '../css/Main.css';

import MovieListContainer from './MovieListContainer';
import SingleMovieScreen from './SingleMovieScreen';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies,
      selectedMovie: ''
    }
  }

  // componentDidMount = () => {
  //   //eventually this is where we want to fetch
  //   this.setState({ movies: this.state.movies });
  // }

  setMovieDetails = (id) => {
    const selectedMovie = this.state.movies.find(movie => movie.id === id);
    this.setState({ selectedMovie: selectedMovie });
  }

  render() {
    let main;

    //conditional rendering for whether or not there is a movie selected
    this.state.selectedMovie ?
    main = <SingleMovieScreen movie={this.state.selectedMovie} /> :
    main = <MovieListContainer movies={this.state.movies} setMovieDetails={this.setMovieDetails} />;

    return (
      <div className="main">
        {main}
      </div>
    )
  }
}

export default Main;
