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
      statusCode: 200,
      body: { movie }
    })
      .get('img[src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"]').should('be.visible')
      .get('p').should('contain', 'Money Plane')
  });

  it.skip('Should show an error if it is unable to load the api data', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500,
      body: {
        error: "This is a 500 error. Things might be on fire."
      }
    })
      .get('p').should('contain', 'This is a 500 error. Things might be on fire.')
  });

});
