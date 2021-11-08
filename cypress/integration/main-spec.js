import movieData from '../fixtures/movieData.json';

describe('Rancid Tomatillos data load flows', () => {
  let movie = movieData[0];

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

  it('Should show an error if it is unable to load the api data', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 500,
      body: {
        error: "This is a 500 error. Things might be on fire."
      }
    })
      .get('p').should('contain', 'This is a 500 error. Things might be on fire.')
  });

});
