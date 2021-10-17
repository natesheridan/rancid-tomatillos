import React from 'react';
import '../css/SingleMovieScreen.css';

const SingleMovieScreen = (movie) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {props};
  // }

    return(
      <article className="single-movie-view"
        //dynamically add background image to the article
        style={{
          backgroundImage: `url(${this.state.background})`,
          backgroundSize: "cover"
        }}
        /*onClick={backToMain}*/>

        //display the cover poster
        <article className="cover-poster">
          <img src={this.state.poster} />
        </article>

        //display movie details
        <article className="movie-details">
          <p>{this.state.title}</p>
          <p>{this.state.release}</p>
          <p>{this.state.rating.toFix(2)}</p>
        </article>
      </article>
    )
  }

  // render() {
  //   return(
  //     <section className="single-movie-view">
  //       {this.renderSinglePageView()}
  //     </section>
  //   )
  // }
//}

export default SingleMovieScreen;
