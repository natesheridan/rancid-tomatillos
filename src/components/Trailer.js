import React from 'react';
import '../css/Trailer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { getAllMovies, getSingleMovie, getMoviesVideos } from '../api.js';
const faTimesIcon = <FontAwesomeIcon icon={faTimes} />;

const Trailer = ({movieID, toggleTrailerPopup}) => {
  const [videoArray, setVideoArray] = React.useState(null);

  React.useEffect(() => {
    getMoviesVideos(movieID)
      .then(data => {
        setVideoArray(data)
        console.log(data)
      })
  }, [])

  return(
    <div onClick={ () => toggleTrailerPopup() } className="trailer-view-overlay">
      <div className="trailer-window">
        <button onClick={ () => toggleTrailerPopup() }>{faTimesIcon}</button>
        {!videoArray?.videos.length && <h2>No trailers to display.</h2>}
        <iframe
            className="youtubePlayer"
            allow="fullscreen"
            id="player"
            type="text/html"
            width="100%" height="100%"
            src={"https://www.youtube.com/embed/"+ videoArray?.videos[0]?.key}
            frameBorder="0"
        />
      </div>
    </div>
  )
}

export default Trailer;
