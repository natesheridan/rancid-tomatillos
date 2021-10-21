import movieData from '../fixtures/movieData.json'

describe('Rancid Tomatillos movie list container flows', () => {
  let movie1, movie2;

  beforeEach(() => {
    movie1 = movieData[0];
    movie2 = movieData[1];
    cy.visit('http://localhost:3000')
  });

  it('Should confirm that test data is imported correctly', () => {
    cy.fixture('movieData.json').as('movieData');
  });

  it('Should load all of the movie covers and titles', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 201,
      body: {
        id: movie1.id/*694919*/,
        poster_path: movie1.poster_path /*"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"*/,
        backdrop_path: movie1.backdrop_path /*"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg"*/,
        title: movie1.title /*"Money Plane"*/,
        average_rating: movie1.average_rating /*6.142857142857143*/,
        release_date: movie1.release_date /*"2020-09-29"*/
      }
    })
    .get('img[src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"]').should('be.visible')
    .get('img[src="https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg"]').should('be.visible')
    .get('p').should('contain', 'Money Plane')
    .get('p').should('contain', 'Mulan')
  });

  it('Should load all of the movie covers and titles', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 201,
      body: {
        id: movie2.id/*694919*/,
        poster_path: movie2.poster_path /*"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"*/,
        backdrop_path: movie2.backdrop_path /*"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg"*/,
        title: movie2.title /*"Money Plane"*/,
        average_rating: movie2.average_rating /*6.142857142857143*/,
        release_date: movie2.release_date /*"2020-09-29"*/
      }
    })
    .get('img[src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"]').should('be.visible')
    .get('img[src="https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg"]').should('be.visible')
    .get('p').should('contain', 'Money Plane')
    .get('p').should('contain', 'Mulan')
  });


  // it.skip('' => {
  //
  // });

});
