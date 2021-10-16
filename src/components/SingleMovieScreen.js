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
    let classes = `single-movie-card fade-in animation-duration:100ms`;

    return(
      <article className={classes}
        //Attempting to set a the backdrop_path to the background of the article
        style={{
          backgroundImage: 'url('movie.backdrop_path')',
          backgroundSize: "cover",
          width: "100%"
        }}
        /*onClick={backToMain}*/>

        <article className="cover-poster">
          <img src={movie.poster_path} />
        </article>

        <article>
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
