import movieData from '../fixtures/movieData.json';

describe('Rancid Tomatillos data load flows', () => {
  let movie;

  beforeEach(() => {
    movie = movieData[0];
    cy.visit('http://localhost:3000')
  });

  it('Should confirm that test data is imported correctly', () => {
    cy.fixture('movieData.json').as('movieData');
  });

  it('Should load a movie cover and title', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
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
    .get('img[src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"]').should('be.visible')
    .get('p').should('contain', 'Money Plane')
  });

  it('Should show an error if it is unable to load the api data', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500,
      body: {
        error: "This is a 500 error. Things might be on fire."
      }
    })
    .get('p').should('contain', 'This is a 500 error. Things might be on fire.')
  });


  // it.skip('', () => {
  //
  // });
  //
  // it.skip('', () => {
  //
  // });

});
