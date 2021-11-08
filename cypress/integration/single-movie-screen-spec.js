import movie from '../fixtures/movie.json';

describe('Rancid Tomatillos single movie screen flows', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('Should confirm that test data is imported correctly', () => {
    cy.fixture('movie.json').as('movie');
  });

  it('Should load a movie cover, background, and details about the movie', () => {
    cy.request(`/${movie.id}`)
    cy.intercept('GET', `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movie.id}`, {
      statusCode: 200,
      body: { movie }
    })
      .get('img[src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"]').should('be.visible')
      .get('img[src="https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg"]').should('be.visible')
      .get('p').should('contain', 'Money Plane')
  });

  it('Should display an error if there is a problem loading the movie details', () => {
    cy.request('/1')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1', {
      statusCode: 404
    }).as('getMovie')
    cy.wait('@getMovie').its('response.statusCode').should('eq', 404)
      //.get('p').should('contain', "404: Not Found. Please try again.")
  });

  it('Should change the url to /movie_id', () => {
    cy.request(`/${movie.id}`)
    cy.intercept('GET', `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movie.id}`, {
      statusCode: 200,
      body: { movie }
    })
      .url().should('include', '/694919')
  });

  it('Should have a button to return to the list of movies', () => {
    cy.visit(`http://localhost:3000/${movie.id}`)
      .get('img[src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Back_Arrow.svg/1200px-Back_Arrow.svg.png"]').should('be.visible')
      .get('.single-movie-btn').click()
      .url().should('include', '/')
  });

});
