import React from 'react';
import { Link } from 'react-router-dom';
import '../css/SingleMovieScreen.css';
import { endpoints } from '../App';

const SingleMovieScreen = ({movieID}) => {

  const [movieData, setMovieData] = React.useState(null);
  const [apiErrorHandler, setAPIErrorHandler] = React.useState(null);
  // const {backdrop_path, title, poster_path, release_date, average_rating, overview} = movie;

  // setData((data) => {
  //   movieData = data
  // })
  React.useEffect(() => {
      fetch(`${endpoints.movies}/${movieID}`)
        .then(response => response.json())
        .then(data => {
          const rawMovieData = data.movie;
          setMovieData(rawMovieData)
        })
        .catch(error => {
          console.alert("API Error: " + error);
          setAPIErrorHandler(error)
        })
  }, [])

/*
Could we possibly move this awesome react method (is it a hook?) to our
'main' class component?  Then we can take advantage of state which I
believe we'll need for error handling.

 {this.state.error?.message && <h2>{this.state.error.message}</h2>}
 {error?.message && <h2>{error.message}</h2>}
*/

  return(
    <article className="single-movie-view"
      style={{
        backgroundImage: `url(${movieData?.backdrop_path})`
      }}>

      <div className="cover-poster">
        <img src={movieData?.poster_path} alt={movieData?.title} />
      </div>
      <Link to="/" className="single-movie-back-btn">
        <img alt="alt" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Back_Arrow.svg/1200px-Back_Arrow.svg.png"></img>
      </Link>

      <div className="movie-details">
        <section className="md-item">
          <p className="md-title">{movieData?.title}</p>
        </section>
        <section className="md-item padding-top:-20 ">
          <p className="md-release-date">{movieData?.release_date}</p>
        </section>
        <section className="md-item">
          <p className="md-average-rating">{movieData?.average_rating}</p>
        </section>
        <section className="md-item">
          <p className="md-overview">{movieData?.overview}</p>
        </section>
      </div>
    </article>
  )
}

export default SingleMovieScreen;
