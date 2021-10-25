import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import '../css/SingleMovieScreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import Trailer from './Trailer'
import api from '../api'

const faStarIcon = <FontAwesomeIcon icon={faStar} />;
const faFilmIcon = <FontAwesomeIcon icon={faFilm} />;

const SingleMovieScreen = ({movieID}) => {

  const [movieData, setMovieData] = React.useState(null);
  // const [errorData, setErrorData] = React.useState(null);
  const [trailerIsShown, setTrailerIsShown] = React.useState(null)

  React.useEffect(() => {
    api.getSingleMovie(movieID)
      .then(data => {
        let rawMovieData = dataHandler(data);
        setMovieData(rawMovieData)
      })
  }, [])
  

  const toggleTrailerPopup = () => {
    if (!trailerIsShown) {
      setTrailerIsShown(true)
    }
    if (trailerIsShown) {
      setTrailerIsShown(false)
    }
    return trailerIsShown 
  }

  const dataHandler = (data) => {
    let handledData = data
    // if (data?.error){
    //   return handledData
    // }
    // if(data?.movie.backdrop_path.includes("NoPhotoAvailable")){
    //   handledData.backdrop_path ="https://images.unsplash.com/photo-1432847712612-926caafaa802?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
    // }
    return handledData
  }

  return(
    <article className="single-movie-view">
      <>
        {trailerIsShown && <Trailer movieID={movieID} toggleTrailerPopup={toggleTrailerPopup} />}
        <img alt="backdrop" className="movie-backdrop" src={movieData?.backdrop_path}></img>
        <div className="cover-poster">
          <img src={movieData?.poster_path} alt={movieData?.title} />
        </div>
        <Link to="/" id="smBackBtn"className="single-movie-btn">
          <img alt="alt" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Back_Arrow.svg/1200px-Back_Arrow.svg.png"></img>
        </Link>
        <div className="movie-details">
          <section className="md-item">
            <p className="md-title">{movieData?.title}</p>
          </section>
          <section className="md-item">
            <p className="md-descriptor">released:</p>
            <p className="md-release-date">{movieData?.release_date}</p>
          </section>  
          {movieData?.runtime && <section className="md-item">
            <p className="md-descriptor">runtime:</p>
            <p className="md-runtime">{(movieData?.runtime/60).toFixed()} hour and {(movieData?.runtime%60)} minutes</p>
          </section>
          ,
          <></>
          }
          <section className="md-item">
            <p className="md-descriptor">rating:</p>
            <p className="md-average-rating">{faStarIcon} {movieData?.average_rating.toFixed(1)} / 10</p>
          </section>
          <section className="md-item">
            <p className="md-descriptor">overview:</p>
            <p className="md-overview">{movieData?.overview}</p>
          </section>
          <section className="md-item ">
            <a onClick={() => toggleTrailerPopup()} className="md-button single-movie-btn">
              <p className="md-trailer">{faFilmIcon}Trailer</p>
            </a>
          </section>
        </div>
      </>
    </article>
  )}

export default SingleMovieScreen;
