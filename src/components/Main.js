import React from 'react';
import './Main.css';

import MovieListContainer from './MovieListContainer'
// import SingleMovieScreen from './SingleMovieScreen'


class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {movies: props.movies}
    }
    

    render(){
        return (
            <div className="main">
                <MovieListContainer movies={this.state.movies} />
            </div>
        )
    }
}

export default Main;