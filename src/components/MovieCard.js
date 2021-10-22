import React from 'react';
import '../css/MovieCard.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const faStarIcon = <FontAwesomeIcon icon={faStar} />;

const MovieCard = ({id, poster, title, release, rating}) => {
  return (
    <Link to={"/"+ id}>
    <article className="movie-card" id={id}>
      <img src={poster} alt={title}></img>
      <p>{title}</p>
      <div className="mc-extra">
        <p className="mce-item">{release.split('-')[0]}</p>
        <p className="mce-item">{faStarIcon} {rating.toFixed(1)} / 10</p>
      </div>
    </article>
    </Link>
  )
}

export default MovieCard;
