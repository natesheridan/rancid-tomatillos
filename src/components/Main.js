import React from 'react';
import './Main.css';

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

  //where the hell do I put this shit?
  // id: movie.id,
  // poster: movie.poster_path,
  // backdrop: movie.backdrop_path,
  // title: movie.title,
  // rating: movie.average_rating,
  // release: movie.release_date

  componentDidMount = () => {
    //eventually this is where we want to fetch
    this.setState({ movies: movieData.movies });
  }

  setMovieDetails = (id) => {
    const selectedMovie = movieData.movies.find(movie => movie.id === id);
    this.setState({ selectedMovie: selectedMovie });
  }

  render() {
    let main;

    selectedMovie.length ?
    main = <SingleMovieScreen movie={this.state.selectedMovie} /> :
    main = <MovieListContainer movies={this.state.movies} />;

    return (
      <div className="main">
        {main}
      </div>
    )
  }
}

export default Main;
