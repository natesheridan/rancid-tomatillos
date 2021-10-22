//import movieData from '../fixtures/movieData.json';
import movie from '../fixtures/movie.json';

describe('Rancid Tomatillos single movie screen flows', () => {
  //let movie;

  beforeEach(() => {
    //movie = movieData[0];
    cy.visit(`http://localhost:3000/movies/${movie.id}`)
  });

  it('Should confirm that test data is imported correctly', () => {
    cy.fixture('movie.json').as('movie');
  });

  it('Should load a movie cover, background, and details about the movie', () => {
    cy.intercept('GET', `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movie.id}`, {
      statusCode: 200,
      body: {
        id: movie.id/*694919*/,
        title: movie.title /*"Money Plane"*/,
        poster_path: movie.poster_path /*"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"*/,
        backdrop_path: movie.backdrop_path /*"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg"*/,
        release_date: movie.release_date /*"2020-09-29"*/,
        overview: movie.overview /*"A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals."*/,
        genres: movie.genres /* genres": ["Action"] */,
        budget: movie.budget /* 0 */,
        revenue: movie.revenue /* 0 */,
        runtime: movie.runtime /* 82 */,
        tagline: movie.tagline /* "" */,
        average_rating: movie.average_rating /*6.142857142857143*/
      }
    })
      //.get('img[src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"]').should('be.visible')
      .get('.single-movie-view').should('have.css', 'background-image', 'url("https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg")')
      .get('p').should('contain', 'Money Plane')
  });

  it('Should display an error if there is a problem loading the movie details', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/1', {
      statusCode: 401,
      body: {
        error: "No movie found with id:1"
      }
    })
      .get('p').should('contain', "No movie found with id:1")
  });

  it('Should change the url to /movies/movie_id', () => {
    cy.intercept('GET', `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movie.id}`, {
      statusCode: 200,
      body: {
        id: movie.id/*694919*/,
        title: movie.title /*"Money Plane"*/,
        poster_path: movie.poster_path /*"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"*/,
        backdrop_path: movie.backdrop_path /*"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg"*/,
        release_date: movie.release_date /*"2020-09-29"*/,
        overview: movie.overview /*"A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals."*/,
        genres: movie.genres /* genres": ["Action"] */,
        budget: movie.budget /* 0 */,
        revenue: movie.revenue /* 0 */,
        runtime: movie.runtime /* 82 */,
        tagline: movie.tagline /* "" */,
        average_rating: movie.average_rating /*6.142857142857143*/
      }
    })
    .url().should('include', '/movies/694919')
  });

  it('Should return to all of the movies when the back button is clicked', () => {
    cy.intercept('GET', `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movie.id}`, {
      statusCode: 200,
      body: {
        id: movie.id/*694919*/,
        title: movie.title /*"Money Plane"*/,
        poster_path: movie.poster_path /*"https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"*/,
        backdrop_path: movie.backdrop_path /*"https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg"*/,
        release_date: movie.release_date /*"2020-09-29"*/,
        overview: movie.overview /*"A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals."*/,
        genres: movie.genres /* genres": ["Action"] */,
        budget: movie.budget /* 0 */,
        revenue: movie.revenue /* 0 */,
        runtime: movie.runtime /* 82 */,
        tagline: movie.tagline /* "" */,
        average_rating: movie.average_rating /*6.142857142857143*/
      }
    })
    .get('.single-movie-back-btn').click()
    .url().should('include', '/')
  });

});
