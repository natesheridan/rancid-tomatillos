import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../css/SingleMovieScreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import Trailer from './Trailer';
import useFetch from '../useFetch';
import { endpoints } from './Main';

const faStarIcon = <FontAwesomeIcon icon={faStar} />;
const faFilmIcon = <FontAwesomeIcon icon={faFilm} />;

const SingleMovieScreen = ({ movieID }) => {
  const [trailerIsShown, setTrailerIsShown] = useState(null);
  const { data: movie, isPending, error } = useFetch(`${endpoints.movies}/${movieID}`);
  const m = movie?.movie;

  const toggleTrailerPopup = () => {
    console.log('trailerIsShown', trailerIsShown)
    return trailerIsShown ? setTrailerIsShown(false) : setTrailerIsShown(true);
  }

  return(
    <article className="single-movie-view">
      <>
        {error && <h2>{error}</h2>}
        {isPending && <h2>Loading...</h2>}
        {trailerIsShown && <Trailer movieID={movieID} toggleTrailerPopup={toggleTrailerPopup}/>}
        {console.log(toggleTrailerPopup)}
        {movie &&
          <>
            <img className="movie-backdrop" src={m?.backdrop_path} alt={m?.title} />
            <div className="cover-poster">
              <img src={m?.poster_path} alt={m?.title} />
            </div>
            <Link to="/" classes="single-movie-btn">
              <img alt={m?.title} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Back_Arrow.svg/1200px-Back_Arrow.svg.png" />
            </Link>
            <div className="movie-details">
              <section className="md-item">
                <p className="md-title">{m?.title}</p>
              </section>
              <section className="md-item">
                <p className="md-descriptor">released:</p>
                <p className="md-release-date">{m?.release_date}</p>
              </section>
              {m?.runtime && <section className="md-item">
                <p className="md-descriptor">runtime:</p>
                <p className="md-runtime">{(m?.runtime/60).toFixed()} hour and {(m?.runtime%60)} minutes</p>
              </section>}
              <section className="md-item">
                <p className="md-descriptor">rating:</p>
                <p className="md-average-rating">{faStarIcon} {m?.average_rating.toFixed()} / 10</p>
              </section>
              <section className="md-item">
                <p className="md-descriptor">overview:</p>
                <p className="md-overview">{m?.overview}</p>
              </section>
              <section className="md-item ">
                <a onClick={() => toggleTrailerPopup()} className="md-button single-movie-btn">
                  <p className="md-trailer">{faFilmIcon}Trailer</p>
                </a>
              </section>
            </div>
          </>
        }
      </>
    </article>
  )
}

export default SingleMovieScreen;
