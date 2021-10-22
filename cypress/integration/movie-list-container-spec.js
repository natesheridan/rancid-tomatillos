import movieData from '../fixtures/movieData.json'

describe('Rancid Tomatillos movie list container flows', () => {
  let movie1, movie2, movie3;

  beforeEach(() => {
    movie1 = movieData[0];
    movie2 = movieData[1];
    movie3 = movieData[2];
    cy.visit('http://localhost:3000')
  });

  it('Should confirm that test data is imported correctly', () => {
    cy.fixture('movieData.json').as('movieData');
  });

  it('Should load all of the movie covers and titles', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      body: {
        movies: [{movie1}, {movie2}, {movie3}]
      }
    })
      .get('img[src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"]').should('be.visible')
      .get('img[src="https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg"]').should('be.visible')
      .get('p').should('contain', 'Money Plane')
      .get('p').should('contain', 'Mulan')
  });

});
