import React, {useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import '../css/SingleMovieScreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import Trailer from './Trailer';
import useFetch from '../useFetch';

const faStarIcon = <FontAwesomeIcon icon={faStar} />;
const faFilmIcon = <FontAwesomeIcon icon={faFilm} />;

const SingleMovieScreen = ({ movieID }) => {
  const [trailerIsShown, setTrailerIsShown] = useState(null);
  const { movie, isPending, error } = useFetch(`endpoints.movies/:${movieID}`);

  const toggleTrailerPopup = () => {
    return trailerIsShown ? setTrailerIsShown(false) : setTrailerIsShown(true);
  }

  return(
    <article className="single-movie-view">
      <>
        {!error && <h2>{`${error.message}`}</h2>}
        {!isPending && <h2>Pending...</h2>}
        {trailerIsShown && <Trailer movieID={movie.id} toggleTrailerPopup={toggleTrailerPopup} />}
        <img className="movie-backdrop" src={movie?.backdrop_path}></img>
        <div className="cover-poster">
          <img src={movie?.poster_path} alt={movie?.title} />
        </div>
        <Link to="/" classes="single-movie-btn">
          <img alt={movie?.title} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Back_Arrow.svg/1200px-Back_Arrow.svg.png" />
        </Link>
        <div className="movie-details">
          <section className="md-item">
            <p className="md-title">{movie?.title}</p>
          </section>
          <section className="md-item">
            <p className="md-descriptor">released:</p>
            <p className="md-release-date">{movie?.release_date}</p>
          </section>
          {movie?.runtime && <section className="md-item">
            <p className="md-descriptor">runtime:</p>
            <p className="md-runtime">{(movie?.runtime/60).toFixed()} hour and {(movie?.runtime%60)} minutes</p>
          </section>}
          <section className="md-item">
            <p className="md-descriptor">rating:</p>
            <p className="md-average-rating">{faStarIcon} {movie?.average_rating} / 10</p>
          </section>
          <section className="md-item">
            <p className="md-descriptor">overview:</p>
            <p className="md-overview">{movie?.overview}</p>
          </section>
          <section className="md-item ">
            <a onClick={() => toggleTrailerPopup()} className="md-button single-movie-btn">
              <p className="md-trailer">{faFilmIcon}Trailer</p>
            </a>
          </section>
        </div>
      </>
    </article>
  )
}

export default SingleMovieScreen;
