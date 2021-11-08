import movieData from '../fixtures/movieData.json';

describe('Rancid Tomatillos server error flow', () => {
  it('Should show an error if it is unable to load the api data', () => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {
      statusCode: 500,
      ok: false
    }).as('500error')
    cy.wait('@500error').its('response.statusCode').should('eq', 500)
      .get('p').should('contain', '500: Internal Server Error. Please try again.')
  });
});

describe('Rancid Tomatillos data load flows', () => {
  let movie = movieData[0];

  it.skip('Should confirm that test data is imported correctly', () => {
    cy.fixture('movieData.json').as('movieData');
  });

  it.skip('Should load a movie cover and title', () => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      body: { movie }
    })
      .get('img[src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"]').should('be.visible')
      .get('p').should('contain', 'Money Plane')
  });
});
