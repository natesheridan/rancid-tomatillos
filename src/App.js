import './App.css';
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

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  )
}

export default App;
