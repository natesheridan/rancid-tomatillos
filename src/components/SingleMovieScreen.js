import React from 'react';
import './SingleMovieScreen.css';

export class SingleMovieScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.movie
    };
  }

  renderSinglePageView() {
    return(
      <article className="single-movie-view"
        //dynamically add backdrop_path as the background to the article
        style={{
          backgroundImage: `url(${movie.backdrop_path})`,
          backgroundSize: "cover"
        }}
        /*onClick={backToMain}*/>

        //display the cover poster
        <article className="cover-poster">
          <img src={movie.poster_path} />
        </article>

        //display movie details
        <article className="movie-details">
          <p>{movie.title}</p>
          <p>{movie.release_date}</p>
          <p>{movie.average_rating}</p>
        </article>
      </article>
    )
  }

  render() {
    return(
      <section className="single-movie-view">
        {this.renderSinglePageView()}
      </section>
    )
  }
}
