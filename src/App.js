import logo from './logo.svg';
import './App.css';
// import api from './api';
// import movieData from './movieData.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import React from 'react';

/*
movieData = {
  "movies": [
    {
      "id": 694919,
      "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      "title": "Money Plane",
      "average_rating": 6.666666666666667,
      "release_date": "2020-09-29"
    },...]
  }
*/

export const endpoints = {
  movies: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
  /*
    {"movies":
    [{
    "id":694919,
    "poster_path":
    "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
    "backdrop_path":"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
    "title":"Money Plane",
    "average_rating":6.142857142857143,
    "release_date":"2020-09-29"}
  */
  movie: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/:movie_id',
  /*
  {
    "movie": {
      "id": 694919,
      "title": "Money Plane",
      "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      "release_date": "2020-09-29",
      "overview": "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
      "genres": [
        "Action"
      ],
      "budget": 0,
      "revenue": 0,
      "runtime": 82,
      "tagline": "",
      "average_rating": 6.142857142857143
    }
  }
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


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  )
}

export default App;
