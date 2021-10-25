import React, { useState, useEffect } from 'react';
import '../css/Trailer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
//import { getAllMovies, getSingleMovie, getMoviesVideos } from '../api.js';
import useFetch from '../useFetch';
import { endpoints } from './Main';

const faTimesIcon = <FontAwesomeIcon icon={faTimes} />;

const Trailer = ({ movieID, toggleTrailerPopup }) => {
  const { videos, isPending, error } = useFetch(`endpoints.movies/${movieID}/videos`);

  return(
    <div onClick={ () => toggleTrailerPopup() } className="trailer-view-overlay">
      <div className="trailer-window">
        <button onClick={ () => toggleTrailerPopup() }>{faTimesIcon}</button>
        {!error && <h2>{`${error.message}`}</h2>}
        {!isPending && <h2>Pending...</h2>}
        {!videos?.videos.length && <h2>No trailers to display.</h2>}
        <iframe
            className="youtubePlayer"
            allow="fullscreen"
            id="player"
            type="text/html"
            width="100%" height="100%"
            src={"https://www.youtube.com/embed/"+ videos?.videos[0]?.key}
            frameBorder="0"
        />
      </div>
    </div>
  )
}

export default Trailer;
