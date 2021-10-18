import logo from './logo.svg';
import './App.css';
// import api from './api';
// import movieData from './movieData';
import Header from './components/Header.js'
import Main from './components/Main.js'

// movieData = {
// "movies": [
//   {
//     "id": 694919,
//     "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
//     "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
//     "title": "Money Plane",
//     "average_rating": 6.666666666666667,
//     "release_date": "2020-09-29"
//   },...
// }

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
    An array of available videos corresponding to the movie whose id is in the URL;
    this may be an empty array: [] or
    [id: 1, movie_id: 1, key:"SUXWAEX2jlg", site: "YouTube", type:"Trailer"]
  */
  videos: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/:movie_id/videos',
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
