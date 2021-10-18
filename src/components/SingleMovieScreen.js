import React from 'react';
import '../css/SingleMovieScreen.css';

const SingleMovieScreen = (props) => {
  return(
    <article className="single-movie-view"
      style={{
        backgroundImage: `url(${props.movie.backdrop_path})`
      }}>


      <div className="cover-poster">
        <img src={props.movie.poster_path} alt={props.movie.title} />
      </div>
      <button onClick={() => props.goBack()} className="single-movie-back-btn">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Back_Arrow.svg/1200px-Back_Arrow.svg.png"></img>
      </button>

      <div className="movie-details">
        <section className="md-item">
          <p className="md-title">{props.movie.title}</p>
        </section>
        <section className="md-item">
          <p className="md-release-date">{props.movie.release_date}</p>
        </section>  
        <section className="md-item">
          <p className="md-average-rating">{props.movie.average_rating}</p>
        </section>
        <section className="md-item">
          <p className="md-overview">{props.movie.overview}</p>
        </section>
      </div>
    </article>
  )
}

export default SingleMovieScreen;
