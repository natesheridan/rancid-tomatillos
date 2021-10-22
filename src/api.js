export const endpoints = {
    movies: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
    /*
      {"movies":
        [{
          id: 1,
          title: "Movie Title",
          poster_path: "someURL",
          backdrop_path: "someURL",
          release_date: "2019-12-04",
          overview: "Some overview",
          average_rating: 6 }, ...
        ]}
    */
    movie: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/:movie_id',
    /*
      An array of available videos corresponding to the movie whose id is in the URL;
      this may be an empty array: [] or
      [id: 1, movie_id: 1, key:"SUXWAEX2jlg", site: "YouTube", type:"Trailer"]
    */
    videos: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/:movie_id/videos',
    login: 'https://rancid-tomatillos.herokuapp.com/api/v2/login',
    /*
      POST: {email: <String>, password: <String>}
    */
    ratings: 'https://rancid-tomatillos.herokuapp.com/api/v2/users/:user_id/ratings',
    /*
      GET or
      POST: { movie_id: <Integer>, rating: <Integer between 1 and 10> }
    */
    ratingsId: 'https://rancid-tomatillos.herokuapp.com/api/v2/users/:user_id/ratings/:rating_id'
    /*
      DELETE
    */
};

export const getAllMovies = () => {
  return fetch(endpoints.movies)
    .then(response => response.json())
    .catch(error => errorHandler(data))
    //.then(data => data)
};

export const getSingleMovie = (movieID) => {
    return fetch(`${endpoints.movies}/${movieID}`)
      .then(response => response.json())
      .catch(error => errorHandler(data))
      //.then(data => data.movie)
  }

export const getMoviesVideos = (movieID) => {
  return fetch(`${endpoints.movies}/${movieID}/videos`)
    .then(response => response.json())
    .catch(error => errorHandler(data))
    //.then(data => data)
};

export const errorHandler = (data) => {
  if (!response.ok) {
    throw new Error (`It appears we/'ve encountered an error ${response.status}: ${response.status.text}. Please hit the back button & try again.`);
  } else {
    return response.json();
  }
};
