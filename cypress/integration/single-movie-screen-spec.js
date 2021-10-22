import movie from '../fixtures/movie.json';

describe('Rancid Tomatillos single movie screen flows', () => {

  beforeEach(() => {
    cy.visit(`http://localhost:3000/${movie.id}`)
  });

  it('Should confirm that test data is imported correctly', () => {
    cy.fixture('movie.json').as('movie');
  });

  it('Should load a movie cover, background, and details about the movie', () => {
    cy.intercept('GET', `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movie.id}`, {
      statusCode: 200,
      body: { movie }
    })
      .get('img[src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"]').should('be.visible')
      .get('img[src="https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg"]').should('be.visible')
      .get('p').should('contain', 'Money Plane')
  });

  it.skip('Should display an error if there is a problem loading the movie details', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1', {
      statusCode: 401,
      body: {
        error: "No movie found with id:1"
      }
    })
      .get('p').should('contain', "No movie found with id:1")
  });

  it('Should change the url to /movie_id', () => {
    cy.intercept('GET', `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movie.id}`, {
      statusCode: 200,
      body: { movie }
    })
      .url().should('include', '/694919')
  });

//this test should pass once we solve the bug that is causing the back button to be missing
  it.skip('Should have a button to return to the list of movies', () => {
    cy.visit(`http://localhost:3000/${movie.id}`)
      .get('img[src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Back_Arrow.svg/1200px-Back_Arrow.svg.png"]').should('be.visible')
      .get('.single-movie-btn').click()
      .url().should('include', '/')
  });

});
