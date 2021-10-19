import React from 'react';
import '../css/SingleMovieScreen.css';

const SingleMovieScreen = ({goBack, movie}) => {
  const {backdrop_path, title, poster_path, release_date, average_rating, overview} = movie;
  
  return(
    <article className="single-movie-view"
      style={{
        backgroundImage: `url(${backdrop_path})`
      }}>


      <div className="cover-poster">
        <img src={poster_path} alt={title} />
      </div>
      <button onClick={goBack} className="single-movie-back-btn">
        <img alt="alt" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Back_Arrow.svg/1200px-Back_Arrow.svg.png"></img>
      </button>

      <div className="movie-details">
        <section className="md-item">
          <p className="md-title">{title}</p>
        </section>
        <section className="md-item">
          <p className="md-release-date">{release_date}</p>
        </section>  
        <section className="md-item">
          <p className="md-average-rating">{average_rating}</p>
        </section>
        <section className="md-item">
          <p className="md-overview">{overview}</p>
        </section>
      </div>
    </article>
  )
}

export default SingleMovieScreen;
