import movieData from '../fixtures/movieData.json'

describe('Rancid Tomatillos movie list container flows', () => {
  let movie;

  beforeEach(() => {
    movie = movieData[0];
    cy.visit('http://localhost:3000')
  });

  it('Should confirm that test data is imported correctly', () => {
    cy.fixture('movieData.json').as('movieData');
  });

  it('Should load two images and details about the movie', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/:694919', {
      statusCode: 201,
      body: {
        id: movie.id/*694919*/,
        poster_path: movie.poster_path /*"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"*/,
        backdrop_path: movie.backdrop_path /*"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg"*/,
        title: movie.title /*"Money Plane"*/,
        average_rating: movie.average_rating /*6.142857142857143*/,
        release_date: movie.release_date /*"2020-09-29"*/
      }
    })
    //.get('article[className="movie-card"]').should('contain', movie.poster_path)
  });

  // it.skip('' => {
  //
  // });
  //
  // it.skip('' => {
  //
  // });

});
