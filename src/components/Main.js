import React, { useState, useEffect, Fragment } from 'react';
import '../css/Main.css';
import ErrorCard from './ErrorCard';
import MovieListContainer from './MovieListContainer';
import SingleMovieScreen from './SingleMovieScreen';
import useFetch from '../useFetch';
import { Route } from 'react-router-dom';

export const endpoints = {
    movies: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
    /*
      {"movies":
        [{
          id: 1,
          title: "Movie Title",
          poster_path: "someURL",
          backdrop_path: "someURL",
          release_date: "2019-12-04",
          overview: "Some overview",
          average_rating: 6 }, ...
        ]}
    */
    movie: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/:movie_id',
    /*

    */
    videos: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/:movie_id/videos',
    /*
      An array of available videos corresponding to the movie whose id is in the URL;
      this may be an empty array: [] or
      [id: 1, movie_id: 1, key:"SUXWAEX2jlg", site: "YouTube", type:"Trailer"]
    */
    login: 'https://rancid-tomatillos.herokuapp.com/api/v2/login',
    /*
      POST: {email: <String>, password: <String>}
    */
    ratings: 'https://rancid-tomatillos.herokuapp.com/api/v2/users/:user_id/ratings',
    /*
      GET or
      POST: { movie_id: <Integer>, rating: <Integer between 1 and 10> }
    */
    ratingsId: 'https://rancid-tomatillos.herokuapp.com/api/v2/users/:user_id/ratings/:rating_id'
    /*
      DELETE
    */
};

const Main = () => {
  const { data: movies, isPending, error } = useFetch(endpoints.movies);

  return (
    <>
      {error && <ErrorCard errorStatus={error} errorMessage={error} />}
      {isPending && <h2>Loading...</h2>}
      {movies &&
        <div className="row main">
          <Route
            exact path={['/', '/home']}
            render={ () =>
              <MovieListContainer movies={movies} />
          }/>
          <Route
            exact path="/:id"
            render={ ({ match }) => {
              return <SingleMovieScreen movieID={match.params.id} />
            }}
          />
        </div>
      }
    </>
  )
}

export default Main;
